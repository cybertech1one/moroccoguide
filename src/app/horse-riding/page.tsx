import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  Mountain,
  Compass,
  Sun,
  Camera,
  Star,
  Users,
  Waves,
  Info,
  Calendar,
  Heart,
  Award,
  CircleDollarSign,
  Sparkles,
  BookOpen,
  Globe,
  Flag,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Horse Riding & Equestrian Tourism in Morocco | Complete Guide 2025',
  description:
    'Discover Morocco on horseback. Beach rides in Essaouira, desert treks in Merzouga, Atlas mountain trails, Tbourida/Fantasia shows, top riding centers, Barb horse heritage, and practical booking advice for all levels.',
  keywords: [
    'horse riding morocco',
    'morocco equestrian tourism',
    'essaouira horse riding',
    'morocco beach horse ride',
    'desert horse riding morocco',
    'atlas mountains horse trekking',
    'tbourida fantasia morocco',
    'barb horse morocco',
    'morocco riding holidays',
    'ranch de diabat essaouira',
    'morocco horse trek',
    'marrakech horse riding',
    'agadir horse ride',
    'morocco equestrian',
    'morocco riding center',
    'horse riding merzouga',
  ],
  openGraph: {
    title: 'Horse Riding & Equestrian Tourism in Morocco | Complete Guide',
    description:
      'From Atlantic beach gallops to Saharan desert treks, Morocco offers world-class riding experiences. 15+ riding centers, Tbourida shows, multi-day treks, and practical booking guide.',
    url: 'https://citytoursmorocco.com/horse-riding',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Horse riding on the beach in Essaouira, Morocco at sunset',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/horse-riding' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Horse Riding & Equestrian Tourism in Morocco',
  description:
    'Complete guide to horse riding and equestrian tourism in Morocco, including beach rides, desert treks, mountain trails, Tbourida shows, and top riding operators.',
  url: 'https://citytoursmorocco.com/horse-riding',
  touristType: ['Adventure tourists', 'Equestrian enthusiasts', 'Cultural tourists'],
  geo: { '@type': 'GeoCoordinates', latitude: 31.7917, longitude: -7.0926 },
};

/* ===================================================================
   MOROCCO'S EQUESTRIAN HERITAGE
   =================================================================== */

const equestrianHeritage = [
  {
    icon: Globe,
    title: 'Birthplace of the Barb Horse',
    description:
      'Morocco is the ancestral home of the Barb horse, one of the oldest and most influential breeds in history. Hardy, sure-footed, and spirited, the Barb shaped European horse breeding for centuries. Today, the Royal Stud at El Jadida and breeders across Morocco maintain this extraordinary bloodline.',
  },
  {
    icon: Award,
    title: 'Tbourida: UNESCO Intangible Heritage',
    description:
      'Morocco\'s spectacular mounted gunpowder ceremony, Tbourida (also called Fantasia), was inscribed on UNESCO\'s Intangible Cultural Heritage list in 2021. Teams of horsemen in traditional dress charge in formation and fire their rifles in perfect unison. It is one of Morocco\'s most thrilling cultural spectacles.',
  },
  {
    icon: BookOpen,
    title: 'Centuries of Cavalry Tradition',
    description:
      'From the Almohad and Almoravid dynasties to the Protectorate-era cavalry units, horses have been central to Moroccan military, cultural, and daily life for over a millennium. The bond between Moroccans and their horses runs deeper than sport; it is woven into national identity.',
  },
  {
    icon: Heart,
    title: 'Royal Patronage',
    description:
      'The Moroccan royal family has championed equestrian culture for generations. King Mohammed VI maintains royal stables, supports breeding programs, and sponsors international equestrian competitions. The annual Horse Week in El Jadida draws competitors and spectators from across the world.',
  },
  {
    icon: Star,
    title: 'Diverse Riding Landscapes',
    description:
      'Morocco offers riding terrain unmatched in diversity. In a single trip you can gallop along Atlantic beaches, trek through alpine meadows in the High Atlas, wind through Berber villages, and cross the edge of the Sahara desert. Few countries offer this range within such compact distances.',
  },
  {
    icon: Users,
    title: 'Welcoming to All Levels',
    description:
      'Whether you are a complete beginner seeking a gentle beach walk, an intermediate rider wanting a multi-day mountain trek, or an experienced equestrian dreaming of desert gallops, Morocco has operators and horses suited to every ability level.',
  },
];

/* ===================================================================
   TYPES OF RIDING EXPERIENCES
   =================================================================== */

