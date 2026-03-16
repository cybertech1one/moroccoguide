import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Heart,
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
  Users,
  CheckCircle,
  Baby,
  Sparkles,
  Mountain,
  Palette,
  GraduationCap,
  Tent,
  ThermometerSun,
  Stethoscope,
  Shirt,
  Gamepad2,
  Building2,
  Globe,
  Plane,
} from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Family Planning Guide to Morocco | Hotels, Itineraries, Budget & Packing 2025',
    description:
      'The complete family trip planning resource for Morocco. Age-based recommendations, 10 family-friendly hotels with real addresses, kid-approved food, 3 sample itineraries, detailed packing lists, and budget breakdowns for a family of 4.',
    keywords: [
      'morocco family travel guide',
      'morocco with kids',
      'family vacation morocco',
      'kid friendly morocco activities',
      'morocco family itinerary',
      'family riads morocco',
      'morocco toddler friendly',
      'teen activities morocco',
      'morocco family budget',
      'morocco family accommodation',
      'best cities morocco families',
      'morocco packing list kids',
    ],
    openGraph: {
      title: 'Family Guide to Morocco | The Ultimate Family Travel Resource',
      description:
        'Everything families need to plan the perfect Morocco adventure. Destinations by age group, real hotel recommendations, kid-friendly food, and detailed itineraries.',
      url: 'https://citytoursmorocco.com/family-guide',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&h=630&fit=crop',
          width: 1200,
          height: 630,
          alt: 'Family enjoying a camel ride in the Moroccan desert at golden hour',
        },
      ],
    },
    alternates: {
      canonical: 'https://citytoursmorocco.com/family-guide',
    },
  };
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  name: 'Family Guide to Morocco',
  description:
    'A comprehensive family travel guide covering destinations, accommodations, food, safety, itineraries, and budgets for families visiting Morocco.',
  url: 'https://citytoursmorocco.com/family-guide',
  about: {
    '@type': 'Country',
    name: 'Morocco',
    description: 'A North African kingdom known for its vibrant culture, diverse landscapes, and warm hospitality.',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Families with children',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Morocco City Guide',
    url: 'https://citytoursmorocco.com',
  },
};

const whyMorocco = [
  {
    icon: Heart,
    title: 'Children Are Celebrated',
    description: 'Moroccan culture adores children. Your kids will be greeted with smiles everywhere, from riad hosts preparing special meals to shopkeepers offering free treats in the souk.',
  },
  {
    icon: Globe,
    title: 'Incredible Diversity',
    description: 'Sahara dunes, Atlantic beaches, snow-capped mountains, ancient medinas, and modern cities all within a few hours of each other. Every family member finds their favorite.',
  },
  {
    icon: DollarSign,
    title: 'Remarkable Value',
    description: 'A family of four can travel luxuriously for what a budget trip costs in Europe. Beautiful riads, feasts of food, and guided excursions remain genuinely affordable.',
  },
  {
    icon: Shield,
    title: 'Safe and Welcoming',
    description: 'Morocco has a strong tourism police presence and very low violent crime rates. Families with children receive extra warmth and attention from locals everywhere.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Kid-Friendly Cuisine',
    description: 'Moroccan food is naturally appealing to children: fresh bread, grilled meats, mild tagines, couscous, and endless fresh-squeezed orange juice at every corner.',
  },
  {
    icon: Sparkles,
    title: 'Living Classroom',
    description: 'History, geography, languages, art, and science come alive here. Children learn about Berber culture, Islamic architecture, desert ecosystems, and global trade routes firsthand.',
  },
];

