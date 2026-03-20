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
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  BookOpen,
  Compass,
  Eye,
  Shield,
  Phone,
  Luggage,
  Train,
  MessageCircle,
  Sun,
  Shirt,
  ThumbsUp,
  Lock,
  Globe,
  Utensils,
  Sparkles,
  Building,
  HandHelping,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Solo Female Travel in Morocco 2026 | Safety Tips & Essential Guide',
  description:
    'Honest guide to solo female travel in Morocco. Safety assessment, what to wear, best cities for women, dealing with harassment, accommodation tips, transport, solo activities, packing list, and emergency contacts for 2026.',
  keywords: [
    'solo female travel morocco',
    'morocco safe for women',
    'women travel morocco tips',
    'morocco solo woman',
    'is morocco safe for solo female travelers',
    'what to wear in morocco women',
    'morocco dress code women',
    'solo female travel marrakech',
    'chefchaouen solo female travel',
    'essaouira solo female travel',
    'rabat solo female travel',
    'morocco women safety tips',
    'morocco solo female packing list',
    'morocco women accommodation',
    'morocco solo female activities',
    'morocco harassment tips women',
    'morocco transport women safety',
    'morocco emergency contacts',
    'morocco tourist police',
    'morocco solo female itinerary',
  ],
  openGraph: {
    title: 'Solo Female Travel in Morocco 2026 | Safety Tips & Essential Guide',
    description:
      'Everything women need to know for solo travel in Morocco. Honest safety tips, what to wear by region, best cities, accommodation advice, solo activities, and emergency contacts.',
    url: `${BASE_URL}/morocco-solo-female-travel`,
    images: [
      {
        url: `${BASE_URL}/images/hero-chefchaouen.webp`,
        width: 1200,
        height: 630,
        alt: 'Solo female traveler exploring the blue streets of Chefchaouen, Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solo Female Travel in Morocco 2026 | Safety Tips & Essential Guide',
    description:
      'Complete guide for women traveling alone in Morocco. Safety assessment, dress code, best cities, transport, solo activities, and emergency resources for 2026.',
    images: [`${BASE_URL}/images/hero-chefchaouen.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-solo-female-travel` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-solo-female-travel`,
  name: 'Solo Female Travel in Morocco 2026 | Safety Tips & Essential Guide',
  description:
    'Honest guide to solo female travel in Morocco. Safety assessment, best cities for women, dress code, accommodation, transport, solo activities, packing list, and emergency contacts.',
  url: `${BASE_URL}/morocco-solo-female-travel`,
  image: `${BASE_URL}/images/hero-chefchaouen.webp`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-solo-female-travel`,
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
      { '@type': 'ListItem', position: 2, name: 'Solo Female Travel in Morocco', item: `${BASE_URL}/morocco-solo-female-travel` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco safe for solo female travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is generally safe for solo female travelers who take standard precautions. Millions of women visit each year without incident. The main challenges are verbal street harassment and persistent touts in tourist areas, not physical danger. Stick to well-trafficked areas, dress modestly, and book reputable accommodation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should women wear in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In cities and medinas, cover shoulders and knees with loose-fitting clothing. A lightweight scarf is invaluable for covering your head near mosques or in conservative areas. Coastal cities like Essaouira are more relaxed. At resort beaches swimwear is fine, but choose a one-piece at public beaches.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best cities in Morocco for solo female travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essaouira is widely considered the most relaxed and female-friendly city. Chefchaouen is very safe with a small-town feel. Rabat is modern and hassle-free. Marrakech is more intense but deeply rewarding with preparation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I deal with unwanted attention from men in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Walk with confidence and purpose. Wear sunglasses to avoid eye contact. A firm "La, shukran" (No, thank you) is effective. Ignore persistent catcalls. If someone follows you, step into a shop or restaurant. A fake wedding ring can reduce attention. Local women and shopkeepers will help if you signal discomfort.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Moroccan riads safe for solo women?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Riads are excellent for solo women. Many are run by women or have female staff, offer secure gated entry, and provide communal spaces to meet other travelers. Look for riads with strong reviews from solo female guests. Prices start from 300 MAD per night.',
      },
    },
    {
      '@type': 'Question',
      name: 'What solo activities are best for women in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cooking classes (from 300 MAD), women-only hammams (from 15 MAD public, from 400 MAD luxury), visits to women\'s argan cooperatives near Essaouira, henna art sessions (from 50 MAD), and pottery workshops in Fes are all excellent solo activities. These create natural opportunities to connect with Moroccan women.',
      },
    },
    {
      '@type': 'Question',
      name: 'What emergency numbers should solo women know in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Police: 19. Tourist Police (Brigade Touristique): available in Marrakech, Fes, and other major cities. Ambulance: 15. Fire: 15. SOS Helpline: 0800 00 08 85 (toll-free). The US Embassy in Rabat is at +212 537 637 200. The UK Embassy is at +212 537 633 333.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST CITIES FOR SOLO FEMALE TRAVELERS
   ═══════════════════════════════════════════════════════════════ */

const bestCities = [
  {
    city: 'Essaouira',
    rating: 'Excellent',
    icon: Compass,
    image: '/images/hero-essaouira.webp',
    vibe: 'Laid-back, artistic, coastal',
    safety: 'Minimal street harassment compared to other Moroccan cities. The compact medina is easy to navigate on foot.',
    highlights: ['Relaxed Atlantic beach town with a creative spirit', 'Art galleries, live Gnawa music, and the annual Gnaoua Festival', 'Compact medina that takes 20 minutes to walk end to end', 'Popular with female artists, writers, and digital nomads'],
    bestFor: 'First-time solo female travelers who want a gentle introduction to Morocco',
    stay: 'From 250 MAD/night in medina guesthouses',
  },
  {
    city: 'Chefchaouen',
    rating: 'Excellent',
    icon: Eye,
    image: '/images/hero-chefchaouen.webp',
    vibe: 'Peaceful, photogenic, mountain village',
    safety: 'Very safe with a small-town feel. Locals are accustomed to solo female travelers and overwhelmingly welcoming.',
    highlights: ['Blue-painted streets perfect for photography', 'Rif Mountain hiking trails from the town center', 'Small enough to know your way around in half a day', 'Strong local tradition of female artisans and weavers'],
    bestFor: 'Solo travelers who love photography, nature, and a slow pace',
    stay: 'From 200 MAD/night in guesthouses',
  },
  {
    city: 'Rabat',
    rating: 'Excellent',
    icon: Building,
    image: '/images/hero-rabat.webp',
    vibe: 'Modern, cosmopolitan, capital city',
    safety: 'Morocco\'s most modern and regulated city. Strong police presence, wide boulevards, and a less tourist-dependent economy means far less hassle.',
    highlights: ['Kasbah of the Udayas overlooking the Atlantic', 'Mohammed V Mausoleum and Hassan Tower', 'Modern tram system connecting key areas', 'Thriving cafe culture in Agdal and Hassan neighborhoods'],
    bestFor: 'Solo women who prefer a European-feeling city with Moroccan culture beneath the surface',
    stay: 'From 350 MAD/night in the city center',
  },
  {
    city: 'Marrakech',
    rating: 'Good (with preparation)',
    icon: Star,
    image: '/images/hero-marrakech.webp',
    vibe: 'Electric, intense, sensory overload',
    safety: 'Generally safe but expect verbal attention in the medina and souks. Jemaa el-Fnaa square is busiest (and most intense) after sunset.',
    highlights: ['Jemaa el-Fnaa square — world-famous night market', 'Stunning riads, Bahia Palace, and Jardin Majorelle', 'World-class food scene from 30 MAD street stalls to fine dining', 'Hammam and spa options on every corner'],
    bestFor: 'Confident solo travelers ready for intensity and rich cultural immersion',
    stay: 'From 300 MAD/night in medina riads',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT TO WEAR BY SETTING
   ═══════════════════════════════════════════════════════════════ */

const dressCode = [
  {
    setting: 'Medina & Souks',
    icon: MapPin,
    recommendation: 'Cover shoulders and knees. Loose trousers or maxi skirt with a blouse or tunic. A lightweight scarf draped over shoulders. Flat shoes with good grip for cobblestone streets.',
    avoid: 'Tank tops, shorts, tight-fitting clothing, flip-flops (uneven terrain)',
  },
  {
    setting: 'Resort & Hotel Beaches',
    icon: Sun,
    recommendation: 'Bikinis and swimwear are perfectly acceptable at resort pools and private beaches. Cover up with a kaftan or sarong when walking to and from the beach.',
    avoid: 'Nothing specific at resort beaches — just cover up when leaving the beach area',
  },
  {
    setting: 'Public Beaches',
    icon: Globe,
    recommendation: 'A one-piece swimsuit or modest swimwear draws less attention. Many Moroccan women swim in leggings and a long t-shirt. Nobody will ask you to leave in a bikini, but expect stares at non-tourist beaches.',
    avoid: 'Very revealing swimwear at non-tourist public beaches',
  },
  {
    setting: 'Near Mosques & Religious Sites',
    icon: Heart,
    recommendation: 'Cover everything: long sleeves, long skirt or trousers, and a headscarf covering your hair. Most mosques in Morocco do not allow non-Muslim entry, but dress conservatively when visiting from outside.',
    avoid: 'Any exposed skin above the ankle or wrist; uncovered hair',
  },
  {
    setting: 'Rural & Mountain Areas',
    icon: Compass,
    recommendation: 'More conservative dress is appreciated. Loose long trousers, long sleeves, and a headscarf show respect. Sturdy hiking shoes are essential in the Atlas Mountains or Rif region.',
    avoid: 'Shorts, sleeveless tops, tight athletic wear in villages',
  },
  {
    setting: 'Modern Areas & Nightlife',
    icon: Star,
    recommendation: 'Upscale restaurants in Gueliz (Marrakech), Casablanca, and Rabat allow more fashionable dress. A smart dress or blouse with trousers works well. Hotel bars and international venues are relaxed.',
    avoid: 'Nothing specific at upscale venues — use your judgment for the venue',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: CULTURAL AWARENESS & HARASSMENT STRATEGIES
   ═══════════════════════════════════════════════════════════════ */

const culturalTips = [
  { title: 'Walk with Confidence', icon: Shield, description: 'Body language matters enormously in Morocco. Walk with purpose, head up, steady pace. Touts target people who look lost or hesitant. Even if you have no idea where you are, keep walking until you can check your phone away from the street.' },
  { title: 'Use "La, Shukran" Firmly', icon: MessageCircle, description: '"La, shukran" (No, thank you) is the most powerful phrase you will use. Say it once, firmly, without smiling, and keep walking. Do not engage further — any response beyond the first is interpreted as willingness to negotiate.' },
  { title: 'Wear Sunglasses', icon: Eye, description: 'Eye contact is often read as interest or invitation. Sunglasses create a physical and psychological barrier. They also let you observe your surroundings without accidentally inviting conversation.' },
  { title: 'Share Your Location', icon: Phone, description: 'Send your daily plan to someone at home. Share your live location via WhatsApp. Keep your phone charged with a portable power bank. Buy a local SIM card at the airport (from 30 MAD) for data.' },
  { title: 'Trust Your Instincts', icon: ShieldCheck, description: 'If a situation feels wrong, leave immediately. Step into a shop, restaurant, or riad. Moroccan shopkeepers and women understand the situation instantly and will help without you having to explain.' },
  { title: 'Carry a Fake Wedding Ring', icon: Lock, description: 'A ring on your left hand signals that you are married. When asked, saying "yes, my husband is at the hotel" ends most conversations. You owe nobody the truth about your relationship status.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ACCOMMODATION TIPS
   ═══════════════════════════════════════════════════════════════ */

const accommodationTips = [
  {
    type: 'Riads (Best for Solo Women)',
    icon: Lock,
    price: 'From 300 MAD/night',
    description: 'Traditional courtyard houses converted into guesthouses. Riads are the top choice for solo women — secure locked doors, gated entry, communal rooftop terraces to meet other travelers, and often female staff. Many riad owners arrange airport transfers, restaurant bookings, and trusted guides.',
    lookFor: 'Reviews from solo female guests, female ownership or management, 24-hour reception, well-lit location in the medina',
  },
  {
    type: 'Hotels (Ville Nouvelle)',
    icon: ShieldCheck,
    price: 'From 400 MAD/night',
    description: 'International-standard hotels in the new town (ville nouvelle) of each city offer familiarity. Sofitel, Movenpick, and Four Seasons have strong security protocols. A good option if you prefer a modern base with easy taxi access to the medina.',
    lookFor: '24-hour front desk, in-hotel restaurant for late arrivals, well-lit parking area, ground-floor rooms available',
  },
  {
    type: 'Hostels (Budget Option)',
    icon: Users,
    price: 'From 80 MAD/night (dorm bed)',
    description: 'Morocco has a growing hostel scene in Marrakech, Fes, and Essaouira. Female-only dorms are available at several hostels. Great for meeting other solo travelers over communal breakfasts and organized activities.',
    lookFor: 'Female-only dorm option, lockers, recent reviews from solo women, social common area',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TRANSPORT SAFETY
   ═══════════════════════════════════════════════════════════════ */

const transportTips = [
  { mode: 'ONCF Trains', icon: Train, safety: 'Very safe', advice: 'The safest way to travel between cities. First class (from 140 MAD Marrakech to Fes) is comfortable with fewer passengers. Sit near other women or families. Book at oncf.ma for guaranteed seats.', price: 'From 80 MAD second class' },
  { mode: 'CTM & Supratours Buses', icon: Globe, safety: 'Safe', advice: 'Premium bus companies with fixed schedules and assigned seats. CTM runs modern coaches between all major cities. Book online during peak season (October-April). Stick to day services.', price: 'From 70 MAD between cities' },
  { mode: 'Petit Taxis', icon: MapPin, safety: 'Generally safe', advice: 'Small colored city taxis (red in Marrakech, blue in Rabat, white in Casablanca). Insist on the meter or agree a price before departing. Sit in the back seat. Note the taxi number at night and share it via WhatsApp.', price: 'From 10 MAD for short trips' },
  { mode: 'Grand Taxis', icon: Users, safety: 'Safe with precautions', advice: 'Shared taxis between cities, typically old Mercedes sedans. Sit by the window, not the middle. You can pay for two seats for more space and privacy. Wait at official stations for shared departures rather than flagging one down.', price: 'From 30 MAD per seat' },
  { mode: 'Ride-Hailing Apps', icon: Phone, safety: 'Very safe', advice: 'inDrive and Careem operate in Marrakech, Casablanca, and Rabat. Digital receipts, driver identification, and GPS tracking add accountability. Excellent for airport transfers and late-night rides.', price: 'From 15 MAD for short trips' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SOLO ACTIVITIES
   ═══════════════════════════════════════════════════════════════ */

const soloActivities = [
  {
    activity: 'Cooking Classes',
    icon: Utensils,
    price: 'From 300 MAD per class',
    description: 'Half-day Moroccan cooking classes in Marrakech, Fes, and Essaouira. You shop for ingredients in the souk with a local guide, then learn to make tagine, couscous, and pastilla in a riad kitchen. Classes are small (4-8 people) and attract solo travelers.',
    topPick: 'La Maison Arabe in Marrakech runs daily classes from 550 MAD. Café Clock in Fes offers classes from 350 MAD.',
  },
  {
    activity: 'Women\'s Argan Cooperatives',
    icon: HandHelping,
    price: 'Free to visit (purchases optional)',
    description: 'Along the road between Marrakech and Essaouira, women-run argan oil cooperatives invite visitors to see the traditional oil extraction process. These Berber cooperatives employ local women and sell pure argan oil, cosmetics, and amlou (argan-almond butter).',
    topPick: 'Cooperative Marjana near Essaouira. Cooperative Tighanimine near Agadir. Both are run entirely by women.',
  },
  {
    activity: 'Traditional Hammams',
    icon: Sparkles,
    price: 'From 15 MAD (public) / from 400 MAD (luxury)',
    description: 'Public hammams are gender-separated, making them a safe all-female space. A tayeba (female attendant) scrubs your skin with black soap and a kessa glove. This is where Moroccan women gather, socialize, and relax. Luxury options like Heritage Spa offer private rooms.',
    topPick: 'For authentic: any public neighborhood hammam. For luxury: Heritage Spa Marrakech, Hammam Mouassine Marrakech.',
  },
  {
    activity: 'Henna Art Sessions',
    icon: Heart,
    price: 'From 50 MAD for a hand design',
    description: 'Henna artists work throughout the medinas, but for the best experience, book through your riad or a trusted shop. Designs last 1-2 weeks. Avoid the aggressive henna women in Jemaa el-Fnaa who grab your hand — find a seated artist in the souk instead.',
    topPick: 'Book through your riad or ask for a recommendation. Art du Henné in Marrakech is well-reviewed.',
  },
  {
    activity: 'Pottery & Ceramics Workshops',
    icon: Sparkles,
    price: 'From 200 MAD per session',
    description: 'Fes is the ceramics capital of Morocco. Workshops in the Ain Nokbi pottery quarter let you throw clay on a wheel and paint traditional geometric patterns. Most workshops are run by multi-generational family businesses.',
    topPick: 'Art Naji in Fes offers tours and hands-on workshops. The Poterie de Fes cooperative is another solid choice.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: CAUTION AREAS
   ═══════════════════════════════════════════════════════════════ */

const cautionAreas = [
  { area: 'Casablanca after dark', detail: 'Morocco\'s economic capital has rougher edges than tourist cities. The area around Casa Port and the old medina can feel unsafe after 10 PM. Stick to Maarif, Anfa, and the Corniche at night.' },
  { area: 'Tangier port area', detail: 'The port zone and lower medina near the ferry terminal attract touts and scammers targeting newly arrived travelers. Head directly to your accommodation by taxi.' },
  { area: 'Fes medina at night', detail: 'The world\'s largest car-free urban area becomes a dark labyrinth after shops close (around 8 PM). Navigate with Google Maps offline and keep your phone accessible but discreet.' },
  { area: 'Rural areas alone', detail: 'Traveling solo in remote villages or the countryside is not recommended. Language barriers, limited phone signal, and fewer witnesses increase vulnerability. Join a group trek for Atlas Mountains or desert excursions.' },
  { area: 'Jemaa el-Fnaa after midnight', detail: 'Marrakech\'s main square thins out after midnight. The remaining crowd skews male and the food stalls close. Return to your riad by 11 PM or take a petit taxi directly.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING LIST
   ═══════════════════════════════════════════════════════════════ */

const packingList = [
  { category: 'Clothing Essentials', items: ['Lightweight maxi skirts (2-3)', 'Loose linen or cotton trousers', 'Tunics and blouses that cover shoulders', 'Large scarf / pashmina (doubles as headscarf, blanket, beach cover)', 'Light cardigan for evenings and air conditioning', 'Comfortable flat shoes with good grip', 'Sandals for riads and relaxed settings'] },
  { category: 'Safety & Practical', items: ['Portable door lock or rubber door stop', 'Headlamp or small flashlight (medina streets are dark)', 'Portable power bank (20,000 mAh recommended)', 'Local SIM card (buy at airport, from 30 MAD)', 'Copies of passport and insurance (physical + digital)', 'Whistle on keychain', 'Small crossbody bag with zipper (anti-theft)'] },
  { category: 'Comfort & Wellness', items: ['Sunscreen SPF 50 (expensive in Morocco, bring from home)', 'Insect repellent', 'Hand sanitizer and wet wipes', 'Reusable water bottle with filter', 'Earplugs (call to prayer starts around 4:30 AM)', 'Period products (available but brands differ from Western ones)', 'Basic first aid kit with personal medications'] },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: EMERGENCY RESOURCES
   ═══════════════════════════════════════════════════════════════ */

const emergencyContacts = [
  { service: 'Police', number: '19', note: 'National police for cities. Dial from any phone.' },
  { service: 'Gendarmerie (Rural Areas)', number: '177', note: 'Military police for rural zones and highways.' },
  { service: 'Tourist Police (Brigade Touristique)', number: 'Varies by city', note: 'Dedicated units in Marrakech (near Jemaa el-Fnaa), Fes (Bab Boujeloud), and Agadir. English and French spoken.' },
  { service: 'Ambulance & Fire', number: '15', note: 'Emergency medical services. Response times vary outside cities.' },
  { service: 'SOS Helpline', number: '0800 00 08 85', note: 'Toll-free national helpline for emergencies.' },
  { service: 'US Embassy (Rabat)', number: '+212 537 637 200', note: 'Km 5.7, Avenue Mohammed VI, Souissi, Rabat.' },
  { service: 'UK Embassy (Rabat)', number: '+212 537 633 333', note: '28 Avenue SAR Sidi Mohammed, Rabat.' },
  { service: 'Canadian Embassy (Rabat)', number: '+212 537 687 400', note: '66 Mehdi Ben Barka Avenue, Souissi, Rabat.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoSoloFemaleTravelPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Breadcrumbs ── */}
      <nav className="bg-white border-b border-[var(--border-primary)]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Solo Female Travel in Morocco</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-chefchaouen.webp"
          alt="Solo female traveler walking through the blue-painted streets of Chefchaouen, Morocco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6">
            <Shield className="w-4 h-4" />
            Updated March 2026
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6">
            Solo Female Travel in Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            An honest, practical guide for women traveling Morocco alone. Safety strategies, what to wear,
            the cities that treat solo women best, and real details that make the difference between a stressful trip and a great one.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Safety Guide</span>
            <span className="flex items-center gap-1.5"><Shirt className="w-4 h-4 text-emerald-400" /> Dress Code</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /> Best Cities</span>
            <span className="flex items-center gap-1.5"><Luggage className="w-4 h-4 text-emerald-400" /> Packing List</span>
          </div>
        </div>
      </section>

      {/* ── Section 1: Is Morocco Safe? ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Is Morocco Safe for Solo Female Travelers?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A direct assessment based on real conditions, not marketing copy.
          </p>

          <div className="card-moroccan p-8 mb-8">
            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">The Short Answer</h3>
            <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
              Yes. Morocco is generally safe for solo female travelers. Millions of women visit every year and leave
              with overwhelmingly positive memories. Physical violence against tourists is rare. The real challenge is
              persistent verbal attention &mdash; catcalling, comments on your appearance, and aggressive touts in places
              like Marrakech&apos;s Jemaa el-Fnaa and the Fes medina.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Morocco is a Muslim-majority country with conservative social norms around gender interaction. A solo woman
              draws more attention than a couple or a group. This is not unique to Morocco &mdash; the same dynamic exists
              across North Africa and parts of the Middle East. With preparation, the right mindset, and a handful of
              practical strategies, traveling Morocco alone is not just safe but extraordinarily rewarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6 border-l-4 border-l-emerald-500">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-emerald-600" /> The Good
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />Moroccans are genuinely hospitable and generous</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />Violent crime against tourists is extremely rare</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />Tourist police patrol major cities and medinas</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />Women-only spaces exist (hammams, train sections)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />Tourism infrastructure improves year over year</li>
              </ul>
            </div>
            <div className="card-moroccan p-6 border-l-4 border-l-amber-500">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" /> The Challenges
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />Verbal street harassment (catcalling, comments)</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />Persistent touts and unofficial guides in medinas</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />Occasional following in quieter streets</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />Inflated prices (affects all tourists, not just women)</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />Navigating medina streets after dark</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Best Cities ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Cities for Solo Women
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Not every Moroccan city feels the same for a woman traveling alone. These four rank highest for safety, comfort, and solo-traveler infrastructure.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bestCities.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={city.image}
                      alt={`${city.city}, Morocco — recommended for solo female travelers`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <CityIcon className="w-5 h-5 text-white" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">{city.city}</h3>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/90 text-white">{city.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-[var(--color-accent)] font-semibold uppercase tracking-wide mb-1">{city.vibe}</p>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">{city.safety}</p>
                    <div className="space-y-1.5 mb-4">
                      {city.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {h}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] pt-3 border-t border-[var(--border-primary)]">
                      <Star className="w-3 h-3 text-[var(--color-gold)]" />{city.bestFor}
                    </div>
                    <div className="mt-2 text-xs text-[var(--color-accent)] font-semibold">{city.stay}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 3: Dress Code Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shirt className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Wear in Morocco as a Woman
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Dress code varies significantly by setting. A practical breakdown for every situation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dressCode.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.setting} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">{item.setting}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{item.recommendation}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]"><span className="font-semibold">Avoid:</span> {item.avoid}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto mt-10">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Info className="w-5 h-5 inline mr-1 text-[var(--color-accent)]" />
                The Golden Rule
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                You do not need to wear a hijab or traditional Moroccan clothing. Morocco does not expect Western women
                to dress identically to local women. The key: shoulders covered, knees covered, loose fabrics. A large
                scarf is the single most versatile item you can pack &mdash; headscarf, shawl, beach cover-up, blanket on
                an overnight bus, privacy screen on a train. Bring two.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Cultural Awareness & Harassment Strategies ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cultural Awareness & Handling Unwanted Attention
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical strategies from experienced solo female travelers. These work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalTips.map((item) => {
              const TipIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto mt-10 space-y-6">
            <div className="card-moroccan p-6 border-l-4 border-l-[var(--color-accent)]">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Local Women Are Your Greatest Allies
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                If you feel uncomfortable, approach a local woman or a family. Moroccan women understand the situation
                instantly and will help. Shopkeepers and restaurant staff respond quickly to a woman signaling distress.
                A simple &quot;Can I stay here for a moment?&quot; in English or French is understood everywhere in tourist areas.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <MessageCircle className="w-5 h-5 inline mr-1 text-[var(--color-accent)]" />
                Greetings & Eye Contact
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                &quot;Salaam alaikum&quot; (peace be upon you) opens doors and earns respect. Women greet other women with
                cheek kisses (usually two). With unknown men, place your hand over your heart and give a verbal greeting
                instead of a handshake &mdash; follow their lead. Prolonged eye contact with men can be read as interest,
                so keep it brief and purposeful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Accommodation ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Accommodation Tips for Solo Women
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Your accommodation choice shapes the entire trip. Riads, hotels, and hostels each serve different needs.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak months (October&ndash;April).
          </p>

          <div className="space-y-6">
            {accommodationTips.map((acc) => {
              const AccIcon = acc.icon;
              return (
                <div key={acc.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <AccIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{acc.type}</h3>
                      <span className="text-sm text-[var(--color-accent)] font-semibold">{acc.price}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{acc.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Eye className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]"><span className="font-semibold text-[var(--text-primary)]">Look for:</span> {acc.lookFor}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="card-moroccan p-6 mt-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              <Heart className="w-5 h-5 inline mr-1 text-[var(--color-accent)]" />
              Women-Only Hammams & Safe Neighborhoods
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
              Traditional public hammams are gender-separated, so women always have their own sessions. Entry starts
              from 15 MAD for a neighborhood hammam, and the tayeba (female attendant) guides you through the scrubbing
              process. For a private experience, luxury hammams like Heritage Spa in Marrakech start from 400 MAD. Seasonal
              pricing may apply during peak months.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <span className="font-semibold text-[var(--text-primary)]">Recommended neighborhoods:</span> In Marrakech,
              the area around Riad Zitoun and Mouassine is well-lit and well-trafficked. In Fes, stay near Bab Boujeloud
              or Talaa Kebira. In Rabat, Hassan and Agdal are modern and safe. In Essaouira, the entire medina is compact
              and easy to navigate.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 6: Transport Safety ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Train className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Transport Safety for Solo Women
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            How to get around Morocco safely and confidently as a woman alone.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices and vary by route and season.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {transportTips.map((item) => {
              const TransIcon = item.icon;
              return (
                <div key={item.mode} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TransIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{item.mode}</h3>
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">{item.safety}</span>
                      </div>
                      <span className="text-sm text-[var(--color-accent)] font-semibold">{item.price}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.advice}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <div className="card-moroccan p-6 border-l-4 border-l-red-400">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" /> Avoid
              </h3>
              <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />Night buses between cities (take day services or trains)</li>
                <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />Unofficial taxis without meters or marked identification</li>
                <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />Hitchhiking in any context</li>
                <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />Walking alone in poorly lit areas after midnight</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Solo Activities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Solo Activities for Women in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Activities that work brilliantly alone &mdash; and create natural connections with other travelers and Moroccan women.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {soloActivities.map((item) => {
              const ActIcon = item.icon;
              return (
                <div key={item.activity} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ActIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{item.activity}</h3>
                      <span className="text-sm text-[var(--color-accent)] font-semibold">{item.price}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{item.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]"><span className="font-semibold text-[var(--text-primary)]">Top pick:</span> {item.topPick}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 8: Areas to Exercise Caution ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cities &amp; Areas to Exercise Extra Caution
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These areas are not off-limits, but they require heightened awareness &mdash; especially after dark.
          </p>

          <div className="space-y-4">
            {cautionAreas.map((item) => (
              <div key={item.area} className="card-moroccan p-5 border-l-4 border-l-amber-400">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                  {item.area}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: Packing List ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Packing List Essentials for Women
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to pack with items specific to solo female travel in Morocco.
          </p>

          <div className="space-y-6">
            {packingList.map((category) => (
              <div key={category.category} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 10: Emergency Resources ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Phone className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Emergency Resources &amp; Contacts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Save these numbers in your phone before you arrive. Screenshot this section.
          </p>

          <div className="space-y-3">
            {emergencyContacts.map((contact) => (
              <div key={contact.service} className="card-moroccan p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{contact.service}</h3>
                    <span className="text-sm font-mono font-bold text-red-600">{contact.number}</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">{contact.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-6 mt-8 border-l-4 border-l-[var(--color-accent)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Info className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
              Travel Insurance
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Buy comprehensive travel insurance before departure. Ensure it covers medical evacuation, as rural hospitals
              have limited facilities. Keep a digital copy of your policy on your phone and a printed copy in your bag.
              Most clinics in Marrakech and Casablanca accept international insurance, but you may need to pay upfront
              and claim reimbursement afterward.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 11: FAQ ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco safe for solo female travelers?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, Morocco is generally safe. Millions of women visit each year without incident. The main challenges
                are verbal street harassment and persistent touts, not physical danger. Dress modestly, stick to
                well-trafficked areas, and book reputable accommodation.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should women wear in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Cover shoulders and knees in cities and medinas. A lightweight scarf is invaluable. Coastal cities
                and beach resorts are more relaxed. At resort beaches, swimwear is fine; at public beaches, choose
                a one-piece or modest swimwear for less attention.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the best cities for solo female travelers?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Essaouira is the most relaxed and female-friendly. Chefchaouen is very safe with a small-town feel.
                Rabat is modern, cosmopolitan, and hassle-free. Marrakech is more intense but deeply rewarding with preparation.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I deal with unwanted attention from men?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Walk with confidence, wear sunglasses, and use a firm &quot;La, shukran&quot; (No, thank you). Do not
                engage beyond the first response. If someone follows you, step into a shop, restaurant, or riad.
                A fake wedding ring reduces some attention. Local women and shopkeepers will help immediately.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are riads safe for solo women?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Riads are excellent for solo women. Many have female staff, secure gated entry, and communal
                spaces for meeting other travelers. Check for reviews from solo female guests. Prices start from
                300 MAD per night; seasonal pricing applies during peak months.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What solo activities work best for women in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Cooking classes (from 300 MAD), women-only hammams (from 15 MAD public, from 400 MAD luxury),
                women&apos;s argan cooperatives near Essaouira, henna sessions (from 50 MAD), and pottery workshops
                in Fes are all excellent. These create natural connections with Moroccan women and other travelers.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What emergency numbers should I save?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Police: 19. Gendarmerie (rural): 177. Ambulance/Fire: 15. SOS Helpline: 0800 00 08 85 (toll-free).
                Tourist Police are stationed in Marrakech (near Jemaa el-Fnaa), Fes (Bab Boujeloud), and other major
                cities. Save your embassy&apos;s number as well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 12: Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-safety-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Safety Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete safety guide covering scams, health, emergency contacts, and travel insurance for all travelers.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-packing-list" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Luggage className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Packing List
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Season-by-season packing guide with gear, clothing, and essentials for every type of trip.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-etiquette-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Etiquette Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Essential dos and don&apos;ts for respectful travel, from greetings to dining to tipping customs.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/solo-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Solo Travel Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                General solo travel guide for Morocco covering itineraries, budget tips, and meeting other travelers.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Ready to Plan Your Solo Morocco Trip?
          </h2>
          <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
            Morocco rewards solo female travelers with experiences that group tours cannot replicate &mdash; bargaining
            one-on-one in the souks, sharing a hammam with local women, watching the sunset from a rooftop riad
            in Fes with nobody else&apos;s schedule to follow. The preparation is worth it. The memories last decades.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/best-time-visit-morocco"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-semibold"
            >
              <Clock className="w-4 h-4" /> Best Time to Visit
            </Link>
            <Link
              href="/budget-travel"
              className="inline-flex items-center gap-2 border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-6 py-3 rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-colors font-semibold"
            >
              <DollarSign className="w-4 h-4" /> Budget Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
