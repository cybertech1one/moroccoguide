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
  Sun,
  Camera,
  Compass,
  Shield,
  Wallet,
  Smile,
  Waves,
  Mountain,
  Palette,
  Bike,
  Music,
  Tent,
  Footprints,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Family Activities in Morocco 2026: 50+ Things to Do with Kids by Age & City',
  description:
    'Discover the best family activities in Morocco for 2026. Camel rides, cooking classes, water parks, beach days, desert camping, pottery workshops, and more. Activities sorted by age group and city with prices, safety tips, and budget advice for families.',
  keywords: [
    'family activities Morocco',
    'things to do in Morocco with kids',
    'Morocco family vacation activities',
    'Morocco kids activities',
    'family fun Morocco',
    'Morocco outdoor activities families',
    'Morocco cultural activities kids',
    'camel ride kids Morocco',
    'Morocco cooking class family',
    'Morocco water park family',
    'Marrakech family activities',
    'Agadir kids activities',
    'Essaouira family things to do',
    'Morocco beach activities families',
    'Morocco adventure kids',
    'Morocco toddler activities',
    'Morocco teenager activities',
    'family-friendly Morocco 2026',
    'Morocco quad biking kids',
    'Morocco horse riding family',
    'Morocco pottery workshop kids',
    'desert activities family Morocco',
  ],
  openGraph: {
    title: 'Family Activities in Morocco 2026: 50+ Things to Do with Kids by Age & City',
    description:
      'The ultimate guide to family activities in Morocco. Outdoor adventures, cultural workshops, city-specific activity guides, and budget tips. Activities by age group with prices.',
    url: `${BASE_URL}/morocco-family-activities`,
    images: [
      {
        url: `${BASE_URL}/images/hero-family.webp`,
        width: 1200,
        height: 630,
        alt: 'Family enjoying outdoor activities in Morocco with children, camel riding near golden sand dunes at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Activities in Morocco 2026: 50+ Things to Do with Kids',
    description:
      'Camel rides, cooking classes, water parks, desert camping, pottery workshops, and more. Family activities by age and city with prices.',
    images: [`${BASE_URL}/images/hero-family.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-family-activities` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA -- TravelGuide
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-family-activities`,
  name: 'Family Activities in Morocco 2026: 50+ Things to Do with Kids by Age & City',
  description:
    'Comprehensive guide to family activities in Morocco covering outdoor adventures, cultural workshops, city-by-city activity guides, age-appropriate recommendations, family restaurants, safety tips, and budget advice.',
  url: `${BASE_URL}/morocco-family-activities`,
  image: `${BASE_URL}/images/hero-family.webp`,
  author: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-family-activities`,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'Country', name: 'Morocco' },
  audience: { '@type': 'PeopleAudience', suggestedMinAge: 0, suggestedMaxAge: 17 },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Family Activities Morocco', item: `${BASE_URL}/morocco-family-activities` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA -- FAQPage
   ═══════════════════════════════════════════════════════════════ */

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the best family activities in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'The best family activities in Morocco include camel rides in the Sahara desert, family cooking classes in Marrakech, surfing lessons in Essaouira, visiting water parks like Oasiria, pottery workshops in Fes, horse riding on the beach, exploring Jemaa el-Fna square, and overnight desert camping under the stars. Activities range from 100 MAD to 800 MAD per person depending on the experience.' } },
    { '@type': 'Question', name: 'What can toddlers do in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Toddlers aged 2-4 can enjoy beach play in Agadir and Essaouira, garden visits at Majorelle and Menara in Marrakech, short camel rides sitting with a parent, splashing in riad pools, watching street performers at Jemaa el-Fna, feeding cats in Chefchaouen, and simple craft activities at family-friendly riads. Keep activities short and schedule around nap times for the best experience.' } },
    { '@type': 'Question', name: 'Are outdoor activities in Morocco safe for children?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, outdoor activities in Morocco are safe for children when booked through reputable operators. Camel rides use gentle, trained camels and guides walk alongside. Surf schools provide child-sized equipment and qualified instructors. Quad biking is available for ages 10 and above with supervised tracks. Always check operator reviews, ensure proper safety equipment is provided, and apply sunscreen frequently. Avoid outdoor activities during peak heat hours between noon and 4pm in summer.' } },
    { '@type': 'Question', name: 'How much do family activities cost in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Family activities in Morocco are affordable. Budget examples for a family of four: camel rides from 150 MAD per person, cooking classes from 250 MAD per child, surf lessons from 300 MAD per person, water park entry from 200 MAD per person, pottery workshops from 150 MAD per person, horse riding from 200 MAD per person, and quad biking from 400 MAD per person. Many activities offer family discounts. Children under 6 often receive reduced rates. Seasonal pricing can change, so confirm prices when booking.' } },
    { '@type': 'Question', name: 'What cultural activities can kids enjoy in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Kids enjoy many cultural activities in Morocco. Family cooking classes teach children to make tagine, couscous, and Moroccan pastries. Pottery workshops in Fes let kids shape and paint their own ceramics. Henna artists create temporary hand designs that children love. Storytelling sessions in riads introduce Moroccan folklore. Souk treasure hunts turn shopping into a game. Berber music and dance performances captivate all ages. Carpet weaving demonstrations fascinate older children.' } },
    { '@type': 'Question', name: 'Which Moroccan city has the most family activities?', acceptedAnswer: { '@type': 'Answer', text: 'Marrakech has the most family activities in Morocco. Families can enjoy cooking classes, camel rides at the Palmeraie, Jemaa el-Fna square entertainment, Majorelle Garden, Bahia Palace, the Oasiria water park, quad biking, hot air balloon rides, souk exploration, and rooftop dining. Agadir is second best with beach activities, water parks, Crocoparc, and resort entertainment. Essaouira ranks third with surfing, beach horse riding, and its compact walkable medina.' } },
    { '@type': 'Question', name: 'Can teenagers enjoy activities in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Teenagers thrive in Morocco. Top teen activities include surfing and kitesurfing in Essaouira and Taghazout, quad biking in the desert and Palmeraie, sandboarding on Sahara dunes, zip-lining in the Atlas Mountains, mountain biking trails, overnight desert camping with bonfires, photography walks through colorful medinas, haggling practice in souks, and cooking competitions. Morocco offers adventure and cultural experiences that genuinely engage teens rather than bore them.' } },
    { '@type': 'Question', name: 'What family activities are available in the Sahara desert?', acceptedAnswer: { '@type': 'Answer', text: 'The Sahara desert around Merzouga offers incredible family activities: sunset and sunrise camel treks across the Erg Chebbi dunes, sandboarding down tall dunes, overnight camping in luxury family tents with traditional Berber music and dinner, stargazing with zero light pollution, 4x4 desert tours, fossil hunting in the surrounding area, and visiting nearby nomadic Berber families. Most desert camps offer family tents and child-friendly meals. The experience is suitable for children aged 3 and above.' } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ACTIVITY OVERVIEW STATS
   ═══════════════════════════════════════════════════════════════ */

const activityStats = [
  { label: 'Family Activities', value: '50+', detail: 'Outdoor, cultural, and adventure activities for all ages', icon: Heart },
  { label: 'Age Range Covered', value: '0-17 Years', detail: 'Toddler-friendly through teen adventures', icon: Users },
  { label: 'Average Activity Cost', value: 'From 150 MAD', detail: 'Per person; family discounts often available', icon: Wallet },
  { label: 'Best Activity Months', value: 'Mar-May & Sep-Nov', detail: 'Comfortable weather for outdoor adventures', icon: Sun },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACTIVITIES BY AGE GROUP
   ═══════════════════════════════════════════════════════════════ */

const ageGroupActivities = [
  {
    group: 'Toddlers (0-4 Years)', icon: Baby, suitability: 'Gentle & Sensory',
    description: 'Toddlers experience Morocco through their senses. Keep activities short, gentle, and close to your accommodation. The best toddler activities involve animals, water, open spaces, and bright colors that Morocco provides in abundance.',
    activities: [
      'Beach play on wide sandy beaches in Agadir and Essaouira',
      'Garden walks at Majorelle, Menara, and Cyber Park in Marrakech',
      'Shared camel ride sitting on a parent\'s lap (from age 2)',
      'Splashing in riad plunge pools and resort kids pools',
      'Watching street performers and musicians at Jemaa el-Fna',
      'Feeding pigeons at Mohammed V Square in Casablanca',
      'Cat spotting in Chefchaouen (cats on every corner)',
      'Simple craft activities offered by family-friendly riads',
    ],
  },
  {
    group: 'Children (5-12 Years)', icon: Star, suitability: 'The Sweet Spot',
    description: 'This is the ideal age range for Morocco. Children are old enough to participate in cooking classes, ride camels independently, learn to surf, shape pottery, and turn souk shopping into a negotiation game. Every day brings a new adventure they will remember forever.',
    activities: [
      'Family cooking classes making tagine and pastries (from 250 MAD)',
      'Solo camel rides with a guide from age 7 (from 150 MAD)',
      'Beginner surf lessons in Essaouira (from 300 MAD, ages 6+)',
      'Pottery and ceramic painting workshops in Fes (from 150 MAD)',
      'Water park visits at Oasiria Marrakech (from 200 MAD)',
      'Horse riding along Essaouira beach (from 200 MAD)',
      'Treasure hunt shopping in souks with bargaining practice',
      'Overnight desert camping with stargazing (from 800 MAD/family)',
    ],
  },
  {
    group: 'Teenagers (13-17 Years)', icon: Compass, suitability: 'Adventure & Adrenaline',
    description: 'Teenagers love Morocco for its adventure activities and genuine cultural contrast. Surfing, quad biking, sandboarding, and mountain trekking satisfy their need for adrenaline, while medina photography walks and cooking competitions engage their creative side.',
    activities: [
      'Surfing and kitesurfing in Essaouira and Taghazout (from 300 MAD)',
      'Quad biking through the Palmeraie or desert (from 400 MAD, ages 10+)',
      'Sandboarding on Erg Chebbi dunes in Merzouga (from 200 MAD)',
      'Zip-lining and via ferrata in the Atlas Mountains (from 350 MAD)',
      'Mountain biking trails near Marrakech and Ourika Valley (from 400 MAD)',
      'Photography walks through colorful medinas with a local guide',
      'Competitive family cooking challenges at cooking schools',
      'Rock climbing at Todra Gorge for experienced teens (from 500 MAD)',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: OUTDOOR ADVENTURES
   ═══════════════════════════════════════════════════════════════ */

const outdoorAdventures = [
  {
    activity: 'Camel Riding', icon: Footprints, minAge: '2 (with parent), 7 solo', price: 'From 150 MAD per person',
    description: 'The quintessential Morocco family experience. Short rides on the Palmeraie near Marrakech are perfect for young children, while sunset treks across the Erg Chebbi dunes in Merzouga are magical for all ages. Camels are gentle, well-trained creatures and handlers walk alongside the entire time. The one-hour Palmeraie ride is ideal for first-timers.',
    locations: ['Palmeraie, Marrakech (30-60 minute rides)', 'Erg Chebbi, Merzouga (sunset and sunrise treks)', 'Essaouira beach (coastal camel walks)', 'Agadir beach promenade (short tourist rides)'],
    proTip: 'Book early morning or sunset rides to avoid the heat. Bring a scarf for sun protection and camera for the iconic dune shots.',
  },
  {
    activity: 'Beach Days & Water Sports', icon: Waves, minAge: 'All ages', price: 'Free (beach) / From 300 MAD (lessons)',
    description: 'Morocco has stunning Atlantic beaches ideal for families. Agadir has lifeguarded beaches with gentle waves, perfect for young swimmers. Essaouira is the surf capital with beginner lessons for kids aged 6 and above. Legzira near Sidi Ifni has dramatic rock arches children adore. Oualidia lagoon offers the calmest, safest swimming in the country.',
    locations: ['Agadir main beach (lifeguards, gentle waves)', 'Essaouira beach (wind sports, surfing)', 'Taghazout (surf culture, teen paradise)', 'Oualidia lagoon (calm, shallow, safe swimming)'],
    proTip: 'Essaouira is windy year-round, which keeps it cool but can make beach play uncomfortable for toddlers. Agadir is calmer for very young children.',
  },
  {
    activity: 'Water Parks', icon: Waves, minAge: 'All ages', price: 'From 200 MAD per person',
    description: 'Water parks are a lifesaver on hot days, especially in Marrakech where summer temperatures exceed 40 degrees. Oasiria has slides, wave pools, and toddler areas. Agadir resort hotels often include water park facilities in their all-inclusive packages. Pack your own swimwear and towels to save rental fees.',
    locations: ['Oasiria Water Park, Marrakech (seasonal, full day)', 'Aqua Mirage, Marrakech (resort water park)', 'Resort hotel pools in Agadir (included with stay)', 'Crocoparc, Agadir (crocodile park with splash areas)'],
    proTip: 'Oasiria operates seasonally (roughly May-October). Arrive early to claim sun loungers. Bring picnic food as on-site restaurants are pricey.',
  },
  {
    activity: 'Quad Biking', icon: Bike, minAge: '10 years (supervised)', price: 'From 400 MAD per person',
    description: 'Quad biking through the Palmeraie palm groves or across desert trails is a highlight for older kids and teenagers. Sessions include safety briefings, helmet and goggles, and guide-led routes. Some operators offer tandem quads for parent-child pairs with younger children. Marrakech Palmeraie routes pass through palm plantations and Berber villages.',
    locations: ['Palmeraie, Marrakech (most popular, 2 hours)', 'Merzouga desert (sand dune tracks)', 'Agadir outskirts (coastal and mountain trails)', 'Ouarzazate surroundings (desert landscape)'],
    proTip: 'Choose operators with modern, well-maintained machines. Avoid the cheapest options as they often have poorly maintained quads and minimal safety gear.',
  },
  {
    activity: 'Horse Riding', icon: Mountain, minAge: '4 years (led pony), 8 solo', price: 'From 200 MAD per person',
    description: 'Beach horse riding along the Essaouira or Agadir coast at sunset is unforgettable for families. Younger children ride ponies led by a handler. Older kids and teens can ride independently. Multi-day horse treks through the Atlas Mountains suit experienced teenage riders. Most operators provide helmets, but bringing your own guarantees proper fit.',
    locations: ['Essaouira beach (sunset rides, 1-2 hours)', 'Agadir beach (morning and sunset rides)', 'Atlas Mountains (half-day and multi-day treks)', 'Palmeraie, Marrakech (garden rides)'],
    proTip: 'Sunset beach rides are the most photogenic and coolest temperature-wise. Book at least a day in advance during peak season.',
  },
  {
    activity: 'Desert Camping', icon: Tent, minAge: '3 years and up', price: 'From 800 MAD per family tent',
    description: 'Overnight desert camping is the most magical family experience Morocco offers. Luxury camps provide comfortable beds, private toilets, and traditional Berber dinner and music. Children are mesmerized by the campfire, drumming, and a night sky filled with more stars than they have ever seen. The sunrise camel ride back is equally unforgettable.',
    locations: ['Erg Chebbi, Merzouga (tallest dunes, most popular)', 'Erg Chigaga, M\'hamid (remote, less touristy)', 'Zagora (shorter drive from Marrakech)', 'Agafay Desert near Marrakech (no real dunes but convenient)'],
    proTip: 'Choose luxury camps over basic bivouacs for families. The comfort difference is significant, especially with children. Nights are cold even in summer, so bring warm layers.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CULTURAL ACTIVITIES
   ═══════════════════════════════════════════════════════════════ */

const culturalActivities = [
  {
    activity: 'Family Cooking Classes', icon: Utensils, minAge: '4 years and up', price: 'From 250 MAD per child',
    description: 'One of the most rewarding family activities in Morocco. Children visit a local market to select ingredients, then learn to prepare tagine, couscous, Moroccan salads, and traditional pastries. Most classes end with everyone eating the meal they cooked together. Kids love the hands-on nature.',
    highlights: ['Market visit included in most classes', 'Kids learn to make Moroccan bread and mint tea', 'Typically 3-4 hours including the meal', 'Available in Marrakech, Fes, and Essaouira', 'Vegetarian and allergy-friendly options available'],
  },
  {
    activity: 'Pottery & Ceramics Workshops', icon: Palette, minAge: '5 years and up', price: 'From 150 MAD per person',
    description: 'Fes is the pottery capital of Morocco, and many workshops welcome families. Children shape clay on a wheel, paint traditional geometric patterns on tiles, and take home their creations. Some Marrakech riads also offer informal pottery sessions for young guests.',
    highlights: ['Wheel-throwing for ages 8+, hand-shaping for younger kids', 'Paint traditional Moroccan geometric patterns', 'Take home finished pieces as souvenirs', 'Fes pottery quarter offers the most authentic experience', 'Sessions typically 1-2 hours'],
  },
  {
    activity: 'Henna Art Sessions', icon: Palette, minAge: 'All ages', price: 'From 50 MAD per design',
    description: 'Temporary henna tattoos are a beloved Moroccan tradition that children find magical. Professional henna artists create intricate designs on hands and feet using natural henna paste. Designs last 1-2 weeks. Found in every major city, especially at Jemaa el-Fna in Marrakech.',
    highlights: ['Natural henna is safe for children\'s skin', 'Designs last 1-2 weeks, fading naturally', 'Negotiate price before sitting down at Jemaa el-Fna', 'Private riad sessions offer calmer atmosphere', 'Kids can choose simple or elaborate designs'],
  },
  {
    activity: 'Storytelling & Music', icon: Music, minAge: 'All ages', price: 'From 100 MAD (riad sessions) / Free (public)',
    description: 'Moroccan storytelling is an ancient art. Some riads arrange Berber storytelling evenings where tales of the desert, djinns, and ancient kings captivate children. Gnawa music performances with their hypnotic rhythms fascinate all ages. Jemaa el-Fna has free storytelling circles every evening.',
    highlights: ['Berber storytelling evenings at family riads', 'Gnawa music performances in Essaouira', 'Free storytelling circles at Jemaa el-Fna (Arabic only)', 'Some riads offer drum-making workshops for kids', 'Essaouira Gnawa Festival in June is family-friendly'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST FAMILY DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const familyDestinations = [
  {
    city: 'Marrakech', rating: 5, image: '/images/hero-marrakech.webp', tagline: 'The Activity Capital',
    description: 'Marrakech offers more family activities than any other Moroccan city. From the sensory spectacle of Jemaa el-Fna to cooking classes, camel rides, water parks, and garden visits, families never run out of things to do. The medina itself is an adventure playground.',
    topActivities: ['Jemaa el-Fna square evening entertainment', 'Camel rides at the Palmeraie from 150 MAD', 'Oasiria Water Park on hot days from 200 MAD', 'Family cooking classes from 250 MAD per child', 'Majorelle Garden and Menara Garden visits', 'Quad biking through palm groves from 400 MAD'],
  },
  {
    city: 'Agadir', rating: 5, image: '/images/hero-agadir.webp', tagline: 'Beach Resort Family Paradise',
    description: 'The easiest family destination with modern resort infrastructure. Wide lifeguarded beaches, hotel kids clubs, water parks, and the Crocoparc zoo make Agadir ideal for families with young children. Strollers work perfectly on the promenade, and all-inclusive options simplify budgeting.',
    topActivities: ['All-day beach with lifeguards and gentle waves', 'Crocoparc zoo with over 300 crocodiles', 'Souss-Massa National Park wildlife spotting', 'Resort water parks and kids clubs', 'Beach horse riding at sunset from 200 MAD', 'Banana boat and jet ski rides from 150 MAD'],
  },
  {
    city: 'Essaouira', rating: 5, image: '/images/hero-essaouira.webp', tagline: 'Laid-Back Coastal Fun',
    description: 'The most relaxed family city. Essaouira is compact, walkable, and hassle-free. Children love the sandy beach, ramparts with cannons, fishing port, and friendly cats. Surf lessons are excellent for kids aged 6 and above. The wind keeps summer temperatures comfortable.',
    topActivities: ['Beginner surf lessons from 300 MAD per person', 'Beach horse and camel rides from 200 MAD', 'Ramparts walk with cannon views (free)', 'Fishing port visit watching the daily catch (free)', 'Gnawa music performances and workshops', 'Argan oil cooperative visits with tastings'],
  },
  {
    city: 'Merzouga & Sahara', rating: 4, image: '/images/hero-sahara.webp', tagline: 'Once-in-a-Lifetime Desert Magic',
    description: 'The Sahara desert is Morocco\'s most unforgettable family experience. Sunset camel treks across towering golden dunes, overnight camping under a sky blazing with stars, sandboarding, and Berber music around a campfire create memories that last a lifetime. Suitable from age 3.',
    topActivities: ['Sunset camel trek across Erg Chebbi dunes', 'Overnight family tent with Berber dinner and music', 'Sandboarding down tall dunes from 200 MAD', 'Stargazing with zero light pollution', '4x4 desert excursions from 600 MAD per vehicle', 'Fossil hunting in nearby geological sites'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAMILY-FRIENDLY RESTAURANTS
   ═══════════════════════════════════════════════════════════════ */

const familyRestaurants = [
  { name: 'Cafe Clock', city: 'Marrakech & Fes', cuisine: 'Moroccan-fusion', kidFriendly: 'Camel burger, storytelling events, coloring sheets', price: 'From 60 MAD per meal' },
  { name: 'Amal Center', city: 'Marrakech', cuisine: 'Traditional Moroccan', kidFriendly: 'Non-profit training restaurant, generous portions, garden seating', price: 'From 55 MAD per meal' },
  { name: 'La Plage Rouge', city: 'Marrakech', cuisine: 'Mediterranean', kidFriendly: 'Pool access, kids menu, beach-club atmosphere outside the city', price: 'From 120 MAD per meal' },
  { name: 'Taros', city: 'Essaouira', cuisine: 'Moroccan & International', kidFriendly: 'Rooftop terrace with ocean views, varied menu, relaxed vibe', price: 'From 80 MAD per meal' },
  { name: 'Ocean Vagabond', city: 'Essaouira', cuisine: 'Beachside casual', kidFriendly: 'Right on the beach, play area, simple grilled food kids love', price: 'From 70 MAD per meal' },
  { name: 'Pure Passion', city: 'Agadir', cuisine: 'International', kidFriendly: 'Resort setting, kids menu, ice cream bar, playground nearby', price: 'From 90 MAD per meal' },
  { name: 'Le Jardin', city: 'Marrakech', cuisine: 'Moroccan-Mediterranean', kidFriendly: 'Hidden garden oasis in the medina, peaceful, good lunch stop', price: 'From 80 MAD per meal' },
  { name: 'Chez Lamine Hadj Mustapha', city: 'Marrakech', cuisine: 'Traditional tangia', kidFriendly: 'Iconic local spot, simple food, adventurous older kids enjoy it', price: 'From 50 MAD per meal' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACTIVITIES BY CITY
   ═══════════════════════════════════════════════════════════════ */

const activitiesByCity = [
  {
    city: 'Marrakech', icon: MapPin,
    activities: [
      { name: 'Jemaa el-Fna evening visit', age: 'All ages', price: 'Free', duration: '2-3 hours' },
      { name: 'Camel ride at Palmeraie', age: '2+ (with parent)', price: 'From 150 MAD', duration: '1-2 hours' },
      { name: 'Family cooking class', age: '4+', price: 'From 250 MAD/child', duration: '3-4 hours' },
      { name: 'Oasiria Water Park', age: 'All ages', price: 'From 200 MAD', duration: 'Full day' },
      { name: 'Quad biking Palmeraie', age: '10+', price: 'From 400 MAD', duration: '2 hours' },
      { name: 'Majorelle Garden visit', age: 'All ages', price: 'From 70 MAD', duration: '1-2 hours' },
    ],
  },
  {
    city: 'Essaouira', icon: Waves,
    activities: [
      { name: 'Beginner surf lesson', age: '6+', price: 'From 300 MAD', duration: '2 hours' },
      { name: 'Beach horse riding', age: '4+ (led pony)', price: 'From 200 MAD', duration: '1-2 hours' },
      { name: 'Ramparts exploration', age: 'All ages', price: 'Free', duration: '1 hour' },
      { name: 'Fishing port visit', age: 'All ages', price: 'Free', duration: '30-45 min' },
      { name: 'Argan cooperative visit', age: '5+', price: 'Free (tastings)', duration: '1 hour' },
      { name: 'Gnawa music workshop', age: '6+', price: 'From 150 MAD', duration: '1-2 hours' },
    ],
  },
  {
    city: 'Agadir', icon: Sun,
    activities: [
      { name: 'Beach day with lifeguards', age: 'All ages', price: 'Free', duration: 'Full day' },
      { name: 'Crocoparc zoo visit', age: 'All ages', price: 'From 70 MAD', duration: '2-3 hours' },
      { name: 'Souss-Massa National Park', age: '5+', price: 'From 50 MAD', duration: 'Half day' },
      { name: 'Banana boat and jet ski', age: '6+ (banana), 12+ (jet ski)', price: 'From 150 MAD', duration: '30-60 min' },
      { name: 'Beach camel ride', age: '2+ (with parent)', price: 'From 100 MAD', duration: '30 min' },
      { name: 'Mini-golf at resort', age: 'All ages', price: 'From 50 MAD', duration: '1 hour' },
    ],
  },
  {
    city: 'Merzouga & Desert', icon: Tent,
    activities: [
      { name: 'Sunset camel trek', age: '3+ (with parent)', price: 'From 200 MAD', duration: '1.5-2 hours' },
      { name: 'Overnight desert camp', age: '3+', price: 'From 800 MAD/family', duration: 'Overnight' },
      { name: 'Sandboarding on dunes', age: '6+', price: 'From 200 MAD', duration: '1-2 hours' },
      { name: '4x4 desert excursion', age: 'All ages', price: 'From 600 MAD/vehicle', duration: '2-3 hours' },
      { name: 'Stargazing session', age: 'All ages', price: 'Included in camp', duration: '1 hour' },
      { name: 'Fossil hunting', age: '5+', price: 'From 100 MAD', duration: '1-2 hours' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SAFETY TIPS
   ═══════════════════════════════════════════════════════════════ */

const safetyTips = [
  { tip: 'Book Through Reputable Operators', icon: ShieldCheck, description: 'Always book adventure activities through established operators with strong reviews. Ask your riad for recommendations. Avoid touts at tourist sites offering cheap deals without safety equipment or insurance.' },
  { tip: 'Sun and Heat Protection', icon: Sun, description: 'Apply SPF 50 sunscreen every 2 hours during outdoor activities. Carry water bottles for each family member. Avoid activities between noon and 4pm in summer. Wide-brimmed hats and light long sleeves are essential.' },
  { tip: 'Age-Appropriate Activities Only', icon: Baby, description: 'Respect minimum age recommendations. A quad bike designed for a 16-year-old is dangerous for a 10-year-old. Ask operators to confirm age suitability and weight limits before booking and paying.' },
  { tip: 'Hydration and Snacks', icon: Utensils, description: 'Carry bottled water and snacks for every activity, even short ones. Children dehydrate faster than adults. Bring rehydration sachets for desert activities. A hungry, thirsty child ruins the activity for everyone.' },
  { tip: 'Travel Insurance Is Essential', icon: Shield, description: 'Ensure your travel insurance covers adventure activities for children. Some policies exclude quad biking, horse riding, and water sports. Check the fine print and upgrade to an adventure sports policy if needed.' },
  { tip: 'Supervise at All Times', icon: Users, description: 'Never leave children unsupervised during activities, even with guides. In crowded spaces like Jemaa el-Fna, hold young children\'s hands at all times. Set meeting points and ensure older children have charged phones.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET TIPS
   ═══════════════════════════════════════════════════════════════ */

const budgetTips = [
  { tip: 'Free Activities Add Up', detail: 'Beach days, medina walks, garden visits, souk browsing, fishing port visits, and people-watching at Jemaa el-Fna are all free. Alternate paid activities with free ones to control costs.' },
  { tip: 'Under-6 Discounts', detail: 'Many activities offer free or half-price entry for children under 6. Always ask about child rates even when not advertised. Museums and monuments often have reduced family tickets.' },
  { tip: 'Book Direct, Not Through Hotels', detail: 'Riad and hotel activity desks add a 20-40% commission. Book directly with operators or through a local guide for better prices. Get recommendations from your riad but book yourself.' },
  { tip: 'Negotiate Group Rates', detail: 'If booking for a family of 4 or more, always ask for a family or group discount. Operators expect negotiation. A family booking multiple activities can often negotiate a package deal.' },
  { tip: 'Bring Your Own Gear', detail: 'Renting snorkels, boogie boards, and sand toys adds up. Bring key items from home. A set of beach toys from the supermarket costs a fraction of tourist rental prices.' },
  { tip: 'Budget from 500 MAD Per Day', detail: 'A family of four can enjoy a mix of paid and free activities for from 500 MAD per day. This covers one paid activity plus meals. Big-ticket items like desert camps should be budgeted separately.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  { title: 'Morocco Family Travel Guide', href: '/family', description: 'Complete guide to family holidays in Morocco with planning tips and itineraries.' },
  { title: 'Family Planning Guide', href: '/family-guide', description: 'Detailed planning guide for families including budgets, packing, and logistics.' },
  { title: 'Morocco with Kids', href: '/morocco-with-kids', description: 'Age-by-age guide to traveling Morocco with children, from toddlers to teens.' },
  { title: 'Morocco for Couples', href: '/morocco-for-couples', description: 'Romantic activities and destinations for parents seeking couple time in Morocco.' },
  { title: 'Morocco Activities Guide', href: '/activities', description: 'Complete guide to all activities available across Morocco for every traveler.' },
  { title: 'Morocco Adventure Sports', href: '/morocco-adventure-sports', description: 'Adrenaline-pumping activities including surfing, trekking, and extreme sports.' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoFamilyActivitiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-family.webp)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Family Activities Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Heart className="w-4 h-4" />
            Family Activities Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Family Activities
            <br className="hidden md:block" /> in Morocco 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            50+ incredible things to do with kids in Morocco. Outdoor adventures, cultural workshops,
            and unforgettable experiences sorted by age group, city, and budget.
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
              Morocco Is a Playground for Families
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Forget theme parks and shopping malls. Morocco offers family activities that no
                artificial attraction can match: riding camels across golden Sahara dunes at sunset,
                learning to cook tagine with a Moroccan grandmother, surfing Atlantic waves,
                shaping pottery in a centuries-old Fes workshop, and camping under a sky blazing
                with more stars than your children have ever seen.
              </p>
              <p>
                Whether your kids are toddlers who want to splash in the waves, primary schoolers
                ready for their first cooking class, or teenagers craving quad biking and
                sandboarding, Morocco delivers. Activities are affordable, operators are experienced
                with families, and Moroccans genuinely adore children, making every experience
                warmer and more welcoming than you might expect.
              </p>
              <p>
                This guide covers every family activity worth doing in Morocco, organized by age
                group, activity type, city, and budget. Use it to build the perfect itinerary where
                every family member &mdash; from toddler to teenager to exhausted parent &mdash;
                has the time of their life.
              </p>
              <p>
                Prices in this guide are shown in Moroccan Dirhams (MAD) and represent starting
                rates. Seasonal pricing can change, particularly during peak travel periods like
                December, Easter, and the summer holidays. We recommend confirming prices when
                booking and checking availability in advance for popular activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ACTIVITY OVERVIEW STATS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Family Activities at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts about family activities in Morocco to help you plan your trip.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activityStats.map((stat) => {
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
          ACTIVITIES BY AGE GROUP
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Baby className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Activities by Age Group
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What works for a toddler differs from what excites a teenager. Here is age-specific
            guidance so every child has the best experience.
          </p>
          <div className="space-y-8 max-w-4xl mx-auto">
            {ageGroupActivities.map((age) => {
              const AgeIcon = age.icon;
              return (
                <div key={age.group} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <AgeIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{age.group}</h3>
                      <span className="text-sm font-semibold text-[var(--color-gold)]">{age.suitability}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{age.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {age.activities.map((activity, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        <span>{activity}</span>
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
          OUTDOOR ADVENTURES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Outdoor Adventures for Families
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s diverse landscapes offer outdoor activities for every age. From gentle beach
            days to adrenaline-fueled quad biking, here are the best outdoor family adventures.
          </p>
          <div className="space-y-6 max-w-4xl mx-auto">
            {outdoorAdventures.map((adventure) => {
              const AdvIcon = adventure.icon;
              return (
                <div key={adventure.activity} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <AdvIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{adventure.activity}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1">
                        <span className="text-xs text-[var(--color-accent)] font-semibold">{adventure.price}</span>
                        <span className="text-xs text-[var(--text-muted)]">Ages: {adventure.minAge}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{adventure.description}</p>
                  <div>
                    <h4 className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> Where to Do It
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                      {adventure.locations.map((loc, i) => (
                        <p key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-green-600" /> {loc}
                        </p>
                      ))}
                    </div>
                  </div>
                  {adventure.proTip && (
                    <div className="mt-4 p-3 bg-[var(--color-gold)]/5 rounded-lg border border-[var(--color-gold)]/10">
                      <p className="text-xs text-[var(--text-secondary)]">
                        <span className="font-semibold text-[var(--color-gold)]">Pro Tip:</span> {adventure.proTip}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CULTURAL ACTIVITIES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cultural Activities for Kids
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s rich culture becomes interactive through hands-on workshops and performances
            that engage children of all ages. These activities teach while they entertain.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {culturalActivities.map((cultural) => {
              const CulturalIcon = cultural.icon;
              return (
                <div key={cultural.activity} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CulturalIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{cultural.activity}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-0.5">
                        <span className="text-xs text-[var(--color-accent)] font-semibold">{cultural.price}</span>
                        <span className="text-xs text-[var(--text-muted)]">Ages: {cultural.minAge}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mb-3">{cultural.description}</p>
                  <div className="space-y-1.5">
                    {cultural.highlights.map((h, i) => (
                      <p key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" /> {h}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BEST FAMILY DESTINATIONS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Family Destinations for Activities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each city offers different activities. Choose your base depending on what your
            family enjoys most.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {familyDestinations.map((dest) => (
              <div key={dest.city} className="card-moroccan overflow-hidden">
                <div className="relative h-48">
                  <img src={dest.image} alt={`${dest.city}, Morocco family activities destination with children exploring`} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white mb-1">{dest.city}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < dest.rating ? 'text-[var(--color-gold)] fill-[var(--color-gold)]' : 'text-white/30'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-white/80">{dest.tagline}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{dest.description}</p>
                  <div>
                    <h4 className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Top Family Activities
                    </h4>
                    <div className="space-y-1.5">
                      {dest.topActivities.map((a, i) => (
                        <p key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-green-600" /> {a}
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
          FAMILY-FRIENDLY RESTAURANTS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Family-Friendly Restaurants
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Restaurants that welcome families, offer kids-friendly menus, and have relaxed atmospheres
            where children can be children. Seasonal pricing can change, so confirm when booking.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {familyRestaurants.map((rest) => (
              <div key={rest.name} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">{rest.name}</h3>
                <p className="text-xs text-[var(--color-accent)] font-semibold mb-1">{rest.city} &middot; {rest.cuisine}</p>
                <p className="text-xs text-[var(--text-secondary)] mb-3">{rest.kidFriendly}</p>
                <span className="text-xs font-semibold text-[var(--color-gold)]">{rest.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ACTIVITIES BY CITY TABLE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Activities by City: Quick Reference
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Use this quick-reference guide to plan your daily activities in each city.
            All prices are starting rates and seasonal pricing can change.
          </p>
          <div className="space-y-8 max-w-5xl mx-auto">
            {activitiesByCity.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan overflow-hidden">
                  <div className="p-4 bg-gradient-to-r from-[var(--color-accent)]/5 to-transparent border-b border-[var(--color-accent)]/10 flex items-center gap-3">
                    <CityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{city.city}</h3>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {city.activities.map((act) => (
                        <div key={act.name} className="flex items-start gap-3 p-3 rounded-lg bg-[var(--surface-muted)]">
                          <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-[var(--text-primary)]">{act.name}</p>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="text-xs text-[var(--color-accent)] font-medium">{act.price}</span>
                              <span className="text-xs text-[var(--text-muted)]">Ages: {act.age}</span>
                              <span className="text-xs text-[var(--text-muted)] flex items-center gap-1"><Clock className="w-3 h-3" /> {act.duration}</span>
                            </div>
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
          SAFETY TIPS FOR FAMILIES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety Tips for Family Activities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Keep your family safe during activities with these essential precautions. Most risks
            are easily preventable with basic planning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {safetyTips.map((safety) => {
              const SafetyIcon = safety.icon;
              return (
                <div key={safety.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <SafetyIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{safety.tip}</h3>
                  <p className="text-xs text-[var(--text-secondary)]">{safety.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 max-w-4xl mx-auto p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Important: Seasonal Pricing and Availability</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Activity prices listed in this guide are starting rates and seasonal pricing can change. Peak season
                  (December-January, Easter, and summer) sees higher prices and busier operators. Always confirm
                  current prices when booking. Some seasonal activities like the Oasiria Water Park may only operate
                  from May to October. Book popular activities in advance during peak periods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BUDGET TIPS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Budget Tips for Family Activities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Family activities in Morocco are affordable, but costs add up with multiple children.
            Use these tips to maximize fun while controlling your spend.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {budgetTips.map((budget) => (
              <div key={budget.tip} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-start gap-2">
                  <Smile className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  {budget.tip}
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">{budget.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAQ SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Common questions from parents planning family activities in Morocco, answered with practical detail.
          </p>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <div key={i} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {faq.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          RELATED GUIDES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Related Family Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Morocco family trip with these comprehensive guides.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:border-[var(--color-accent)]/30 transition-all">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors flex items-center gap-2">
                  {guide.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SAMPLE FAMILY ACTIVITY DAY
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample Family Activity Day in Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Here is how a perfect activity-packed day looks for a family in Marrakech, balancing
            adventure with downtime so everyone stays happy. Budget: from 1,200 MAD for a family of four.
          </p>
          <div className="card-moroccan overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-[var(--color-accent)]/5 to-transparent border-b border-[var(--color-accent)]/10">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                A Perfect Day of Family Activities
              </h3>
              <p className="text-sm text-[var(--text-muted)] mt-1">Suitable for children aged 5-14</p>
            </div>
            <div className="p-6 space-y-5">
              <div className="flex items-start gap-4">
                <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded min-w-[70px] text-center">8:00 AM</span>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)]">Breakfast at Your Riad</h4>
                  <p className="text-xs text-[var(--text-muted)]">Enjoy msemmen, fresh juice, and Moroccan pastries in your riad courtyard. Fuel up for the day ahead.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded min-w-[70px] text-center">9:00 AM</span>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)]">Family Cooking Class (3 hours)</h4>
                  <p className="text-xs text-[var(--text-muted)]">Visit a local market to buy ingredients, then cook tagine, Moroccan salad, and bread together. Eat your creations for lunch. From 250 MAD per child.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded min-w-[70px] text-center">12:30 PM</span>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)]">Rest and Pool Time</h4>
                  <p className="text-xs text-[var(--text-muted)]">Return to your riad for swimming and downtime. Avoid the midday heat. Let younger children nap while teens relax.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded min-w-[70px] text-center">3:30 PM</span>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)]">Majorelle Garden Visit (1.5 hours)</h4>
                  <p className="text-xs text-[var(--text-muted)]">Explore the stunning blue garden created by Yves Saint Laurent. Kids love the bright colors, koi fish ponds, and bamboo groves. From 70 MAD entry.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded min-w-[70px] text-center">5:30 PM</span>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)]">Souk Treasure Hunt (1.5 hours)</h4>
                  <p className="text-xs text-[var(--text-muted)]">Give each child a small budget and a shopping list of items to find and bargain for in the souks. Leather slippers, spices, lanterns. Makes shopping fun for everyone.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded min-w-[70px] text-center">7:00 PM</span>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)]">Jemaa el-Fna Evening Spectacle</h4>
                  <p className="text-xs text-[var(--text-muted)]">Watch acrobats, musicians, storytellers, and snake charmers as the square comes alive at dusk. Dinner at a rooftop restaurant overlooking the action. Free to watch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FINAL CTA
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Start Planning Your Family Activities in Morocco
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            From camel rides and cooking classes to desert camping and surfing lessons, Morocco
            offers unforgettable experiences for families. Start planning your adventure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/family"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              <Users className="w-5 h-5" />
              Family Travel Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-with-kids"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-semibold hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              <Heart className="w-5 h-5" />
              Morocco with Kids
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