const destinations = [
  {
    name: 'Marrakech',
    tagline: 'The Sensory Playground',
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=800',
    activities: ['Jemaa el-Fna storytellers and acrobats', 'Camel rides in the Palmeraie', 'Majorelle Garden and its cobalt-blue magic'],
    bestAge: 'All ages',
    tip: 'Visit the main square at dusk when performers are in full swing but the heat has broken.',
  },
  {
    name: 'Essaouira',
    tagline: 'The Breezy Beach Town',
    image: 'https://images.unsplash.com/photo-1560437091-4383266ac31b?q=80&w=800',
    activities: ['Wide sandy beach with gentle waves', 'Beginner windsurfing lessons for teens', 'Compact and friendly car-free medina'],
    bestAge: 'All ages',
    tip: 'The wind picks up after noon. Morning is best for beach time with younger children.',
  },
  {
    name: 'Agadir',
    tagline: 'The Family Resort Hub',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800',
    activities: ['Long calm beach with lifeguards', 'Crocoparc with 300+ Nile crocodiles', 'Souss Massa National Park bird-watching'],
    bestAge: 'All ages',
    tip: 'Agadir has the most familiar resort infrastructure in Morocco. Ideal for first-time visitors with toddlers.',
  },
  {
    name: 'Ouarzazate',
    tagline: 'The Hollywood of Africa',
    image: 'https://images.unsplash.com/photo-1548017643-6c7a3f1e95e4?q=80&w=800',
    activities: ['Atlas Film Studios where Gladiator was filmed', 'Ait Benhaddou kasbah UNESCO site', 'Fint Oasis palm grove picnic'],
    bestAge: '6+ years',
    tip: 'Tell the kids they are walking through real movie sets. The studios keep original props from blockbuster films.',
  },
  {
    name: 'Merzouga',
    tagline: 'The Desert Dreamscape',
    image: 'https://images.unsplash.com/photo-1509879022285-00f3da62efb7?q=80&w=800',
    activities: ['Sunset camel trek into Erg Chebbi dunes', 'Stargazing from a luxury desert camp', 'Sandboarding on golden dunes'],
    bestAge: '4+ years',
    tip: 'Book a family tent with en-suite bathroom. Children under 4 may find the camel ride too long.',
  },
  {
    name: 'Chefchaouen',
    tagline: 'The Blue Pearl',
    image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?q=80&w=800',
    activities: ['Gentle walks through blue-painted streets', 'Counting cats in every alleyway', 'Ras el-Maa waterfall and riverside play'],
    bestAge: 'All ages',
    tip: 'The medina is small, flat, and safe. One of the easiest cities in Morocco for strollers and small legs.',
  },
  {
    name: 'Rabat',
    tagline: 'The Polished Capital',
    image: 'https://images.unsplash.com/photo-1570698473651-b2de99bae12f?q=80&w=800',
    activities: ['National Zoo with African wildlife', 'Kasbah of the Udayas ocean views', 'Hassan Tower and its forest of columns'],
    bestAge: 'All ages',
    tip: 'Rabat is clean, organized, and hassle-free. The zoo alone is worth a half-day visit.',
  },
  {
    name: 'Ifrane',
    tagline: 'The Little Switzerland',
    image: 'https://images.unsplash.com/photo-1580746738099-78d7c625a018?q=80&w=800',
    activities: ['Michlifen ski resort in winter', 'Cedar forests with wild Barbary macaques', 'Lake Dayet Aoua kayaking and picnics'],
    bestAge: 'All ages',
    tip: 'Visit in winter for snow or spring for wildflowers. The macaques are year-round residents of the cedar forest.',
  },
];