const ridingExperiences = [
  {
    id: 'beach-rides',
    name: 'Beach Rides',
    subtitle: 'Atlantic Coast Gallops',
    locations: 'Essaouira, Agadir, Oualidia, Sidi Kaouki, El Jadida',
    duration: '1-3 hours',
    difficulty: 'All levels',
    difficultyColor: '#2d8a4e',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=800',
    description:
      'The most popular riding experience in Morocco. Ride along wide, empty Atlantic beaches with crashing waves and golden sand stretching to the horizon. Essaouira is the undisputed capital of beach riding, with multiple operators offering rides from 1 hour to full-day excursions. At low tide, the hard-packed sand is perfect for cantering and galloping. Sunset rides are particularly magical, with the Atlantic turning copper and gold. Beginners receive gentle horses and walk along the surf line, while experienced riders can enjoy extended gallops.',
    highlights: [
      'Essaouira beach (best sunset gallops)',
      'Sidi Kaouki (quieter, longer beach)',
      'Oualidia lagoon (calm water setting)',
      'Agadir long beach (wide open sand)',
      'El Jadida Portuguese coastline',
    ],
    price: '300-600 MAD per hour',
    bestTime: 'Year-round, best October-May',
  },
  {
    id: 'desert-rides',
    name: 'Desert Rides',
    subtitle: 'Saharan Sand & Oasis Trails',
    locations: 'Merzouga, M\'hamid, Zagora, Ouarzazate, Erfoud',
    duration: '2 hours to 5 days',
    difficulty: 'Intermediate to Advanced',
    difficultyColor: '#C4960C',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e66aca2?q=80&w=800',
    description:
      'Riding through the Moroccan Sahara on horseback is a profoundly atmospheric experience. Cross rocky hamada plateaus, thread through palm oases, and ride to the base of towering sand dunes as the light shifts from gold to pink to purple. Multi-day desert rides camp under the stars in traditional bivouacs, with Berber meals cooked over open fires and traditional music around the campfire. Horses for desert riding are typically Arab-Barb crosses, bred for endurance and heat tolerance. Some desert operators also offer combined camel-and-horse treks.',
    highlights: [
      'Merzouga dune edge rides',
      'M\'hamid to Erg Chigaga (3-5 days)',
      'Draa Valley palm grove trails',
      'Zagora sunset rides',
      'Ouarzazate kasbah circuit',
    ],
    price: '500-1,200 MAD per day',
    bestTime: 'October-April (avoid summer heat)',
  },
  {
    id: 'mountain-rides',
    name: 'Mountain Rides',
    subtitle: 'Atlas Trails & Berber Villages',
    locations: 'Ouirgane, Imlil, Setti Fatma, Ait Bougmez, Ourika Valley',
    duration: '2 hours to 7 days',
    difficulty: 'Intermediate to Advanced',
    difficultyColor: '#C4960C',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
    description:
      'The Atlas Mountains offer some of the most spectacular horse trekking in North Africa. Ride through walnut groves, past rushing rivers, up to high passes with views stretching to the Sahara, and through traditional Berber villages where life has changed little in centuries. Mountain riding demands confident riders who are comfortable on steep, rocky trails and stream crossings. The horses are mountain-bred Barbs, sure-footed and calm on precipitous paths. Multi-day treks include overnight stays in Berber guesthouses or mountain bivouacs, with home-cooked tagines and traditional hospitality.',
    highlights: [
      'Ouirgane valley trails',
      'Toubkal foothills circuit',
      'Ait Bougmez (Happy Valley)',
      'Ourika Valley waterfall rides',
      'Berber village homestay treks',
    ],
    price: '600-1,500 MAD per day',
    bestTime: 'March-June, September-November',
  },
  {
    id: 'multi-day-treks',
    name: 'Multi-Day Treks',
    subtitle: '3-7 Day Expeditions Across Morocco',
    locations: 'High Atlas, Anti-Atlas, Desert, Coast to Mountains',
    duration: '3-7 days',
    difficulty: 'Intermediate to Advanced',
    difficultyColor: '#dc3545',
    image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=800',
    description:
      'For the ultimate Moroccan riding experience, multi-day treks take you deep into landscapes that are inaccessible by road. Ride through changing terrain over 3 to 7 days, sleeping under the stars or in remote Berber villages, following ancient trading routes and mountain passes. The classic multi-day treks include: the Atlantic to Atlas ride (coast to mountains in 5 days), the Roses to Saffron ride through the Ouarzazate region, and the Trans-Atlas crossing from Marrakech to the desert via mountain passes. These expeditions are life-changing experiences that combine physical challenge, natural beauty, and deep cultural immersion. All meals, camping equipment, and a support team with pack mules are included.',
    highlights: [
      'Atlantic to Atlas (5-day coast to mountain)',
      'Trans-Atlas crossing (7 days)',
      'Roses to Saffron trail (4 days)',
      'Desert nomad route (5 days M\'hamid circuit)',
      'Anti-Atlas geological ride (4 days)',
    ],
    price: '5,000-15,000 MAD for full trek',
    bestTime: 'March-May, October-November',
  },
];

/* ===================================================================
   TOP RIDING CENTERS AND OPERATORS
   =================================================================== */

