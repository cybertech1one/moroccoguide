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
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Baby,
  Utensils,
  Building,
  Award,
  BookOpen,
  Calendar,
  Sun,
  Stethoscope,
  Luggage,
  Camera,
  Compass,
  Smile,
  Bus,
  Bed,
  Waves,
  Mountain,
  TreePine,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco with Kids 2026 | Complete Family Travel Guide & Tips',
  description:
    'Complete guide to visiting Morocco with kids. Kid-friendly activities by age, best family cities, riads with pools, health & safety tips, daily budgets for family of 4, and sample itineraries. Everything parents need for a stress-free Moroccan family holiday.',
  keywords: [
    'Morocco with kids',
    'family trip Morocco',
    'Morocco family holiday',
    'kid-friendly Morocco',
    'Morocco children travel',
    'family travel Morocco 2026',
    'Morocco toddler friendly',
    'Morocco teen activities',
    'riads with pools Morocco',
    'Morocco family itinerary',
    'Morocco family budget',
    'Morocco safe for kids',
    'Morocco family accommodation',
    'Marrakech with kids',
    'Morocco beach family',
    'camel ride kids Morocco',
    'Morocco cooking class family',
    'Morocco family food',
    'Morocco stroller friendly',
    'best time visit Morocco family',
    'Morocco vaccination kids',
    'Morocco family activities',
  ],
  openGraph: {
    title: 'Morocco with Kids 2026 | Complete Family Travel Guide & Tips',
    description:
      'Everything parents need for a Morocco family trip. Kid-friendly activities, family riads, health tips, budgets, and itineraries for toddlers to teens.',
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
    title: 'Morocco with Kids 2026 | Complete Family Travel Guide',
    description:
      'Kid-friendly activities, family riads with pools, health tips, daily budgets, and sample itineraries. Your complete guide to Morocco with children.',
    images: [`${BASE_URL}/images/hero-family-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-with-kids` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-with-kids`,
  name: 'Morocco with Kids 2026 | Complete Family Travel Guide & Tips',
  description:
    'Complete guide to visiting Morocco with kids. Kid-friendly activities by age, best cities for families, family accommodations, health & safety, budgets, and itineraries.',
  url: `${BASE_URL}/morocco-with-kids`,
  image: `${BASE_URL}/images/hero-family-morocco.webp`,
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  mainEntityOfPage: `${BASE_URL}/morocco-with-kids`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco with Kids', item: `${BASE_URL}/morocco-with-kids` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco safe for families with young children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco is generally safe for families. Moroccans are famously welcoming to children. Stick to well-traveled cities like Marrakech, Fes, and Essaouira, use registered taxis and licensed guides, and take standard food and water precautions. Petty theft can occur in crowded medinas, so keep valuables secure and hold young children\'s hands in busy souks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What vaccinations do children need for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No special vaccinations are required for Morocco beyond routine childhood immunizations. Consult your pediatrician 6-8 weeks before travel. Recommended vaccines include Hepatitis A and Typhoid. Ensure routine vaccines (MMR, DTaP, polio) are up to date. Malaria prophylaxis is not needed for standard tourist areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best age to take children to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is enjoyable with children of all ages, but each age has trade-offs. Toddlers (1-4) are welcomed warmly but may struggle with heat and medina walking. Children 5-10 are the sweet spot as they can walk, engage with experiences like camel rides and cooking classes, and remember the trip. Teens appreciate the adventure, culture, and photography opportunities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a family trip to Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A family of 4 can visit Morocco on budgets ranging from 800 MAD to 4,000 MAD per day. Budget travelers spend from 800 MAD/day covering basic riads, local food, and free attractions. Mid-range families average from 1,800 MAD/day with pool riads, guided tours, and restaurant meals. Luxury families spend from 4,000 MAD/day for resort hotels, private guides, and premium experiences.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you use strollers in Moroccan medinas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strollers are extremely difficult to use in medinas due to narrow, uneven cobblestone streets, steps, and crowds. A lightweight baby carrier or structured hiking backpack carrier is far more practical. Outside the medinas, in the Ville Nouvelle areas, strollers work fine on paved sidewalks. Many family-friendly riads offer loaner strollers for outings in modern areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'What will kids eat in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan cuisine is generally kid-friendly. Popular options include chicken tagine (mild and tender), couscous with vegetables, msemen (Moroccan pancakes), fresh bread with butter and jam, grilled chicken or kefta (ground meat skewers), French fries (available everywhere), fresh orange juice, and pastilla (sweet pastry with chicken). Most restaurants will adjust spice levels on request.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit Morocco with kids?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best months for families are March-May and September-November when temperatures are comfortable (20-28 degrees Celsius). Summer (June-August) brings intense heat, especially inland where temperatures exceed 40 degrees Celsius, making sightseeing difficult with children. December-February is mild on the coast but cold in the mountains and desert at night.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there kid-friendly hotels and riads in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, many accommodations cater to families. Family-friendly riads with pools start from 800 MAD per night. Larger resorts in Marrakech, Agadir, and Essaouira offer kids clubs, pools, and family suites from 1,500 MAD. Some riads provide baby cots, high chairs, and child-proofed rooms on request. Always confirm family amenities when booking.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ACTIVITIES BY AGE GROUP
   ═══════════════════════════════════════════════════════════════ */

const activitiesByAge = [
  {
    ageGroup: 'Toddlers (1-4 years)',
    icon: Baby,
    color: 'var(--color-accent)',
    description:
      'Morocco warmly welcomes the youngest travelers. Focus on sensory experiences, short outings, and accommodations with pools and gardens where little ones can play safely.',
    activities: [
      { name: 'Splashing in riad plunge pools', detail: 'Many family riads have shallow pools perfect for toddlers. Book riads with enclosed courtyards for safe play.' },
      { name: 'Jardin Majorelle gardens', detail: 'The vivid blue walls, goldfish ponds, and shaded pathways fascinate toddlers. Visit early morning to avoid crowds.' },
      { name: 'Camel encounter (not riding)', detail: 'Toddlers love meeting camels up close. Farms near Marrakech offer supervised encounters from 50 MAD.' },
      { name: 'Beach play in Essaouira or Agadir', detail: 'Wide sandy beaches with gentle waves. Essaouira beach has shallow tidal pools ideal for little ones.' },
      { name: 'Horse-drawn carriage rides', detail: 'Caleche rides around Marrakech ramparts. Children sit safely on parents\' laps. From 150 MAD for 30 minutes.' },
      { name: 'Watching artisans in the souks', detail: 'Blacksmiths, woodworkers, and potters captivate toddlers with their hands-on work. Keep visits under 30 minutes.' },
    ],
  },
  {
    ageGroup: 'Children (5-10 years)',
    icon: Smile,
    color: 'var(--color-gold)',
    description:
      'The sweet spot for a Morocco family trip. Children this age can walk reasonable distances, engage with cultural experiences, and will remember the adventure for years to come.',
    activities: [
      { name: 'Camel riding in Palmeraie or desert', detail: 'Children 5+ can ride their own camel (with handler). Palmeraie sunset rides from 200 MAD per person.' },
      { name: 'Family cooking classes', detail: 'Learn to make tagine, couscous, and Moroccan pastries. Kids love the hands-on element. From 350 MAD per person.' },
      { name: 'Medina treasure hunts', detail: 'Turn souk exploring into a scavenger hunt: find a blue door, a brass lantern, a pyramid of spices. Free and endlessly entertaining.' },
      { name: 'Ouzoud Waterfalls day trip', detail: 'Morocco\'s most spectacular waterfall with resident Barbary macaques that children adore. Day trip from Marrakech from 400 MAD.' },
      { name: 'Pottery and craft workshops', detail: 'Hands-on pottery painting and tile mosaic workshops in Fes and Marrakech. From 150 MAD per child.' },
      { name: 'Swimming at beach resorts', detail: 'Agadir and Essaouira have excellent beach resorts with kids\' pools and organized activities. Day passes from 200 MAD.' },
    ],
  },
  {
    ageGroup: 'Teens (11-17 years)',
    icon: Compass,
    color: 'var(--color-accent)',
    description:
      'Teenagers thrive in Morocco. The sensory overload of the medinas, adventure activities, and rich culture give them stories that will impress their friends back home.',
    activities: [
      { name: 'Quad biking in Palmeraie', detail: 'Supervised quad biking through palm groves and desert tracks. Ages 12+. From 400 MAD per person for 2 hours.' },
      { name: 'Overnight desert camping', detail: 'Merzouga or Zagora desert camps with camel trek, stargazing, and campfire music. A life-changing experience. From 800 MAD per person.' },
      { name: 'Surfing lessons in Essaouira or Taghazout', detail: 'Morocco\'s Atlantic coast has world-class surf. Beginner lessons for teens from 350 MAD including board and wetsuit.' },
      { name: 'Photography walks in Chefchaouen', detail: 'The blue city is an Instagram paradise. Teens can practice photography skills in every lane. Guide from 200 MAD.' },
      { name: 'Atlas Mountains trekking', detail: 'Half-day and full-day hikes suited to fit teens. Stunning scenery, Berber villages, and a real sense of achievement. From 300 MAD with guide.' },
      { name: 'Hammam experience', detail: 'Teens 13+ can try a family-friendly spa hammam. A unique cultural experience they will never forget. From 300 MAD per person.' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST CITIES FOR FAMILIES
   ═══════════════════════════════════════════════════════════════ */

const familyCities = [
  {
    city: 'Marrakech',
    icon: Star,
    image: '/images/hero-marrakech.webp',
    familyRating: 5,
    bestFor: 'First-time family visitors, all ages',
    description:
      'Morocco\'s most family-visited city. The Jemaa el-Fnaa square mesmerizes children with its storytellers, musicians, and snake charmers. The medina is a living adventure playground. Marrakech also has the widest selection of family-friendly riads, resorts, and restaurants.',
    highlights: [
      'Jemaa el-Fnaa entertainment',
      'Jardin Majorelle gardens',
      'Camel rides in Palmeraie',
      'Family cooking classes',
      'Day trips to Ouzoud Falls',
      'Many pool riads available',
    ],
    strollerFriendly: 'Difficult in medina, fine in Gueliz/Hivernage',
  },
  {
    city: 'Essaouira',
    icon: Waves,
    image: '/images/hero-essaouira-ramparts.webp',
    familyRating: 5,
    bestFor: 'Beach families, relaxed pace, ages 3+',
    description:
      'A laid-back coastal town with a compact, walkable medina. The wide beach is perfect for sandcastles and kite-watching. The port area fascinates children with fishing boats and seagulls. Essaouira is less intense than Marrakech, making it ideal for families who prefer a calmer atmosphere.',
    highlights: [
      'Wide sandy beach',
      'Compact, walkable medina',
      'Fresh seafood at the port',
      'Wind sports for teens',
      'Relaxed, less intense vibe',
      'Easy 3-hour drive from Marrakech',
    ],
    strollerFriendly: 'Manageable in parts of the medina, good on the beach promenade',
  },
  {
    city: 'Agadir',
    icon: Sun,
    image: '/images/hero-agadir-beach.webp',
    familyRating: 4,
    bestFor: 'Resort families, toddlers, beach holidays',
    description:
      'Morocco\'s premier beach resort city. Rebuilt after the 1960 earthquake, Agadir has modern infrastructure, wide boulevards, and a long promenade. The beaches are sandy and sheltered. Major resort hotels with kids\' clubs and family pools make this the easiest Morocco destination for families with very young children.',
    highlights: [
      'Long sandy beach',
      'Resort hotels with kids\' clubs',
      'Crocoparc reptile park',
      'Modern infrastructure',
      'Souss-Massa nature reserve',
      'Best winter sun in Morocco',
    ],
    strollerFriendly: 'Very stroller-friendly: modern sidewalks and promenade',
  },
  {
    city: 'Fes',
    icon: Building,
    image: '/images/hero-fes-medina.webp',
    familyRating: 3,
    bestFor: 'Older children and teens, cultural immersion',
    description:
      'The world\'s largest car-free urban area is an extraordinary experience, but challenging with very young children. Steep hills, narrow passages, and donkey traffic require vigilance. For families with children 7+ or teens, however, Fes is unforgettable. The tanneries, pottery workshops, and medieval atmosphere are unmatched.',
    highlights: [
      'Medieval medina experience',
      'Pottery and craft workshops',
      'Famous tanneries visit',
      'Excellent food culture',
      'Fewer tourists than Marrakech',
      'Rich educational value',
    ],
    strollerFriendly: 'Not recommended: steep hills, narrow streets, steps throughout',
  },
  {
    city: 'Chefchaouen',
    icon: Camera,
    image: '/images/hero-chefchaouen.webp',
    familyRating: 4,
    bestFor: 'Photography families, older kids and teens',
    description:
      'The famous blue city nestled in the Rif Mountains. Children are enchanted by the blue-washed streets and the relaxed mountain village atmosphere. The small scale makes it manageable for families, and there are lovely hikes to waterfalls nearby. Best combined with Fes in a longer itinerary.',
    highlights: [
      'Stunning blue-painted medina',
      'Small and walkable',
      'Ras el-Maa waterfall',
      'Mountain hiking trails',
      'Relaxed village atmosphere',
      'Great for photography',
    ],
    strollerFriendly: 'Difficult: steep cobblestone streets, many steps',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAMILY-FRIENDLY ACCOMMODATIONS
   ═══════════════════════════════════════════════════════════════ */

const familyAccommodations = [
  {
    type: 'Family Riads with Pools',
    icon: Bed,
    priceRange: 'From 800 MAD per night',
    description:
      'Traditional Moroccan guesthouses with courtyard pools. Many now cater specifically to families with interconnecting rooms, cots, high chairs, and child-friendly breakfasts. The enclosed courtyard design keeps children safely contained.',
    examples: [
      { name: 'Riad Kniza, Marrakech', detail: 'Family suites, pool, rooftop terrace', price: 'From 2,200 MAD' },
      { name: 'Riad Laaroussa, Fes', detail: 'Large rooms, heated pool, garden', price: 'From 1,800 MAD' },
      { name: 'Riad Watier, Essaouira', detail: 'Ocean views, family rooms, terrace', price: 'From 1,200 MAD' },
    ],
    tips: 'Ask about room locks, stair gates, and pool safety measures when booking. Request ground-floor rooms for toddler safety.',
  },
  {
    type: 'Resort Hotels',
    icon: Building,
    priceRange: 'From 1,500 MAD per night',
    description:
      'International-standard resort hotels with full family amenities including kids\' clubs, multiple pools, family restaurants, and organized activities. Found primarily in Marrakech, Agadir, and Essaouira. The easiest option for families who want a stress-free base.',
    examples: [
      { name: 'Four Seasons Marrakech', detail: 'Kids\' club, 3 pools, family suites', price: 'From 5,000 MAD' },
      { name: 'Mazagan Beach Resort, El Jadida', detail: 'Waterpark, kids\' club, beach', price: 'From 2,500 MAD' },
      { name: 'Sofitel Agadir Royal Bay', detail: 'Kids\' pool, beach access, family rooms', price: 'From 2,000 MAD' },
    ],
    tips: 'Ask about kids-eat-free policies and family package deals. Many resorts offer discounted rates for children sharing parents\' room.',
  },
  {
    type: 'Budget Family Stays',
    icon: Heart,
    priceRange: 'From 400 MAD per night',
    description:
      'Guesthouses, family-run B&Bs, and simple hotels that welcome families at lower price points. Expect basic but clean rooms, generous Moroccan hospitality, and home-cooked breakfasts. Some have small gardens or terraces where children can play.',
    examples: [
      { name: 'Dar Finn, Marrakech', detail: 'Pool, family rooms, quiet location', price: 'From 600 MAD' },
      { name: 'Hotel Tafouk, Essaouira', detail: 'Family rooms, ocean views, terrace', price: 'From 500 MAD' },
      { name: 'Dar Amazir, Agadir', detail: 'Garden, family suite, kitchen access', price: 'From 400 MAD' },
    ],
    tips: 'Book directly with the riad for best prices and to communicate specific family needs in advance.',
  },
  {
    type: 'Desert Camps (Family-Friendly)',
    icon: Mountain,
    priceRange: 'From 800 MAD per person per night',
    description:
      'Luxury desert camps in Merzouga and Zagora now offer family tents with proper beds, private bathrooms, and child-friendly dining. The overnight desert experience is a highlight for children of all ages, with camel rides, sandboarding, and stargazing.',
    examples: [
      { name: 'Merzouga Luxury Desert Camp', detail: 'Family tents, en-suite, camel ride included', price: 'From 1,200 MAD pp' },
      { name: 'Erg Chebbi Bivouac', detail: 'Family-sized tents, campfire dinner, stargazing', price: 'From 800 MAD pp' },
      { name: 'Zagora Desert Lodge', detail: 'Fixed camp, pool, family rooms', price: 'From 1,000 MAD pp' },
    ],
    tips: 'Choose luxury or mid-range camps with proper toilets for families. Budget camps with shared facilities are harder with young children.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HEALTH & SAFETY FOR CHILDREN
   ═══════════════════════════════════════════════════════════════ */

const healthSafetyTips = [
  {
    category: 'Vaccinations & Medical',
    icon: Stethoscope,
    items: [
      'No special vaccinations required beyond routine childhood immunizations',
      'Recommended: Hepatitis A and Typhoid (consult pediatrician 6-8 weeks before travel)',
      'Ensure routine vaccines (MMR, DTaP, polio) are up to date',
      'Bring a well-stocked first aid kit with children\'s paracetamol, rehydration salts, antihistamines, and any prescription medications',
      'Malaria prophylaxis is not needed for standard tourist areas',
      'Pharmacies (pharmacies) are well-stocked and found on nearly every major street',
    ],
  },
  {
    category: 'Food & Water Safety',
    icon: Utensils,
    items: [
      'Drink only bottled water and use it for brushing teeth (Sidi Ali and Ain Saiss are trusted brands)',
      'Avoid ice in drinks at street stalls (hotel and restaurant ice is generally safe)',
      'Wash and peel fruit before giving to children',
      'Eat at busy restaurants with high turnover for freshest food',
      'Carry hand sanitizer and wet wipes for before and after meals',
      'Introduce new foods gradually to avoid upset stomachs',
    ],
  },
  {
    category: 'Sun & Heat Protection',
    icon: Sun,
    items: [
      'Apply SPF 50+ sunscreen every 2 hours, especially on children\'s ears, necks, and feet',
      'Wide-brimmed hats are essential for all family members',
      'Schedule sightseeing for mornings (before 11am) and late afternoons (after 4pm) in summer',
      'Carry at least 1.5 liters of water per person at all times',
      'Know the signs of heat exhaustion: pale skin, excessive sweating, nausea, headache',
      'Rest in air-conditioned spaces during the hottest hours (12pm-3pm)',
    ],
  },
  {
    category: 'General Safety',
    icon: ShieldCheck,
    items: [
      'Hold young children\'s hands in medinas; streets are narrow and donkeys pass through',
      'Teach older children the name and address of your riad in case of separation',
      'Keep a recent photo of each child on your phone',
      'Use registered taxis (petit taxi) or hotel transfers rather than unmarked vehicles',
      'Be cautious at rooftop terraces, which often lack child-safe railings',
      'Keep valuables in hotel safes; carry only what you need in the medina',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: KID-FRIENDLY FOOD
   ═══════════════════════════════════════════════════════════════ */

const kidFriendlyFoods = [
  { name: 'Chicken Tagine', description: 'Tender slow-cooked chicken with olives and preserved lemons. Mild flavor that most children enjoy.', spiceLevel: 'Mild', price: 'From 50 MAD' },
  { name: 'Couscous with Vegetables', description: 'Fluffy steamed semolina with soft vegetables and broth. Friday\'s national dish that children love.', spiceLevel: 'Mild', price: 'From 40 MAD' },
  { name: 'Msemen (Moroccan Pancakes)', description: 'Flaky, buttery square pancakes served with honey or jam. Available at street stalls and cafes for breakfast.', spiceLevel: 'None', price: 'From 5 MAD each' },
  { name: 'Fresh Orange Juice', description: 'Freshly squeezed on every street corner. Morocco\'s oranges are sweet and delicious. Kids cannot get enough.', spiceLevel: 'None', price: 'From 5 MAD' },
  { name: 'Kefta (Meat Skewers)', description: 'Seasoned ground beef or lamb grilled on skewers. Ask for "bla harr" (without spice) for younger children.', spiceLevel: 'Adjustable', price: 'From 20 MAD' },
  { name: 'French Fries', description: 'Available at virtually every restaurant and cafe in Morocco. A reliable fallback when children are feeling picky.', spiceLevel: 'None', price: 'From 15 MAD' },
  { name: 'Khobz (Moroccan Bread)', description: 'Round flatbread served with every meal. Children love tearing pieces and dipping in tagine sauce or olive oil.', spiceLevel: 'None', price: 'From 2 MAD' },
  { name: 'Pastilla (Sweet Pastry)', description: 'Flaky pastry filled with chicken, almonds, and cinnamon sugar. The sweet-savory combination appeals to many children.', spiceLevel: 'None', price: 'From 30 MAD' },
  { name: 'Avocado Smoothie', description: 'A Moroccan specialty: blended avocado with milk and sugar. Rich, creamy, and nutritious. Found at juice stalls.', spiceLevel: 'None', price: 'From 15 MAD' },
  { name: 'Brochettes (Grilled Meat)', description: 'Simple grilled lamb, chicken, or beef on skewers from roadside grills. A quick, protein-rich snack children enjoy.', spiceLevel: 'Mild', price: 'From 20 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAMILY BUDGET
   ═══════════════════════════════════════════════════════════════ */

const familyBudgets = [
  {
    tier: 'Budget',
    dailyTotal: 'From 800 MAD per day',
    icon: DollarSign,
    color: 'var(--color-accent)',
    breakdown: [
      { item: 'Accommodation (basic riad/guesthouse)', cost: 'From 400 MAD' },
      { item: 'Breakfast (included at most riads)', cost: 'Included' },
      { item: 'Lunch (local restaurants)', cost: 'From 100 MAD' },
      { item: 'Dinner (local restaurants)', cost: 'From 150 MAD' },
      { item: 'Activities & transport', cost: 'From 100 MAD' },
      { item: 'Snacks, water & extras', cost: 'From 50 MAD' },
    ],
    description: 'Staying in basic family-run guesthouses, eating at local restaurants, using public transport, and enjoying free activities like medina exploring, beaches, and park visits.',
  },
  {
    tier: 'Mid-Range',
    dailyTotal: 'From 1,800 MAD per day',
    icon: Star,
    color: 'var(--color-gold)',
    breakdown: [
      { item: 'Accommodation (pool riad/boutique hotel)', cost: 'From 800 MAD' },
      { item: 'Breakfast (included)', cost: 'Included' },
      { item: 'Lunch (mix of local and tourist restaurants)', cost: 'From 200 MAD' },
      { item: 'Dinner (mid-range restaurants)', cost: 'From 350 MAD' },
      { item: 'Activities & guided tours', cost: 'From 300 MAD' },
      { item: 'Snacks, water, taxis & extras', cost: 'From 150 MAD' },
    ],
    description: 'Family riads with pools, a mix of local and tourist-friendly restaurants, occasional guided tours, taxi transport, and one or two paid activities per day.',
  },
  {
    tier: 'Luxury',
    dailyTotal: 'From 4,000 MAD per day',
    icon: Award,
    color: 'var(--color-accent)',
    breakdown: [
      { item: 'Accommodation (resort/luxury riad)', cost: 'From 2,000 MAD' },
      { item: 'Breakfast (included)', cost: 'Included' },
      { item: 'Lunch (hotel or upscale restaurant)', cost: 'From 400 MAD' },
      { item: 'Dinner (fine dining)', cost: 'From 600 MAD' },
      { item: 'Private guides & premium activities', cost: 'From 700 MAD' },
      { item: 'Taxis, snacks & extras', cost: 'From 300 MAD' },
    ],
    description: 'Luxury resorts or premium riads, private guides, fine dining, premium experiences like hot air balloon rides or private desert camps, and door-to-door transport.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST TIME TO VISIT
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  {
    season: 'Spring (March - May)',
    icon: TreePine,
    rating: 'Best',
    temps: '20-28 C',
    description:
      'The ideal season for families. Comfortable temperatures across the country, blooming landscapes in the Atlas and valleys, and manageable crowds. Gardens are at their most beautiful, and outdoor activities are pleasant all day long.',
    familyTip: 'Easter holidays overlap with peak season. Book accommodations 2-3 months in advance for March-April.',
  },
  {
    season: 'Autumn (September - November)',
    icon: Sun,
    rating: 'Best',
    temps: '22-30 C',
    description:
      'Equally excellent for families. The summer heat subsides, the sea is still warm enough for swimming, and the desert is accessible again. October is particularly good with warm days, cool evenings, and fewer crowds than spring.',
    familyTip: 'School half-term weeks in October are popular with European families. Book early for this period.',
  },
  {
    season: 'Summer (June - August)',
    icon: Thermometer,
    rating: 'Challenging',
    temps: '35-45 C inland',
    description:
      'Inland cities like Marrakech and Fes experience extreme heat that makes sightseeing with children difficult and potentially dangerous. However, coastal cities like Essaouira and Agadir remain comfortable, and the coast is excellent for beach holidays.',
    familyTip: 'If visiting in summer, base in Essaouira or Agadir and take only early-morning excursions inland.',
  },
  {
    season: 'Winter (December - February)',
    icon: Mountain,
    rating: 'Good',
    temps: '10-20 C',
    description:
      'Mild and pleasant on the coast and in Marrakech during the day, but cold at night and in the mountains. The desert can be surprisingly cold after dark. Good value with fewer tourists, but some mountain passes may be closed by snow.',
    familyTip: 'Pack layers for temperature swings between daytime and evening, especially if visiting the desert or mountains.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAMILY ITINERARIES
   ═══════════════════════════════════════════════════════════════ */

const familyItineraries = [
  {
    duration: '3-Day Quick Break',
    icon: Clock,
    bestFor: 'Families with young children or limited time',
    days: [
      {
        day: 'Day 1: Arrive in Marrakech',
        activities: [
          'Settle into your family riad',
          'Gentle stroll through Jemaa el-Fnaa square',
          'Fresh orange juice and people watching',
          'Early dinner at a family-friendly restaurant in the medina',
        ],
      },
      {
        day: 'Day 2: Explore Marrakech',
        activities: [
          'Morning visit to Jardin Majorelle (arrive at 8am opening)',
          'Camel ride in Palmeraie (from 200 MAD per person)',
          'Afternoon pool time at your riad',
          'Evening: family cooking class (from 350 MAD per person)',
        ],
      },
      {
        day: 'Day 3: Souks & Departure',
        activities: [
          'Morning souk treasure hunt with children',
          'Visit to a traditional bakery for msemen',
          'Last-minute shopping for souvenirs',
          'Afternoon departure or transfer',
        ],
      },
    ],
    budget: 'From 5,000 MAD total for family of 4 (mid-range)',
  },
  {
    duration: '7-Day Family Adventure',
    icon: Calendar,
    bestFor: 'Families with children 5+ looking for variety',
    days: [
      {
        day: 'Days 1-2: Marrakech',
        activities: [
          'Day 1: Jemaa el-Fnaa, Koutoubia Mosque, medina walk, riad pool',
          'Day 2: Jardin Majorelle, cooking class, Palmeraie camel ride',
        ],
      },
      {
        day: 'Day 3: Day Trip to Ouzoud Falls',
        activities: [
          'Full-day excursion to Ouzoud Waterfalls (from 400 MAD per person)',
          'Hiking to the falls, spotting Barbary macaques',
          'Picnic lunch by the river',
          'Return to Marrakech by evening',
        ],
      },
      {
        day: 'Days 4-5: Essaouira',
        activities: [
          'Day 4: Drive to Essaouira (3 hours), check into beachfront riad, beach afternoon',
          'Day 5: Medina exploring, port visit, fish lunch, beach time or wind sports for teens',
        ],
      },
      {
        day: 'Day 6: Return to Marrakech',
        activities: [
          'Morning argan cooperative visit en route',
          'Afternoon: hammam spa experience for older children and parents',
          'Evening: rooftop dinner with medina views',
        ],
      },
      {
        day: 'Day 7: Final Day & Departure',
        activities: [
          'Morning: last souk shopping, pottery workshop',
          'Farewell lunch in the medina',
          'Afternoon departure',
        ],
      },
    ],
    budget: 'From 14,000 MAD total for family of 4 (mid-range)',
  },
  {
    duration: '10-Day Grand Morocco Tour',
    icon: Compass,
    bestFor: 'Adventurous families with children 8+ or teens',
    days: [
      {
        day: 'Days 1-2: Marrakech',
        activities: [
          'Medina exploration, Jardin Majorelle, cooking class',
          'Palmeraie camel ride, souk shopping, rooftop dining',
        ],
      },
      {
        day: 'Day 3: Atlas Mountains',
        activities: [
          'Drive to Imlil village in the High Atlas (1.5 hours)',
          'Family-friendly half-day trek with Berber guide',
          'Lunch in a traditional Berber village',
          'Return to Marrakech or overnight in mountain lodge',
        ],
      },
      {
        day: 'Days 4-5: Desert Adventure',
        activities: [
          'Day 4: Drive through Dades and Todra Gorges (stunning scenery)',
          'Day 5: Camel trek into Erg Chebbi dunes, overnight luxury desert camp, stargazing',
        ],
      },
      {
        day: 'Days 6-7: Fes',
        activities: [
          'Day 6: Drive to Fes via Ifrane and cedar forests (Barbary macaques)',
          'Day 7: Fes medina with guide, tanneries visit, pottery workshop',
        ],
      },
      {
        day: 'Day 8: Chefchaouen',
        activities: [
          'Drive to the blue city (4 hours)',
          'Afternoon exploring blue-washed streets and photography',
          'Hike to Ras el-Maa waterfall',
        ],
      },
      {
        day: 'Days 9-10: Essaouira & Return',
        activities: [
          'Day 9: Fly or drive to Essaouira, beach afternoon, surfing for teens',
          'Day 10: Morning beach, farewell lunch, departure',
        ],
      },
    ],
    budget: 'From 28,000 MAD total for family of 4 (mid-range)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT KIDS LOVE ABOUT MOROCCO
   ═══════════════════════════════════════════════════════════════ */

const whatKidsLove = [
  {
    title: 'Camel Rides',
    icon: Compass,
    description:
      'Nothing beats the thrill of sitting atop a camel as it sways through the palm groves or desert dunes. Children talk about this experience for years. Rides are available in Palmeraie, Merzouga, and Zagora from 200 MAD per person.',
  },
  {
    title: 'Beach Adventures',
    icon: Waves,
    description:
      'Morocco\'s Atlantic coastline offers miles of sandy beaches. Essaouira\'s tidal pools are perfect for exploring marine life. Agadir has sheltered swimming. Older kids love the constant wind for kite-watching and beginner surfing.',
  },
  {
    title: 'Medina Exploring',
    icon: MapPin,
    description:
      'The labyrinthine medinas are the world\'s greatest adventure playgrounds. Every corner reveals something new: a hidden fountain, a craftsman at work, a cat sleeping on a colorful doorstep. Turn it into a treasure hunt and children are captivated.',
  },
  {
    title: 'Cooking Classes',
    icon: Utensils,
    description:
      'Hands-on cooking classes where children help prepare tagines, shape couscous, and make Moroccan pastries. They get to eat their creation afterward. Many classes include a market shopping trip for ingredients. From 350 MAD per person.',
  },
  {
    title: 'Animals & Nature',
    icon: TreePine,
    description:
      'Barbary macaques at Ouzoud Falls and cedar forests, donkeys and mules in the medinas, cats everywhere, goats climbing argan trees, and flamingos at coastal wetlands. Morocco is a living nature documentary for animal-loving children.',
  },
  {
    title: 'Stars in the Desert',
    icon: Star,
    description:
      'The Sahara desert sky, far from any light pollution, reveals the Milky Way in breathtaking clarity. Children who have only seen city skies are left speechless. Desert camps often provide telescopes and star maps.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GETTING AROUND WITH KIDS
   ═══════════════════════════════════════════════════════════════ */

const transportTips = [
  {
    method: 'Private Driver / Grand Taxi',
    icon: Bus,
    suitability: 'Best for families',
    description:
      'Hiring a private driver is the easiest way to travel between cities with children. Drivers can be booked through your riad or hotel. Expect to pay from 1,500 MAD per day for an air-conditioned vehicle with driver. Grand taxis (shared long-distance taxis) can be hired privately for intercity trips from 500 MAD.',
    tip: 'Bring your own car seat or booster seat from home. Car seats are not standard in Moroccan taxis.',
  },
  {
    method: 'Petit Taxi (City Taxis)',
    icon: Bus,
    suitability: 'Good for short trips',
    description:
      'Small city taxis for trips within towns. They are metered in most cities (insist on the meter). Maximum 3 passengers means a family of 4 may need two taxis. Rides within cities rarely exceed 30 MAD.',
    tip: 'Taxis do not have car seats. For toddlers, keep them on your lap and take short rides only.',
  },
  {
    method: 'Trains (ONCF)',
    icon: Bus,
    suitability: 'Good for older children',
    description:
      'Morocco\'s trains connect Marrakech, Casablanca, Rabat, Fes, and Tangier. First class is comfortable and affordable (Marrakech to Fes from 250 MAD). The Al Boraq high-speed train between Tangier and Casablanca is a novelty that children enjoy.',
    tip: 'Book first class for more space with luggage and children. Trains have basic toilet facilities.',
  },
  {
    method: 'Walking & Baby Carriers',
    icon: Users,
    suitability: 'Essential in medinas',
    description:
      'Within medinas, walking is the only option. Strollers are impractical on cobblestones and narrow lanes. A structured baby carrier (Ergobaby, BabyBjorn) is essential for toddlers. For older toddlers, a hiking-style backpack carrier works well and gives them a great vantage point.',
    tip: 'Limit medina walking to 2-3 hours with young children. Take breaks at cafes for rest and refreshments.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING ESSENTIALS FOR FAMILIES
   ═══════════════════════════════════════════════════════════════ */

const packingEssentials = [
  { item: 'Lightweight baby carrier or backpack carrier', category: 'Essential' },
  { item: 'SPF 50+ sunscreen (children\'s formula)', category: 'Essential' },
  { item: 'Wide-brimmed hats for all family members', category: 'Essential' },
  { item: 'Reusable water bottles (at least 1L per person)', category: 'Essential' },
  { item: 'Children\'s paracetamol / ibuprofen', category: 'Medical' },
  { item: 'Oral rehydration salts', category: 'Medical' },
  { item: 'Antihistamines (children\'s dose)', category: 'Medical' },
  { item: 'Insect repellent (child-safe)', category: 'Medical' },
  { item: 'Hand sanitizer and wet wipes (plenty)', category: 'Essential' },
  { item: 'Portable car seat or booster seat', category: 'Transport' },
  { item: 'Lightweight layers for cool evenings', category: 'Clothing' },
  { item: 'Comfortable closed-toe walking shoes', category: 'Clothing' },
  { item: 'Swimwear and rash guards', category: 'Clothing' },
  { item: 'Small backpack for day trips', category: 'Essential' },
  { item: 'Snacks from home for picky eaters', category: 'Food' },
  { item: 'Entertainment for travel days (tablet, books, coloring)', category: 'Comfort' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoWithKidsPage() {
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

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-family-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco with Kids</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Users className="w-4 h-4" />
            Family Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco with Kids:
            <br className="hidden md:block" /> The Complete Family Travel Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything parents need to plan a stress-free Morocco family trip. Activities by age,
            family-friendly riads, health tips, daily budgets, and detailed itineraries from 3 to 10 days.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is a Brilliant Family Destination
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the most rewarding family destinations on the planet, and one of the most
                underrated. While many parents hesitate, those who take the leap discover a country that adores
                children, offers adventure at every turn, and creates memories that last a lifetime.
              </p>
              <p>
                Moroccans are famously welcoming to families. In restaurants, strangers will entertain your
                toddler while you eat. In the souks, shopkeepers will offer your children mint tea and cookies.
                In rural villages, your kids will be treated like visiting royalty. The culture places enormous
                value on children and family, and visiting families feel this warmth everywhere they go.
              </p>
              <p>
                From camel rides through palm groves to overnight stays under Saharan stars, from cooking
                classes in ancient medinas to surfing lessons on Atlantic beaches, Morocco offers a diversity
                of experiences that few destinations can match. And all of it at a fraction of the cost of
                equivalent experiences in Europe or North America.
              </p>
              <p>
                This guide covers everything you need to plan a Morocco family trip: activities for every
                age group, the best family-friendly cities, where to stay, what to eat, health and safety
                essentials, realistic budgets, and detailed itineraries. Let us help you plan the family
                adventure of a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Activities by Age Group ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Kid-Friendly Activities by Age
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What works for toddlers does not work for teens. Here are the best Morocco experiences for every age group.
          </p>

          <div className="space-y-10">
            {activitiesByAge.map((group) => {
              const GroupIcon = group.icon;
              return (
                <div key={group.ageGroup} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <GroupIcon className="w-6 h-6" style={{ color: group.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {group.ageGroup}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-6">{group.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {group.activities.map((activity, i) => (
                      <div key={i} className="bg-[var(--surface-muted)] p-4 rounded-lg">
                        <div className="flex items-start gap-2 mb-1">
                          <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          <span className="text-sm font-semibold text-[var(--text-primary)]">{activity.name}</span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)] ml-6">{activity.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Cities for Families ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Cities for Families
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Not all Moroccan cities are equally suited to families. Here is where to go depending on your children&apos;s ages and your travel style.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {familyCities.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={city.image}
                      alt={`Family-friendly destination ${city.city}, Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <CityIcon className="w-5 h-5 text-white" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                        {city.city}
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                      {Array.from({ length: city.familyRating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-[var(--color-gold)] fill-[var(--color-gold)]" />
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                      Best for: {city.bestFor}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{city.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {city.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                      <Luggage className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Stroller access:</span> {city.strollerFriendly}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Family Accommodations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Family-Friendly Accommodations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where you stay makes or breaks a family trip. These are the best accommodation types for families visiting Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {familyAccommodations.map((accom) => {
              const AccomIcon = accom.icon;
              return (
                <div key={accom.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <AccomIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {accom.type}
                      </h3>
                      <span className="text-sm text-[var(--color-accent)] font-semibold">{accom.priceRange}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{accom.description}</p>
                  <div className="space-y-2 mb-4">
                    {accom.examples.map((example, i) => (
                      <div key={i} className="flex items-center justify-between text-sm bg-[var(--surface-muted)] p-3 rounded-lg">
                        <div>
                          <span className="font-medium text-[var(--text-primary)]">{example.name}</span>
                          <span className="text-xs text-[var(--text-muted)] block">{example.detail}</span>
                        </div>
                        <span className="text-xs text-[var(--color-accent)] font-semibold shrink-0 ml-2">{example.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--color-gold)]/5 border border-[var(--color-gold)]/20 rounded-lg">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Family tip:</span> {accom.tips}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Health & Safety ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Health &amp; Safety for Children
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco is a safe destination for families, but preparation is key. Here is everything parents need to know about keeping children healthy and safe.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <AlertTriangle className="w-3.5 h-3.5 inline mr-1" />
            Always consult your pediatrician before international travel with children.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthSafetyTips.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <CategoryIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        <p className="text-sm text-[var(--text-secondary)]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Kid-Friendly Food ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Kid-Friendly Moroccan Food
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Moroccan cuisine is surprisingly child-friendly. These are the dishes that even the pickiest eaters tend to enjoy.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Tip: Say &quot;bla harr&quot; (without spice) when ordering for young children. Most restaurants will happily adjust.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Dish</div>
                <div className="p-3 px-4">Description</div>
                <div className="p-3 px-4">Spice Level</div>
                <div className="p-3 px-4">Price</div>
              </div>
              {kidFriendlyFoods.map((food, i) => (
                <div
                  key={food.name}
                  className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{food.name}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{food.description}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{food.spiceLevel}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{food.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Family Budget Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Daily Budget for a Family of 4
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to spend per day as a family of four (two adults, two children) across three budget levels.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are per family of 4 per day. Children under 6 are often free or discounted at attractions and restaurants.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {familyBudgets.map((budget) => {
              const BudgetIcon = budget.icon;
              return (
                <div key={budget.tier} className="card-moroccan p-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-3" style={{ backgroundColor: `color-mix(in srgb, ${budget.color} 10%, transparent)` }}>
                      <BudgetIcon className="w-6 h-6" style={{ color: budget.color }} />
                    </div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {budget.tier}
                    </h3>
                    <p className="text-lg font-semibold" style={{ color: budget.color }}>
                      {budget.dailyTotal}
                    </p>
                  </div>
                  <div className="space-y-2 mb-4">
                    {budget.breakdown.map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className="text-[var(--text-secondary)]">{item.item}</span>
                        <span className="text-[var(--text-primary)] font-medium shrink-0 ml-2">{item.cost}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-primary)] pt-4">
                    {budget.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Time to Visit ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Visit Morocco with Kids
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing your trip correctly is crucial when traveling with children. Heat is the biggest factor to manage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {seasonalGuide.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                        <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {season.season}
                        </h3>
                        <span className="text-xs text-[var(--text-muted)]">{season.temps}</span>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        season.rating === 'Best'
                          ? 'bg-green-100 text-green-700'
                          : season.rating === 'Good'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {season.rating}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{season.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Family tip:</span> {season.familyTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Getting Around with Kids ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting Around Morocco with Kids
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Transport can make or break a family trip. Here are the best options for getting between and within Moroccan cities with children.
          </p>

          <div className="space-y-6">
            {transportTips.map((transport) => {
              const TransportIcon = transport.icon;
              return (
                <div key={transport.method} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <TransportIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {transport.method}
                        </h3>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {transport.suitability}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{transport.description}</p>
                      <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                        <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-muted)]">
                          <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {transport.tip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What Kids Love About Morocco ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What Kids Love About Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These are the experiences that children talk about long after the trip is over. The moments that make the whole journey worthwhile.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatKidsLove.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Family Itineraries ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Family Itinerary Suggestions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three sample itineraries designed specifically for families, from a quick 3-day break to an epic 10-day adventure.
          </p>

          <div className="space-y-10 max-w-4xl mx-auto">
            {familyItineraries.map((itinerary) => {
              const ItineraryIcon = itinerary.icon;
              return (
                <div key={itinerary.duration} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItineraryIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {itinerary.duration}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)]">Best for: {itinerary.bestFor}</span>
                    </div>
                  </div>

                  <div className="relative mt-6">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

                    <div className="space-y-6">
                      {itinerary.days.map((day, dayIndex) => (
                        <div key={dayIndex} className="relative flex gap-4 md:gap-6">
                          <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                            <span className="text-white font-bold text-xs">{dayIndex + 1}</span>
                          </div>
                          <div className="flex-1 bg-[var(--surface-muted)] p-4 rounded-lg">
                            <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                              {day.day}
                            </h4>
                            <div className="space-y-1.5">
                              {day.activities.map((activity, actIndex) => (
                                <div key={actIndex} className="flex items-start gap-2">
                                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                                  <p className="text-xs text-[var(--text-secondary)]">{activity}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border-primary)] flex items-center justify-between">
                    <span className="text-sm text-[var(--text-muted)]">Estimated budget (family of 4, mid-range):</span>
                    <span className="text-sm font-semibold text-[var(--color-accent)]">{itinerary.budget}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Packing Essentials ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Family Packing Essentials
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Do not leave home without these items. Packing right makes the difference between a smooth trip and a stressful one.
          </p>

          <div className="card-moroccan p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {packingEssentials.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <CheckCircle className="w-4 h-4 shrink-0 text-[var(--color-gold)]" />
                  <div className="flex-1">
                    <span className="text-sm text-[var(--text-primary)]">{item.item}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                    item.category === 'Essential'
                      ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                      : item.category === 'Medical'
                        ? 'bg-red-100 text-red-700'
                        : item.category === 'Transport'
                          ? 'bg-blue-100 text-blue-700'
                          : item.category === 'Clothing'
                            ? 'bg-purple-100 text-purple-700'
                            : item.category === 'Food'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-green-100 text-green-700'
                  }`}>
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco safe for families with young children?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, Morocco is generally safe for families. Moroccans are famously welcoming to children, and
                you will often find strangers going out of their way to help families. Stick to well-traveled
                cities like Marrakech, Fes, and Essaouira, use registered taxis and licensed guides, and take
                standard food and water precautions. Petty theft can occur in crowded medinas, so keep valuables
                secure and hold young children&apos;s hands in busy souks.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What vaccinations do children need for Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                No special vaccinations are required for Morocco beyond routine childhood immunizations.
                Consult your pediatrician 6-8 weeks before travel. Recommended vaccines include Hepatitis A
                and Typhoid. Ensure routine vaccines (MMR, DTaP, polio) are up to date. Malaria prophylaxis
                is not needed for standard tourist areas. Pharmacies in Morocco are well-stocked and
                pharmacists are knowledgeable, so common medications are easily available if needed.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best age to take children to Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco is enjoyable with children of all ages, but each age has its trade-offs. Toddlers
                (1-4) are welcomed warmly but may struggle with heat and medina walking. Children 5-10 are
                the sweet spot: they can walk reasonable distances, engage with experiences like camel rides
                and cooking classes, and will remember the trip. Teens appreciate the adventure, culture, and
                photography opportunities. There is no wrong age, just different experiences.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does a family trip to Morocco cost?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A family of 4 can visit Morocco on budgets ranging from 800 MAD to 4,000 MAD per day.
                Budget travelers spend from 800 MAD per day covering basic riads, local food, and free
                attractions. Mid-range families average from 1,800 MAD per day with pool riads, guided tours,
                and restaurant meals. Luxury families spend from 4,000 MAD per day for resort hotels, private
                guides, and premium experiences. A 7-day mid-range trip for a family of 4 costs approximately
                from 14,000 MAD total.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can you use strollers in Moroccan medinas?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Strollers are extremely difficult to use in medinas due to narrow, uneven cobblestone streets,
                steps, and crowds. A lightweight baby carrier or structured hiking backpack carrier is far more
                practical. Outside the medinas, in the Ville Nouvelle areas, strollers work fine on paved
                sidewalks. Many family-friendly riads offer loaner strollers for outings in modern areas.
                If you must bring a stroller, choose a compact, lightweight umbrella-style model.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What will kids eat in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Moroccan cuisine is surprisingly kid-friendly. Popular options include chicken tagine (mild
                and tender), couscous with vegetables, msemen (Moroccan pancakes), fresh bread with butter
                and jam, grilled chicken or kefta (ground meat skewers), French fries (available everywhere),
                fresh orange juice, and pastilla (sweet pastry with chicken). Most restaurants will adjust
                spice levels on request. Say &quot;bla harr&quot; (without spice) when ordering for young children.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                When is the best time to visit Morocco with kids?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The best months for families are March to May and September to November when temperatures
                are comfortable (20-28 degrees Celsius). Summer (June-August) brings intense heat, especially
                inland where temperatures exceed 40 degrees Celsius, making sightseeing difficult with children.
                Coastal cities like Essaouira and Agadir remain comfortable in summer if you want a beach holiday.
                December to February is mild on the coast but cold in the mountains and desert at night.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are there kid-friendly hotels and riads in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, many accommodations cater specifically to families. Family-friendly riads with pools start
                from 800 MAD per night. Larger resorts in Marrakech, Agadir, and Essaouira offer kids clubs,
                pools, and family suites from 1,500 MAD per night. Some riads provide baby cots, high chairs,
                and child-proofed rooms on request. Always confirm family amenities when booking, and request
                ground-floor rooms if you have toddlers to avoid safety concerns with stairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Family Trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/best-time-to-visit" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Calendar className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Time to Visit Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Month-by-month weather guide to help you pick the perfect dates for your family trip.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/budget" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Budget Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Detailed cost breakdowns for accommodation, food, transport, and activities across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/safety" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Safety Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything you need to know about staying safe in Morocco, from health precautions to scam awareness.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center max-w-3xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Plan Your Family Morocco Adventure?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Morocco is waiting to enchant your family. With the right preparation, it will be the most
            memorable trip your children ever take. Browse our city guides to start building your perfect
            family itinerary.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/city/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Explore Marrakech <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/city/essaouira"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-colors font-medium"
            >
              Explore Essaouira <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