const ageRecommendations = [
  {
    icon: Baby,
    ageGroup: 'Toddlers (0-3)',
    color: 'var(--color-primary)',
    recommendations: [
      'Stay in Agadir for resort amenities, high chairs, and cots on request',
      'Choose riads with ground-floor family suites and enclosed courtyards',
      'Stick to Chefchaouen and Essaouira where medinas are flat and compact',
      'Use a baby carrier rather than a stroller in medinas',
      'Agadir beach has the calmest waves and most shade options',
      'Request baby-proofing at family-oriented riads like Riad Kniza',
    ],
  },
  {
    icon: Gamepad2,
    ageGroup: 'Young Kids (4-8)',
    color: 'var(--color-secondary)',
    recommendations: [
      'Book a family cooking class to make Moroccan bread and pastries',
      'Visit Crocoparc in Agadir for an unforgettable animal encounter',
      'Take a short camel ride in the Marrakech Palmeraie (30 minutes)',
      'Explore Majorelle Garden with its koi ponds and bright colors',
      'Create a souk scavenger hunt: find spices, lanterns, and leather bags',
      'Watch the fishing boats unload in Essaouira harbor each morning',
    ],
  },
  {
    icon: Mountain,
    ageGroup: 'Tweens (9-12)',
    color: 'var(--color-accent)',
    recommendations: [
      'Overnight desert camp with sandboarding and stargazing at Merzouga',
      'Guided market shopping with their own 100 MAD budget to haggle',
      'Atlas Mountain day hike to a Berber village for lunch',
      'Visit Atlas Film Studios in Ouarzazate for movie-set exploration',
      'Pottery workshop in Fes where they shape and paint their own piece',
      'Ouzoud Waterfalls hike with Barbary macaque spotting',
    ],
  },
  {
    icon: Waves,
    ageGroup: 'Teens (13-17)',
    color: 'var(--color-green)',
    recommendations: [
      'Surfing lessons in Taghazout or Essaouira',
      'Quad biking through Marrakech palm groves or Agafay Desert',
      'Photography tour through the Marrakech or Fes medina',
      'Multi-day Atlas Mountain trek with overnight in mountain refuges',
      'Paragliding over the Agadir coast (tandem, no experience needed)',
      'Cooking class focused on tajine and pastilla for Instagram-worthy content',
    ],
  },
];

const accommodations = [
  {
    name: 'Riad Kniza',
    city: 'Marrakech',
    address: '34 Derb l\'Hotel, Bab Doukkala, Marrakech 40000',
    description: 'Boutique riad with interconnecting family rooms, rooftop pool, and a host who adores children. Breakfast spreads are legendary.',
    price: '1,800 - 3,200 MAD/night',
    bestFor: 'Families wanting authentic medina charm',
  },
  {
    name: 'Mazagan Beach Resort',
    city: 'El Jadida',
    address: 'Route de Casablanca Km 3.5, El Jadida 24000',
    description: 'All-inclusive resort with kids club, waterpark, golf course, and 7 km of private beach. The most complete family resort in Morocco.',
    price: '3,500 - 7,000 MAD/night',
    bestFor: 'Families wanting a full resort experience',
  },
  {
    name: 'Dar Ayniwen',
    city: 'Marrakech',
    address: 'Route de Ouarzazate, Km 8, Marrakech 40000',
    description: 'Villa-style hotel set in olive groves outside the medina. Large pool, spacious gardens, and family bungalows with kitchenettes.',
    price: '2,200 - 4,500 MAD/night',
    bestFor: 'Families who need space and quiet',
  },
  {
    name: 'Sofitel Agadir Royal Bay',
    city: 'Agadir',
    address: 'Baie des Palmiers, Cite Founty, Agadir 80000',
    description: 'Beachfront 5-star with dedicated kids pool, playground, babysitting service, and direct beach access. Reliable international standard.',
    price: '2,800 - 5,500 MAD/night',
    bestFor: 'Families with toddlers who need resort facilities',
  },
  {
    name: 'Kasbah Tamadot',
    city: 'Atlas Mountains',
    address: 'BP 67, Asni 42152, Atlas Mountains',
    description: 'Sir Richard Branson\'s Moroccan retreat in the High Atlas. Infinity pool, mule treks, Berber cooking classes, and breathtaking mountain views.',
    price: '5,000 - 12,000 MAD/night',
    bestFor: 'A luxury splurge for special occasions',
  },
  {
    name: 'L\'Heure Bleue Palais',
    city: 'Essaouira',
    address: '2 Rue Ibn Batouta, Essaouira 44000',
    description: 'Elegant riad-hotel with rooftop pool, cinema room, hammam, and spacious suites. Steps from the beach and medina entrance.',
    price: '2,000 - 4,000 MAD/night',
    bestFor: 'Families blending beach and culture',
  },
  {
    name: 'Riad Laaroussa',
    city: 'Fes',
    address: '3 Derb Bechara, Fes 30110',
    description: 'Grand 17th-century riad with garden pool, family suites, and one of the best restaurants in the Fes medina. Staff go above and beyond for young guests.',
    price: '1,500 - 3,000 MAD/night',
    bestFor: 'Families exploring the Fes medina',
  },
  {
    name: 'Atlas Kasbah Ecolodge',
    city: 'Agadir',
    address: 'Commune Imsouane, Province Agadir Ida-Outanane',
    description: 'Eco-friendly hilltop lodge with organic garden, natural pool, and panoramic ocean views. Children help feed animals and harvest vegetables.',
    price: '900 - 1,800 MAD/night',
    bestFor: 'Eco-conscious families who love nature',
  },
  {
    name: 'Sahara Luxury Camp',
    city: 'Merzouga',
    address: 'Erg Chebbi Dunes, Merzouga 52202',
    description: 'Family-sized luxury tents with en-suite bathrooms, hot showers, and real beds among the Sahara dunes. Includes camel trek and desert dinner.',
    price: '2,500 - 5,000 MAD/night',
    bestFor: 'Families seeking a once-in-a-lifetime desert night',
  },
  {
    name: 'Lina Ryad & Spa',
    city: 'Chefchaouen',
    address: 'Rue Zagdoud, Chefchaouen 91000',
    description: 'Family-friendly riad in the heart of the blue city with a heated pool, kids menu, and terrace views over the Rif mountains.',
    price: '800 - 1,600 MAD/night',
    bestFor: 'Families visiting the Blue Pearl on a budget',
  },
];