const ridingCenters = [
  {
    name: 'Ranch de Diabat',
    location: 'Essaouira (Diabat village)',
    established: 'Over 20 years in operation',
    speciality: 'Beach rides, sunset gallops, multi-day coast treks',
    description: 'The most famous riding center in Morocco. Located in the village of Diabat just south of Essaouira, this long-established ranch offers everything from 1-hour beach rides to week-long coastal treks. Their herd of 30+ Arab-Barb horses is impeccably cared for. The sunset gallop along Essaouira beach is their signature experience and one of Morocco\'s most iconic activities.',
    price: 'From 350 MAD/hour',
    level: 'All levels',
  },
  {
    name: 'La Roseraie Horse Riding',
    location: 'Ouirgane, High Atlas',
    established: 'Part of La Roseraie luxury hotel',
    speciality: 'Mountain trail rides, valley treks, luxury riding holidays',
    description: 'Based at the beautiful La Roseraie hotel in the Ouirgane valley, this center offers guided rides through the stunning Atlas foothills. Routes wind through olive groves, along the Nfis river, and up to panoramic viewpoints. The horses are well-schooled and the guides are experienced. Combine riding with the hotel\'s pool, gardens, and gourmet restaurant for a luxury equestrian retreat.',
    price: 'From 500 MAD/hour',
    level: 'Intermediate to Advanced',
  },
  {
    name: 'Unicorn Trails Morocco',
    location: 'Various (operates across Morocco)',
    established: 'International operator since 1990s',
    speciality: 'Multi-day treks, cross-country expeditions, desert rides',
    description: 'A respected international riding holiday operator offering curated multi-day treks across Morocco. Their programs include the Coast & Mountain Ride (beach to Atlas in 7 days), the Desert Ride (Sahara fringe exploration), and the Imperial Cities Ride. All treks include expert guides, well-conditioned horses, camping equipment, and meals. They cater to confident intermediate and advanced riders.',
    price: 'From 8,000 MAD for multi-day treks',
    level: 'Intermediate to Advanced',
  },
  {
    name: 'Atlas Riding',
    location: 'Marrakech (Palmeraie)',
    established: 'Established operation',
    speciality: 'Palmeraie rides, Atlas day trips, sunset sessions',
    description: 'Conveniently located in the Marrakech Palmeraie (palm grove), Atlas Riding offers rides through the palm groves with views of the Atlas Mountains. A great option for visitors staying in Marrakech who want a riding experience without traveling far. They also arrange day trips to the Atlas foothills for more adventurous terrain.',
    price: 'From 400 MAD/hour',
    level: 'All levels',
  },
  {
    name: 'Les Cavaliers de l\'Atlas',
    location: 'Ouirgane, High Atlas',
    established: 'Specialist mountain operator',
    speciality: 'Multi-day Atlas traverses, Berber village treks',
    description: 'A dedicated mountain riding operation offering some of the most challenging and rewarding multi-day treks in the Atlas Mountains. Their signature 5-day Atlas traverse takes riders over 3,000m passes with pack mules carrying supplies. Nights in remote Berber guesthouses with traditional meals. Horses are mountain-bred Barbs selected for stamina and sure-footedness.',
    price: 'From 7,000 MAD for 5-day trek',
    level: 'Advanced',
  },
  {
    name: 'Palmeraie Equestrian Club',
    location: 'Marrakech Palmeraie',
    established: 'Long-established club',
    speciality: 'Dressage, show jumping, lessons, leisure rides',
    description: 'A proper equestrian club offering structured lessons in dressage and show jumping alongside leisure rides through the palm groves. Good choice for experienced riders who want arena work as well as trail riding. They host occasional competitions and have a quality schooling arena.',
    price: 'From 400 MAD/hour lesson, 350 MAD/hour trail',
    level: 'All levels',
  },
  {
    name: 'Zouina Horse Riding',
    location: 'Ourika Valley, near Marrakech',
    established: 'Boutique operation',
    speciality: 'Valley rides, waterfall trails, authentic Berber encounters',
    description: 'A boutique riding center in the Ourika Valley offering intimate small-group rides through terraced farmland, past waterfalls, and into traditional Berber villages. Maximum group size of 6 ensures personalized attention. The horses are calm and well-trained, making this suitable for confident beginners as well as experienced riders.',
    price: 'From 450 MAD/hour',
    level: 'Beginner to Advanced',
  },
  {
    name: 'Terres d\'Amanar',
    location: 'Tahannaout, Atlas foothills',
    established: 'Eco-adventure park',
    speciality: 'Family rides, adventure park, zip lines, eco-lodges',
    description: 'An eco-adventure park in the Atlas foothills offering horseback riding as part of a wider activity menu. Ideal for families with children, combining gentle pony rides for kids with longer trail rides for adults. The park also features zip lines, tree climbing, and eco-lodges, making it a complete day or weekend activity destination.',
    price: 'From 300 MAD/hour',
    level: 'Beginner, family-friendly',
  },
  {
    name: 'Dunes & Desert Exploration',
    location: 'Merzouga',
    established: 'Desert specialist',
    speciality: 'Desert horseback safaris, dune rides, nomad camps',
    description: 'Specializing in horseback riding in the Sahara around Merzouga. Their desert-adapted horses handle the rocky terrain and sand with ease. Rides range from 2-hour sunset dune rides to multi-day desert safaris camping in nomad bivouacs. The experience of riding to the summit of a sand dune at sunset is unforgettable.',
    price: 'From 600 MAD/2 hours',
    level: 'Intermediate to Advanced',
  },
  {
    name: 'La Maison du Cheval',
    location: 'El Jadida',
    established: 'Near the Royal Stud',
    speciality: 'Barb horse breeding visits, beach rides, cultural equestrian tours',
    description: 'Located near El Jadida and the famous Royal Stud, this center offers rides along the Portuguese-era coastline and cultural visits to the Barb horse breeding facilities. A unique experience for horse lovers interested in Morocco\'s equestrian heritage. Beach rides along the El Jadida coast are long and scenic.',
    price: 'From 400 MAD/hour',
    level: 'All levels',
  },
  {
    name: 'Agadir Horse Riding',
    location: 'Agadir',
    established: 'Established beach operator',
    speciality: 'Long beach rides, sunset gallops, beginner-friendly',
    description: 'Operating on Agadir\'s wide, flat beach, this center offers some of the most accessible riding in Morocco. The long stretch of sand is perfect for beginners wanting a walk along the surf and experienced riders wanting to gallop. Sunset rides are particularly popular with tourists staying in Agadir\'s beach hotels.',
    price: 'From 300 MAD/hour',
    level: 'All levels',
  },
  {
    name: 'Equi Evasion Maroc',
    location: 'Setti Fatma, Ourika Valley',
    established: 'Specialized mountain operator',
    speciality: 'Atlas trail rides, village-to-village treks, waterfall routes',
    description: 'A specialist mountain riding operator in the Ourika Valley offering day rides and multi-day treks through some of the most picturesque Atlas scenery. Their village-to-village trek follows ancient mule paths connecting remote Berber communities. Authentic, off-the-beaten-track experience with homestay accommodation.',
    price: 'From 500 MAD/half-day',
    level: 'Intermediate to Advanced',
  },
  {
    name: 'Cheval d\'Aventure',
    location: 'Various locations across Morocco',
    established: 'International agency',
    speciality: 'Curated riding holidays, luxury desert camps, Atlas crossings',
    description: 'A French-based riding holiday agency offering premium multi-day programs in Morocco. Their itineraries are carefully crafted with quality horses, experienced guides, and comfortable accommodation including luxury desert bivouacs. Programs range from 4 to 10 days covering coast, mountains, and desert.',
    price: 'From 10,000 MAD for 4-day program',
    level: 'Intermediate to Advanced',
  },
  {
    name: 'Jnane Tamsna Riding',
    location: 'Marrakech Palmeraie',
    established: 'Part of boutique hotel',
    speciality: 'Boutique rides, garden trails, luxury experience',
    description: 'A small, exclusive riding operation attached to the acclaimed Jnane Tamsna boutique hotel. Offers intimate rides through the Palmeraie with the Atlas as backdrop. The focus is on quality over quantity, with well-schooled horses and knowledgeable guides. Perfect for luxury travelers wanting a refined riding experience.',
    price: 'From 500 MAD/hour',
    level: 'All levels',
  },
  {
    name: 'Sidi Kaouki Horse Beach',
    location: 'Sidi Kaouki',
    established: 'Local beach operator',
    speciality: 'Beach rides on a quieter coast, surf village atmosphere',
    description: 'Located on the quiet beach of Sidi Kaouki, south of Essaouira, this operator offers beach rides away from the Essaouira crowds. The beach is wider, longer, and much less busy. Ideal for riders who want extended gallops without interruptions. The laid-back surf village offers cafes and accommodation.',
    price: 'From 300 MAD/hour',
    level: 'All levels',
  },
  {
    name: 'M\'hamid Desert Stables',
    location: 'M\'hamid el Ghizlane',
    established: 'End-of-road desert operator',
    speciality: 'Saharan edge rides, Erg Chigaga treks, nomad routes',
    description: 'At the end of the paved road in M\'hamid, this operation offers horseback access to some of the remotest desert in Morocco. Multi-day rides to the massive Erg Chigaga dunes through completely uninhabited terrain. This is serious desert riding for experienced riders comfortable with long hours in the saddle and basic camping.',
    price: 'From 800 MAD/day for multi-day',
    level: 'Advanced',
  },
];

