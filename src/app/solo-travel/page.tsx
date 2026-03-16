import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  User,
  Shield,
  MapPin,
  Star,
  Heart,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  MessageCircle,
  Phone,
  AlertTriangle,
  Coffee,
  Compass,
  Wifi,
  Laptop,
  BookOpen,
  Bed,
  HandHeart,
  Footprints,
  Globe,
  Utensils,
  Camera,
  Sun,
  Moon,
  Backpack,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solo Travel Morocco 2025-2026 | Safety Tips, Itineraries & Budget Guide',
  description:
    'Everything you need for solo travel in Morocco. Safety tips for men and women, best cities, budget guide, digital nomad spots, 14-day itinerary, hostels, how to meet people, and practical tips.',
  keywords: [
    'solo travel morocco',
    'morocco alone',
    'solo female travel morocco',
    'solo male travel morocco',
    'is morocco safe solo',
    'morocco solo itinerary',
    'solo traveler morocco tips',
    'women travel morocco',
    'morocco solo budget',
    'solo travel marrakech',
    'morocco safety tips',
    'digital nomad morocco',
    'morocco coworking spaces',
    'morocco hostels solo',
    'making friends morocco',
  ],
  openGraph: {
    title: 'Solo Travel Morocco 2025-2026 | Safety Tips, Itineraries & Budget Guide',
    description:
      'Everything you need to travel Morocco alone. Safety tips, itineraries, budget guide, digital nomad info, and how to meet people.',
    url: 'https://citytoursmorocco.com/solo-travel',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Solo traveler in Morocco desert',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/solo-travel' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAction',
  name: 'Solo Travel in Morocco',
  description:
    'A comprehensive guide for solo travelers visiting Morocco, covering safety, destinations, budgets, digital nomad life, and itineraries.',
  url: 'https://citytoursmorocco.com/solo-travel',
  location: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

/* ===================================================================
   SOLO-FRIENDLY CITIES
   =================================================================== */

const soloCities = [
  {
    name: 'Marrakech',
    rating: 4,
    description:
      'The most popular starting point for solo travelers. Abundant hostels, organized tours, and an overwhelming array of experiences. Can feel intense at first but rewards those who push through.',
    pros: ['Huge traveler community', 'Endless things to do', 'Great hostel scene', 'Easy to join group tours'],
    cons: ['Can feel overwhelming initially', 'More persistent touts than other cities'],
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=800',
  },
  {
    name: 'Essaouira',
    rating: 5,
    description:
      'The best city in Morocco for solo travelers. Laid-back atmosphere, compact medina that is impossible to get truly lost in, friendly locals, and a thriving surf and art community that welcomes newcomers.',
    pros: ['Very relaxed vibe', 'Easy to navigate', 'Active surf community', 'Extremely friendly'],
    cons: ['Smaller, fewer activities than Marrakech', 'Can be windy'],
    image: 'https://images.unsplash.com/photo-1560437091-4383266ac31b?q=80&w=800',
  },
  {
    name: 'Chefchaouen',
    rating: 5,
    description:
      'The blue city is a solo traveler haven. Small, walkable, photogenic, and incredibly safe. The hiking trails and relaxed cafe culture make it easy to spend days here decompressing.',
    pros: ['Extremely safe and calm', 'Perfect for photography', 'Great hiking nearby', 'Budget-friendly'],
    cons: ['Remote location', 'Limited nightlife'],
    image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?q=80&w=800',
  },
  {
    name: 'Fes',
    rating: 3,
    description:
      'The cultural capital of Morocco with the world\'s most complex medina. Navigation can be challenging solo, but the cultural rewards are immense. Hiring a guide for your first day is recommended.',
    pros: ['Deepest cultural experience', 'Incredible food scene', 'Less touristy than Marrakech', 'Authentic medina life'],
    cons: ['Easy to get lost in medina', 'More aggressive touts in places'],
    image: 'https://images.unsplash.com/photo-1545041552-c7bf3e2daaee?q=80&w=800',
  },
  {
    name: 'Rabat',
    rating: 4,
    description:
      'Morocco\'s capital is clean, organized, and cosmopolitan. It lacks the tourist infrastructure of Marrakech but offers an authentic glimpse into modern Moroccan life with a welcoming, non-pushy atmosphere.',
    pros: ['Modern and organized', 'No tourist hassle', 'Great museums', 'Beach access'],
    cons: ['Fewer backpacker hostels', 'Less dramatic scenery'],
    image: 'https://images.unsplash.com/photo-1570698473651-b2de99bae12f?q=80&w=800',
  },
  {
    name: 'Taghazout',
    rating: 4,
    description:
      'A small surf village north of Agadir that has become a magnet for solo travelers and digital nomads. The surf-and-yoga lifestyle creates an instant community, and the village is small enough to feel like home within a day.',
    pros: ['Instant surf community', 'Digital nomad friendly', 'Yoga and wellness scene', 'Beautiful coastline'],
    cons: ['Very small village', 'Limited cultural attractions', 'Can feel touristy in peak season'],
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=800',
  },
];

/* ===================================================================
   WOMEN'S SOLO TRAVEL TIPS
   =================================================================== */

const womenSoloTips = [
  {
    title: 'Dress Modestly',
    description:
      'Covering shoulders and knees significantly reduces unwanted attention. You do not need to cover your head (Morocco is liberal about this), but loose-fitting clothing in the medinas makes for a more comfortable experience. In the ville nouvelle and beach towns, dress codes are more relaxed.',
  },
  {
    title: 'Project Confidence',
    description:
      'Walk with purpose, even if you are lost. Avoid looking at your phone while navigating (use earbuds for Google Maps audio directions). Confident body language deters unwanted approaches. Sunglasses help avoid unwanted eye contact.',
  },
  {
    title: 'Wedding Ring Strategy',
    description:
      'Wearing a ring on your wedding finger, even if you are single, helps deflect persistent attention. If asked, mentioning a husband who is "waiting at the hotel" is effective. Some women carry a photo of a male friend as additional "proof."',
  },
  {
    title: 'Use Reputable Accommodation',
    description:
      'Stay in well-reviewed riads and hostels with female-friendly reputations. Many hostels have female-only dorm rooms. Riad hosts act as a support system and can help arrange safe transport and recommend trustworthy guides.',
  },
  {
    title: 'Be Firm but Polite',
    description:
      'A firm "la shukran" (no thank you) works in most situations. Do not feel obligated to engage in conversation or justify your choices. Ignoring persistent attention is perfectly acceptable and culturally understood.',
  },
  {
    title: 'Safe Transport',
    description:
      'Use established taxi apps like Careem or InDriver instead of hailing taxis. For long distances, CTM and Supratours buses are very safe. ONCF trains have a comfortable first-class section. Avoid hitchhiking.',
  },
  {
    title: 'Connect with Other Women',
    description:
      'Female-focused travel groups like "Girls Love Travel" and "Women Who Travel Morocco" on Facebook are excellent resources. Many women plan meetups or travel together for parts of their trip.',
  },
  {
    title: 'Trust Your Instincts',
    description:
      'If a situation feels uncomfortable, leave immediately. Moroccans are overwhelmingly friendly and helpful, but trust your gut when something does not feel right. Ducking into a shop or restaurant is always an option.',
  },
  {
    title: 'Dealing with Harassment',
    description:
      'Street harassment is typically verbal (comments, catcalling) rather than physical. Do not engage, do not smile, and keep walking. "Sir f-halek" (go away) is a strong deterrent. If someone follows you, walk into the nearest shop and ask for help. Moroccan women and shop owners will almost always intervene on your behalf.',
  },
  {
    title: 'Recommended Cities for Women',
    description:
      'Essaouira, Chefchaouen, and Rabat are widely considered the most comfortable cities for solo female travelers. Marrakech is rewarding but more intense. Fes is culturally rich but requires more street savvy. Smaller rural towns tend to be more conservative.',
  },
];

/* ===================================================================
   SOLO MALE TRAVEL TIPS
   =================================================================== */

const maleSoloTips = [
  {
    title: 'Be Aware of the "Friend" Approach',
    description:
      'Men are more likely to be approached by locals wanting to be your "friend" who then leads you to a shop or asks for money. A polite but firm "la shukran" and continuing to walk is the best response. Not every friendly local has ulterior motives, but be discerning.',
  },
  {
    title: 'Avoid Drug Offers',
    description:
      'Solo male travelers, especially in Chefchaouen and parts of the Rif Mountains, may be approached with offers to buy hashish. Cannabis is illegal in Morocco and possession carries serious penalties including imprisonment. Decline firmly and walk away.',
  },
  {
    title: 'Nightlife Awareness',
    description:
      'Morocco has a limited but present nightlife scene in cities like Marrakech, Casablanca, and Agadir. Be cautious of drink spiking in unfamiliar bars. Avoid walking alone late at night in poorly lit areas. Use a taxi to return to your accommodation.',
  },
  {
    title: 'Respect Local Culture',
    description:
      'As a male traveler, avoid photographing local women without explicit permission. Do not enter mosques (non-Muslims are not permitted except at the Hassan II Mosque). During Ramadan, avoid eating, drinking, or smoking in public during daylight hours.',
  },
  {
    title: 'Solo Adventure Safety',
    description:
      'If hiking or venturing into remote areas, always tell someone your plans. The Atlas Mountains and desert require preparation. Hire local guides for serious treks. Carry plenty of water and sun protection. Cell coverage can be patchy in rural areas.',
  },
];

/* ===================================================================
   BEST HOSTELS
   =================================================================== */

const bestHostels = [
  {
    name: 'Waka Waka Hostel',
    city: 'Marrakech',
    highlight: 'Legendary rooftop terrace with nightly social gatherings',
    priceRange: '100-180 MAD/night',
    soloFriendly: 'Group dinners, city tours, Sahara trip bookings',
  },
  {
    name: 'Equity Point Hostel',
    city: 'Marrakech',
    highlight: 'Swimming pool, large common areas, lively atmosphere',
    priceRange: '120-200 MAD/night',
    soloFriendly: 'Pool area social scene, organized pub crawls',
  },
  {
    name: 'Funky Fes Hostel',
    city: 'Fes',
    highlight: 'Located right at Bab Bou Jeloud (Blue Gate) entrance',
    priceRange: '90-150 MAD/night',
    soloFriendly: 'Medina walking tours, cooking classes, communal kitchen',
  },
  {
    name: 'The Salty Pelican',
    city: 'Essaouira',
    highlight: 'Surf-focused hostel with board rentals and lessons',
    priceRange: '100-160 MAD/night',
    soloFriendly: 'Group surf sessions, beach bonfires, communal meals',
  },
  {
    name: 'Casa Perleta',
    city: 'Chefchaouen',
    highlight: 'Beautiful traditional house with panoramic terrace',
    priceRange: '80-130 MAD/night',
    soloFriendly: 'Hiking groups, photography walks, stargazing nights',
  },
  {
    name: 'Surf Berbere',
    city: 'Taghazout',
    highlight: 'Complete surf camp experience with lessons and board',
    priceRange: '200-400 MAD/night',
    soloFriendly: 'Full surf camp community, yoga sessions, group meals',
  },
];

/* ===================================================================
   MEETING PEOPLE
   =================================================================== */

const meetingPeople = [
  {
    method: 'Hostels & Riads',
    icon: Users,
    description:
      'Social hostels like Waka Waka (Marrakech), Funky Fes, and The Salty Pelican (Essaouira) organize group dinners, rooftop hangouts, and shared excursions. Even in riads, the communal breakfast table is a natural icebreaker.',
  },
  {
    method: 'Organized Tours',
    icon: Compass,
    description:
      'Group desert tours, cooking classes, and day trips are the easiest way to meet fellow travelers. Sahara desert trips (2-3 days) create especially strong bonds between travelers.',
  },
  {
    method: 'Language Exchange Cafes',
    icon: Coffee,
    description:
      'Many Moroccan cities have language exchange meetups where locals practice English or French with foreigners. These are wonderful for meeting both locals and other travelers in a structured setting.',
  },
  {
    method: 'Cafe Culture',
    icon: Coffee,
    description:
      'Spending time in rooftop cafes with a book or laptop naturally leads to conversations. Moroccan cafe culture is social by nature, and locals often strike up friendly chats.',
  },
  {
    method: 'Digital Communities',
    icon: MessageCircle,
    description:
      'Facebook groups ("Solo Travel Morocco," "Backpacking Morocco"), Couchsurfing hangouts, and Hostelworld social features help connect solo travelers before and during trips.',
  },
  {
    method: 'Making Local Friends',
    icon: HandHeart,
    description:
      'Moroccans are famously hospitable. Accepting a genuine tea invitation, shopping at the same local shop daily, or chatting with your riad staff builds real relationships. Learning a few Darija phrases wins hearts instantly. Be open to invitations to family meals -- these are among the most memorable travel experiences you can have.',
  },
];

/* ===================================================================
   SOLO-FRIENDLY TOURS & GROUP TRIPS
   =================================================================== */

const soloTours = [
  {
    name: 'Sahara Desert Tour (3 days)',
    description: 'The classic Marrakech-to-Merzouga route via the Dades and Todra Gorges. Shared minivans of 6-15 travelers make this the single best way to bond with other solo travelers.',
    price: '800-1,500 MAD',
    bookingTip: 'Book through your hostel 1-2 days in advance. Avoid the cheapest options as they cut corners on camp quality.',
  },
  {
    name: 'Atlas Mountains Day Trek',
    description: 'Group hikes in the Ourika Valley, Imlil, or the Toubkal area. Guides are included and groups are typically 4-12 people. Perfect for a single-day adventure.',
    price: '300-600 MAD',
    bookingTip: 'Most hostels in Marrakech organize these daily. Ask about group size before booking.',
  },
  {
    name: 'Cooking Classes',
    description: 'Half-day Moroccan cooking classes in Marrakech, Fes, or Essaouira. Market visits, hands-on cooking, and shared meals create a natural social setting.',
    price: '250-500 MAD',
    bookingTip: 'Amal Women\'s Training Center in Marrakech is highly recommended -- it supports women in hospitality training.',
  },
  {
    name: 'Surf Camps (Taghazout / Essaouira)',
    description: 'Week-long or drop-in surf lessons with accommodation, meals, and yoga. The surf community is inherently social and welcoming to solo travelers of all levels.',
    price: '2,000-5,000 MAD/week',
    bookingTip: 'Book at least a week in advance during November-March peak surf season.',
  },
  {
    name: 'Fes Medina Walking Food Tour',
    description: 'Guided food tours through the labyrinthine Fes medina. Small groups sample street food, visit hidden bakeries, and learn about Fassi culinary traditions.',
    price: '300-500 MAD',
    bookingTip: 'Plan Eat Morocco and Fes Cooking & Food Tours are highly rated.',
  },
];

/* ===================================================================
   SOLO ACTIVITIES
   =================================================================== */

const soloActivities = [
  'Join a group cooking class and learn Moroccan cuisine',
  'Take a day trip to the Atlas Mountains from Marrakech',
  'Book a group Sahara desert tour (2-3 days)',
  'Walk the blue streets of Chefchaouen at sunrise',
  'Take a surf lesson in Essaouira or Taghazout',
  'Explore the Fes medina with a local guide',
  'Hike to the summit of Jebel Toubkal (guided group trek)',
  'Visit the Ouzoud Waterfalls on a day trip',
  'Wander the Kasbah of the Udayas in Rabat',
  'Attend a hammam spa session (many are solo-friendly)',
  'Join a photography walk through a medina',
  'Visit the Hassan II Mosque in Casablanca',
  'Take a camel ride along Essaouira beach at sunset',
  'Visit the Jardin Majorelle and Yves Saint Laurent Museum',
  'Explore the ancient Roman ruins at Volubilis',
  'Take a pottery or zellige tile workshop in Fes',
];

/* ===================================================================
   BUDGET GUIDE
   =================================================================== */

const budgetGuide = [
  { category: 'Accommodation', budget: '80 - 300 MAD/night', note: 'Hostel dorms (80-150 MAD), private riad room (200-400 MAD)' },
  { category: 'Food', budget: '80 - 200 MAD/day', note: 'Street food (15-30 MAD), local restaurants (40-80 MAD), nicer restaurants (100-200 MAD)' },
  { category: 'Transport', budget: '50 - 200 MAD/day', note: 'Local taxis (10-30 MAD), intercity buses (50-200 MAD), trains (80-250 MAD)' },
  { category: 'Activities', budget: '0 - 300 MAD/day', note: 'Free walking/medinas, museums (10-70 MAD), tours (200-500 MAD)' },
  { category: 'SIM Card & Data', budget: '50 - 100 MAD/month', note: 'Maroc Telecom, Inwi, or Orange prepaid with 20GB+ data' },
  { category: 'Daily Total (Budget)', budget: '250 - 500 MAD', note: '$25-50/day for hostel dorms, street food, and local transport' },
  { category: 'Daily Total (Mid-Range)', budget: '500 - 1,000 MAD', note: '$50-100/day for private rooms, sit-down restaurants, and guided tours' },
  { category: 'Daily Total (Comfort)', budget: '1,000 - 2,000 MAD', note: '$100-200/day for boutique riads, fine dining, and private guides' },
];

/* ===================================================================
   BUDGET SAVING TIPS
   =================================================================== */

const budgetSavingTips = [
  'Eat where locals eat -- follow the crowd to busy street food stalls',
  'Negotiate taxi prices before getting in (or insist on the meter)',
  'Use CTM or Supratours buses instead of grand taxis for intercity travel',
  'Book accommodation with breakfast included (most riads offer this)',
  'Carry a reusable water bottle with a filter to avoid buying plastic bottles',
  'Shop at souks in the late afternoon when vendors are more willing to negotiate',
  'Cook your own meals in hostels with communal kitchens',
  'Walk as much as possible in medinas -- they are compact and best explored on foot',
  'Take free walking tours (tip-based) in Marrakech and Fes',
  'Visit museums on Fridays when some offer free or reduced admission',
  'Buy a local SIM card at the airport instead of using expensive roaming',
  'Split group tours and taxis with other travelers from your hostel',
];

/* ===================================================================
   DIGITAL NOMAD & COWORKING
   =================================================================== */

const digitalNomadSpots = [
  {
    city: 'Marrakech',
    spaces: [
      { name: 'Le 18 Coworking', note: 'Modern space in Gueliz with fast WiFi, meeting rooms, and a cafe. From 100 MAD/day.' },
      { name: 'Sun Desk (Taghazout, near Agadir)', note: 'Surf-and-work coliving space. Weekly packages from 3,500 MAD including accommodation.' },
    ],
    cafes: ['Cafe Clock (great WiFi, cultural events)', 'Nomad (rooftop terrace in the medina)', 'Bacha Coffee (upscale, reliable power outlets)'],
    wifiSpeed: '20-50 Mbps in coworking spaces, 5-15 Mbps in cafes',
  },
  {
    city: 'Essaouira',
    spaces: [
      { name: 'Taros Cafe & Co-work', note: 'Rooftop workspace overlooking the port. Relaxed atmosphere.' },
    ],
    cafes: ['Cafe de France (people-watching central)', 'Vague Bleu (ocean views, decent WiFi)', 'Triskala Cafe (artsy vibe, quiet workspace)'],
    wifiSpeed: '10-30 Mbps typically',
  },
  {
    city: 'Rabat',
    spaces: [
      { name: 'Technopark Rabat', note: 'Government-backed tech hub with excellent facilities. From 80 MAD/day.' },
      { name: 'The Loft Coworking', note: 'Modern coworking in Agdal neighborhood with 24/7 access.' },
    ],
    cafes: ['Paul (reliable WiFi, French cafe chain)', 'Cafe Maure in the Kasbah (scenic but slower WiFi)'],
    wifiSpeed: '30-80 Mbps in coworking spaces',
  },
  {
    city: 'Casablanca',
    spaces: [
      { name: 'Casanearshore', note: 'Large tech park with hot desks available. Professional environment.' },
      { name: 'New Work Lab', note: 'Creative coworking space in the Maarif district.' },
    ],
    cafes: ['Cafe Slavia (quiet, power outlets)', 'La Sqala (beautiful courtyard setting)'],
    wifiSpeed: '30-100 Mbps in coworking spaces',
  },
];

/* ===================================================================
   SAFETY CHECKLIST
   =================================================================== */

const safetyChecklist = [
  'Share your itinerary with someone at home',
  'Save your embassy\'s contact information in your phone',
  'Register with your country\'s overseas travel program',
  'Carry photocopies of your passport (keep originals in your safe)',
  'Have travel insurance that covers Morocco specifically',
  'Save your riad/hostel address and phone number offline',
  'Download offline maps for all cities on your route',
  'Carry a portable charger so your phone never dies',
  'Keep emergency cash (500 MAD) separate from your wallet',
  'Know the emergency numbers: 19 (police), 15 (ambulance/fire), 112 (general)',
  'Inform your riad/hostel of your daily plans',
  'Use established apps for taxis (Careem, InDriver) when possible',
  'Keep a card with your accommodation address written in Arabic',
  'Set up location sharing with a trusted contact back home',
];

/* ===================================================================
   COMMUNICATION TIPS
   =================================================================== */

const communicationTips = [
  {
    title: 'Essential Arabic Phrases',
    phrases: [
      { phrase: 'Salam alaikum', meaning: 'Peace be upon you (greeting)' },
      { phrase: 'La shukran', meaning: 'No thank you' },
      { phrase: 'Bslama', meaning: 'Goodbye' },
      { phrase: 'Shukran', meaning: 'Thank you' },
      { phrase: 'Bshhal?', meaning: 'How much?' },
      { phrase: 'Mzyan', meaning: 'Good/Fine' },
      { phrase: 'Sir f-halek', meaning: 'Go away (firm)' },
      { phrase: 'Smeh liya', meaning: 'Excuse me / Sorry' },
    ],
  },
  {
    title: 'Communication Tips',
    tips: [
      'French is widely spoken in cities. A few French phrases go a long way.',
      'English is increasingly common in tourist areas, especially among younger Moroccans.',
      'Get a local SIM card on arrival (Maroc Telecom, Inwi, or Orange). 20-50 MAD for a SIM with data.',
      'WiFi is available at most cafes, hostels, and riads, though speeds vary.',
      'Download Google Translate offline for Arabic and French before your trip.',
      'Body language and smiles are universal. Moroccans are warm and respond to friendliness.',
      'WhatsApp is the primary communication tool in Morocco -- nearly everyone uses it.',
      'Learn to count 1-10 in Arabic (wahd, jouj, tlata, rbaa, khmsa, stta, sbaa, tmania, tsaoud, ashra) for haggling.',
    ],
  },
];

/* ===================================================================
   14-DAY ITINERARY
   =================================================================== */

const itinerary = [
  { day: 1, title: 'Arrive in Marrakech', desc: 'Settle into your hostel or riad. Evening walk to Jemaa el-Fnaa to absorb the atmosphere. Join the hostel group for dinner on a rooftop terrace.' },
  { day: 2, title: 'Marrakech Exploration', desc: 'Morning cooking class. Afternoon explore souks, Bahia Palace, and Majorelle Garden. Join a rooftop dinner or hostel hangout.' },
  { day: 3, title: 'Day Trip: Atlas Mountains', desc: 'Group day trip to the Ourika Valley or Ouzoud Waterfalls. Great way to meet other travelers on a shared excursion.' },
  { day: 4, title: 'Travel to Essaouira', desc: 'Bus to Essaouira (3 hours). Check into a social hostel. Afternoon beach walk and medina exploration. Seafood dinner at the port.' },
  { day: 5, title: 'Essaouira', desc: 'Morning surf lesson. Afternoon wandering the art galleries and ramparts. Join other travelers at a beach sunset gathering. Optional camel ride.' },
  { day: 6, title: 'Travel to Fes', desc: 'Travel to Fes via Marrakech (bus or train). Evening arrival. Settle into your riad and explore the area near Bab Bou Jeloud.' },
  { day: 7, title: 'Fes Medina', desc: 'Hire a guide for a half-day medina tour. Afternoon visit tanneries and Bou Inania Madrasa. Evening food tour or cooking class.' },
  { day: 8, title: 'Fes: Day at Leisure', desc: 'Morning visit to the Merenid Tombs for panoramic views. Explore the mellah (Jewish quarter) and the pottery district. Afternoon hammam experience.' },
  { day: 9, title: 'Travel to Chefchaouen', desc: 'Morning bus to Chefchaouen (4 hours). Afternoon getting lost in the blue streets with your camera. Sunset at the Spanish Mosque viewpoint.' },
  { day: 10, title: 'Chefchaouen', desc: 'Morning hike to Akchour waterfalls (join a hostel group). Afternoon relaxation in the medina cafes. Evening journaling at Ras el-Maa.' },
  { day: 11, title: 'Travel to Sahara (via Fes)', desc: 'Return to Fes and join a 3-day Sahara desert tour. Drive through the Middle Atlas, cedar forests, and Ifrane. Overnight in Midelt or Errachidia.' },
  { day: 12, title: 'Sahara Desert', desc: 'Drive through the Ziz Valley to Merzouga. Late afternoon camel trek into the Erg Chebbi dunes. Night in a desert camp under the stars with fellow travelers.' },
  { day: 13, title: 'Sahara to Marrakech', desc: 'Sunrise over the dunes. Drive back through the Todra Gorge, Dades Valley, and over the Tizi n\'Tichka pass. Arrive Marrakech late evening.' },
  { day: 14, title: 'Departure', desc: 'Final morning for last-minute souk shopping and a farewell breakfast. Transfer to the airport or continue your journey.' },
];

export default function SoloTravelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2800)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Solo Travel</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <User className="w-4 h-4" />
            Solo Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Solo Travel Morocco
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Morocco is one of the most rewarding solo travel destinations in the world.
            Here is everything you need to explore the Kingdom with confidence, whether you
            are a first-time solo traveler or a seasoned backpacker.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ============================================================
          IS IT SAFE?
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Is Morocco Safe for Solo Travelers?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Yes. Morocco is generally safe for solo travelers, including women. The country
                has a strong tourism police presence, low violent crime rates, and a culture of
                hospitality that means locals often go out of their way to help visitors. Thousands
                of solo travelers &mdash; men and women &mdash; visit Morocco every year and have
                positive, life-changing experiences.
              </p>
              <p>
                That said, Morocco is not without its challenges. The busy medinas can feel
                overwhelming at first, persistent touts and unofficial guides are common in tourist
                areas, and women may receive more attention than they are used to. These are
                annoyances rather than dangers, and with preparation and awareness, they are easily
                manageable.
              </p>
              <p>
                The key to a great solo trip in Morocco is the same as anywhere: research, common
                sense, and an open mind. Morocco rewards curious, respectful travelers with experiences
                that are impossible to have in more &quot;sanitized&quot; tourism destinations. The
                slight edge of adventure is part of what makes it so memorable.
              </p>
              <p>
                For a more detailed safety breakdown, see our dedicated{' '}
                <Link href="/safety" className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-dark)]">
                  Morocco Safety Guide
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BEST CITIES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Best Cities for Solo Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Rated by safety, ease of navigation, social scene, and overall solo-friendliness.
          </p>
          <div className="space-y-6">
            {soloCities.map((city) => (
              <div key={city.name} className="card-moroccan overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-56 md:h-auto">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < city.rating ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                    {city.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{city.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <h4 className="text-xs font-bold text-[var(--color-green)] uppercase tracking-wider mb-1.5">Pros</h4>
                      <ul className="space-y-1">
                        {city.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                            <CheckCircle className="w-3 h-3 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-1.5">Cons</h4>
                      <ul className="space-y-1">
                        {city.cons.map((con) => (
                          <li key={con} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                            <AlertTriangle className="w-3 h-3 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
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

      {/* ============================================================
          WOMEN SOLO TRAVEL
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Solo Female Travel Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice from experienced female solo travelers in Morocco. Thousands of women travel Morocco alone every year and have incredible experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {womenSoloTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{tip.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SOLO MALE TRAVEL
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Solo Male Travel Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            While much of the solo travel advice is universal, here are specific considerations for men traveling alone in Morocco.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {maleSoloTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{tip.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          BEST HOSTELS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-secondary)] mr-2" />
            Best Hostels for Meeting People
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These hostels are known for their social atmosphere and are ideal base camps for solo travelers looking to connect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestHostels.map((hostel) => (
              <div key={hostel.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider">{hostel.city}</span>
                  <span className="text-xs font-medium text-[var(--color-accent)]">{hostel.priceRange}</span>
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{hostel.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{hostel.highlight}</p>
                <div className="pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--color-green)]">Solo perks:</span> {hostel.soloFriendly}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SOLO-FRIENDLY TOURS & GROUP TRIPS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Solo-Friendly Tours & Group Trips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Group tours are the single best way to meet other travelers. These are Morocco&apos;s most popular options for solo participants.
          </p>
          <div className="space-y-4">
            {soloTours.map((tour) => (
              <div key={tour.name} className="card-moroccan p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-[var(--text-primary)]">{tour.name}</h3>
                      <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded-full">{tour.price}</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">{tour.description}</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      <span className="font-semibold text-[var(--color-primary)]">Booking tip:</span> {tour.bookingTip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MEETING PEOPLE
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-secondary)] mr-2" />
            How to Meet People & Make Local Friends
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Traveling alone does not mean being alone. Morocco makes it easy to connect with both fellow travelers and locals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meetingPeople.map((method) => (
              <div key={method.method} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
                  <method.icon className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{method.method}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SOLO ACTIVITIES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Solo-Friendly Activities
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-8">
            Activities that are perfect for solo travelers or easy to join as a solo participant.
          </p>
          <div className="card-moroccan p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {soloActivities.map((activity) => (
                <div key={activity} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <Compass className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                  {activity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          DIGITAL NOMAD / COWORKING
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Laptop className="w-8 h-8 inline-block text-[var(--color-secondary)] mr-2" />
            Digital Nomad Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco is increasingly popular with remote workers and digital nomads. With affordable living costs, reliable internet in cities, and a time zone close to Europe (GMT+1), it is an excellent base for working remotely.
          </p>
          <p className="text-center text-sm text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The 90-day visa-free stay for most Western passport holders is generous, and the growing coworking scene provides professional workspaces in all major cities.
          </p>

          <div className="space-y-6">
            {digitalNomadSpots.map((spot) => (
              <div key={spot.city} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">{spot.city}</h3>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <Wifi className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    {spot.wifiSpeed}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-2">Coworking Spaces</h4>
                    <div className="space-y-2">
                      {spot.spaces.map((space) => (
                        <div key={space.name} className="p-3 rounded-lg bg-[var(--surface-muted)]">
                          <p className="text-sm font-semibold text-[var(--text-primary)]">{space.name}</p>
                          <p className="text-xs text-[var(--text-secondary)]">{space.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider mb-2">Cafes with WiFi</h4>
                    <ul className="space-y-1.5">
                      {spot.cafes.map((cafe) => (
                        <li key={cafe} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <Coffee className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                          {cafe}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          BUDGET GUIDE
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Budget Guide for Solo Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Daily costs for a solo traveler in Morocco. All prices in MAD (1 USD ~ 10 MAD, 1 EUR ~ 11 MAD).
          </p>
          <div className="space-y-3">
            {budgetGuide.map((item) => (
              <div key={item.category} className={`card-moroccan p-4 flex flex-col md:flex-row md:items-center gap-2 ${item.category.includes('Total') ? 'border-2 border-[var(--color-primary)]' : ''}`}>
                <div className="md:w-1/4 font-bold text-[var(--text-primary)]">{item.category}</div>
                <div className="md:w-1/4 text-[var(--color-primary)] font-medium">{item.budget}</div>
                <div className="md:w-2/4 text-sm text-[var(--text-secondary)]">{item.note}</div>
              </div>
            ))}
          </div>

          {/* Budget Saving Tips */}
          <div className="mt-10">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 text-center">
              Money-Saving Tips
            </h3>
            <div className="card-moroccan p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {budgetSavingTips.map((tip) => (
                  <div key={tip} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <DollarSign className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SAFETY CHECKLIST
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-green)] mr-2" />
            Safety Checklist
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-8">
            Essential safety preparations before and during your trip.
          </p>
          <div className="card-moroccan p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {safetyChecklist.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          COMMUNICATION
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircle className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Communication Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Language, connectivity, and getting by in Morocco.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communicationTips.map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">{section.title}</h3>
                {'phrases' in section && section.phrases ? (
                  <div className="space-y-2">
                    {section.phrases.map((p: { phrase: string; meaning: string }) => (
                      <div key={p.phrase} className="flex items-center gap-3">
                        <span className="font-bold text-[var(--color-primary)] text-sm min-w-[120px]">{p.phrase}</span>
                        <span className="text-sm text-[var(--text-secondary)]">{p.meaning}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {section.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          14-DAY ITINERARY
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            14-Day Solo Traveler Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A mix of social cities, peaceful retreats, Sahara adventure, and cultural immersion &mdash; designed for solo exploration. Includes the desert experience that most solo travelers consider the highlight of their trip.
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

      {/* ============================================================
          PACKING ESSENTIALS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Solo Traveler Packing Essentials
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Pack light but smart. Here is what experienced solo travelers recommend for Morocco.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="font-bold text-[var(--text-primary)] mb-4">Safety & Tech</h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />Portable power bank (20,000 mAh+)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />Universal travel adapter (Morocco uses Type C/E)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />Padlock for hostel lockers</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />Money belt or hidden neck pouch</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />Headlamp (useful in medinas at night)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />Passport photocopies (paper + digital)</li>
              </ul>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-bold text-[var(--text-primary)] mb-4">Clothing</h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />Lightweight long pants and long sleeves</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />Scarf/shawl (useful for mosques, sun, dust)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />Comfortable walking shoes (medina streets are uneven)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />Sandals for riads and hammams</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />Light jacket (evenings can be cool)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />Sun hat and quality sunglasses</li>
              </ul>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-bold text-[var(--text-primary)] mb-4">Health & Comfort</h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />High-SPF sunscreen</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />Rehydration salts (for stomach issues)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />Reusable water bottle with filter</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />Basic first aid kit</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />Earplugs and eye mask (for hostel dorms)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />Toilet paper/tissues (not always available)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <User className="w-10 h-10 text-[var(--color-primary)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Your Solo Morocco Adventure Awaits
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Take the leap. Morocco rewards solo travelers with unforgettable experiences,
            genuine connections, and a sense of accomplishment that stays with you forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Cities
            </Link>
            <Link
              href="/safety"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Shield className="w-4 h-4" /> Safety Guide
            </Link>
            <Link
              href="/visa"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" /> Visa Info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