const kidFoods = [
  { name: 'Msemen', description: 'Flaky, buttery flatbread served warm with honey or jam. Children devour these at breakfast and they are available at every corner bakery.', tag: 'Breakfast favorite' },
  { name: 'Chicken Tagine with Preserved Lemons', description: 'Tender chicken slow-cooked with olives and a subtle lemon flavor. Mild, comforting, and served with bread for dipping.', tag: 'Lunch staple' },
  { name: 'Couscous', description: 'Fluffy steamed semolina topped with vegetables and tender meat. Friday couscous is a family tradition and every restaurant serves it.', tag: 'Friday special' },
  { name: 'Kefta (Meat Kofta)', description: 'Spiced ground beef or lamb shaped into small balls or patties and grilled. Think of them as Moroccan meatballs that kids happily eat by the dozen.', tag: 'Grill favorite' },
  { name: 'Fresh Orange Juice', description: 'Squeezed to order at stands across every city. At just 4-5 MAD per glass, this becomes the unofficial family drink of the entire trip.', tag: 'Everywhere' },
  { name: 'Batbout with Nutella', description: 'Soft, pillowy Moroccan bread pockets filled with Nutella and served warm. Available at most bakeries and a guaranteed crowd-pleaser.', tag: 'Snack time' },
  { name: 'Brochettes', description: 'Grilled meat skewers seasoned with cumin and paprika, served with fresh bread and salad. Simple, delicious, and easy for small hands to eat.', tag: 'Dinner winner' },
  { name: 'Chebakia', description: 'Flower-shaped cookies deep-fried, dipped in honey, and sprinkled with sesame seeds. Crispy, sweet, and utterly addictive for all ages.', tag: 'Sweet treat' },
];