/* ===================================================================
   TBOURIDA / FANTASIA
   =================================================================== */

const tbouridaInfo = {
  description:
    'Tbourida (also written Tborida, and historically called Fantasia by French colonists) is Morocco\'s most spectacular equestrian tradition. Teams of horsemen, dressed in white flowing robes and armed with ornamented muskets, charge in a straight line at full gallop before firing their weapons in perfect unison. The thunderous sound of hooves, the crack of gunpowder, and the sight of charging horses in traditional regalia create an electrifying spectacle that is uniquely Moroccan.',
  unescoStatus: 'Inscribed on UNESCO\'s Representative List of the Intangible Cultural Heritage of Humanity in December 2021.',
  whatToExpect: [
    'Teams (called "sorba") of 7-15 horsemen line up at one end of a long, flat course (the "mehrek")',
    'On the team leader\'s signal, they charge at full gallop in a tight formation',
    'At the end of the course, they fire their muskets simultaneously, aiming for a single thunderous crack',
    'Perfect synchronization of the shots is the ultimate mark of skill and honor',
    'Teams compete throughout the day with judges scoring formation, speed, and firing precision',
    'Between charges, you can admire the horses, ornate saddles, and traditional costumes up close',
    'The atmosphere is festive with food stalls, music, and crowds of enthusiastic Moroccan families',
  ],
  whereToSee: [
    { event: 'Salon du Cheval (Horse Week)', location: 'El Jadida', when: 'October (annual)', description: 'The biggest equestrian event in Morocco and all of Africa. A full week of Tbourida competitions, horse shows, breeding exhibitions, and cultural events. The best place to see Tbourida at its finest with teams from all over Morocco competing.' },
    { event: 'Moussem of Moulay Abdallah', location: 'El Jadida', when: 'August (annual)', description: 'One of the largest traditional moussems (pilgrimages/festivals) in Morocco. Features intense Tbourida competitions alongside religious celebrations, markets, and communal feasting.' },
    { event: 'Moussem of Tan-Tan', location: 'Tan-Tan', when: 'June (UNESCO-listed)', description: 'A UNESCO Masterpiece of Oral Heritage. This nomadic gathering features Tbourida alongside camel races, traditional music, and Saharan cultural displays. A unique southern Moroccan experience.' },
    { event: 'Festival of Tbourida', location: 'Various cities', when: 'Rotating schedule', description: 'Dedicated Tbourida competitions held across Morocco throughout the year. Meknes, Fes, Marrakech, and smaller towns all host events. Check local schedules on arrival.' },
    { event: 'National Day / Throne Day', location: 'Major cities', when: 'July 30 / November 18', description: 'National celebrations often feature Tbourida displays, particularly in Rabat, Marrakech, and Fes. Free public events with a festive atmosphere.' },
    { event: 'Regional Moussems', location: 'Throughout rural Morocco', when: 'Year-round', description: 'Hundreds of local moussems across Morocco feature Tbourida as a central attraction. Ask locals about upcoming festivals in whatever region you are visiting. These smaller events are often the most authentic.' },
  ],
};

/* ===================================================================
   HORSE BREEDS
   =================================================================== */

