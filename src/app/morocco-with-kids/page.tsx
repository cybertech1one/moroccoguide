import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  Users,
  Baby,
  Utensils,
  BookOpen,
  CalendarDays,
  Sun,
  Luggage,
  Camera,
  Compass,
  Bus,
  Hotel,
  Shield,
  Stethoscope,
  Wallet,
  Smile,
  Waves,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco with Kids 2026: Complete Family Travel Guide, Safety Tips & Itineraries',
  description:
    'The ultimate guide to traveling Morocco with kids in 2026. Kid-friendly attractions by city, safety tips, health precautions, food for picky eaters, best age groups, family-friendly riads, transport tips, sample family itineraries, and packing lists for children.',
  keywords: [
    'Morocco with kids',
    'family travel Morocco',
    'is Morocco safe for children',
    'best places in Morocco for families',
    'Morocco family holiday 2026',
    'kid-friendly Morocco',
    'Morocco toddler friendly',
    'Morocco teen activities',
    'family riads Morocco',
    'Morocco family itinerary',
    'Marrakech with kids',
    'Morocco beach family',
    'Morocco cooking class family',
    'Morocco family food picky eaters',
    'Morocco stroller friendly',
    'best time visit Morocco family',
    'Morocco vaccination kids',
    'Morocco family budget',
    'camel ride kids Morocco',
    'Morocco family safety tips',
  ],
  openGraph: {
    title: 'Morocco with Kids 2026: Complete Family Travel Guide, Safety Tips & Itineraries',
    description:
      'Everything parents need for a Morocco family trip. Kid-friendly attractions by city, safety tips, health precautions, food for picky eaters, family riads, transport, and itineraries.',
    url: `${BASE_URL}/morocco-with-kids`,
    images: [
      {
        url: `${BASE_URL}/images/hero-family-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Family exploring a colorful Moroccan medina with children, vibrant market stalls and traditional architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco with Kids 2026: Complete Family Travel Guide',
    description:
      'Kid-friendly attractions, family riads, health tips, food for picky eaters, budgets, and sample itineraries for families visiting Morocco.',
    images: [`${BASE_URL}/images/hero-family-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-with-kids` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — TravelGuide
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-with-kids`,
  name: 'Morocco with Kids 2026: Complete Family Travel Guide, Safety Tips & Itineraries',
  description:
    'Comprehensive family travel guide to Morocco covering kid-friendly attractions, safety, health, food, accommodations, transport, itineraries, and packing tips for children of all ages.',
  url: `${BASE_URL}/morocco-with-kids`,
  image: `${BASE_URL}/images/hero-family-morocco.webp`,
  author: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-with-kids`,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'Country', name: 'Morocco' },
  audience: { '@type': 'PeopleAudience', suggestedMinAge: 0, suggestedMaxAge: 17 },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco with Kids', item: `${BASE_URL}/morocco-with-kids` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — FAQPage
   ═══════════════════════════════════════════════════════════════ */

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Morocco safe for families with children?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Morocco is generally safe for families. Moroccans adore children, and families with kids often receive extra warmth and hospitality. Petty crime is the main risk; keep valuables secure in medinas. Use registered taxis, stick to well-reviewed accommodations, and supervise children closely in crowded souks. Tourist Police operate in all major cities.' } },
    { '@type': 'Question', name: 'What is the best age to take kids to Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Children aged 5 and older get the most from Morocco. They can enjoy camel rides, cooking classes, and medina exploration. Toddlers (2-4) can visit but medina cobblestones make strollers difficult. Babies under 2 are manageable with a carrier. Teenagers love quad biking, surfing, and desert camps. Every age group can enjoy Morocco with proper planning.' } },
    { '@type': 'Question', name: 'What food can picky kids eat in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Morocco offers plenty of kid-friendly options: fresh bread (khobz) available everywhere, chicken brochettes (grilled skewers), french fries served at most restaurants, plain couscous, omelettes, fresh fruit and juice, pizza at tourist restaurants, and pastilla (sweet pastry with chicken). Most riads prepare child-friendly meals on request. Supermarkets in cities stock familiar international snacks.' } },
    { '@type': 'Question', name: 'Are strollers practical in Moroccan medinas?', acceptedAnswer: { '@type': 'Answer', text: 'Strollers are impractical in most medinas due to uneven cobblestones, narrow alleys, steep steps, and crowds. A baby carrier or ergonomic sling is essential. Strollers work well in new town areas (Gueliz in Marrakech, Ville Nouvelle in Fes), beach promenades in Agadir and Essaouira, and modern shopping malls. Bring a compact umbrella stroller for flat areas and a carrier for medinas.' } },
    { '@type': 'Question', name: 'Do kids need vaccinations for Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'No special vaccinations are required for Morocco, but ensure routine childhood vaccinations are up to date. Hepatitis A and Typhoid vaccines are recommended by most travel health clinics. Bring a good first-aid kit, children-specific medications (Calpol, antihistamines, rehydration salts), and strong sunscreen. Tap water is not safe to drink; use bottled water for drinking and teeth brushing.' } },
    { '@type': 'Question', name: 'What is the best time to visit Morocco with kids?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (March to May) and autumn (September to November) offer the best weather for families, with temperatures between 20-28 degrees Celsius. Summer (June to August) is extremely hot in inland cities like Marrakech and Fes, exceeding 40 degrees, which is tough on children. Winter is mild on the coast but cold in the mountains. School holidays in spring align perfectly with ideal Moroccan weather.' } },
    { '@type': 'Question', name: 'How much does a family trip to Morocco cost?', acceptedAnswer: { '@type': 'Answer', text: 'A family of four can travel Morocco comfortably from 2,500 MAD per day. Budget breakdown: family riad room from 600-1,200 MAD per night, meals from 300-600 MAD per day, activities from 400-800 MAD per day, and local transport from 200-400 MAD per day. Children under 6 often stay free at riads and get reduced entry to attractions. Seasonal pricing can change, so book early during peak periods.' } },
    { '@type': 'Question', name: 'Can kids do camel rides in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, children as young as 3 can ride camels when sharing a saddle with a parent. Most desert camps offer short 30-minute camel treks suitable for young children. Children aged 7 and older can typically ride solo with a guide leading the camel. The sunset camel trek in Merzouga is a magical family experience. Always choose reputable operators who treat their animals well.' } },
    { '@type': 'Question', name: 'What are the best family-friendly cities in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Marrakech tops the list with its Jemaa el-Fna spectacle, gardens, and family cooking classes. Essaouira offers a relaxed beach vibe with safe, walkable medina. Agadir provides resort-style family holidays with water parks and wide beaches. Chefchaouen is compact, safe, and visually magical for kids. Merzouga desert camps offer unforgettable camel rides and stargazing experiences.' } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: FAMILY OVERVIEW STATS
   ═══════════════════════════════════════════════════════════════ */

const familyStats = [
  { label: 'Family Safety Rating', value: 'Very Good', detail: 'Moroccans adore children; families get extra hospitality', icon: ShieldCheck },
  { label: 'Best Ages for Kids', value: '5-17 Years', detail: 'Toddlers manageable, teens love adventure activities', icon: Users },
  { label: 'Family Budget (Daily)', value: 'From 2,500 MAD', detail: 'Family of 4: riad, meals, activities, transport', icon: Wallet },
  { label: 'Best Season for Families', value: 'Mar-May & Sep-Nov', detail: 'Comfortable 20-28 degrees, ideal for kids', icon: Sun },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: KID-FRIENDLY CITIES
   ═══════════════════════════════════════════════════════════════ */

const familyCities = [
  {
    city: 'Marrakech', rating: 5, image: '/images/hero-marrakech.webp', vibe: 'Exciting and vibrant',
    description: 'The number one family destination in Morocco. Jemaa el-Fna square mesmerizes kids with snake charmers, acrobats, and musicians. Majorelle Garden is a shady oasis. Family cooking classes teach kids to make pastilla and mint tea. The souks are a treasure hunt, and camel rides are available on the Palmeraie outskirts.',
    highlights: ['Jemaa el-Fna street performers fascinate kids of all ages', 'Majorelle Garden and Menara Garden for shady breaks', 'Family cooking classes from 250 MAD per child', 'Camel rides at Palmeraie from 150 MAD per person', 'Water parks like Oasiria (seasonal) for hot days', 'Many family riads with pools and kids menus'],
  },
  {
    city: 'Essaouira', rating: 5, image: '/images/hero-essaouira.webp', vibe: 'Relaxed coastal charm',
    description: 'The most family-friendly city in Morocco. The compact, walkable medina is easy to navigate with children. Wide sandy beaches offer safe paddling and beginner surfing. The fishing port is a live classroom where kids watch the daily catch come in. Winds keep summer temperatures comfortable.',
    highlights: ['Safe, flat sandy beach ideal for young children', 'Compact medina where kids cannot wander far', 'Beginner surf lessons for kids aged 6+ from 300 MAD', 'Fishing port visit is free and fascinating for children', 'Ramparts walk with cannon views kids love', 'Laid-back atmosphere with less hassle than Marrakech'],
  },
  {
    city: 'Agadir', rating: 5, image: '/images/hero-agadir.webp', vibe: 'Beach resort family paradise',
    description: 'The easiest family destination with resort infrastructure. Modern hotels with kids clubs, swimming pools, and all-inclusive options. The wide beach has lifeguards and gentle waves perfect for young children. Souss-Massa National Park offers family-friendly wildlife spotting. Strollers work perfectly on the promenade.',
    highlights: ['Resort hotels with kids clubs and pools', 'Lifeguarded beach with gentle waves', 'Crocoparc zoo and Souss-Massa National Park', 'Wide modern promenade perfect for strollers', 'Water parks and mini-golf near the beach', 'All-inclusive family hotels from 1,200 MAD per night'],
  },
  {
    city: 'Chefchaouen', rating: 4, image: '/images/hero-chefchaouen.webp', vibe: 'Magical blue wonderland',
    description: 'Children are enchanted by the blue-painted streets. The small, safe medina is easy to explore on foot. Cats roam everywhere, delighting animal-loving kids. The surrounding Rif Mountains offer family hikes to waterfalls. The relaxed pace means less stress for parents navigating with children.',
    highlights: ['Blue streets are magical and photogenic for families', 'Cats everywhere delight animal-loving children', 'Small medina where getting lost is part of the fun', 'Akchour Waterfalls hike suitable for ages 8+', 'Very low hassle levels compared to larger cities', 'Affordable family riads from 400 MAD per night'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: AGE GROUP GUIDE
   ═══════════════════════════════════════════════════════════════ */

const ageGroups = [
  {
    group: 'Babies (0-2 Years)', icon: Baby, difficulty: 'Challenging but Possible',
    description: 'Traveling Morocco with a baby requires extra planning. Medinas are not stroller-friendly, so a baby carrier is essential. Pack all baby supplies from home as nappies and formula are limited outside major cities. Many riads warmly welcome babies and can prepare purees.',
    tips: ['Use an ergonomic carrier; skip the stroller for medinas', 'Pack nappies, formula, and baby food from home', 'Request a cot at your riad when booking (most have them)', 'Stick to Agadir or Essaouira for easier logistics', 'Avoid summer months; heat is dangerous for infants', 'Carry oral rehydration salts in case of stomach upset'],
  },
  {
    group: 'Toddlers (3-5 Years)', icon: Smile, difficulty: 'Moderate',
    description: 'Toddlers enjoy Morocco\'s sensory overload: colors, sounds, animals, and food. Short attention spans mean planning around nap times is critical. Choose accommodations with pools so tired toddlers can splash while parents relax. Beach destinations are easiest for this age.',
    tips: ['Plan activities around nap schedules', 'Choose riads or hotels with swimming pools', 'Beach days in Essaouira or Agadir work best', 'Short camel rides (shared with parent) from age 3', 'Carry snacks; toddler meltdowns in souks are real', 'Garden visits (Majorelle, Menara) provide open space'],
  },
  {
    group: 'Children (6-12 Years)', icon: Star, difficulty: 'Ideal Age',
    description: 'The sweet spot for Morocco family travel. Children this age are old enough to enjoy camel rides, cooking classes, treasure-hunt-style souk shopping, and desert camping. They are fascinated by the tanneries, enchanted by the blue city, and love negotiating prices in markets.',
    tips: ['Cooking classes engage kids and teach culture (from 250 MAD)', 'Camel rides solo from age 7 with guided lead', 'Desert overnight camps are magical (from 800 MAD per family)', 'Souk shopping becomes a negotiation game kids love', 'Horseback riding along Essaouira beach from 300 MAD', 'Quad biking near Marrakech for ages 10+ (from 400 MAD)'],
  },
  {
    group: 'Teenagers (13-17 Years)', icon: Compass, difficulty: 'Easy and Exciting',
    description: 'Teens thrive in Morocco. Surfing in Essaouira and Taghazout, sandboarding in the Sahara, zip-lining in the Atlas Mountains, and the vibrant nighttime atmosphere of Jemaa el-Fna all appeal to teenage energy. The cultural contrast to their home country sparks meaningful conversations.',
    tips: ['Surfing lessons in Essaouira or Taghazout from 300 MAD', 'Sandboarding and quad biking in Merzouga desert', 'Atlas Mountain day treks suitable for fit teens', 'Photography walks through colorful medinas', 'Let teens navigate the souks and practice bargaining', 'Overnight desert camps with stargazing are highlights'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HEALTH & SAFETY FOR KIDS
   ═══════════════════════════════════════════════════════════════ */

const healthSafety = [
  {
    topic: 'Water and Hydration', icon: Waves,
    description: 'Tap water is NOT safe for children. Use only bottled water for drinking and teeth brushing. Carry reusable bottles and refill from large 5L jugs. Dehydration is the biggest health risk; children need more water than you think in the Moroccan heat.',
    tips: ['Bottled water only; never tap water for kids', 'Carry rehydration sachets (Dioralyte or equivalent)', 'Avoid ice in drinks outside tourist restaurants', 'Buy 5L water jugs at supermarkets to save money', 'Insist children drink water every 30 minutes in heat'],
  },
  {
    topic: 'Sun and Heat Protection', icon: Sun,
    description: 'Morocco\'s sun is intense, especially from May to September. Children burn faster than adults. Heatstroke is a real risk during summer months in Marrakech and Fes where temperatures exceed 40 degrees Celsius. Schedule outdoor activities for morning and late afternoon.',
    tips: ['SPF 50 sunscreen applied every 2 hours (bring from home)', 'Wide-brimmed hats are essential for all children', 'Avoid outdoor activities between 12pm and 4pm in summer', 'Light, loose, long-sleeve clothing protects better than sunscreen', 'Carry a spray bottle for cooling misting'],
  },
  {
    topic: 'Stomach Issues', icon: Stethoscope,
    description: 'Traveler\'s diarrhea affects children more severely than adults. Stick to well-cooked food, peeled fruits, and bottled water. Avoid salads washed in tap water at budget restaurants. Most tourist restaurants are safe. Riads that cook family-style meals are generally the safest option.',
    tips: ['Pack children\'s Imodium and oral rehydration salts', 'Eat at well-reviewed restaurants and your riad', 'Peel all fruit; avoid pre-cut fruit from street vendors', 'Carry hand sanitizer and use before every meal', 'Yogurt and bananas help recover from stomach upsets'],
  },
  {
    topic: 'Medina Safety', icon: ShieldCheck,
    description: 'Medinas are exciting but chaotic. Motorbikes and donkeys share narrow alleys with pedestrians. Children must hold hands at all times in crowded areas. Set a meeting point in case anyone gets separated. Download offline maps and pin your riad location.',
    tips: ['Hold children\'s hands at all times in busy medinas', 'Set a meeting point (your riad) if anyone gets separated', 'Watch for motorbikes and donkeys in narrow alleys', 'Keep children away from stray dogs (rabies risk)', 'Save riad phone number in every family member\'s phone'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FOOD FOR PICKY EATERS
   ═══════════════════════════════════════════════════════════════ */

const kidFoods = [
  { food: 'Khobz (Moroccan Bread)', description: 'Fresh round bread available everywhere. Kids love tearing and dipping it. Served with every meal.', priceRange: 'From 2 MAD' },
  { food: 'Chicken Brochettes', description: 'Simple grilled chicken skewers. Mild, no spice, familiar to Western kids. Found at every restaurant.', priceRange: 'From 25 MAD' },
  { food: 'French Fries', description: 'Served at virtually every restaurant in Morocco. A reliable fallback for the pickiest eaters.', priceRange: 'From 15 MAD' },
  { food: 'Plain Couscous', description: 'Ask for couscous without the spicy stew on top. Fluffy, mild, and filling. Friday couscous is a national tradition.', priceRange: 'From 30 MAD' },
  { food: 'Fresh Orange Juice', description: 'Freshly squeezed at juice stalls everywhere. Safe, delicious, and packed with vitamins. Kids adore it.', priceRange: 'From 5 MAD' },
  { food: 'Omelettes', description: 'Available at every breakfast and most restaurants. Ask for plain or with cheese. Reliable protein source.', priceRange: 'From 15 MAD' },
  { food: 'Msemmen (Moroccan Pancakes)', description: 'Flaky, buttery square pancakes served at breakfast. Spread with honey or jam. Kids love the texture.', priceRange: 'From 5 MAD' },
  { food: 'Pizza and Pasta', description: 'Available at tourist restaurants in all major cities. Not authentic but a comfort food safety net for tough days.', priceRange: 'From 40 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAMILY ACCOMMODATION
   ═══════════════════════════════════════════════════════════════ */

const familyAccommodation = [
  {
    type: 'Family Riads with Pools', icon: Heart, priceRange: 'From 600 MAD / night',
    description: 'Traditional riads with courtyards and plunge pools are the best family option. Children love the architectural playground of courtyards, rooftop terraces, and tiled fountains. Many riads offer family rooms or connecting rooms, and staff prepare child-friendly meals. The enclosed courtyard means young children cannot wander off.',
    tips: ['Book family rooms or ask for connecting rooms', 'Confirm pool depth; plunge pools may be too deep for toddlers', 'Ask about kids menus when booking', 'Enclosed courtyards keep young children safely contained', 'Request early dinner times for young children'],
  },
  {
    type: 'Resort Hotels', icon: Hotel, priceRange: 'From 1,200 MAD / night',
    description: 'Resort hotels in Agadir and Marrakech offer the easiest family experience with kids clubs, multiple pools, buffet restaurants, and on-site entertainment. All-inclusive packages eliminate daily budgeting stress. Ideal for families with very young children who need maximum convenience.',
    tips: ['All-inclusive removes daily meal planning stress', 'Kids clubs provide supervised activities for ages 4-12', 'Large pools with shallow areas suit all ages', 'On-site entertainment means easy evenings for tired families', 'Airport transfers often included in resort packages'],
  },
  {
    type: 'Family Apartments', icon: Users, priceRange: 'From 400 MAD / night',
    description: 'Self-catering apartments in Gueliz (Marrakech), Agadir, or Casablanca give families space and kitchen access. Preparing some meals in-house saves money and solves picky eater problems. Supermarkets stock familiar international brands. Apartments in the Ville Nouvelle areas are modern and stroller-friendly.',
    tips: ['Kitchen access solves picky eater problems', 'More space than riads for families with multiple children', 'Supermarkets nearby for familiar snacks and breakfast items', 'Washing machines available in many apartments', 'Ville Nouvelle locations are flat and stroller-friendly'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRANSPORT WITH KIDS
   ═══════════════════════════════════════════════════════════════ */

const familyTransport = [
  { mode: 'Private Driver', icon: Bus, rating: 'Best for Families', ratingColor: 'text-green-700', description: 'Hiring a private driver is the most comfortable option for families. Door-to-door service, no luggage hassles, child seats on request, and flexibility to stop when kids need breaks. Costs from 1,000 MAD per day and covers all intercity travel at your pace.', tips: ['Book through your riad for trusted, vetted drivers', 'Request child car seats in advance (not standard in Morocco)', 'Drivers double as informal guides and local experts', 'Stop at scenic points for family photos and stretching', 'Split costs with another family for even better value'] },
  { mode: 'ONCF Trains', icon: Bus, rating: 'Good for Families', ratingColor: 'text-green-700', description: 'Morocco\'s trains are spacious and comfortable for families. First-class carriages have roomy seats, tables for coloring and games, and luggage space. Children under 4 travel free, ages 4-12 pay half price. The journey itself is an adventure for kids.', tips: ['Book first class for more space and tables', 'Children under 4 ride free; ages 4-12 half price', 'Pack snacks, games, and tablets for the journey', 'Al Boraq high-speed train (Tangier-Casablanca) excites kids', 'Marrakech-Fes route takes 7 hours; plan entertainment'] },
  { mode: 'City Taxis', icon: Bus, rating: 'Adequate', ratingColor: 'text-amber-700', description: 'Petit taxis are useful for short city trips. No child car seats are available, so hold young children on your lap. Agree on the fare before getting in. For families of 4+, you may need two petit taxis or one grand taxi.', tips: ['No child car seats available; hold young children securely', 'Agree on fare before getting in or insist on the meter', 'Families of 4+ need two petit taxis or one grand taxi', 'Have your riad call a trusted driver for night transfers', 'Ride-hailing apps (InDriver) offer tracked, priced rides'] },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAMILY ITINERARIES
   ═══════════════════════════════════════════════════════════════ */

const familyItineraries = [
  {
    title: 'Classic Family Week (7 Days)', icon: Heart, difficulty: 'Easy', budget: 'From 18,000 MAD (family of 4)',
    highlights: 'Marrakech, Essaouira',
    days: [
      { day: 'Day 1', location: 'Arrive Marrakech', activity: 'Settle into family riad with pool. Gentle evening walk to Jemaa el-Fna for the spectacle. Early dinner at a rooftop restaurant with medina views.' },
      { day: 'Day 2', location: 'Marrakech', activity: 'Morning: Bahia Palace and Majorelle Garden. Afternoon: family cooking class (from 250 MAD/child). Pool time for tired kids.' },
      { day: 'Day 3', location: 'Marrakech', activity: 'Camel ride at Palmeraie (from 150 MAD/person). Afternoon souk treasure hunt. Visit a traditional hammam (family-friendly ones available).' },
      { day: 'Day 4', location: 'Drive to Essaouira', activity: 'Private driver to Essaouira (2.5 hours). Stop at an argan cooperative. Settle into beachfront hotel. Afternoon beach play.' },
      { day: 'Day 5', location: 'Essaouira', activity: 'Morning: ramparts walk and fishing port. Afternoon: surf lesson for kids 6+ or beach day. Evening: fresh seafood at the port from 60 MAD.' },
      { day: 'Day 6', location: 'Return to Marrakech', activity: 'Morning beach time. Drive back to Marrakech. Afternoon at Oasiria water park (seasonal) or hotel pool. Farewell dinner.' },
      { day: 'Day 7', location: 'Departure', activity: 'Last-minute souvenir shopping. Depart from Marrakech Menara Airport.' },
    ],
  },
  {
    title: 'Adventure Family Trip (10 Days)', icon: Compass, difficulty: 'Moderate', budget: 'From 28,000 MAD (family of 4)',
    highlights: 'Marrakech, Desert, Fes, Chefchaouen',
    days: [
      { day: 'Day 1-2', location: 'Marrakech', activity: 'Explore medina, Bahia Palace, Majorelle Garden. Family cooking class. Camel rides at Palmeraie. Pool afternoons.' },
      { day: 'Day 3-4', location: 'Sahara Desert', activity: 'Private driver through Atlas Mountains and Todra Gorge. Arrive Merzouga. Sunset camel trek. Overnight in family desert tent. Sandboarding for older kids.' },
      { day: 'Day 5-6', location: 'Fes', activity: 'Drive to Fes. Guided medina tour (family-friendly pace). Tanneries visit, pottery workshop for kids. Explore Bou Jeloud area.' },
      { day: 'Day 7-8', location: 'Chefchaouen', activity: 'Drive to the Blue City. Wander blue streets. Feed stray cats. Family hike in Rif Mountains. Shopping for blue souvenirs.' },
      { day: 'Day 9', location: 'Drive to Tangier/Rabat', activity: 'Scenic drive north. Visit Hassan Tower and Kasbah des Oudaias in Rabat, or continue to Tangier for departure.' },
      { day: 'Day 10', location: 'Departure', activity: 'Final morning exploring. Depart from Tangier, Rabat, or Casablanca airport.' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING FOR KIDS
   ═══════════════════════════════════════════════════════════════ */

const kidsPacking = [
  {
    category: 'Clothing for Kids', icon: Luggage,
    items: ['Light, breathable long-sleeve tops for sun protection', 'Comfortable walking shoes with good grip for cobblestones', 'Sandals for beach and pool areas', 'Wide-brimmed sun hat (non-negotiable)', 'Swimsuit and rash guard for UV protection', 'Light fleece or jacket for cool evenings and desert nights', 'Modest clothing for kids visiting mosques or rural areas'],
  },
  {
    category: 'Health and Safety', icon: Stethoscope,
    items: ['Children\'s pain relief (Calpol/Ibuprofen)', 'Oral rehydration salts (essential for stomach bugs)', 'SPF 50 sunscreen and insect repellent', 'Children\'s antihistamine for allergic reactions', 'Plasters and antiseptic wipes', 'Any prescription medications in original packaging', 'Hand sanitizer (multiple small bottles)'],
  },
  {
    category: 'Entertainment and Essentials', icon: Camera,
    items: ['Tablet loaded with games, shows, and educational apps', 'Headphones for travel days', 'Compact coloring books and crayons', 'Reusable water bottles for each child', 'Baby carrier or sling (essential if under 4)', 'Favorite snacks from home for emergencies', 'Small backpack for each child to carry their own supplies'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoWithKidsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-family-morocco.webp)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco with Kids</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Users className="w-4 h-4" />
            Family Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco with Kids
            <br className="hidden md:block" /> Family Travel Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The complete guide for families visiting Morocco with children. Kid-friendly attractions, safety tips,
            food for picky eaters, family riads, transport advice, and itineraries for every age group.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ══════════════════════════════════════════════════════════
          INTRODUCTION
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco Is a Wonderful Family Destination
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                &quot;Is Morocco a good place to take kids?&quot; Absolutely. Morocco is one of the most
                family-friendly countries in North Africa, and Moroccans genuinely love children. Your kids will
                be welcomed with warmth everywhere you go, from riads where staff prepare special children&apos;s
                meals to markets where shopkeepers offer free sweets and fruit.
              </p>
              <p>
                Morocco offers experiences that no theme park can match: riding camels into the Sahara at sunset,
                exploring a medieval medina like a living maze, learning to cook tagine with a Moroccan family,
                surfing Atlantic waves, and sleeping under billions of stars in the desert. These are the kinds of
                memories that shape children&apos;s lives.
              </p>
              <p>
                This guide covers everything parents need to plan a stress-free family trip &mdash; from the best
                cities for kids and age-specific activity advice to health precautions, food solutions for picky
                eaters, family-friendly accommodations, and complete sample itineraries. Read on and start
                planning your family&apos;s Moroccan adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAMILY OVERVIEW STATS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Family Travel at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts every parent should know before planning a Morocco family holiday.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {familyStats.map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div key={stat.label} className="card-moroccan p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                    <StatIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <p className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">{stat.value}</p>
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-2">{stat.label}</p>
                  <p className="text-xs text-[var(--text-muted)]">{stat.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          KID-FRIENDLY CITIES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Cities in Morocco for Families
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each city offers a different family experience. Here are the top destinations ranked
            for their kid-friendliness, safety, and family infrastructure.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {familyCities.map((city) => (
              <div key={city.city} className="card-moroccan overflow-hidden">
                <div className="relative h-48">
                  <img src={city.image} alt={`${city.city}, Morocco family-friendly destination with children`} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white mb-1">{city.city}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < city.rating ? 'text-[var(--color-gold)] fill-[var(--color-gold)]' : 'text-white/30'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-white/80">{city.vibe}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{city.description}</p>
                  <div>
                    <h4 className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Family Highlights
                    </h4>
                    <div className="space-y-1.5">
                      {city.highlights.map((h, i) => (
                        <p key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-green-600" /> {h}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          AGE GROUP GUIDE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Baby className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Activities by Age Group
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What works for a toddler is different from what excites a teenager. Here is age-specific guidance
            so every child in your family has the best possible experience.
          </p>
          <div className="space-y-8 max-w-4xl mx-auto">
            {ageGroups.map((age) => {
              const AgeIcon = age.icon;
              return (
                <div key={age.group} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <AgeIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{age.group}</h3>
                      <span className="text-sm font-semibold text-[var(--color-gold)]">{age.difficulty}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{age.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {age.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          HEALTH & SAFETY FOR KIDS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Stethoscope className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Health and Safety for Children
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Keep your kids healthy and safe with these essential precautions. Most health issues are preventable with basic preparation.
          </p>
          <div className="space-y-6 max-w-4xl mx-auto">
            {healthSafety.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.topic} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <ItemIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{item.topic}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{item.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {item.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 max-w-4xl mx-auto p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Important: Travel Insurance</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Never travel to Morocco with children without comprehensive travel insurance that covers medical
                  evacuation. Private clinics in Marrakech and Casablanca are good, but serious emergencies may require
                  evacuation to Europe. Ensure your policy covers all children and includes 24-hour emergency assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FOOD FOR PICKY EATERS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food for Picky Eaters
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Worried your kids will not eat anything? Morocco has more kid-friendly food than you think.
            Here are reliable options that even the fussiest eaters will accept.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {kidFoods.map((food) => (
              <div key={food.food} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{food.food}</h3>
                <p className="text-xs text-[var(--text-secondary)] mb-3">{food.description}</p>
                <span className="text-xs font-semibold text-[var(--color-accent)]">{food.priceRange}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-4xl mx-auto card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              <Info className="w-5 h-5 inline-block text-[var(--color-accent)] mr-2" />
              Pro Tips for Feeding Kids in Morocco
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[var(--text-secondary)]">
              <p><span className="font-semibold text-[var(--text-primary)]">Ask your riad:</span> Most riads will prepare special children&apos;s meals on request. Tell them your kids&apos; preferences when booking.</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Supermarkets:</span> Carrefour and Marjane in major cities stock familiar cereals, biscuits, and snacks. Buy supplies on arrival.</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Allergies:</span> Moroccan cuisine uses nuts heavily. Always communicate allergies clearly. Learn &quot;Andi hassasiya&quot; (I have an allergy).</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Seasonal pricing:</span> Food prices can change seasonally in tourist areas. Budget from 300 MAD per day for a family of four for meals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAMILY ACCOMMODATION
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Hotel className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Family-Friendly Accommodation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where you stay makes or breaks a family trip. Here are the best accommodation types for families
            with children, with pricing and practical tips. Seasonal pricing can change, so book early.
          </p>
          <div className="space-y-8 max-w-4xl mx-auto">
            {familyAccommodation.map((acc) => {
              const AccIcon = acc.icon;
              return (
                <div key={acc.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <AccIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{acc.type}</h3>
                      <span className="text-sm font-semibold text-[var(--color-accent)]">{acc.priceRange}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{acc.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {acc.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TRANSPORT WITH KIDS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting Around Morocco with Kids
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Transport options ranked by family-friendliness. A private driver is worth the investment for families.
          </p>
          <div className="space-y-6 max-w-4xl mx-auto">
            {familyTransport.map((transport) => {
              const TransportIcon = transport.icon;
              return (
                <div key={transport.mode} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <TransportIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{transport.mode}</h3>
                      <span className={`text-sm font-semibold ${transport.ratingColor}`}>{transport.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{transport.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {transport.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAMILY ITINERARIES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CalendarDays className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample Family Itineraries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Two curated itineraries designed for families with children, balancing adventure with downtime
            so everyone stays happy.
          </p>
          <div className="space-y-10 max-w-4xl mx-auto">
            {familyItineraries.map((itin) => {
              const ItinIcon = itin.icon;
              return (
                <div key={itin.title} className="card-moroccan overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-[var(--color-accent)]/5 to-transparent border-b border-[var(--color-accent)]/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                        <ItinIcon className="w-6 h-6 text-[var(--color-accent)]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{itin.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">{itin.difficulty}</span>
                          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1"><Wallet className="w-3 h-3" /> {itin.budget}</span>
                          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1"><MapPin className="w-3 h-3" /> {itin.highlights}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {itin.days.map((day) => (
                        <div key={day.day} className="flex items-start gap-4">
                          <div className="min-w-[80px]">
                            <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded">{day.day}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">{day.location}</h4>
                            <p className="text-xs text-[var(--text-muted)]">{day.activity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PACKING FOR KIDS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Packing Essentials for Kids
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A focused packing list covering clothing, health supplies, and entertainment to keep kids
            comfortable and happy throughout your Morocco family trip.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {kidsPacking.map((category) => {
              const PackIcon = category.icon;
              return (
                <div key={category.category} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <PackIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">{category.category}</h3>
                  <div className="space-y-2">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAQ SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{faq.name}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          RELATED GUIDES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Family Trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link href="/family-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Family Guide</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">In-depth family travel planning for Morocco.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/family" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Users className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Family Activities</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">Top family activities and experiences across Morocco.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/morocco-trip-cost" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Wallet className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Trip Cost Guide</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">Detailed budget breakdown for Morocco travel.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/is-morocco-safe" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Shield className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Is Morocco Safe?</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">Full safety guide with city-by-city ratings.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/morocco-food-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Food Guide</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">Complete guide to Moroccan cuisine and dining.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BOTTOM CTA
          ══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent)]/80">
        <div className="container-morocco text-center">
          <Heart className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready for a Family Adventure in Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Morocco will give your family memories that last a lifetime. From camel rides in the Sahara
            to cooking classes in Marrakech, your children will talk about this trip for years to come.
            Start planning your family Moroccan adventure today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/is-morocco-safe"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[var(--color-accent)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Shield className="w-5 h-5" />
              Read the Safety Guide
            </Link>
            <Link
              href="/morocco-trip-cost"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Plan Your Budget
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