const healthSafety = [
  { icon: Stethoscope, tip: 'Pack a full first-aid kit with children\'s acetaminophen, rehydration salts, antihistamine, and anti-diarrhea medication. Pharmacies are plentiful but may lack specific children\'s formulations.' },
  { icon: ThermometerSun, tip: 'Apply SPF 50+ sunscreen every two hours. Morocco\'s sun is fierce, especially in the south. Wide-brimmed hats are essential for desert excursions.' },
  { icon: Shield, tip: 'Drink only bottled water and use it for brushing teeth. Most riads and hotels provide complimentary bottles in rooms.' },
  { icon: UtensilsCrossed, tip: 'Stick to freshly cooked hot food from busy restaurants. Avoid raw salads from street vendors if your children have sensitive stomachs.' },
  { icon: Shield, tip: 'Hold hands in busy souks. The medinas are not dangerous, but narrow lanes and crowds can separate families quickly.' },
  { icon: Heart, tip: 'Carry hand sanitizer and wet wipes everywhere. Many traditional restaurants serve food with bread instead of cutlery.' },
  { icon: Clock, tip: 'Build in rest time every afternoon. Moroccan midday heat between noon and 3 PM is intense, especially for small children.' },
  { icon: Shield, tip: 'Use baby carriers instead of strollers in medinas. Cobblestoned lanes and steps make wheeled transport impractical.' },
  { icon: Stethoscope, tip: 'Know the nearest clinic in each city. Private clinics (Clinique) offer English-speaking doctors. Emergency number: 150 for ambulance.' },
  { icon: CheckCircle, tip: 'No special vaccinations are required. Ensure routine immunizations are up to date. Consider hepatitis A vaccine for extended stays.' },
];

const itinerary5Day = [
  { day: 1, title: 'Arrive in Marrakech', desc: 'Transfer to your family riad. Settle in with mint tea on the rooftop terrace. Gentle evening walk to Jemaa el-Fna for fresh orange juice, storytellers, and people-watching. Early dinner at a riad restaurant.' },
  { day: 2, title: 'Marrakech Discovery', desc: 'Morning at Majorelle Garden with its electric-blue walls and koi ponds. Afternoon family cooking class making msemen bread and chicken tagine. Horse-drawn carriage ride through the palm groves at sunset.' },
  { day: 3, title: 'Day Trip to Essaouira', desc: 'Scenic 2.5-hour drive to the coast. Stop to see goats climbing argan trees. Beach time, fishing harbor visit, and lunch at a portside seafood grill. Return to Marrakech by evening.' },
  { day: 4, title: 'Atlas Mountains & Culture', desc: 'Morning drive to the Ourika Valley. Visit a Berber family for tea, short family hike along the river, and lunch at a valley restaurant. Afternoon dip in the riad pool back in Marrakech.' },
  { day: 5, title: 'Last Morning & Departure', desc: 'Final souk shopping for souvenirs: leather bookmarks, small tagine pots, or argan oil for grandma. Fresh orange juice farewell at the square. Airport transfer.' },
];

const itinerary7Day = [
  { day: 1, title: 'Arrive in Marrakech', desc: 'Airport pickup and riad check-in. Rooftop mint tea and medina orientation walk. Dinner at the riad with traditional Moroccan music.' },
  { day: 2, title: 'Marrakech Adventures', desc: 'Majorelle Garden in the morning. Cooking class at midday. Afternoon camel ride in the Palmeraie. Evening souk treasure hunt with the kids.' },
  { day: 3, title: 'Ouzoud Waterfalls', desc: 'Full-day trip to Morocco\'s tallest waterfalls. Watch Barbary macaques play in the trees. Swim in natural pools below the falls. Riverside tagine lunch.' },
  { day: 4, title: 'Drive to Essaouira', desc: 'Morning drive to the coast. Argan tree goat stop. Afternoon beach exploration and medina walk. Seafood dinner at the fishing port.' },
  { day: 5, title: 'Essaouira Beach Day', desc: 'Morning camel ride on the beach. Pottery workshop for the kids. Afternoon building sandcastles and flying kites. Fish dinner at a family restaurant.' },
  { day: 6, title: 'Essaouira to Agadir', desc: 'Coastal drive to Agadir. Check into a beach resort. Kids enjoy the pool and waterslide. Parents relax at the spa. Promenade walk for ice cream at sunset.' },
  { day: 7, title: 'Agadir & Departure', desc: 'Morning visit to Crocoparc. Last swim at the beach. Lunch at a beachfront restaurant. Airport transfer for evening flight.' },
];