const horseBreeds = [
  {
    name: 'Barb (Berber Horse)',
    origin: 'North Africa (Morocco is primary homeland)',
    characteristics: 'Compact, muscular build. Strong legs, hard hooves. Typically 14.2-15.2 hands. Colors: bay, grey, chestnut, black. Known for extraordinary stamina, sure-footedness on rocky terrain, and ability to thrive on minimal feed.',
    history: 'One of the oldest breeds in the world, dating back thousands of years. The Barb profoundly influenced European horse breeding, contributing to the Andalusian, Lusitano, and through them the Thoroughbred. The breed nearly disappeared in the 20th century but Moroccan breeding programs, especially the Royal Stud, have revived it.',
    ridingStyle: 'Versatile. Used for Tbourida, trail riding, endurance, and working. Responsive and intelligent but can be spirited. Excellent mountain horse.',
  },
  {
    name: 'Arab-Barb',
    origin: 'Morocco (crossbreed)',
    characteristics: 'Combines Arab refinement with Barb toughness. Slightly taller and more elegant than pure Barbs. Excellent endurance. 14.3-15.3 hands. Often bay or grey.',
    history: 'A deliberate cross developed over centuries to combine the beauty and speed of the Arabian with the hardiness and temperament of the Barb. Now the most common horse used for riding tourism in Morocco. Recognized as a distinct breed by Moroccan authorities.',
    ridingStyle: 'Ideal for tourism. Calm enough for beginners in trained examples, with enough spirit and stamina for advanced desert and mountain riding. The workhorse of Moroccan riding centers.',
  },
  {
    name: 'Arabian',
    origin: 'Arabian Peninsula (present in Morocco)',
    characteristics: 'Refined, dished face, high tail carriage. 14.1-15.1 hands. Known for speed, endurance, and intelligence. Colors: predominantly grey, bay, chestnut.',
    history: 'Imported to Morocco over many centuries through trade and conquest. Pure Arabians are less common than Barbs and Arab-Barbs in Morocco but are highly valued. The Royal Stud maintains quality Arabian breeding lines.',
    ridingStyle: 'Spirited and forward-moving. Best for experienced riders. Excellent for desert riding due to heat tolerance. Less sure-footed on rocky mountain trails than Barbs.',
  },
];

/* ===================================================================
   WHAT TO WEAR & BRING
   =================================================================== */

const whatToWear = [
  { item: 'Riding helmet', note: 'Most centers provide helmets but quality varies. Bring your own if you have one. Non-negotiable for safety.' },
  { item: 'Long trousers', note: 'Sturdy jeans or riding breeches. Never shorts. Fabric will rub and chafe against the saddle.' },
  { item: 'Closed-toe shoes or boots', note: 'Ankle boots with a small heel are ideal. Trainers can slip through stirrups dangerously. No sandals ever.' },
  { item: 'Sunscreen SPF 50+', note: 'You are fully exposed in the saddle with no shade. Reapply every 2 hours. Face, neck, ears, and hands.' },
  { item: 'Sunglasses with strap', note: 'Essential for desert and beach rides. A strap prevents losing them at canter.' },
  { item: 'Lightweight long sleeves', note: 'Sun protection and scratch protection from branches on mountain rides. Breathable fabric.' },
  { item: 'Hat or scarf for sun', note: 'Under your helmet if possible, or for when dismounted. Desert sun is relentless.' },
  { item: 'Water bottle', note: 'Minimum 1.5L for any ride over an hour. Dehydration happens fast in Morocco\'s heat.' },
  { item: 'Camera with secure strap', note: 'Many centers allow cameras on rides. Ensure it is securely attached to your body. Smartphones in zippered pockets.' },
  { item: 'Small backpack', note: 'For multi-hour rides: water, snacks, sunscreen, phone, camera. Must sit comfortably while riding.' },
];

/* ===================================================================
   SAFETY CONSIDERATIONS
   =================================================================== */

const safetyConsiderations = [
  'Always ride with a licensed, reputable operator. Ask about their safety record and horse welfare standards before booking.',
  'Wear a helmet on every ride regardless of what other riders do. Head injuries are the most common serious injury in horse riding.',
  'Be honest about your riding experience when booking. Overstating your ability puts you on a horse that may be too much for you.',
  'Listen carefully to the pre-ride safety briefing, even if you are an experienced rider. Different horses and terrains require different handling.',
  'Desert rides carry heat risk. Ensure you have adequate water, sun protection, and that the operator carries first aid supplies.',
  'Mountain rides involve steep, rocky terrain. Trust your horse on descents. Lean back, keep heels down, and let the horse pick its path.',
  'Check that the horses appear healthy, well-fed, and not over-worked. Look for signs of lameness, sores under the saddle, or tight bits. Support welfare-conscious operators.',
  'Travel insurance should specifically cover horse riding. Many standard policies exclude equestrian activities. Verify before you ride.',
  'Carry basic first aid: antiseptic, bandage, and any personal medications. In remote mountain and desert areas, medical help may be hours away.',
  'Inform someone of your route and expected return time, especially for multi-day treks in remote areas.',
];

/* ===================================================================
   CHILDREN & FAMILY RIDES
   =================================================================== */

