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
  Building,
  Award,
  BookOpen,
  Compass,
  Eye,
  Users,
  Camera,
  Navigation,
  Layers,
  Map,
  Footprints,
  MessageCircle,
  Sun,
  Moon,
  Shield,
  Smartphone,
  Landmark,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Medina Tips 2026 | How to Navigate & Explore Old Towns',
  description:
    'Complete guide to navigating Moroccan medinas: how to not get lost, medina layout explained, best medinas in Fes, Marrakech, Chefchaouen, Essaouira & Tetouan. Dealing with touts, photography tips, safety advice, and best times to explore.',
  keywords: [
    'navigating Moroccan medina',
    'medina tips Morocco',
    'how to not get lost in medina',
    'Morocco old town guide',
    'Fes medina navigation',
    'Marrakech medina tips',
    'Chefchaouen medina guide',
    'medina layout explained',
    'Morocco medina safety',
    'photography in Moroccan medina',
    'best medinas Morocco',
    'medina walking tips',
    'dealing with touts Morocco',
    'Morocco medina etiquette',
    'Essaouira medina guide',
    'Tetouan medina UNESCO',
  ],
  alternates: {
    canonical: `${BASE_URL}/morocco-medina-tips`,
  },
  openGraph: {
    title: 'Morocco Medina Tips 2026 | How to Navigate & Explore Old Towns',
    description:
      'Complete guide to navigating Moroccan medinas: how to not get lost, layout explained, best medinas by city, dealing with touts, photography tips, and safety advice.',
    url: `${BASE_URL}/morocco-medina-tips`,
    siteName: 'CityGuide Morocco',
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-medina.webp`,
        width: 1200,
        height: 630,
        alt: 'Narrow alley in a Moroccan medina with traditional architecture',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Medina Tips 2026 | How to Navigate & Explore Old Towns',
    description:
      'How to navigate Moroccan medinas without getting lost. Best medinas, safety tips, photography etiquette, and dealing with touts.',
    images: [`${BASE_URL}/images/hero-morocco-medina.webp`],
  },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-medina-tips`,
  name: 'Morocco Medina Tips 2026 | How to Navigate & Explore Old Towns',
  description:
    'Complete guide to navigating Moroccan medinas with navigation strategies, best medinas by city, safety tips, photography etiquette, and dealing with touts.',
  url: `${BASE_URL}/morocco-medina-tips`,
  image: `${BASE_URL}/images/hero-morocco-medina.webp`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-medina-tips`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Medina Tips', item: `${BASE_URL}/morocco-medina-tips` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a medina in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A medina is the historic old town or walled city center found in every major Moroccan city. The word means "city" in Arabic. Medinas were built centuries ago within defensive walls and feature narrow winding alleys, mosques, souks, riads, and traditional architecture. They are car-free zones where donkeys and handcarts serve as transport.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I avoid getting lost in a Moroccan medina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Download an offline map (Google Maps or Maps.me) before entering. Identify key landmarks like mosques, fountains, and gates. Follow main thoroughfares rather than side alleys. Carry your riad business card. Look for colored directional signs installed in major medinas. Walk downhill to find main arteries, as medinas often slope toward central squares.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Moroccan medina is the best to visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fes el-Bali is the largest and most authentic medieval medina, a UNESCO World Heritage Site with 9,000+ alleys. Marrakech is the most vibrant and tourist-friendly. Chefchaouen is the most photogenic with its blue-painted walls. Essaouira is the easiest to navigate with its compact grid. Tetouan has the most authentic Andalusian architecture.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to walk in a Moroccan medina at night?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Main medina thoroughfares and well-lit areas near restaurants and riads are safe at night. Avoid poorly lit side alleys after dark. The medinas of Marrakech, Essaouira, and Chefchaouen feel safest at night due to tourist activity. Fes medina is quieter after dark and best navigated with a known route. Tourist police patrol major medinas.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I deal with touts and unofficial guides in the medina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Say "la shukran" (no thank you) firmly but politely and keep walking. Do not make eye contact or engage in conversation. If someone insists on guiding you, state clearly that you do not need help. Unofficial guides who follow you expect payment. Hire an official guide with a badge from the tourist office if you want a guided experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take photos in a Moroccan medina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can freely photograph architecture, doorways, alleys, and general street scenes. Always ask permission before photographing people, especially women and children. Some artisans expect a small tip (5-10 MAD) for posing. Never photograph near military or government buildings. Mosques are off-limits to non-Muslims for both entry and interior photography.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of day to explore a Moroccan medina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Early morning (8-10 AM) offers the best light for photography, cooler temperatures, and fewer crowds. Late afternoon (4-6 PM) brings golden light and a second wave of activity as the heat subsides. Avoid midday (12-2 PM) when many shops close and heat peaks. Friday afternoons are quiet as many vendors attend prayers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a Moroccan medina laid out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan medinas follow a concentric layout. The main mosque sits at the center, surrounded by the commercial souks organized by trade. Residential neighborhoods fan outward from the commercial core. Main gates (babs) in the walls connect the medina to the modern city. Major arteries lead from the gates inward to the central mosque and square.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I hire a guide for the medina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For Fes el-Bali, hiring an official guide (from 300 MAD for a half day) is highly recommended on your first visit as the layout is genuinely disorienting. For Marrakech, a guide is optional but helpful for finding hidden gems. Chefchaouen and Essaouira are easy enough to explore independently. Always use official guides with government badges from the tourist office.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT IS A MEDINA
   ═══════════════════════════════════════════════════════════════ */

const medinaFeatures = [
  {
    feature: 'Defensive Walls & Gates (Babs)',
    icon: Shield,
    text: 'Every medina is enclosed by ancient ramparts with monumental gates called babs. These gates are your primary navigation anchors. Major cities have 10-20 named gates, each leading to a different quarter. The most famous include Bab Boujloud in Fes and Bab Agnaou in Marrakech.',
  },
  {
    feature: 'Central Mosque & Square',
    icon: Landmark,
    text: 'The Friday mosque (jama) sits at the heart of every medina. The commercial souks radiate outward from it. This central hub is your compass. When lost, ask for the "jama el-kebir" (grand mosque) and you will reach the medina center from any direction.',
  },
  {
    feature: 'Souks Organized by Trade',
    icon: Layers,
    text: 'Traditional souks cluster by craft: leather workers, metalworkers, spice sellers, and textile merchants each occupy their own zone. This medieval trade guild system survives today and helps you navigate. Once you recognize the zones, you can orient yourself by what is being sold around you.',
  },
  {
    feature: 'Fondouks (Caravanserais)',
    icon: Building,
    text: 'Historic inns with central courtyards where merchants once stored goods and camels. Many fondouks now house artisan workshops. They are quiet oases within the medina bustle and make excellent landmarks because their large wooden doors are easy to spot.',
  },
  {
    feature: 'Residential Derbs (Dead-End Alleys)',
    icon: Map,
    text: 'Side alleys called derbs branch off main routes and typically dead-end at private homes. These are the alleys that trap tourists. If an alley narrows to less than a meter and you see laundry overhead with no shops, you have entered a residential derb. Turn back to the main route.',
  },
  {
    feature: 'Fountains & Public Ovens',
    icon: Star,
    text: 'Ornate sebil fountains and communal bread ovens (ferran) mark neighborhood centers within the medina. Both are excellent landmarks because they are permanent, distinctive, and known to every local. Ask for the nearest ferran or sebil when reorienting.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: NAVIGATION STRATEGIES
   ═══════════════════════════════════════════════════════════════ */

const navigationStrategies = [
  {
    title: 'Download Offline Maps Before You Enter',
    icon: Smartphone,
    text: 'Download Google Maps or Maps.me for offline use while still connected to Wi-Fi. GPS works inside medinas even without cell data. Pin your riad location, the nearest gate, and any landmarks you want to find. Maps.me often has better detail for narrow medina alleys than Google Maps.',
  },
  {
    title: 'Follow Main Arteries, Not Side Alleys',
    icon: Navigation,
    text: 'Every medina has 2-4 main thoroughfares connecting major gates to the central mosque and square. These arteries are wider, busier, and lined with shops. Stick to them until you gain confidence. Side alleys are where tourists get lost. If a passage narrows and empties of shops, return to the main route.',
  },
  {
    title: 'Use Landmarks, Not Street Names',
    icon: Compass,
    text: 'Medina alleys rarely have visible street signs. Navigate by mosques (listen for the call to prayer), fountains, painted gates, open squares, and distinctive shops. The call to prayer sounds loudest near your closest mosque, giving you a directional anchor five times daily.',
  },
  {
    title: 'Walk Downhill When Lost',
    icon: Footprints,
    text: 'Most Moroccan medinas are built on slopes with the central area at the lowest point. When disoriented, walk downhill and you will typically reach a main artery or familiar square. This works especially well in Fes, where water channels historically flowed downhill to the tanneries.',
  },
  {
    title: 'Follow Locals, Not Other Tourists',
    icon: Users,
    text: 'Local residents walk with purpose through medina alleys they know by heart. Follow a woman carrying groceries or a child heading to school and you will reach a main route faster than following tourist groups. Locals take the most efficient paths through the maze.',
  },
  {
    title: 'Look for Colored Directional Signs',
    icon: Eye,
    text: 'Fes, Marrakech, and Tetouan have installed colored arrow signs on walls pointing toward major gates, attractions, and exits. In Fes, blue arrows point toward Bab Boujloud. In Marrakech, signs point toward Jemaa el-Fna. Follow these when you need to reorient quickly.',
  },
  {
    title: 'Carry Your Riad Business Card',
    icon: Building,
    text: 'Always keep your riad or hotel card with its address and phone number. If you get truly lost, show the card to any shopkeeper and they will point you in the right direction. Most riad staff can also talk you back on the phone using landmarks near your position.',
  },
  {
    title: 'Embrace Getting Slightly Lost',
    icon: Heart,
    text: 'Getting gently lost is part of the medina experience. The most beautiful doorways, hidden courtyards, and quiet tea shops are found when you wander off the beaten path. As long as you have your offline map and riad card, you are never truly lost, just exploring.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST MEDINAS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const bestMedinas = [
  {
    city: 'Fes el-Bali',
    icon: Award,
    tagline: 'The World\'s Largest Car-Free Urban Zone',
    image: '/images/hero-fes-medina.webp',
    difficulty: 'Challenging',
    unescoYear: '1981',
    highlights: [
      { name: 'Chouara Tanneries', detail: 'Iconic leather dyeing pits visible from surrounding terraces' },
      { name: 'Al-Qarawiyyin Mosque', detail: 'Founded 859 AD; the world\'s oldest continuously operating university' },
      { name: 'Bab Boujloud', detail: 'The famous blue gate and main entry point to the medina' },
      { name: 'Talaa Kebira', detail: 'The main artery descending from Bab Boujloud to the medina center' },
    ],
    description:
      'Fes el-Bali is the largest medina in North Africa and the most intact medieval city in the Arab world. Over 9,000 narrow alleys wind through a labyrinth where donkeys replace delivery trucks and artisans practice crafts unchanged for centuries. The medina has no cars, no motorcycles (officially), and some passages are barely shoulder-width. It is genuinely disorienting on a first visit.',
    tip: 'Hire an official guide (from 300 MAD half day) for your first visit. After one guided walk, you will understand the main routes well enough to explore independently. Use Talaa Kebira as your spine and branch off from there.',
  },
  {
    city: 'Marrakech',
    icon: Star,
    tagline: 'The Vibrant Red City Medina',
    image: '/images/hero-marrakech.webp',
    difficulty: 'Moderate',
    unescoYear: '1985',
    highlights: [
      { name: 'Jemaa el-Fna', detail: 'The famous central square with food stalls and performers' },
      { name: 'Ben Youssef Madrasa', detail: 'Stunning 14th-century Islamic college with intricate stucco' },
      { name: 'Bahia Palace', detail: 'Grand 19th-century palace with beautiful gardens and mosaics' },
      { name: 'Souk Semmarine', detail: 'The main souk artery radiating north from Jemaa el-Fna' },
    ],
    description:
      'Marrakech medina is the most visited in Morocco and the most tourist-friendly. Jemaa el-Fna serves as an unmistakable central anchor point that you can always navigate back to. The northern medina contains the dense souk network while the southern section holds palaces, the mellah (Jewish quarter), and quieter residential zones. Wider streets and better signage make navigation easier than Fes.',
    tip: 'Use Jemaa el-Fna as your compass. All main routes eventually lead back to the square. The Koutoubia Mosque minaret is visible from many points and always tells you which direction the square lies.',
  },
  {
    city: 'Chefchaouen',
    icon: Eye,
    tagline: 'The Blue Pearl of the Rif',
    image: '/images/hero-chefchaouen-streets.webp',
    difficulty: 'Easy',
    unescoYear: 'Not UNESCO (cultural heritage site)',
    highlights: [
      { name: 'Place Outa el-Hammam', detail: 'Central square with the kasbah, cafes, and shady trees' },
      { name: 'Blue-Painted Alleys', detail: 'The iconic blue-washed walls and stairways throughout the medina' },
      { name: 'Ras el-Maa', detail: 'Natural spring and waterfall at the eastern edge of the medina' },
      { name: 'Spanish Mosque Viewpoint', detail: 'Short hike above the medina for panoramic photos at sunset' },
    ],
    description:
      'Chefchaouen has one of the most charming and navigable medinas in Morocco. The compact size means you can walk from one end to the other in 15 minutes. Every alley is painted in distinctive shades of blue, creating one of the most photogenic settings in the country. The gentle atmosphere, lack of aggressive touts, and manageable scale make it ideal for medina first-timers.',
    tip: 'Enter through the main gate near Place Outa el-Hammam. The medina slopes uphill toward Ras el-Maa in the east. You genuinely cannot get lost here for more than a few minutes due to the compact size.',
  },
  {
    city: 'Essaouira',
    icon: Compass,
    tagline: 'The Compact Coastal Medina',
    image: '/images/hero-essaouira.webp',
    difficulty: 'Easy',
    unescoYear: '2001',
    highlights: [
      { name: 'Skala de la Ville', detail: 'Sea-facing ramparts with cannons and panoramic ocean views' },
      { name: 'Port & Fish Market', detail: 'Active fishing port where you choose fresh fish grilled on the spot' },
      { name: 'Avenue de l\'Istiqlal', detail: 'Main commercial street bisecting the medina with shops and cafes' },
      { name: 'Mellah Quarter', detail: 'Former Jewish quarter with distinctive architecture and star motifs' },
    ],
    description:
      'Essaouira medina is uniquely easy to navigate because it follows a grid pattern rather than the typical medina maze. Built in the 18th century by a French architect, streets are wider and more orderly than other Moroccan medinas. The Atlantic Ocean on one side and ramparts on the others provide constant orientation. The relaxed, wind-swept atmosphere makes it a stress-free medina experience.',
    tip: 'Use the ocean as your compass. Walk toward the sound of waves and you reach the ramparts. Avenue de l\'Istiqlal bisects the medina east-west, making it an easy spine to navigate from.',
  },
  {
    city: 'Tetouan',
    icon: Landmark,
    tagline: 'The Andalusian White Medina',
    image: '/images/hero-tetouan.webp',
    difficulty: 'Moderate',
    unescoYear: '1997',
    highlights: [
      { name: 'Place Hassan II', detail: 'Grand royal square at the medina entrance with the royal palace' },
      { name: 'Bab el-Okla', detail: 'Main gate leading into the medina from the modern city' },
      { name: 'Mellah Quarter', detail: 'Historic Jewish quarter with Andalusian-style houses and balconies' },
      { name: 'Artisan School', detail: 'Traditional crafts school where you can watch zellige and woodworking' },
    ],
    description:
      'Tetouan medina is a UNESCO World Heritage Site and one of the most authentic in Morocco because it sees far fewer tourists than Fes or Marrakech. The architecture is distinctly Andalusian: whitewashed walls, wrought-iron balconies, and Spanish-influenced tile work reflect the city\'s history as a refuge for Muslims and Jews expelled from Spain. The medina is mid-sized and moderately challenging to navigate.',
    tip: 'Enter via Bab el-Okla near Place Hassan II. The medina fans out from this gate in a semicircle. Tetouan locals are notably friendly and will help you with directions without expecting payment.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DEALING WITH TOUTS
   ═══════════════════════════════════════════════════════════════ */

const toutTips = [
  {
    title: 'Say "La Shukran" and Keep Walking',
    icon: MessageCircle,
    text: 'A firm "la shukran" (no thank you) with a smile and continued walking is the most effective response. Do not stop, do not make eye contact, and do not engage in conversation. Stopping to explain you do not need help invites further persistence.',
  },
  {
    title: 'Do Not Accept Unsolicited Directions',
    icon: Navigation,
    text: 'If someone approaches offering to show you the way to a landmark or your riad, politely decline. Unsolicited guides expect payment (from 50-100 MAD) even if you did not ask for help. Use your offline map instead or ask a seated shopkeeper who cannot follow you.',
  },
  {
    title: 'Hire Official Guides Only',
    icon: Award,
    text: 'Official guides carry a government-issued badge with their photo and license number. Book through your riad or the local tourist office (Delegation du Tourisme). Official guides charge fixed rates (from 300 MAD for a half day) and provide genuine knowledge without commission-driven shop detours.',
  },
  {
    title: 'Beware the "It\'s Closed" Trick',
    icon: AlertTriangle,
    text: 'Someone near a monument or your riad tells you it is "closed today" and offers to take you somewhere else. This is always false. Walk past them and check for yourself. The person earns a commission from the alternative venue they redirect you to.',
  },
  {
    title: 'Walk With Confidence and Purpose',
    icon: Footprints,
    text: 'Touts target people who look lost or hesitant. Even if you are unsure of your route, walk at a steady pace and look straight ahead. Confident walkers attract far less attention than those who stop at every intersection to check their phone or look around.',
  },
  {
    title: 'Know That Touts Are Not Dangerous',
    icon: ShieldCheck,
    text: 'Unofficial guides and touts can be annoying but they are not dangerous. They are trying to earn a living. A firm refusal is all that is needed. If someone persists, step into any shop and the shopkeeper will typically shoo them away. Do not let touts diminish your medina experience.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY TIPS
   ═══════════════════════════════════════════════════════════════ */

const photographyTips = [
  {
    title: 'Always Ask Before Photographing People',
    icon: Camera,
    text: 'This is the most important photography rule in Moroccan medinas. Always ask permission before taking photos of individuals, especially women and children. A polite "mumkin sura?" (may I take a photo?) goes a long way. Some people will decline, and that must be respected.',
  },
  {
    title: 'Expect Tips for Portrait Photography',
    icon: Heart,
    text: 'If someone agrees to pose for you, a tip of 5-10 MAD is customary and appreciated. Water sellers, snake charmers, and henna artists in Marrakech specifically expect payment. This is their livelihood. Sneaking photos without paying is considered disrespectful.',
  },
  {
    title: 'Architecture Is Always Fair Game',
    icon: Building,
    text: 'Doorways, archways, tile work, carved plaster, painted walls, and general street scenes can be freely photographed. Moroccan medinas are extraordinarily photogenic and you will not run out of architectural subjects. Early morning and late afternoon light creates the best shadows and colors.',
  },
  {
    title: 'Avoid Photographing Military and Religious Sites',
    icon: Shield,
    text: 'Never photograph near military installations, police stations, or government buildings. Mosques are off-limits to non-Muslims for both entry and interior photography. You can photograph mosque exteriors and minarets from the street without issue.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST TIMES TO EXPLORE
   ═══════════════════════════════════════════════════════════════ */

const bestTimes = [
  {
    time: 'Early Morning (8:00-10:00 AM)',
    icon: Sun,
    atmosphere: 'Quiet, golden light, locals opening shops',
    advantages: 'Fewest tourists, best photography light, cool temperatures, watch the medina wake up. Some vendors offer better prices on the first sale of the day for good luck.',
    bestFor: 'Photography, peaceful exploration, getting oriented',
  },
  {
    time: 'Late Morning (10:00 AM-12:00 PM)',
    icon: Clock,
    atmosphere: 'Active, souks in full swing, moderate crowds',
    advantages: 'All shops open, full range of merchandise displayed, artisans at work. Enough activity to feel the medina energy without overwhelming crowds.',
    bestFor: 'Shopping, visiting artisan workshops, souk exploration',
  },
  {
    time: 'Midday (12:00-3:00 PM)',
    icon: AlertTriangle,
    atmosphere: 'Hot, many shops closed, quiet during Friday prayers',
    advantages: 'Fewer people means easier navigation and photography of architecture. However, heat can be oppressive May-September. Many shops close for lunch and prayer.',
    bestFor: 'Riad rest, lunch, avoiding the heat',
  },
  {
    time: 'Late Afternoon (4:00-6:00 PM)',
    icon: Moon,
    atmosphere: 'Golden hour, second wave of activity, cooling down',
    advantages: 'Beautiful warm light for photography, vendors reopening, locals doing evening errands. The most magical atmosphere as the heat breaks and shadows lengthen.',
    bestFor: 'Photography, shopping, rooftop terrace cafes',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MEDINA SAFETY
   ═══════════════════════════════════════════════════════════════ */

const safetyTips = [
  {
    title: 'Keep Valuables in Front Pockets or Crossbody Bags',
    text: 'Pickpocketing is rare but possible in crowded souks. Use a crossbody bag worn across your front, or keep your phone and wallet in zipped front pockets. Avoid back pockets and open handbags in busy areas.',
  },
  {
    title: 'Stick to Main Routes After Dark',
    text: 'Well-lit main thoroughfares and areas near restaurants and riads are safe at night. Avoid unlit side alleys after dark. The medinas of Marrakech and Essaouira feel safest at night due to tourist activity. Fes medina is quieter after dark.',
  },
  {
    title: 'Watch for Motorbikes and Donkeys',
    text: 'Despite being car-free, medinas are not vehicle-free. Motorbikes weave through alleys (especially in Marrakech) and donkeys carry loads in Fes. When you hear a horn or "balak!" (watch out), press against the wall to let them pass.',
  },
  {
    title: 'Wear Comfortable, Closed-Toe Shoes',
    text: 'Medina surfaces are uneven cobblestones, sometimes wet and slippery. Flip-flops and heels are impractical. Sturdy walking shoes or sandals with good grip are essential. You will walk 8-15 km on a typical medina exploration day.',
  },
  {
    title: 'Tourist Police Patrol Major Medinas',
    text: 'Morocco has dedicated tourist police (Brigade Touristique) in Fes, Marrakech, and other major cities. They patrol medinas and can help if you feel harassed. Look for officers in uniform near major gates and landmarks.',
  },
  {
    title: 'Dress Modestly for Respect and Comfort',
    text: 'Cover shoulders and knees in medinas out of respect for local culture. Modest dress also reduces unwanted attention. Women do not need to cover their hair. Lightweight, breathable fabrics in neutral colors work best.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What is a medina in Morocco?',
    answer:
      'A medina is the historic old town or walled city center found in every major Moroccan city. The word means "city" in Arabic. Medinas were built centuries ago within defensive walls and feature narrow winding alleys, mosques, souks (markets), riads (traditional houses), and architecture largely unchanged for hundreds of years. They are car-free zones where donkeys and handcarts serve as the primary transport.',
  },
  {
    question: 'How do I avoid getting lost in a Moroccan medina?',
    answer:
      'Download an offline map (Google Maps or Maps.me) before entering. Identify key landmarks: mosques, fountains, decorated gates, and open squares. Follow main thoroughfares rather than narrow side alleys. Carry your riad or hotel business card with its address. Look for colored directional signs installed in major medinas like Fes and Marrakech. When lost, walk downhill to find main arteries.',
  },
  {
    question: 'Which Moroccan medina is the best to visit?',
    answer:
      'It depends on what you want. Fes el-Bali is the largest and most authentic medieval medina, with 9,000+ alleys and a UNESCO listing. Marrakech is the most vibrant and tourist-friendly. Chefchaouen is the most photogenic with blue-painted walls. Essaouira is the easiest to navigate with its compact grid layout. Tetouan has the most authentic Andalusian architecture. Most travelers visit at least two.',
  },
  {
    question: 'Is it safe to walk in a Moroccan medina at night?',
    answer:
      'Main thoroughfares and areas near restaurants and riads are safe at night. Avoid poorly lit side alleys after dark. Marrakech, Essaouira, and Chefchaouen feel safest at night due to tourist activity. Fes medina is quieter after dark. Tourist police patrol major medinas. Overall, Moroccan medinas are safe spaces, but standard travel precautions apply.',
  },
  {
    question: 'How do I deal with touts and unofficial guides?',
    answer:
      'Say "la shukran" (no thank you) firmly but politely and keep walking without stopping. Do not engage in conversation or make eye contact. If you want a guided tour, hire an official guide with a government badge from the tourist office or through your riad. Official guides charge from 300 MAD for a half day and provide genuine historical knowledge.',
  },
  {
    question: 'Can I take photos in a Moroccan medina?',
    answer:
      'Architecture, doorways, tile work, and general street scenes can be freely photographed. Always ask permission before photographing people, especially women and children. A tip of 5-10 MAD is customary when someone poses for you. Never photograph near military or government buildings. Mosque interiors are off-limits but exteriors and minarets are fine.',
  },
  {
    question: 'What is the best time of day to explore a medina?',
    answer:
      'Early morning (8-10 AM) offers the best photography light, cooler temperatures, and fewer crowds. Late afternoon (4-6 PM) brings golden light and renewed activity as the heat breaks. Avoid midday (12-2 PM) when heat peaks and many shops close. Friday afternoons are quiet due to prayer. Each time of day offers a different medina atmosphere.',
  },
  {
    question: 'How is a Moroccan medina laid out?',
    answer:
      'Medinas follow a concentric layout. The main mosque sits at the center, surrounded by commercial souks organized by trade. Residential neighborhoods fan outward from the commercial core. Gates (babs) in the defensive walls connect the medina to the modern city. Main arteries lead from the gates to the center. Side alleys (derbs) branch off and often dead-end at private homes.',
  },
  {
    question: 'Should I hire a guide for the medina?',
    answer:
      'For Fes el-Bali, an official guide is highly recommended on your first visit (from 300 MAD for a half day) because the layout is genuinely disorienting. Marrakech is optional but helpful for hidden gems. Chefchaouen and Essaouira are easy to explore independently. Always use official guides with government badges. Book through your riad or the local Delegation du Tourisme.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoMedinaTipsPage() {
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
          style={{ backgroundImage: 'url(/images/hero-morocco-medina.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Medina Tips</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Navigation &amp; Exploration
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Medina Tips:
            <br className="hidden md:block" /> Navigate, Explore &amp; Enjoy
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            How to navigate Morocco&apos;s ancient walled cities without getting lost. Best medinas
            by city, dealing with touts, photography etiquette, safety tips, and the art of embracing the maze.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              What Is a Medina and Why Does It Matter?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                A medina is the historic walled heart of a Moroccan city, a labyrinth of narrow
                alleys, covered markets, mosques, and traditional houses that has remained largely
                unchanged for centuries. The word &quot;medina&quot; simply means &quot;city&quot; in Arabic, and
                these ancient quarters are where Moroccan urban life has pulsed for over a thousand
                years. Every major Moroccan city has one, from the sprawling 9,000-alley maze of
                Fes el-Bali to the compact blue-painted streets of Chefchaouen.
              </p>
              <p>
                For travelers, the medina is both the highlight and the challenge of visiting Morocco.
                The sensory overload of spice-scented alleys, the call to prayer echoing off ancient
                walls, artisans crafting leather and metalwork by hand, children playing in sunlit
                courtyards: this is the Morocco that draws millions of visitors each year. But the same
                narrow passages that create this magic can also leave you disoriented, overwhelmed,
                and unsure how to get back to your riad. This guide gives you the tools to navigate
                with confidence so you can focus on the experience, not the anxiety.
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                <Info className="w-4 h-4 inline mr-1" />
                Morocco has nine medinas recognized as UNESCO World Heritage Sites: Fes (1981),
                Marrakech (1985), Meknes (1996), Tetouan (1997), Essaouira (2001), Mazagan/El Jadida
                (2004), Rabat (2012), and the historic cities of Volubilis (1997) and Ksar of Ait Ben Haddou (1987).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Medina Layout Explained ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Layers className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medina Layout Explained
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding how a medina is structured is the first step to navigating one with confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {medinaFeatures.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={feature.feature} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <FeatureIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {feature.feature}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Navigation Strategies ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Navigate a Moroccan Medina
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Eight proven strategies to find your way through even the most complex medina without losing your bearings.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-6">
                {navigationStrategies.map((strategy, index) => {
                  const StrategyIcon = strategy.icon;
                  return (
                    <div key={strategy.title} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="card-moroccan p-5 flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <StrategyIcon className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                          <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {strategy.title}
                          </h3>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{strategy.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Medinas by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Medinas in Morocco by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five medinas, five completely different experiences. Here is what to expect in each.
          </p>

          <div className="space-y-10">
            {bestMedinas.map((medina) => {
              const MedinaIcon = medina.icon;
              return (
                <div key={medina.city} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="relative h-56 lg:h-auto">
                      <img
                        src={medina.image}
                        alt={`${medina.city} medina - ${medina.tagline}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-auto lg:top-4">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                            <MedinaIcon className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                            {medina.city}
                          </h3>
                        </div>
                        <p className="text-sm text-[var(--color-gold)] font-medium">{medina.tagline}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-2 p-6">
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="text-xs font-semibold text-[var(--color-accent)] px-2 py-0.5 bg-[var(--color-accent)]/10 rounded">
                          Difficulty: {medina.difficulty}
                        </span>
                        <span className="text-xs font-semibold text-[var(--color-gold)] px-2 py-0.5 bg-[var(--color-gold)]/10 rounded">
                          UNESCO: {medina.unescoYear}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                        {medina.description}
                      </p>

                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                        Key Highlights &amp; Landmarks
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {medina.highlights.map((hl) => (
                          <div key={hl.name} className="flex items-start gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg">
                            <CheckCircle className="w-3.5 h-3.5 shrink-0 text-[var(--color-gold)] mt-0.5" />
                            <div>
                              <span className="text-xs font-semibold text-[var(--text-primary)]">{hl.name}</span>
                              <p className="text-xs text-[var(--text-muted)]">{hl.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10">
                        <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {medina.tip}
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

      {/* ── Dealing with Touts ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dealing with Touts &amp; Unofficial Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Touts are part of medina life. Here is how to handle them with confidence and respect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {toutTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Photography in Medinas ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography Etiquette in Medinas
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan medinas are incredibly photogenic. Follow these guidelines to capture them respectfully.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photographyTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Times to Explore ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Times to Explore a Medina
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The medina transforms throughout the day. Choose your timing based on what you want to experience.
          </p>

          <div className="space-y-6">
            {bestTimes.map((period) => {
              const PeriodIcon = period.icon;
              return (
                <div key={period.time} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <PeriodIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {period.time}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">{period.atmosphere}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{period.advantages}</p>
                  <p className="text-xs text-[var(--text-muted)]">
                    <CheckCircle className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                    <span className="font-semibold">Best for:</span> {period.bestFor}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Medina Safety ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medina Safety Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan medinas are safe for tourists. These practical tips ensure a comfortable experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {safetyTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting Lost Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Do When You Get Lost
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Getting lost in a medina is not a disaster. It is often the best part of the experience.
          </p>

          <div className="card-moroccan p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Immediate Steps
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <p className="text-sm text-[var(--text-secondary)]">Stop, take a breath, and check your offline map for your GPS position</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <p className="text-sm text-[var(--text-secondary)]">Walk downhill or toward sounds of activity to find a main artery</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <p className="text-sm text-[var(--text-secondary)]">Ask a seated shopkeeper (not a standing person) for directions to the nearest gate or landmark</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <p className="text-sm text-[var(--text-secondary)]">Show your riad business card to anyone and they will point you in the right direction</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Reframing the Experience
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <p className="text-sm text-[var(--text-secondary)]">The most memorable medina moments happen when you wander off the beaten path</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <p className="text-sm text-[var(--text-secondary)]">Hidden courtyards, quiet tea rooms, and authentic workshops are found by happy accident</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <p className="text-sm text-[var(--text-secondary)]">You are never truly lost with a charged phone and offline map; you are just exploring</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <p className="text-sm text-[var(--text-secondary)]">Moroccans are genuinely helpful; asking for directions is a chance to connect with locals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-start gap-2 p-4 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10">
            <BookOpen className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <span className="font-semibold text-[var(--text-primary)]">Pro tip:</span> Before leaving your riad each morning,
              screenshot the walking route from your riad to the nearest major landmark on your offline map.
              This gives you a reliable return path even if your phone battery dies or GPS signal weakens in
              narrow alleys.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/medina-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Medina Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                In-depth guide to every major medina in Morocco with history, architecture, and what to see.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/scams" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Scams to Avoid
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Common tourist scams in Morocco and how to avoid them. Stay informed and travel smart.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-souk-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Layers className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Souk Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to shopping in Moroccan souks with haggling tips, fair prices, and what to buy.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/is-morocco-safe" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Shield className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Is Morocco Safe?
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Honest safety guide for Morocco covering crime, solo travel, transport, and health.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-travel-tips" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Travel Tips
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Essential tips for visiting Morocco: money, transport, language, culture, and planning.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