const itinerary10Day = [
  { day: 1, title: 'Arrive in Marrakech', desc: 'Riad check-in with welcome treats for the children. Gentle medina walk to Jemaa el-Fna for sunset orange juice. First taste of msemen bread.' },
  { day: 2, title: 'Marrakech Full Day', desc: 'Majorelle Garden, Bahia Palace, and a family cooking class. Afternoon horse carriage through the palm groves. Rooftop dinner.' },
  { day: 3, title: 'Atlas Mountains', desc: 'Drive to a mountain lodge. Visit a Berber village, taste fresh bread from a communal oven, and hike along mountain trails. Pool time at the lodge.' },
  { day: 4, title: 'Ouzoud Waterfalls', desc: 'Day trip to the spectacular falls. Barbary macaque spotting, swimming in natural pools, and a cliffside picnic. Return to lodge for stargazing.' },
  { day: 5, title: 'Drive to Essaouira', desc: 'Morning drive to the coast through argan groves. Stop at a women\'s cooperative. Afternoon at the beach. Evening medina walk and seafood dinner.' },
  { day: 6, title: 'Essaouira Exploration', desc: 'Morning camel ride. Visit the ramparts and art galleries. Pottery workshop. Afternoon kite-flying on the beach. Sunset from the harbor walls.' },
  { day: 7, title: 'Travel to Agadir', desc: 'Coastal road to Agadir. Resort check-in. Full afternoon of pool and beach time. Promenade dinner with ocean views.' },
  { day: 8, title: 'Agadir Adventures', desc: 'Morning at Crocoparc. Afternoon at Souss Massa National Park for flamingo spotting. Beach sunset and ice cream on the promenade.' },
  { day: 9, title: 'Paradise Valley', desc: 'Day trip to the stunning natural pools of Paradise Valley. Rock scrambling, swimming in turquoise water, and a shaded picnic. Return for final beach sunset.' },
  { day: 10, title: 'Departure', desc: 'Last morning swim. Souvenir shopping for friends back home. Farewell Moroccan lunch. Airport transfer with hearts full of memories.' },
];

const packingCategories = [
  {
    category: 'Clothing',
    icon: Shirt,
    items: ['Lightweight modest clothing (shoulders and knees covered for medinas)', 'Swimsuits for pool and beach', 'Light layers for cool mountain and desert evenings', 'Comfortable closed-toe walking shoes', 'Sun hats with chin straps for windy days', 'A warmer jacket if visiting in winter or going to Ifrane'],
  },
  {
    category: 'Health & Safety',
    icon: Stethoscope,
    items: ['High-SPF sunscreen (50+) and after-sun lotion', 'Children\'s acetaminophen and rehydration salts', 'Hand sanitizer and antibacterial wet wipes', 'Insect repellent for desert and countryside', 'Basic first-aid kit with plasters and antiseptic', 'Any prescription medications your children take'],
  },
  {
    category: 'Gear & Comfort',
    icon: Luggage,
    items: ['Baby carrier or backpack carrier (not stroller for medinas)', 'Reusable water bottles for each family member', 'Portable phone charger for navigation and photos', 'Zip-lock bags for wet swimwear and souk finds', 'Lightweight blanket for long car journeys', 'Small daypack for excursions'],
  },
  {
    category: 'Entertainment & Snacks',
    icon: Gamepad2,
    items: ['Tablets loaded with shows and games for transfers', 'Coloring books and travel journals', 'Familiar snacks from home for picky eaters', 'A deck of cards or compact travel games', 'Headphones for each child', 'Small toys or comfort items for younger children'],
  },
];

