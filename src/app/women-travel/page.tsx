import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Heart,
  Shield,
  MapPin,
  Star,
  Users,
  Clock,
  CheckCircle,
  Phone,
  Coffee,
  Compass,
  Globe,
  Utensils,
  Camera,
  Sun,
  Backpack,
  Sparkles,
  HandHeart,
  BookOpen,
  MessageCircle,
  Gem,
  Shirt,
  Bus,
  Building,
  BadgeCheck,
  Quote,
  ArrowRight,
  Luggage,
  ShieldCheck,
  CircleAlert,
  Palette,
  TreePalm,
  Mountain,
  Waves,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Women\'s Travel Guide to Morocco 2025-2026 | Solo Female Travel Tips & Safety',
  description:
    'The ultimate guide for women traveling to Morocco. Practical tips for solo female travelers, best cities, what to wear, women-led tours, cooperatives, hammam experiences, safety advice, and inspiring stories from women who love Morocco.',
  keywords: [
    'women travel Morocco',
    'solo female travel Morocco',
    'Morocco women safety',
    'Morocco female traveler tips',
    'Morocco what to wear women',
    'Morocco women cooperatives',
    'Morocco hammam women',
    'Morocco women tours',
    'solo woman Morocco',
    'is Morocco safe for women',
    'Morocco dress code women',
    'Morocco female friendly',
    'Morocco argan oil cooperative',
    'Morocco cooking class women',
    'Morocco riad women',
    'women only hammam Morocco',
    'Morocco packing list women',
    'Morocco solo female itinerary',
    'Morocco women experiences',
    'Morocco empowering travel',
  ],
  openGraph: {
    title: 'Women\'s Travel Guide to Morocco 2025-2026 | CityGuide',
    description:
      'Everything women need to know about traveling Morocco. Empowering advice, safety tips, best destinations, women-led experiences, and practical packing guidance.',
    url: 'https://citytoursmorocco.com/women-travel',
    images: [
      {
        url: '/images/hero-chefchaouen-drone.webp',
        width: 1200,
        height: 630,
        alt: 'Woman traveler exploring the blue streets of Chefchaouen, Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Women\'s Travel Guide to Morocco 2025-2026',
    description:
      'The complete, empowering guide for women traveling Morocco. Safety tips, best cities, cooperatives, packing lists, and real stories.',
    images: [
      {
        url: '/images/hero-chefchaouen-drone.webp',
        alt: 'Woman in Chefchaouen Morocco blue city',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/women-travel' },
};

/* ═══════════════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  name: 'Women\'s Travel Guide to Morocco',
  description:
    'A comprehensive, empowering travel guide for women visiting Morocco with practical safety tips, cultural insights, destination recommendations, and women-led experiences.',
  url: 'https://citytoursmorocco.com/women-travel',
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  audience: {
    '@type': 'PeopleAudience',
    requiredGender: 'Female',
    suggestedMinAge: 18,
  },
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
};

/* ═══════════════════════════════════════════════════════════════════════
   DATA: WHY MOROCCO IS GREAT FOR WOMEN
   ═══════════════════════════════════════════════════════════════════════ */

const whyMoroccoGreat = [
  {
    title: 'Rich Tradition of Women\'s Hospitality',
    description:
      'Moroccan culture places enormous value on welcoming guests. Women play a central role in hospitality, and female travelers are often warmly embraced by local women who are eager to share their homes, recipes, and stories.',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: 'Vibrant Women\'s Cooperatives',
    description:
      'Morocco has a thriving network of women-run cooperatives producing argan oil, rugs, saffron, and ceramics. Visiting these cooperatives supports economic independence for local women and offers authentic cultural exchange.',
    icon: <HandHeart className="w-6 h-6" />,
  },
  {
    title: 'World-Class Sensory Experiences',
    description:
      'From the intoxicating spice markets and traditional hammam rituals to rooftop dinners under the stars and sunrise over the Sahara, Morocco delivers the kind of travel experiences that stay with you forever.',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: 'Growing Tourism Infrastructure',
    description:
      'Morocco has invested heavily in tourism safety and infrastructure. Tourist police are present in major cities, female-friendly accommodations are widespread, and women-led tour companies are flourishing.',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: 'Diverse Landscapes in a Compact Country',
    description:
      'Beaches, mountains, deserts, ancient medinas, and modern cities are all within a few hours of each other. You can surf in the morning, explore a 1,000-year-old medina in the afternoon, and sleep under Saharan stars at night.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'Affordable Luxury',
    description:
      'Morocco offers extraordinary value. Stay in a beautifully restored riad for a fraction of what a boutique hotel costs in Europe, enjoy multi-course meals for under $10, and book private guided experiences at accessible prices.',
    icon: <Gem className="w-6 h-6" />,
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   DATA: BEST CITIES FOR WOMEN TRAVELERS
   ═══════════════════════════════════════════════════════════════════════ */

const bestCities = [
  {
    name: 'Essaouira',
    rating: 5,
    vibe: 'Relaxed coastal charm',
    description:
      'Widely considered the most comfortable city in Morocco for solo women travelers. The compact, walkable medina is impossible to get truly lost in. The laid-back Atlantic coast vibe, thriving art scene, and friendly locals create a welcoming atmosphere. The surf community is inclusive and the seafood is outstanding.',
    highlights: ['Compact, safe medina', 'Thriving art and surf scene', 'Relaxed atmosphere', 'Friendly, non-pushy locals'],
    image: '/images/hero-coastal.webp',
  },
  {
    name: 'Chefchaouen',
    rating: 5,
    vibe: 'Photogenic mountain serenity',
    description:
      'The famous blue city nestled in the Rif Mountains is a haven for women travelers. Small, safe, and incredibly photogenic, Chefchaouen moves at a gentle pace. The hiking trails, rooftop cafes, and artisan shops make it easy to spend several relaxing days here. Locals are accustomed to tourists and very welcoming.',
    highlights: ['Extremely safe and walkable', 'Stunning photography everywhere', 'Great hiking trails', 'Calm, peaceful energy'],
    image: '/images/hero-chefchaouen-drone.webp',
  },
  {
    name: 'Rabat',
    rating: 5,
    vibe: 'Modern and cosmopolitan',
    description:
      'Morocco\'s capital is clean, orderly, and cosmopolitan. As a government city with a large diplomatic community, Rabat feels modern and progressive. The medina is well-maintained and calm, the Kasbah of the Udayas is stunning, and the tramway makes getting around effortless. Street hassle is virtually nonexistent.',
    highlights: ['Modern and organized', 'Minimal tourist hassle', 'Excellent museums', 'Beautiful coastline'],
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'Marrakech',
    rating: 4,
    vibe: 'Exhilarating sensory overload',
    description:
      'Morocco\'s most famous city is an unforgettable experience. Yes, the medina is intense and the energy is high, but that is precisely the magic. With a well-reviewed riad as your base, a good map on your phone, and confident body language, Marrakech rewards you with extraordinary food, architecture, and culture. Millions of women visit every year.',
    highlights: ['World-class food and culture', 'Stunning riads and gardens', 'Vibrant arts scene', 'Excellent women-led tours available'],
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'Fes',
    rating: 4,
    vibe: 'Deep cultural immersion',
    description:
      'The spiritual and cultural capital of Morocco offers the most authentic medina experience in the country. The Fes el-Bali medina is a UNESCO World Heritage site and the world\'s largest car-free urban area. Hiring a guide for your first day is recommended, and once you find your bearings, the cultural richness is unmatched.',
    highlights: ['Deepest cultural experience', 'Incredible artisan traditions', 'Outstanding food scene', 'Less crowded than Marrakech'],
    image: '/images/hero-fes-tanneries.webp',
  },
  {
    name: 'Taghazout',
    rating: 4,
    vibe: 'Surf village community',
    description:
      'This small coastal village north of Agadir has become a magnet for women surfers, yoga practitioners, and digital nomads. The surf-and-yoga lifestyle creates an instant welcoming community. Surf camps with female instructors are easy to find, and the village feels safe and friendly at any hour.',
    highlights: ['Instant surf community', 'Women-friendly surf camps', 'Yoga and wellness scene', 'Beautiful coastline'],
    image: '/images/hero-surfing.webp',
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   DATA: CULTURAL UNDERSTANDING & DRESS CODE
   ═══════════════════════════════════════════════════════════════════════ */

const dressCodeTips = [
  {
    context: 'Medinas and Old Cities',
    recommendation:
      'Cover shoulders and knees. Loose-fitting linen or cotton pants, midi or maxi skirts, and tops that cover the shoulders are ideal. A lightweight scarf draped over the shoulders works perfectly for coverage and sun protection.',
    icon: <Building className="w-5 h-5" />,
  },
  {
    context: 'Modern City Centers (Ville Nouvelle)',
    recommendation:
      'Dress codes are more relaxed in modern neighborhoods of Casablanca, Rabat, and Marrakech Gueliz. You will see Moroccan women in everything from djellabas to jeans and blouses. Smart casual is comfortable here.',
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    context: 'Beach Towns (Essaouira, Taghazout, Agadir)',
    recommendation:
      'Swimwear is fine on the beach itself. When walking through town, a cover-up or sundress is appreciated. Agadir is the most liberal beach city. In smaller beach villages, modest beachwear is more appropriate.',
    icon: <Waves className="w-5 h-5" />,
  },
  {
    context: 'Rural Areas and Mountains',
    recommendation:
      'Conservative dress is most appreciated in rural communities. Long pants or skirts, covered shoulders, and avoiding tight-fitting clothing shows respect for local customs and will earn you warmer welcomes.',
    icon: <Mountain className="w-5 h-5" />,
  },
  {
    context: 'Mosques and Religious Sites',
    recommendation:
      'Non-Muslims cannot enter most mosques in Morocco (Hassan II Mosque in Casablanca is the notable exception). When visiting the Hassan II Mosque, cover your arms and legs and bring a headscarf. Remove shoes at the entrance.',
    icon: <Star className="w-5 h-5" />,
  },
  {
    context: 'Restaurants and Hotels',
    recommendation:
      'Upscale restaurants and hotels are quite cosmopolitan. Smart casual is perfect. For rooftop bars and fine dining, you can dress as you would in any European city.',
    icon: <Utensils className="w-5 h-5" />,
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   DATA: ACCOMMODATION TIPS
   ═══════════════════════════════════════════════════════════════════════ */

const accommodationTips = [
  {
    title: 'Riads with Female-Friendly Reputations',
    description:
      'Many riads in Morocco are managed by women and have cultivated reputations as safe havens for female travelers. Look for properties that specifically mention "female-friendly" or "women travelers welcome" in their listings. Reviews from solo women on Booking.com and TripAdvisor are invaluable.',
    tips: [
      'Look for riads with female managers or owners mentioned in reviews',
      'Check for female-only dorm options in hostels',
      'Read recent reviews from solo female travelers specifically',
      'Consider riads that offer airport pickup, especially for late arrivals',
    ],
  },
  {
    title: 'Women-Only Hammams',
    description:
      'Traditional public hammams have separate hours for men and women, so you will always be bathing with other women. Private hammams in riads and spas are also exclusively female spaces. The hammam is one of the most authentic cultural experiences Morocco offers, and it is completely designed for women\'s comfort.',
    tips: [
      'Public hammams typically have dedicated women\'s hours (often mornings)',
      'Private hammam experiences at riads range from 200-800 MAD',
      'Bring your own toiletries or purchase savon beldi (black soap) at the entrance',
      'A kessa (exfoliating glove) is provided or can be purchased for 15-30 MAD',
    ],
  },
  {
    title: 'Hostels with Female Dorms',
    description:
      'Budget-conscious women travelers will find excellent hostels across Morocco with dedicated female-only dormitories. These hostels often have communal spaces that naturally foster connections between travelers. Many organize group activities, making them ideal for solo women.',
    tips: [
      'Equity Point and Waka Waka in Marrakech have great female dorms',
      'Hostel Kif Kif in Marrakech is popular with solo women',
      'Many hostels organize group dinners and excursions',
      'Lockers and secure storage are standard in reputable hostels',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   DATA: TRANSPORTATION SAFETY
   ═══════════════════════════════════════════════════════════════════════ */

const transportTips = [
  {
    mode: 'Trains (ONCF)',
    safety: 'Excellent',
    description:
      'Morocco\'s train network connects major cities and is very safe. First-class carriages are comfortable and well-maintained. The Al Boraq high-speed train between Tangier and Casablanca is modern and efficient. Trains are used daily by Moroccan women traveling alone.',
    tips: ['Book first class for more space and comfort', 'The Marrakech-Tangier route has scenic views', 'Buy tickets at the station or online via ONCF app'],
  },
  {
    mode: 'Intercity Buses (CTM & Supratours)',
    safety: 'Very Good',
    description:
      'CTM and Supratours are the two premium bus companies. Both are reliable, comfortable, and safe. Supratours connects to ONCF train routes. Seats are assigned, luggage is stored securely, and the buses are air-conditioned.',
    tips: ['Book in advance during holidays', 'CTM and Supratours have online booking', 'Supratours stations are often near train stations'],
  },
  {
    mode: 'Petit Taxis (City Taxis)',
    safety: 'Good',
    description:
      'Petit taxis operate within cities. Always insist on the meter being turned on. Ride-hailing apps like inDrive and Careem offer transparent pricing and trackable routes, which many women prefer for the added security of a digital record.',
    tips: ['Always insist on the meter', 'Use inDrive or Careem for price transparency', 'Share your ride location with a friend', 'Note the taxi number when you get in'],
  },
  {
    mode: 'Grand Taxis (Shared Long-Distance)',
    safety: 'Moderate',
    description:
      'Grand taxis are shared long-distance taxis, usually older Mercedes sedans that seat six passengers. They depart when full. While perfectly safe, the experience can feel cramped. You can purchase extra seats for more space and privacy.',
    tips: ['Buy two seats for more comfort', 'They leave from designated stations', 'Agree on the price before departing', 'Ask your riad to help arrange one'],
  },
  {
    mode: 'Domestic Flights',
    safety: 'Excellent',
    description:
      'Royal Air Maroc and Air Arabia Maroc operate frequent domestic flights. Useful for covering long distances quickly, such as Marrakech to Tangier or Casablanca to Ouarzazate. Airports are modern and well-staffed.',
    tips: ['Book early for best fares', 'Useful for the Marrakech to Tangier route', 'Small airports are easy to navigate'],
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   DATA: WOMEN-LED TOURS & EXPERIENCES
   ═══════════════════════════════════════════════════════════════════════ */

const womenLedTours = [
  {
    name: 'Intrepid Travel - Women\'s Expeditions',
    type: 'Group Tour',
    description:
      'Intrepid offers dedicated women-only small group tours of Morocco led by female guides. Itineraries include medina tours, cooking classes, desert camps, and visits to women\'s cooperatives. Groups are kept small (max 12) for an intimate experience.',
    duration: '8-15 days',
    priceRange: '$2,000 - $3,500',
  },
  {
    name: 'Wild Women Expeditions',
    type: 'Adventure Tour',
    description:
      'Focused on active and adventurous women, these tours combine trekking in the Atlas Mountains, camel riding in the Sahara, surfing in Essaouira, and cultural immersion in Marrakech. All guides and support staff are women.',
    duration: '10-14 days',
    priceRange: '$2,500 - $4,000',
  },
  {
    name: 'Local Female Guides in Marrakech',
    type: 'Day Experience',
    description:
      'Several Marrakech-based female guides offer private and small group tours of the medina, souks, and surrounding areas. A female guide provides a completely different perspective on Moroccan culture, sharing insights into women\'s daily life, traditions, and challenges.',
    duration: 'Half-day to full-day',
    priceRange: '500 - 1,200 MAD',
  },
  {
    name: 'Cooking Classes with Local Women',
    type: 'Cultural Experience',
    description:
      'Home cooking classes hosted by Moroccan women are among the most rewarding experiences in the country. Learn to prepare tagine, couscous, pastilla, and Moroccan salads in a home kitchen while hearing stories and learning about family life. Many include a market visit.',
    duration: '3-5 hours',
    priceRange: '300 - 800 MAD',
  },
  {
    name: 'Desert Camps with Female Staff',
    type: 'Overnight Experience',
    description:
      'Several luxury desert camps in the Merzouga and Zagora areas employ female staff and offer women-friendly facilities including private tents with en-suite bathrooms, separate bathing areas, and female guides for camel treks.',
    duration: '1-3 nights',
    priceRange: '800 - 3,000 MAD/night',
  },
  {
    name: 'Surf and Yoga Retreats for Women',
    type: 'Wellness Retreat',
    description:
      'Taghazout and Essaouira host several women-focused surf and yoga retreats. These combine daily surf lessons with female instructors, yoga sessions, healthy meals, and a supportive community atmosphere. Perfect for solo travelers looking to connect.',
    duration: '5-10 days',
    priceRange: '$600 - $1,800',
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   DATA: WOMEN'S COOPERATIVES
   ═══════════════════════════════════════════════════════════════════════ */

const cooperatives = [
  {
    name: 'Argan Oil Cooperatives (Essaouira Region)',
    product: 'Argan oil, cosmetics, culinary oil',
    description:
      'The Essaouira-Agadir corridor is home to dozens of women\'s argan oil cooperatives. Women crack, roast, and press argan nuts by hand using traditional methods passed down through generations. Visiting a cooperative lets you see the labor-intensive process, taste fresh argan oil, and purchase products that directly support the women\'s livelihoods.',
    impact: 'Employs over 6,000 women across the region, providing financial independence and education access',
    image: '/images/hero-desert.webp',
  },
  {
    name: 'Carpet Weaving Cooperatives (Middle Atlas)',
    product: 'Handwoven Berber rugs and textiles',
    description:
      'Berber women in the Middle Atlas Mountains have been weaving carpets for centuries. Each rug tells a story through its patterns and colors. Cooperatives in Azrou, Ifrane, and the villages around the Middle Atlas offer visitors the chance to watch weavers at work and purchase rugs at fair prices without middleman markups.',
    impact: 'Preserves ancient Amazigh weaving traditions while providing sustainable income for rural women',
    image: '/images/art-berber-carpet-weaving.webp',
  },
  {
    name: 'Saffron Cooperatives (Taliouine)',
    product: 'Saffron, saffron-infused products',
    description:
      'Taliouine in the Anti-Atlas is Morocco\'s saffron capital. Women\'s cooperatives here harvest and process the delicate saffron crocus flowers by hand each November. The saffron produced here rivals the finest in the world. Visits include learning about the harvest process and tasting saffron tea.',
    impact: 'Supports families in one of Morocco\'s most remote regions and promotes sustainable agriculture',
    image: '/images/hero-spices.webp',
  },
  {
    name: 'Pottery Cooperatives (Safi & Fes)',
    product: 'Hand-painted ceramics and pottery',
    description:
      'While pottery in Fes and Safi has traditionally been a male craft, women\'s cooperatives have emerged that train women in the art of ceramic painting and glazing. These cooperatives produce beautiful hand-painted tagine pots, bowls, and tiles using traditional Moroccan motifs.',
    impact: 'Opens traditionally male industries to women and provides artisan training for younger generations',
    image: '/images/art-berber-carpet-weaving.webp',
  },
  {
    name: 'Embroidery and Textile Cooperatives (Fes)',
    product: 'Embroidered garments, table linens, caftans',
    description:
      'Fes has a long tradition of fine embroidery. Women\'s cooperatives in the medina produce exquisite hand-embroidered caftans, tablecloths, and cushion covers. The intricate needlework can take weeks or months to complete. Visitors can watch artisans at work and commission custom pieces.',
    impact: 'Provides income and social connection for women, many of whom work from home to balance family responsibilities',
    image: '/images/art-berber-carpet-weaving.webp',
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   DATA: HANDLING UNWANTED ATTENTION
   ═══════════════════════════════════════════════════════════════════════ */

const handlingAttention = [
  {
    situation: 'Verbal Comments on the Street',
    response:
      'The most common form of unwanted attention is verbal comments or catcalling. The most effective response is simply to keep walking without acknowledging it. Do not make eye contact, do not respond, and do not smile. This is culturally understood and is not considered rude.',
    phrase: '"La, shukran" (No, thank you)',
  },
  {
    situation: 'Persistent Following',
    response:
      'If someone is following you, walk confidently toward a busy area, shop, or restaurant. Ducking into any shop and telling the owner someone is bothering you will almost always result in them helping you. Moroccan shopkeepers and women are very protective of female visitors.',
    phrase: '"Sir f-halek" (Go away / Mind your own business)',
  },
  {
    situation: 'Aggressive Touts or Fake Guides',
    response:
      'A firm "la shukran" while continuing to walk is usually sufficient. Do not stop, do not engage in conversation, and do not explain yourself. If someone grabs your arm, a loud and firm "No" draws attention and they will back off. This behavior is condemned by Moroccans themselves.',
    phrase: '"Barak Allahu fik, la" (God bless you, no)',
  },
  {
    situation: 'Unwanted Photography',
    response:
      'If someone is photographing you without permission, it is perfectly acceptable to ask them to stop. Similarly, always ask permission before photographing local women, particularly in rural areas. A smile and a gesture toward the camera is usually enough to ask.',
    phrase: '"Momkin nsawwrek?" (May I take your photo?)',
  },
  {
    situation: 'Uncomfortable Taxi Situations',
    response:
      'If a taxi driver makes you uncomfortable, ask to be let out at the next well-lit public area. Share your taxi ride location with a friend using your phone. Using ride-hailing apps like inDrive creates a digital record of your trip. Sit in the back seat and keep your phone visible.',
    phrase: '"Wakfni hna, afak" (Stop here, please)',
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   DATA: PACKING ESSENTIALS
   ═══════════════════════════════════════════════════════════════════════ */

const packingEssentials = [
  {
    category: 'Clothing Essentials',
    items: [
      'Lightweight linen or cotton pants (2-3 pairs)',
      'Long maxi skirts or midi skirts (2-3)',
      'Loose-fitting tops that cover shoulders (4-5)',
      'A lightweight cardigan or shawl for layering',
      'One versatile dress for dinners',
      'Comfortable walking shoes with good grip',
      'Sandals for riads and beach',
      'Swimsuit for hammams, pools, and beaches',
    ],
  },
  {
    category: 'Essential Accessories',
    items: [
      'Large scarf or pashmina (multi-purpose: sun cover, mosque visits, warmth)',
      'Sunglasses (helps avoid unwanted eye contact)',
      'Wide-brimmed hat for sun protection',
      'Cross-body bag with secure zipper closure',
      'Money belt or hidden pouch for passport and cash',
      'Reusable water bottle with filter',
    ],
  },
  {
    category: 'Toiletries and Health',
    items: [
      'High SPF sunscreen (expensive in Morocco)',
      'Insect repellent',
      'Hand sanitizer',
      'Wet wipes and tissues (public restrooms vary widely)',
      'Feminine hygiene products (available in cities but bring favorites)',
      'Any prescription medications with documentation',
      'Basic first-aid kit',
      'Stomach remedies (Imodium, Pepto-Bismol)',
    ],
  },
  {
    category: 'Technology and Safety',
    items: [
      'Unlocked phone for local SIM card (Maroc Telecom or Orange)',
      'Portable charger / power bank',
      'European plug adapter (Type C/E)',
      'Offline maps downloaded (Google Maps or Maps.me)',
      'Photocopies of passport and travel insurance stored separately',
      'Door wedge or portable door lock for extra security',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   DATA: FEMALE-FRIENDLY ACTIVITIES
   ═══════════════════════════════════════════════════════════════════════ */

const femaleFriendlyActivities = [
  {
    title: 'Traditional Hammam Experience',
    description:
      'The hammam is perhaps the quintessential women\'s experience in Morocco. Public hammams are social spaces where local women gather to bathe, chat, and relax. Being welcomed into this ritual is an intimate cultural experience. Private hammams in riads offer a more luxurious but equally memorable version.',
    location: 'Available in every city',
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    title: 'Moroccan Cooking Classes',
    description:
      'Learn the secrets of tagine, couscous, and pastilla from Moroccan women in their home kitchens. Many classes include a visit to the local market to select fresh ingredients. This is one of the best ways to connect authentically with local women.',
    location: 'Marrakech, Fes, Essaouira, Chefchaouen',
    icon: <Utensils className="w-5 h-5" />,
  },
  {
    title: 'Henna Art Sessions',
    description:
      'Rather than the tourist-trap henna artists in the squares, book a private henna session at your riad or through a local women\'s cooperative. A skilled henna artist will create beautiful, intricate designs while explaining the cultural significance of different patterns.',
    location: 'Marrakech, Fes',
    icon: <Palette className="w-5 h-5" />,
  },
  {
    title: 'Yoga and Wellness Retreats',
    description:
      'Morocco has become a top destination for yoga retreats, particularly along the Atlantic coast. Taghazout, Essaouira, and the Atlas Mountains host retreats ranging from surf-and-yoga combos to intensive meditation weeks. Many are women-focused.',
    location: 'Taghazout, Essaouira, Atlas Mountains',
    icon: <Sun className="w-5 h-5" />,
  },
  {
    title: 'Photography Walks',
    description:
      'Morocco is one of the most photogenic countries on earth. Guided photography walks through the medinas of Marrakech, Fes, and Chefchaouen are a wonderful way to explore with purpose. Several female photographers offer guided walks specifically for women.',
    location: 'Marrakech, Fes, Chefchaouen',
    icon: <Camera className="w-5 h-5" />,
  },
  {
    title: 'Surfing with Female Instructors',
    description:
      'Morocco\'s Atlantic coast offers world-class surfing. Taghazout and Essaouira have several surf schools with female instructors who create welcoming, supportive learning environments. Surf camps often include accommodation and meals.',
    location: 'Taghazout, Essaouira, Imsouane',
    icon: <Waves className="w-5 h-5" />,
  },
  {
    title: 'Artisan Workshop Visits',
    description:
      'Watch master artisans create zellige tiles, leather goods, metalwork, and pottery. Many workshops welcome visitors and some offer hands-on experiences where you can try your hand at traditional crafts under expert guidance.',
    location: 'Fes, Marrakech, Safi',
    icon: <Gem className="w-5 h-5" />,
  },
  {
    title: 'Sahara Desert Camping',
    description:
      'A night in the Sahara is transformative. Luxury desert camps offer private tents, camel treks at sunset, traditional Berber music around the campfire, and a sky full of stars like you have never seen. Many camps have excellent facilities for women.',
    location: 'Merzouga, Zagora',
    icon: <TreePalm className="w-5 h-5" />,
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   DATA: GROUP VS SOLO TRAVEL
   ═══════════════════════════════════════════════════════════════════════ */

const groupVsSolo = {
  solo: {
    title: 'Solo Travel',
    pros: [
      'Complete freedom to set your own pace and itinerary',
      'Deeper personal growth and confidence building',
      'More authentic local interactions and invitations',
      'Budget flexibility to splurge or save as you choose',
      'Opportunity to truly disconnect and be present',
    ],
    cons: [
      'Navigating medinas alone can be challenging at first',
      'May receive more unwanted attention than in a group',
      'No one to split costs on private guides or transport',
      'Can feel lonely during meals without companions',
    ],
    bestFor: 'Experienced travelers, those seeking personal growth, or women who value independence and flexibility',
  },
  group: {
    title: 'Group Tours',
    pros: [
      'Built-in safety net and companionship',
      'Expert local guides handle all logistics',
      'Access to experiences that are difficult to arrange solo',
      'Instant community of like-minded women',
      'Less stressful navigation and planning',
    ],
    cons: [
      'Fixed itineraries with limited flexibility',
      'Higher cost than independent travel',
      'Less opportunity for spontaneous local connections',
      'Group dynamics may not suit everyone',
    ],
    bestFor: 'First-time visitors to Morocco, women who prefer structure, or those who want a social travel experience',
  },
};

/* ═══════════════════════════════════════════════════════════════════════
   DATA: INSPIRATIONAL STORIES
   ═══════════════════════════════════════════════════════════════════════ */

const inspirationalStories = [
  {
    name: 'Sarah',
    age: 28,
    from: 'London, UK',
    quote:
      'I was nervous before my first solo trip to Morocco, but within hours of arriving in Essaouira, those fears melted away. A local woman at the market taught me how to pick the best spices, my riad host became like a second mother, and by the end of two weeks, I had a network of Moroccan women friends who still message me regularly. Morocco did not just meet my expectations, it completely transformed my idea of what solo travel could be.',
    trip: '2 weeks, Marrakech - Essaouira - Chefchaouen',
  },
  {
    name: 'Michelle',
    age: 45,
    from: 'Toronto, Canada',
    quote:
      'As a woman in my forties who had never traveled alone, booking a women-only group tour to Morocco was the best decision I ever made. We visited argan oil cooperatives, learned to cook tagine in a Berber village, rode camels at sunset, and stayed in the most beautiful riads. The Moroccan women we met were strong, warm, and hilarious. I went expecting a vacation and came home with a new perspective on life.',
    trip: '10-day women\'s group tour',
  },
  {
    name: 'Yuki',
    age: 33,
    from: 'Tokyo, Japan',
    quote:
      'I spent a month in Morocco as a digital nomad, splitting my time between Marrakech and Taghazout. The coworking spaces are great, the cost of living is low, and the surf community in Taghazout is incredibly welcoming to women. I surfed every morning, worked in the afternoon, and explored on weekends. The biggest surprise was how safe I felt, even walking home alone at night in Taghazout.',
    trip: '1 month, Marrakech and Taghazout',
  },
  {
    name: 'Amara',
    age: 52,
    from: 'Atlanta, USA',
    quote:
      'Morocco was deeply meaningful for me as a Black American woman. The warmth and lack of racial tension was immediately noticeable. People were curious about where I was from and genuinely friendly. Visiting the women\'s cooperatives and seeing how they support each other inspired me. The Sahara desert at sunrise brought me to tears. Morocco felt like coming home to a place I had never been.',
    trip: '12 days, Casablanca - Fes - Merzouga - Marrakech',
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   DATA: EMERGENCY RESOURCES
   ═══════════════════════════════════════════════════════════════════════ */

const emergencyContacts = [
  { service: 'Police Emergency', number: '19', note: 'National police in urban areas' },
  { service: 'Gendarmerie (Rural Police)', number: '177', note: 'Rural areas and highways' },
  { service: 'Ambulance / Medical Emergency', number: '150', note: 'SAMU emergency medical services' },
  { service: 'Fire Department', number: '15', note: 'Fire and rescue services' },
  { service: 'Tourist Police (Brigade Touristique)', number: 'Available in major cities', note: 'Specially trained to assist tourists, many speak English and French' },
  { service: 'SOS Femmes (Women\'s Helpline)', number: '0801 002 020', note: 'Support for women experiencing violence or harassment' },
];

/* ═══════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */

export default function WomenTravelPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-chefchaouen-drone.webp"
            alt="Woman exploring the blue streets of Chefchaouen, Morocco"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/70 via-[var(--color-primary)]/50 to-[var(--color-primary)]/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-24">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-heading mb-6">
            <Compass className="w-4 h-4" />
            Empowering Women to Explore Morocco
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Women&apos;s Travel Guide
            <span className="block text-[var(--color-accent-300)]">to Morocco</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-body leading-relaxed mb-8">
            Morocco is a destination that rewards the curious, the bold, and the open-hearted.
            This guide is your companion for an unforgettable journey, with practical advice
            from women who have walked these paths before you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#why-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white rounded-lg font-heading font-semibold transition-all duration-300"
            >
              <Heart className="w-4 h-4" />
              Why Morocco
            </a>
            <a
              href="#best-cities"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg font-heading font-semibold backdrop-blur-sm transition-all duration-300"
            >
              <MapPin className="w-4 h-4" />
              Best Cities
            </a>
            <a
              href="#safety-tips"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg font-heading font-semibold backdrop-blur-sm transition-all duration-300"
            >
              <Shield className="w-4 h-4" />
              Safety Tips
            </a>
          </div>
        </div>
      </section>

      {/* ─── BREADCRUMB ─── */}
      <nav
        aria-label="Breadcrumb"
        className="bg-[var(--color-primary-50)] border-b border-[var(--border-light)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <ol className="flex items-center gap-2 text-sm font-body text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-secondary)] transition-colors inline-flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li>
              <Link href="/guides" className="hover:text-[var(--color-secondary)] transition-colors">
                Travel Guides
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--color-secondary)] font-medium">Women&apos;s Travel Guide</li>
          </ol>
        </div>
      </nav>

      {/* ─── INTRO TEXT ─── */}
      <section className="bg-[var(--background)] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Your Journey Starts Here
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6">
              Morocco Is Waiting for You
            </h2>
            <div className="w-16 h-0.5 bg-[var(--color-accent)] mx-auto mb-8" />
          </div>
          <div className="prose prose-lg max-w-none font-body text-[var(--text-secondary)] leading-relaxed space-y-5">
            <p>
              Let us start with the most important thing: <strong>Morocco is a wonderful destination for women travelers.</strong> Millions
              of women visit Morocco every year and come home with stories of extraordinary hospitality, life-changing
              experiences, and a deep love for this beautiful country. The internet is full of fearful warnings about
              Morocco, but the reality on the ground is far more nuanced, and overwhelmingly positive.
            </p>
            <p>
              Morocco is a country where a stranger will invite you into her home for tea and refuse to let you
              leave without trying her couscous. Where a riad host will walk you to a restaurant because she
              wants to make sure you find the best food. Where women in cooperatives will teach you to press
              argan oil and share stories that bridge cultures and continents.
            </p>
            <p>
              This guide is designed to be practical, honest, and empowering. We will share tips that help you
              travel comfortably and confidently, from what to wear and how to navigate the medinas to the best
              women-led experiences and cooperatives that deserve your support. Think of this not as a list of
              warnings, but as insider knowledge from women who adore Morocco and want you to love it too.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHY MOROCCO IS GREAT FOR WOMEN ─── */}
      <section id="why-morocco" className="bg-[var(--surface-muted)] py-16 sm:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-secondary)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              A Destination Like No Other
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Why Morocco Is Amazing for Women Travelers
            </h2>
            <p className="text-[var(--text-secondary)] font-body max-w-2xl mx-auto">
              From the warmth of its people to the richness of its culture, Morocco offers experiences
              that are uniquely rewarding for women.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMoroccoGreat.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-300 border border-[var(--border-light)]"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--color-secondary-50)] flex items-center justify-center text-[var(--color-secondary)] mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BEST CITIES FOR WOMEN ─── */}
      <section id="best-cities" className="bg-[var(--background)] py-16 sm:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-secondary)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Where to Go
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Best Cities and Regions for Women Travelers
            </h2>
            <p className="text-[var(--text-secondary)] font-body max-w-2xl mx-auto">
              Each Moroccan city has its own personality. Here are the destinations that women travelers
              consistently rate highest for comfort, safety, and experience.
            </p>
          </div>
          <div className="space-y-8">
            {bestCities.map((city, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-sm)] border border-[var(--border-light)]`}
              >
                <div className="lg:w-2/5 min-h-[250px]">
                  <img
                    src={city.image}
                    alt={`${city.name}, Morocco - recommended for women travelers`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                      {city.name}
                    </h3>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, s) => (
                        <Star
                          key={s}
                          className={`w-4 h-4 ${s < city.rating ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-[var(--border)]'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[var(--color-secondary)] font-heading text-sm font-medium mb-3">
                    {city.vibe}
                  </p>
                  <p className="font-body text-[var(--text-secondary)] leading-relaxed mb-4">
                    {city.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {city.highlights.map((h, j) => (
                      <span
                        key={j}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--color-primary-50)] text-[var(--text-secondary)] rounded-full text-xs font-heading font-medium"
                      >
                        <CheckCircle className="w-3 h-3 text-[var(--color-green)]" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CULTURAL UNDERSTANDING & DRESS CODE ─── */}
      <section id="dress-code" className="bg-[var(--surface-muted)] py-16 sm:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-secondary)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Dress with Confidence
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              What to Wear: Practical, Respectful, Comfortable
            </h2>
            <p className="text-[var(--text-secondary)] font-body max-w-2xl mx-auto">
              Dressing modestly in Morocco is less about strict rules and more about comfort and respect.
              You do not need to cover your head. Think loose, breathable, and stylish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {dressCodeTips.map((tip, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-[var(--border-light)] shadow-[var(--shadow-sm)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-50)] flex items-center justify-center text-[var(--color-accent-600)]">
                    {tip.icon}
                  </div>
                  <h3 className="font-heading font-bold text-[var(--text-primary)]">
                    {tip.context}
                  </h3>
                </div>
                <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed">
                  {tip.recommendation}
                </p>
              </div>
            ))}
          </div>

          {/* Key Note */}
          <div className="max-w-3xl mx-auto bg-[var(--color-secondary-50)] border border-[var(--color-secondary-200)] rounded-xl p-6 sm:p-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Shirt className="w-6 h-6 text-[var(--color-secondary)]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-[var(--text-primary)] mb-2">
                  The Golden Rule of Dressing in Morocco
                </h3>
                <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed">
                  Think of it this way: if you would wear it to a casual family gathering, it works in Morocco.
                  Covering shoulders and knees in the medinas is the single most effective way to reduce unwanted
                  attention and blend in more comfortably. Loose-fitting natural fabrics like linen and cotton are
                  your best friends in the Moroccan heat. Many women find that a large, versatile scarf becomes
                  their most-used travel accessory: sun cover, shoulder wrap, picnic blanket, and impromptu pillow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ACCOMMODATION TIPS ─── */}
      <section id="accommodation" className="bg-[var(--background)] py-16 sm:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-secondary)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Where to Stay
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Accommodation Tips for Women
            </h2>
            <p className="text-[var(--text-secondary)] font-body max-w-2xl mx-auto">
              From intimate riads with motherly hosts to hostels with lively female-only dorms,
              Morocco has accommodation to suit every style and budget.
            </p>
          </div>
          <div className="space-y-8">
            {accommodationTips.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-sm)] border border-[var(--border-light)]"
              >
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-[var(--text-secondary)] leading-relaxed mb-5">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.tips.map((tip, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-[var(--text-secondary)]">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRANSPORTATION ─── */}
      <section id="transport" className="bg-[var(--surface-muted)] py-16 sm:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-secondary)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Getting Around Safely
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Transportation Safety and Tips
            </h2>
            <p className="text-[var(--text-secondary)] font-body max-w-2xl mx-auto">
              Morocco has a solid transport network. Knowing your options empowers you to
              move around the country confidently and comfortably.
            </p>
          </div>
          <div className="space-y-6">
            {transportTips.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-[var(--border-light)] shadow-[var(--shadow-sm)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <Bus className="w-5 h-5 text-[var(--color-secondary)]" />
                    <h3 className="font-heading font-bold text-lg text-[var(--text-primary)]">
                      {item.mode}
                    </h3>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-semibold ${
                      item.safety === 'Excellent'
                        ? 'bg-green-50 text-green-700'
                        : item.safety === 'Very Good'
                          ? 'bg-emerald-50 text-emerald-700'
                          : item.safety === 'Good'
                            ? 'bg-blue-50 text-blue-700'
                            : 'bg-amber-50 text-amber-700'
                    }`}
                  >
                    <ShieldCheck className="w-3 h-3" />
                    {item.safety}
                  </span>
                </div>
                <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tips.map((tip, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--surface-muted)] text-[var(--text-secondary)] rounded-lg text-xs font-body"
                    >
                      <CheckCircle className="w-3 h-3 text-[var(--color-accent-600)]" />
                      {tip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WOMEN-LED TOURS & EXPERIENCES ─── */}
      <section id="women-tours" className="bg-[var(--background)] py-16 sm:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-secondary)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Curated Experiences
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Women-Led Tours and Experiences
            </h2>
            <p className="text-[var(--text-secondary)] font-body max-w-2xl mx-auto">
              Travel deeper with experiences designed by and for women. These tours and activities offer
              perspectives and access that standard tourism simply cannot match.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {womenLedTours.map((tour, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-[var(--border-light)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-300 flex flex-col"
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--color-secondary-50)] text-[var(--color-secondary)] rounded-full text-xs font-heading font-semibold mb-4 self-start">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  {tour.type}
                </span>
                <h3 className="font-heading font-bold text-lg text-[var(--text-primary)] mb-2">
                  {tour.name}
                </h3>
                <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed mb-4 flex-1">
                  {tour.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-light)]">
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-body">
                    <Clock className="w-3.5 h-3.5" />
                    {tour.duration}
                  </div>
                  <div className="text-sm font-heading font-semibold text-[var(--color-secondary)]">
                    {tour.priceRange}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONNECTING WITH LOCAL WOMEN - COOPERATIVES ─── */}
      <section id="cooperatives" className="bg-[var(--surface-muted)] py-16 sm:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-secondary)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Support Local Women
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Women&apos;s Cooperatives: Where Travel Meets Impact
            </h2>
            <p className="text-[var(--text-secondary)] font-body max-w-2xl mx-auto">
              Visiting women&apos;s cooperatives is one of the most meaningful things you can do in Morocco.
              Your visit and purchases directly support women&apos;s economic independence and preserve traditional crafts.
            </p>
          </div>
          <div className="space-y-8">
            {cooperatives.map((coop, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-sm)] border border-[var(--border-light)]`}
              >
                <div className="lg:w-1/3 min-h-[220px]">
                  <img
                    src={coop.image}
                    alt={coop.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-2/3 p-6 sm:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                      {coop.name}
                    </h3>
                  </div>
                  <p className="text-[var(--color-accent-600)] font-heading text-sm font-medium mb-3">
                    Products: {coop.product}
                  </p>
                  <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    {coop.description}
                  </p>
                  <div className="flex items-start gap-3 bg-[var(--color-green)]/5 rounded-lg p-3">
                    <HandHeart className="w-5 h-5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                    <p className="font-body text-sm text-[var(--color-green)]">
                      <span className="font-semibold">Impact:</span> {coop.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HANDLING UNWANTED ATTENTION ─── */}
      <section id="safety-tips" className="bg-[var(--background)] py-16 sm:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-secondary)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Navigate with Grace
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Handling Unwanted Attention
            </h2>
            <p className="text-[var(--text-secondary)] font-body max-w-2xl mx-auto">
              Occasional unwanted attention happens in Morocco, as it does in many countries. The vast majority
              is verbal and easily managed. Here are proven strategies from experienced women travelers.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {handlingAttention.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-[var(--border-light)] shadow-[var(--shadow-sm)]"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg text-[var(--text-primary)] mb-2">
                      {item.situation}
                    </h3>
                    <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed">
                      {item.response}
                    </p>
                  </div>
                  <div className="lg:w-64 flex-shrink-0 bg-[var(--color-accent-50)] rounded-lg p-4">
                    <p className="text-xs font-heading font-semibold text-[var(--color-accent-700)] uppercase tracking-wider mb-1">
                      Useful Phrase
                    </p>
                    <p className="font-heading font-bold text-[var(--text-primary)]">
                      {item.phrase}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Confidence Box */}
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[var(--color-secondary-50)] to-white border border-[var(--color-secondary-200)] rounded-xl p-6 sm:p-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Shield className="w-6 h-6 text-[var(--color-secondary)]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-[var(--text-primary)] mb-2">
                  The Most Important Tip: Confidence Is Your Best Ally
                </h3>
                <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
                  Walk with purpose, wear sunglasses, and project the energy of someone who knows where
                  she is going, even if you are happily lost. Confident body language is the single most
                  effective way to minimize unwanted interactions. Remember: the overwhelming majority of
                  Moroccans are kind, helpful, and proud to welcome visitors to their country.
                </p>
                <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed">
                  If you are ever truly uncomfortable, walk into the nearest shop, restaurant, or hotel.
                  Moroccan women and shopkeepers are incredibly protective of female visitors and will
                  help without hesitation. You are never truly alone in Morocco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEMALE-FRIENDLY ACTIVITIES ─── */}
      <section id="activities" className="bg-[var(--surface-muted)] py-16 sm:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-secondary)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Unforgettable Experiences
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Activities and Experiences for Women
            </h2>
            <p className="text-[var(--text-secondary)] font-body max-w-2xl mx-auto">
              From ancient hammam rituals to Saharan sunrises, these are the experiences that
              women travelers rave about long after coming home.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {femaleFriendlyActivities.map((activity, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-[var(--border-light)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-secondary-50)] flex items-center justify-center text-[var(--color-secondary)] mb-4">
                  {activity.icon}
                </div>
                <h3 className="font-heading font-bold text-[var(--text-primary)] mb-2">
                  {activity.title}
                </h3>
                <p className="font-body text-[var(--text-secondary)] text-xs leading-relaxed mb-3">
                  {activity.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-accent-600)] font-heading font-medium">
                  <MapPin className="w-3 h-3" />
                  {activity.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GROUP VS SOLO TRAVEL ─── */}
      <section id="group-vs-solo" className="bg-[var(--background)] py-16 sm:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-secondary)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Choose Your Style
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Group Tours vs. Solo Travel
            </h2>
            <p className="text-[var(--text-secondary)] font-body max-w-2xl mx-auto">
              Both are wonderful ways to experience Morocco. The best choice depends on your
              travel experience, personality, and what you want from the trip.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[groupVsSolo.solo, groupVsSolo.group].map((option, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[var(--border-light)] shadow-[var(--shadow-sm)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  {i === 0 ? (
                    <Compass className="w-6 h-6 text-[var(--color-secondary)]" />
                  ) : (
                    <Users className="w-6 h-6 text-[var(--color-secondary)]" />
                  )}
                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                    {option.title}
                  </h3>
                </div>
                <div className="mb-5">
                  <p className="font-heading font-semibold text-sm text-[var(--color-green)] uppercase tracking-wider mb-3">
                    Advantages
                  </p>
                  <ul className="space-y-2">
                    {option.pros.map((pro, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                        <span className="font-body text-sm text-[var(--text-secondary)]">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-5">
                  <p className="font-heading font-semibold text-sm text-[var(--color-accent-600)] uppercase tracking-wider mb-3">
                    Considerations
                  </p>
                  <ul className="space-y-2">
                    {option.cons.map((con, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <CircleAlert className="w-4 h-4 text-[var(--color-accent-600)] mt-0.5 flex-shrink-0" />
                        <span className="font-body text-sm text-[var(--text-secondary)]">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                  <p className="font-heading text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1">
                    Best For
                  </p>
                  <p className="font-body text-sm text-[var(--text-secondary)]">
                    {option.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PACKING ESSENTIALS ─── */}
      <section id="packing" className="bg-[var(--surface-muted)] py-16 sm:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-secondary)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Be Prepared
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Packing Essentials for Women
            </h2>
            <p className="text-[var(--text-secondary)] font-body max-w-2xl mx-auto">
              A well-packed bag makes all the difference. Here is what experienced women travelers
              recommend bringing to Morocco.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {packingEssentials.map((category, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-[var(--border-light)] shadow-[var(--shadow-sm)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Luggage className="w-5 h-5 text-[var(--color-secondary)]" />
                  <h3 className="font-heading font-bold text-[var(--text-primary)]">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-accent-600)] mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-[var(--text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSPIRATIONAL STORIES ─── */}
      <section id="stories" className="bg-[var(--background)] py-16 sm:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-secondary)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Real Voices
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Stories from Women Who Love Morocco
            </h2>
            <p className="text-[var(--text-secondary)] font-body max-w-2xl mx-auto">
              Hear from real women who have explored Morocco and returned home transformed.
              Their stories are the best proof that this country is worth the journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {inspirationalStories.map((story, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[var(--border-light)] shadow-[var(--shadow-sm)]"
              >
                <Quote className="w-8 h-8 text-[var(--color-accent-200)] mb-4" />
                <blockquote className="font-body text-[var(--text-secondary)] text-sm leading-relaxed italic mb-6">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-light)]">
                  <div>
                    <p className="font-heading font-bold text-[var(--text-primary)]">
                      {story.name}, {story.age}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] font-body">{story.from}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[var(--color-secondary)] font-heading font-medium">
                      {story.trip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EMERGENCY RESOURCES ─── */}
      <section id="emergency" className="bg-[var(--color-primary)] py-16 sm:py-20 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[var(--color-accent-300)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Stay Informed
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Emergency Resources and Contacts
            </h2>
            <p className="text-white/70 font-body max-w-2xl mx-auto">
              Save these numbers before your trip. Morocco has a reliable emergency system,
              and tourist police in major cities are specifically trained to assist visitors.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {emergencyContacts.map((contact, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[var(--color-accent-300)]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-sm mb-1">
                      {contact.service}
                    </h3>
                    <p className="font-display text-xl font-bold text-[var(--color-accent-300)] mb-1">
                      {contact.number}
                    </p>
                    <p className="font-body text-white/60 text-xs">
                      {contact.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-heading font-bold text-white mb-3">
              Additional Safety Resources
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[var(--color-accent-300)] mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-white/80">
                  Register with your country&apos;s embassy in Rabat before traveling
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[var(--color-accent-300)] mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-white/80">
                  Purchase comprehensive travel insurance that covers medical evacuation
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[var(--color-accent-300)] mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-white/80">
                  Share your itinerary with a trusted person at home
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[var(--color-accent-300)] mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-white/80">
                  Keep digital and physical copies of your passport, insurance, and emergency contacts
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[var(--color-accent-300)] mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-white/80">
                  Download offline maps and translation apps before arriving
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-gradient-to-br from-[var(--color-secondary-50)] via-[var(--background)] to-[var(--color-accent-50)] py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Sparkles className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6">
            Morocco Is Ready for You
          </h2>
          <p className="font-body text-[var(--text-secondary)] leading-relaxed mb-8 text-lg">
            Every woman who visits Morocco writes her own story. Some come for the food and stay for
            the friendships. Others come for the desert and discover a piece of themselves they did not
            know was missing. Whatever brings you to Morocco, trust that this country will give you
            far more than you expect. Pack your bags, trust your instincts, and prepare for the adventure
            of a lifetime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/solo-travel"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white rounded-lg font-heading font-semibold transition-all duration-300"
            >
              Solo Travel Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/safety"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white rounded-lg font-heading font-semibold transition-all duration-300"
            >
              Safety Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/itineraries"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[var(--surface-muted)] text-[var(--text-primary)] border border-[var(--border)] rounded-lg font-heading font-semibold transition-all duration-300"
            >
              Browse Itineraries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── RELATED GUIDES ─── */}
      <section className="bg-[var(--background)] py-12 border-t border-[var(--border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-lg text-[var(--text-primary)] mb-6">
            Related Guides You Might Enjoy
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Solo Travel in Morocco', href: '/solo-travel', icon: <Compass className="w-5 h-5" /> },
              { title: 'Safety Guide', href: '/safety', icon: <Shield className="w-5 h-5" /> },
              { title: 'Wellness and Hammams', href: '/wellness', icon: <Sparkles className="w-5 h-5" /> },
              { title: 'Cooking Classes', href: '/cooking-classes', icon: <Utensils className="w-5 h-5" /> },
            ].map((guide, i) => (
              <Link
                key={i}
                href={guide.href}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[var(--border-light)] hover:border-[var(--color-secondary-200)] hover:shadow-[var(--shadow-sm)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-secondary-50)] flex items-center justify-center text-[var(--color-secondary)] group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-colors duration-300">
                  {guide.icon}
                </div>
                <span className="font-heading font-semibold text-sm text-[var(--text-primary)] group-hover:text-[var(--color-secondary)] transition-colors">
                  {guide.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