const familyRides = [
  {
    name: 'Terres d\'Amanar',
    location: 'Tahannaout, Atlas foothills',
    minAge: '4 years (pony rides)',
    description: 'The best family riding option near Marrakech. Children from age 4 can enjoy supervised pony rides while adults take longer trail rides. The park also has zip lines, tree climbing, and eco-lodges, making it a full family adventure day.',
  },
  {
    name: 'Ranch de Diabat',
    location: 'Essaouira',
    minAge: '6 years (beach walks)',
    description: 'Children aged 6+ can join beach walk rides on lead-rein. Gentle horses, flat sand, and experienced guides. Children over 10 with riding experience can join standard beach rides. A magical experience for horse-loving kids.',
  },
  {
    name: 'Atlas Riding',
    location: 'Marrakech Palmeraie',
    minAge: '5 years',
    description: 'Pony rides through the palm groves for young children. Flat terrain, no traffic, and calm ponies selected for their temperament. Parents can ride alongside on adult horses. Short 30-minute sessions keep it fun for little ones.',
  },
  {
    name: 'Agadir Horse Riding',
    location: 'Agadir Beach',
    minAge: '5 years (lead-rein)',
    description: 'The wide, flat Agadir beach is ideal for children\'s first riding experience. Lead-rein walks along the waterline with gentle horses. Affordable and easy to arrange from Agadir beach hotels.',
  },
  {
    name: 'La Roseraie',
    location: 'Ouirgane',
    minAge: '8 years (valley rides)',
    description: 'Older children and teenagers can join valley rides through the Atlas foothills. The terrain is gentle enough for younger riders and the scenery is spectacular. Hotel pool for cooling off after riding.',
  },
];

/* ===================================================================
   PRICE RANGES
   =================================================================== */

const priceRanges = [
  { experience: '1-hour beach ride', budget: '300-400 MAD', midRange: '400-600 MAD', premium: '600-800 MAD', note: 'Price varies by location and operator reputation. Essaouira slightly more expensive than smaller beach towns.' },
  { experience: '2-hour trail ride', budget: '500-700 MAD', midRange: '700-1,000 MAD', premium: '1,000-1,500 MAD', note: 'Mountain and desert rides cost more than beach rides due to logistics and guide requirements.' },
  { experience: 'Half-day ride (4 hours)', budget: '800-1,200 MAD', midRange: '1,200-1,800 MAD', premium: '1,800-2,500 MAD', note: 'Includes lunch at most operators. Mountain half-days with Berber village lunch are popular.' },
  { experience: 'Full-day ride (6-8 hours)', budget: '1,200-1,800 MAD', midRange: '1,800-2,500 MAD', premium: '2,500-3,500 MAD', note: 'Full days usually include lunch, refreshments, and sometimes transport from your accommodation.' },
  { experience: 'Multi-day trek (per day)', budget: '1,000-1,500 MAD', midRange: '1,500-2,500 MAD', premium: '2,500-4,000 MAD', note: 'All-inclusive: riding, meals, accommodation, guide, support team. Premium includes luxury camping.' },
  { experience: 'Tbourida show (spectator)', budget: '0 MAD (free)', midRange: '0-200 MAD', premium: '200-500 MAD', note: 'Most moussems and festivals are free entry. Salon du Cheval in El Jadida charges a modest entrance fee.' },
];

/* ===================================================================
   COMBINED EXPERIENCES
   =================================================================== */

const combinedExperiences = [
  {
    name: 'Ride & Cook',
    description: 'Ride through the countryside to a Berber village, then join a traditional cooking class. Learn to make tagine, couscous, and Moroccan salads using local ingredients. Eat what you cooked for lunch before riding back. Available from Marrakech and Essaouira.',
    duration: 'Full day',
    price: 'From 1,500 MAD',
  },
  {
    name: 'Ride & Surf',
    description: 'Morning surf lesson at Taghazout or Sidi Kaouki, followed by an afternoon sunset horse ride along the same beach. The perfect Atlantic coast day for active travelers. Multiple operators in the Essaouira-Agadir stretch.',
    duration: 'Full day',
    price: 'From 1,200 MAD',
  },
  {
    name: 'Ride & Hammam',
    description: 'A morning ride through the Atlas foothills followed by a traditional hammam (steam bath) and massage in a luxury riad. Available from Ouirgane and Marrakech. The ultimate relaxation after hours in the saddle.',
    duration: 'Full day',
    price: 'From 1,800 MAD',
  },
  {
    name: 'Ride & Pottery',
    description: 'Ride from Ourika Valley to a traditional Berber pottery village. Watch master potters shape clay on hand-turned wheels, try your hand at pottery, then ride back through the valley. A unique cultural immersion.',
    duration: 'Half day',
    price: 'From 800 MAD',
  },
  {
    name: 'Ride & Stargazing',
    description: 'Evening desert ride to a remote bivouac in the Merzouga area, followed by a Berber dinner and expert-guided stargazing session under Saharan skies. The lack of light pollution makes the Milky Way spectacular.',
    duration: 'Evening to morning',
    price: 'From 2,000 MAD',
  },
  {
    name: 'Ride & Argan Experience',
    description: 'Ride through the argan forests between Essaouira and Agadir, stopping at a women\'s argan oil cooperative. Learn about the UNESCO-protected argan ecosystem and the oil production process. Sample argan oil with bread and honey.',
    duration: 'Half day',
    price: 'From 900 MAD',
  },
];

/* ===================================================================
   BEGINNER VS EXPERIENCED
   =================================================================== */