const budgetBreakdown = [
  { category: 'Accommodation (family room)', budget: '800 - 3,500 MAD/night', mid: '1,500 MAD/night', note: 'Riads with family suites are best value. Resorts cost more but include amenities.' },
  { category: 'Food (family of 4)', budget: '200 - 600 MAD/day', mid: '350 MAD/day', note: 'Local restaurants 40-80 MAD/person. Street food even cheaper. Hotel dining 150+/person.' },
  { category: 'Transport', budget: '100 - 800 MAD/day', mid: '300 MAD/day', note: 'Petit taxi within cities 20-50 MAD. Private driver 800-1,200 MAD/day. CTM bus 80-200 MAD/person.' },
  { category: 'Activities', budget: '0 - 1,200 MAD/day', mid: '500 MAD/day', note: 'Many free (beaches, medinas, gardens). Cooking class 300-500 MAD/person. Desert camp 2,000-5,000 MAD.' },
  { category: 'Daily Total (Budget)', budget: '1,200 - 2,000 MAD', mid: '~1,500 MAD', note: 'Approximately $120-200/day for a family of 4 staying in riads and eating locally.' },
  { category: 'Daily Total (Mid-Range)', budget: '2,500 - 4,500 MAD', mid: '~3,000 MAD', note: 'Approximately $250-450/day with nicer accommodation, guided tours, and sit-down restaurants.' },
  { category: 'Daily Total (Luxury)', budget: '5,000 - 12,000 MAD', mid: '~7,000 MAD', note: 'Approximately $500-1,200/day at premium resorts with private guides and exclusive experiences.' },
];

export default function FamilyGuidePage() {
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
              'url(https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2800)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Family Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Users className="w-4 h-4" />
            Trip Planning &amp; Logistics
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Family Planning Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The logistics side of your Moroccan family adventure. Hotels with real addresses,
            detailed itineraries, age-based recommendations, packing lists, and budget breakdowns
            &mdash; everything you need to plan with confidence.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Why Morocco for Families */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Why Morocco Is Perfect for Families
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six reasons this North African kingdom should be at the top of your family travel list.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMorocco.map((reason) => (
              <div key={reason.title} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <reason.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link to Family Activities */}
      <section className="pb-8">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-5 border-l-4 border-[var(--color-secondary)] flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-[var(--text-primary)] mb-1">Looking for activities and experiences?</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                This page focuses on planning logistics. For kid-friendly activities, restaurants,
                stroller guides, and best ages to visit, see our companion guide.
              </p>
            </div>
            <Link
              href="/family"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-secondary)] text-white text-sm font-semibold hover:bg-[var(--color-secondary)]/90 transition-colors whitespace-nowrap"
            >
              <Baby className="w-4 h-4" /> Family Activities Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Best Family Destinations */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Best Family Destinations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Eight cities and regions, each offering something uniquely wonderful for families.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {destinations.map((dest) => (
              <div key={dest.name} className="card-moroccan overflow-hidden">
                <div className="relative h-52">
                  <img
                    src={dest.image}
                    alt={`${dest.name} - ${dest.tagline}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="tag-primary text-xs">{dest.bestAge}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                      {dest.tagline}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                    {dest.name}
                  </h3>
                  <ul className="space-y-1.5 mb-3">
                    {dest.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <Star className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--surface-muted)]">
                    <Sparkles className="w-3.5 h-3.5 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed"><span className="font-semibold">Tip:</span> {dest.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Based Recommendations */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <GraduationCap className="w-8 h-8 inline-block text-[var(--color-secondary)] mr-2" />
            Age-Based Recommendations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tailored suggestions so every family member has an incredible time, from toddlers to teenagers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ageRecommendations.map((group) => (
              <div key={group.ageGroup} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${group.color} 15%, transparent)` }}>
                    <group.icon className="w-6 h-6" style={{ color: group.color }} />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {group.ageGroup}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {group.recommendations.map((rec) => (
                    <li key={rec} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: group.color }} />
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family-Friendly Accommodations */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building2 className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            10 Family-Friendly Accommodations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Handpicked hotels and riads that genuinely welcome families, with real addresses you can book today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {accommodations.map((acc) => (
              <div key={acc.name} className="card-moroccan p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-[var(--text-primary)]">{acc.name}</h3>
                  <span className="tag-secondary text-xs flex-shrink-0">{acc.city}</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mb-2">
                  <MapPin className="w-3 h-3 inline mr-1" />{acc.address}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{acc.description}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="text-[var(--color-primary)] font-semibold">
                    <DollarSign className="w-3 h-3 inline" />{acc.price}
                  </span>
                  <span className="text-[var(--text-muted)]">
                    <Users className="w-3 h-3 inline mr-0.5" />{acc.bestFor}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kid-Friendly Food Guide */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Kid-Friendly Food Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Eight Moroccan dishes that children genuinely love. No convincing required.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {kidFoods.map((food) => (
              <div key={food.name} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[var(--text-primary)] text-sm">{food.name}</h3>
                  <span className="tag-accent text-xs">{food.tag}</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{food.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health & Safety */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-green)] mr-2" />
            Health and Safety for Families
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ten practical tips to keep your family healthy and comfortable throughout your trip.
          </p>
          <div className="space-y-3">
            {healthSafety.map((item, idx) => (
              <div key={idx} className="card-moroccan p-4 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-green)]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-[var(--color-green)]" />
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Itineraries */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Plane className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Sample Family Itineraries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three itineraries at different lengths. Each is paced for families with built-in rest time.
          </p>

          {/* 5-Day */}
          <div className="mb-12">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
              5-Day Quick Escape
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              Marrakech-based with day trips. Perfect for a long weekend or families with young children who prefer a single base.
            </p>
            <div className="space-y-3">
              {itinerary5Day.map((day) => (
                <div key={day.day} className="card-moroccan p-4 flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full gradient-moroccan flex items-center justify-center">
                    <span className="text-white font-bold text-xs">D{day.day}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)] text-sm mb-0.5">{day.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{day.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7-Day */}
          <div className="mb-12">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
              7-Day Classic Family Tour
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              Marrakech, Essaouira coast, and Agadir beach. The ideal balance of culture, adventure, and relaxation.
            </p>
            <div className="space-y-3">
              {itinerary7Day.map((day) => (
                <div key={day.day} className="card-moroccan p-4 flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full gradient-moroccan flex items-center justify-center">
                    <span className="text-white font-bold text-xs">D{day.day}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)] text-sm mb-0.5">{day.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{day.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 10-Day */}
          <div>
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
              10-Day Grand Family Adventure
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              The full experience: city, mountains, waterfalls, coast, and beach. A trip your family will talk about for years.
            </p>
            <div className="space-y-3">
              {itinerary10Day.map((day) => (
                <div key={day.day} className="card-moroccan p-4 flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full gradient-moroccan flex items-center justify-center">
                    <span className="text-white font-bold text-xs">D{day.day}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)] text-sm mb-0.5">{day.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{day.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packing List */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Family Packing List
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Organized by category so you do not forget a thing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packingCategories.map((cat) => (
              <div key={cat.category} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)]">{cat.category}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Guide */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Budget Guide for a Family of 4
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Average daily costs in Moroccan Dirham (1 USD = approximately 10 MAD).
          </p>
          <div className="space-y-3">
            {budgetBreakdown.map((item) => (
              <div key={item.category} className={`card-moroccan p-4 flex flex-col md:flex-row md:items-center gap-2 ${item.category.includes('Total') ? 'border-2 border-[var(--color-primary)]' : ''}`}>
                <div className="md:w-1/4 font-bold text-[var(--text-primary)] text-sm">{item.category}</div>
                <div className="md:w-1/4 text-[var(--color-primary)] font-medium text-sm">{item.budget}</div>
                <div className="md:w-2/4 text-xs text-[var(--text-secondary)]">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco text-center">
          <Heart className="w-10 h-10 text-[var(--color-primary)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Your Family&apos;s Moroccan Adventure Starts Here
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Morocco is waiting to welcome your family with open arms, warm tagines, and memories
            that will last a lifetime. Start planning today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Destinations
            </Link>
            <Link
              href="/family"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Baby className="w-4 h-4" /> Family Activities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