const riderLevels = [
  {
    level: 'Complete Beginner',
    description: 'Never ridden before or ridden only a handful of times. Cannot control a horse independently.',
    whatToExpect: 'You will be given the calmest, most experienced horse. A guide will lead your horse by a lead-rein for beach and gentle trail rides. You will learn basic steering and stopping. Rides are limited to walk pace with occasional gentle trot on flat ground. Beach walks and Palmeraie rides are ideal.',
    recommended: ['1-hour beach walk (Essaouira, Agadir)', 'Marrakech Palmeraie ride', 'Terres d\'Amanar gentle trail', 'Oualidia lagoon ride'],
  },
  {
    level: 'Novice / Beginner',
    description: 'Some riding experience. Can walk and trot independently. May have cantered in a controlled environment.',
    whatToExpect: 'You will ride independently but in a small group with an experienced guide. Beach rides at walk and trot, short mountain rides on well-established trails. Some operators will introduce cantering on the beach if conditions allow. Most standard 1-2 hour rides are accessible to you.',
    recommended: ['2-hour beach ride with trot (Essaouira)', 'Ourika Valley morning ride', 'Ouirgane gentle trail ride', 'Atlas foothills half-day'],
  },
  {
    level: 'Intermediate',
    description: 'Confident at walk, trot, and canter. Can handle horses in open terrain. Have ridden regularly or recently.',
    whatToExpect: 'Full access to most riding experiences. Extended beach gallops, mountain trail rides, and day-long desert rides. You can handle varied terrain and manage a spirited horse. Multi-day treks are accessible to confident intermediates with reasonable fitness.',
    recommended: ['Sunset gallop (Essaouira beach)', 'Atlas mountain full-day ride', 'Desert ride (Merzouga, half-day)', '3-day Atlas trek'],
  },
  {
    level: 'Advanced / Experienced',
    description: 'Highly confident rider. Comfortable at speed in open terrain. Can handle difficult horses and challenging conditions.',
    whatToExpect: 'The most exhilarating experiences Morocco offers. Long desert expeditions, challenging mountain passes, fast beach gallops, and multi-day treks through remote terrain. Operators will trust you with their best horses. The Trans-Atlas crossing, M\'hamid Sahara trek, and coast-to-mountain expeditions are within reach.',
    recommended: ['Multi-day desert expedition (M\'hamid)', 'Trans-Atlas 7-day crossing', 'Coast to Mountains 5-day ride', 'Anti-Atlas geological ride'],
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function HorseRidingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1920"
          alt="Horse riding on the beach in Essaouira, Morocco at sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1814]/70 via-[#1A1814]/50 to-[#1A1814]/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#C4960C]">Horse Riding</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Horse Riding &amp; Equestrian
            <span className="block text-[#C4960C]">Tourism in Morocco</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Gallop along Atlantic beaches at sunset, trek through Atlas mountain villages,
            ride to the edge of the Sahara, and witness the thundering spectacle of Tbourida.
            Morocco&apos;s equestrian heritage runs deep.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
              <Waves className="w-4 h-4 text-[#C4960C]" /> Beach Rides
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
              <Mountain className="w-4 h-4 text-[#C4960C]" /> Mountain Treks
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
              <Sun className="w-4 h-4 text-[#C4960C]" /> Desert Rides
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
              <Flag className="w-4 h-4 text-[#C4960C]" /> Tbourida Shows
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          MOROCCO'S EQUESTRIAN HERITAGE
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Morocco&apos;s Deep Equestrian Heritage
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Horses have been central to Moroccan culture, warfare, celebration, and daily life
            for over a thousand years. The bond between Moroccans and their horses is unlike
            anywhere else in the world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equestrianHeritage.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TYPES OF RIDING EXPERIENCES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Types of Riding Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From gentle beach walks to week-long desert expeditions, Morocco offers riding
            experiences for every taste and ability.
          </p>

          <div className="space-y-16">
            {ridingExperiences.map((exp, index) => (
              <div key={exp.id} id={exp.id} className="scroll-mt-24">
                <div className="card-moroccan overflow-hidden">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Image */}
                    <div className="lg:w-2/5 relative h-64 lg:h-auto min-h-[320px]">
                      <img
                        src={exp.image}
                        alt={`${exp.name} horse riding in Morocco`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
                          <Clock className="w-3.5 h-3.5" /> {exp.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
                          <CircleDollarSign className="w-3.5 h-3.5" /> {exp.price}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span
                          className="px-3 py-1 rounded-full text-white text-xs font-bold"
                          style={{ backgroundColor: exp.difficultyColor }}
                        >
                          {exp.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="lg:w-3/5 p-6 lg:p-8">
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                        {exp.name}
                      </h3>
                      <p className="text-sm font-medium text-[var(--color-primary)] mb-4">{exp.subtitle}</p>
                      <p className="text-[var(--text-secondary)] leading-relaxed mb-5">{exp.description}</p>

                      {/* Highlights */}
                      <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3 uppercase tracking-wider">Top Locations</h4>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {exp.highlights.map((h) => (
                          <span key={h} className="tag tag-primary">
                            <MapPin className="w-3 h-3 mr-1" />
                            {h}
                          </span>
                        ))}
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                        <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                          <h5 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1 flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> Locations
                          </h5>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{exp.locations}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                          <h5 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> Best Time
                          </h5>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{exp.bestTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TOP RIDING CENTERS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Top Riding Centers &amp; Operators
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            {ridingCenters.length} vetted riding operators across Morocco, from established beach
            ranches to specialist mountain and desert outfitters.
          </p>
          <div className="space-y-4">
            {ridingCenters.map((center) => (
              <div key={center.name} className="card-moroccan p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-shrink-0 lg:w-64">
                    <h3 className="font-bold text-[var(--text-primary)] text-lg">{center.name}</h3>
                    <p className="text-xs text-[var(--color-primary)] font-medium flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> {center.location}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">{center.established}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">{center.level}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] font-medium">{center.price}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1">
                      {center.speciality}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{center.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TBOURIDA / FANTASIA
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Tbourida / Fantasia Shows
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s most electrifying equestrian tradition, inscribed on UNESCO&apos;s
            Intangible Cultural Heritage list.
          </p>
          <p className="text-center text-xs font-semibold text-[var(--color-primary)] mb-12">
            <Award className="w-4 h-4 inline mr-1" />
            {tbouridaInfo.unescoStatus}
          </p>

          {/* Description */}
          <div className="card-moroccan p-6 lg:p-8 mb-8">
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
              {tbouridaInfo.description}
            </p>
          </div>

          {/* What to Expect */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[var(--color-primary)]" /> What to Expect
            </h3>
            <div className="space-y-3">
              {tbouridaInfo.whatToExpect.map((item, index) => (
                <div key={index} className="card-moroccan p-4 flex items-start gap-3">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-primary)]/10 shrink-0">
                    <span className="text-xs font-bold text-[var(--color-primary)]">{index + 1}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Where to See */}
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[var(--color-primary)]" /> Where &amp; When to See Tbourida
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tbouridaInfo.whereToSee.map((event) => (
                <div key={event.event} className="card-moroccan p-5">
                  <h4 className="font-bold text-[var(--text-primary)] mb-1">{event.event}</h4>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {event.location}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] font-medium flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {event.when}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BEGINNER VS EXPERIENCED
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Beginner vs Experienced Rider Options
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has something for every rider, from first-timers to seasoned equestrians.
            Here is what to expect at each level.
          </p>
          <div className="space-y-6">
            {riderLevels.map((level) => (
              <div key={level.level} className="card-moroccan p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{level.level}</h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-3">{level.description}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{level.whatToExpect}</p>
                <div>
                  <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">Recommended Experiences</h4>
                  <div className="flex flex-wrap gap-2">
                    {level.recommended.map((rec) => (
                      <span key={rec} className="tag tag-primary">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {rec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          HORSE BREEDS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Horse Breeds in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is home to some of the oldest and most historically significant horse breeds
            in the world.
          </p>
          <div className="space-y-6">
            {horseBreeds.map((breed) => (
              <div key={breed.name} className="card-moroccan p-6 lg:p-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{breed.name}</h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-4">Origin: {breed.origin}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2 flex items-center gap-1">
                      <Info className="w-3 h-3" /> Characteristics
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{breed.characteristics}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2 flex items-center gap-1">
                      <BookOpen className="w-3 h-3" /> History
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{breed.history}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2 flex items-center gap-1">
                      <Compass className="w-3 h-3" /> Riding Style
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{breed.ridingStyle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT TO WEAR & BRING
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            What to Wear &amp; Bring
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Proper preparation makes the difference between a comfortable ride and a miserable one.
          </p>
          <div className="card-moroccan p-6 lg:p-8">
            <ul className="space-y-4">
              {whatToWear.map((item) => (
                <li key={item.item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[var(--text-primary)]">{item.item}</span>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================
          SAFETY CONSIDERATIONS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Safety Considerations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Horse riding carries inherent risk. These precautions will help ensure a safe
            and enjoyable experience.
          </p>
          <div className="space-y-3">
            {safetyConsiderations.map((rule, index) => (
              <div key={index} className="card-moroccan p-5 flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-secondary)]/10 shrink-0">
                  <span className="text-xs font-bold text-[var(--color-secondary)]">{index + 1}</span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CHILDREN & FAMILY RIDES
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Children &amp; Family Rides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Several Moroccan riding operators specialize in family-friendly experiences with
            gentle horses and patient guides for young riders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {familyRides.map((ride) => (
              <div key={ride.name} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-1">{ride.name}</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {ride.location}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] font-medium flex items-center gap-1">
                    <Users className="w-3 h-3" /> Min age: {ride.minAge}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{ride.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PRICE RANGES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Price Ranges by Experience Type
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What riding in Morocco actually costs across different experience types and budgets.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)]/10">
                    <th className="text-left p-4 font-bold text-[var(--text-primary)]">Experience</th>
                    <th className="text-center p-4 font-bold text-[var(--text-primary)]">Budget</th>
                    <th className="text-center p-4 font-bold text-[var(--text-primary)]">Mid-Range</th>
                    <th className="text-center p-4 font-bold text-[var(--text-primary)]">Premium</th>
                    <th className="text-left p-4 font-bold text-[var(--text-primary)] hidden lg:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {priceRanges.map((item, index) => (
                    <tr key={item.experience} className={index % 2 === 0 ? 'bg-[var(--surface-muted)]' : ''}>
                      <td className="p-4 font-semibold text-[var(--text-primary)]">{item.experience}</td>
                      <td className="p-4 text-center text-[var(--text-secondary)]">{item.budget}</td>
                      <td className="p-4 text-center text-[var(--text-secondary)]">{item.midRange}</td>
                      <td className="p-4 text-center text-[var(--text-secondary)]">{item.premium}</td>
                      <td className="p-4 text-[var(--text-muted)] text-xs hidden lg:table-cell">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-[var(--border-light)] bg-[var(--color-primary)]/5">
              <p className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Tip:</strong>{' '}
                Book directly with operators for the best rates. Hotel concierges and tour agencies
                typically add a 20-40% commission. Prices listed in MAD (Moroccan Dirham).
                1 EUR = approximately 11 MAD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          COMBINED EXPERIENCES
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Combined Riding &amp; Cultural Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Combine horseback riding with Morocco&apos;s rich cultural offerings for truly
            memorable experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {combinedExperiences.map((exp) => (
              <div key={exp.name} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-2 text-lg">{exp.name}</h3>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {exp.duration}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] font-medium flex items-center gap-1">
                    <CircleDollarSign className="w-3 h-3" /> {exp.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <Compass className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Ride Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Whether you dream of galloping along sunset beaches or trekking through Atlas
            mountain villages, Morocco&apos;s horses are waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/activities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Star className="w-4 h-4" /> More Activities
            </Link>
            <Link
              href="/adventure"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Mountain className="w-4 h-4" /> Adventure Guide
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Clock className="w-4 h-4" /> Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
