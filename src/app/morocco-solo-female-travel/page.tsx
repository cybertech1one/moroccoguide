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
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Solo Female Travel in Morocco 2026 | Safety Tips, What to Wear & Practical Guide',
  description:
    'Complete guide to solo female travel in Morocco. Honest safety assessment, what to wear in Morocco for women, best cities for women traveling alone, dealing with unwanted attention, accommodation tips, transport safety, packing list, and cultural advice for 2026.',
  keywords: [
    'solo female travel morocco',
    'marrakech solo female travel',
    'what to wear in morocco for women',
    'is morocco safe for women',
    'women traveling alone morocco',
    'what to wear in morocco',
    'morocco solo female safety',
    'morocco dress code women',
    'solo woman morocco',
    'female travel morocco tips',
    'morocco women safety tips',
    'best cities solo female morocco',
    'morocco unwanted attention women',
    'solo female travel marrakech',
    'morocco modest clothing women',
    'morocco solo female itinerary',
    'solo female travel fes',
    'chefchaouen solo female travel',
    'essaouira solo female travel',
    'morocco women packing list',
    'morocco riad women',
    'morocco hammam women',
  ],
  openGraph: {
    title: 'Solo Female Travel in Morocco 2026 | Safety Tips, What to Wear & Practical Guide',
    description:
      'Everything women need to know for solo travel in Morocco. Honest safety tips, what to wear by region, best cities, accommodation advice, and a practical packing list.',
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
    title: 'Solo Female Travel in Morocco 2026 | Safety Tips & What to Wear',
    description:
      'Complete guide for women traveling alone in Morocco. Safety assessment, dress code by region, best cities, transport tips, and packing list for 2026.',
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
  name: 'Solo Female Travel in Morocco 2026 | Safety Tips, What to Wear & Practical Guide',
  description:
    'Complete guide to solo female travel in Morocco. Honest safety assessment, what to wear, best cities for women traveling alone, accommodation tips, transport safety, and cultural advice.',
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
        text: 'Morocco is generally safe for solo female travelers who take standard precautions. Millions of women visit Morocco each year without incident. The main challenges are verbal street harassment and persistent touts in tourist areas, not physical danger. Stick to well-trafficked areas, dress modestly, and book reputable accommodation for the best experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should women wear in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In cities and medinas, cover shoulders and knees with loose-fitting clothing. A lightweight scarf is invaluable for covering your head when visiting mosques or conservative areas. In coastal cities like Essaouira and beach resorts, dress codes are more relaxed. At the beach, swimwear is fine at resort beaches but choose a one-piece at public beaches. Avoid tight or revealing clothing in the medina.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best cities in Morocco for solo female travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essaouira is widely considered the most relaxed and female-friendly city in Morocco, with a laid-back coastal atmosphere. Chefchaouen is very safe and welcoming. Marrakech and Fes are more intense but very rewarding with proper preparation. Rabat is modern and hassle-free. Avoid rural areas alone at night and be cautious in Casablanca after dark.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I deal with unwanted attention in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Walk with confidence and purpose. Wear sunglasses to avoid eye contact. A firm "La, shukran" (No, thank you) is effective. Ignore persistent catcalls entirely. If someone follows you, step into a shop or restaurant. Wearing a wedding ring (real or fake) can reduce attention. In the medina, local women are your best allies if you feel uncomfortable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I book a riad or a hotel as a solo female traveler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Riads are excellent for solo women. Many are run by women or have female staff. They offer a secure, gated environment within the medina, often with communal spaces where you can meet other travelers. Look for riads with at least 4-star reviews and those that specifically mention welcoming solo female guests. Prices start from 300 MAD per night.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to take taxis alone in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Official petit taxis (small colored taxis) are generally safe for solo women. Always insist the driver uses the meter or agree on a price before getting in. Avoid unofficial taxis. For longer trips, ONCF trains are the safest option. Ride-hailing apps like inDrive and Careem are available in major cities and provide an extra layer of accountability.',
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
    safety: 'Very safe, minimal street harassment compared to other Moroccan cities',
    highlights: ['Relaxed Atlantic beach town', 'Art galleries and live music', 'Easy to walk around the compact medina', 'Friendly to solo travelers of all kinds'],
    bestFor: 'First-time solo female travelers who want an easy, relaxed introduction to Morocco',
    stay: 'From 250 MAD/night in riad guesthouses',
  },
  {
    city: 'Chefchaouen',
    rating: 'Excellent',
    icon: Eye,
    image: '/images/hero-chefchaouen.webp',
    vibe: 'Peaceful, photogenic, mountain town',
    safety: 'Very safe, small-town feel with welcoming locals',
    highlights: ['Iconic blue-painted streets', 'Rif Mountain hiking trails', 'Small enough to explore on foot in a day', 'Warm and hospitable local culture'],
    bestFor: 'Solo travelers who love photography, nature, and a slow pace',
    stay: 'From 200 MAD/night in guesthouses',
  },
  {
    city: 'Marrakech',
    rating: 'Good (with preparation)',
    icon: Star,
    image: '/images/hero-marrakech.webp',
    vibe: 'Electric, chaotic, sensory overload',
    safety: 'Generally safe but expect verbal attention in the medina and souks',
    highlights: ['Jemaa el-Fnaa night market', 'Stunning riads and palaces', 'World-class food scene', 'Hammam and spa experiences'],
    bestFor: 'Confident solo travelers ready for intensity and rich cultural immersion',
    stay: 'From 300 MAD/night in medina riads',
  },
  {
    city: 'Fes',
    rating: 'Good (with preparation)',
    icon: BookOpen,
    image: '/images/hero-fes.webp',
    vibe: 'Ancient, intellectual, deeply traditional',
    safety: 'Safe but the medina is the most maze-like in Morocco; hire a guide on day one',
    highlights: ['World\'s oldest university (al-Qarawiyyin)', 'Authentic tanneries', 'Less touristy than Marrakech', 'Extraordinary artisan tradition'],
    bestFor: 'Solo travelers who want a deep cultural experience and don\'t mind getting a little lost',
    stay: 'From 250 MAD/night in traditional riads',
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
    avoid: 'Nothing specific at resort beaches; just cover up when leaving the beach area',
  },
  {
    setting: 'Public Beaches',
    icon: Globe,
    recommendation: 'A one-piece swimsuit or modest swimwear is more comfortable. Many Moroccan women swim in leggings and a long t-shirt. You will not be asked to leave in a bikini, but you will attract more stares.',
    avoid: 'Very revealing swimwear at non-tourist beaches',
  },
  {
    setting: 'Rural & Mountain Areas',
    icon: Compass,
    recommendation: 'More conservative dress is appreciated. Loose long trousers, long sleeves, and a headscarf show respect to traditional communities. Sturdy hiking shoes are essential.',
    avoid: 'Shorts, sleeveless tops, tight athletic wear in villages',
  },
  {
    setting: 'Nightlife & Restaurants',
    icon: Star,
    recommendation: 'Upscale restaurants in Marrakech, Casablanca, and Rabat allow more fashionable dress. A smart dress or blouse with trousers is fine. Hotel bars and international venues are relaxed about dress code.',
    avoid: 'Nothing specific at upscale venues; use your own judgment',
  },
  {
    setting: 'Mosques & Religious Sites',
    icon: Heart,
    recommendation: 'Cover everything: long sleeves, long skirt or trousers, and a headscarf covering your hair. Most mosques in Morocco do not allow non-Muslim entry, but dress conservatively when visiting from outside.',
    avoid: 'Any exposed skin above the ankle or wrist; uncovered hair',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SAFETY TIPS
   ═══════════════════════════════════════════════════════════════ */

const safetyTips = [
  { tip: 'Walk with Confidence', icon: Shield, description: 'Body language matters enormously. Walk with purpose, head up, and a steady pace. Touts target people who look lost. Even if you are lost, keep walking confidently until you can check your phone privately.' },
  { tip: 'Use "La, Shukran" Firmly', icon: MessageCircle, description: '"La, shukran" (No, thank you) is the most powerful phrase in your arsenal. Say it once, firmly, and keep walking. Do not engage further. Repeated engagement is seen as an invitation to negotiate.' },
  { tip: 'Wear Sunglasses', icon: Eye, description: 'Eye contact is often interpreted as interest. Sunglasses create a barrier that reduces unwanted interaction significantly. They also help you navigate without accidentally inviting conversation.' },
  { tip: 'Share Your Itinerary', icon: Phone, description: 'Send your daily plan to someone at home. Share your live location on WhatsApp. Keep your phone charged with a portable power bank. Buy a local SIM card (from 30 MAD) for data.' },
  { tip: 'Trust Your Instincts', icon: ShieldCheck, description: 'If a situation feels wrong, leave immediately. Step into a shop, restaurant, or riad. Moroccan women and shopkeepers are overwhelmingly helpful if you signal discomfort.' },
  { tip: 'Carry a Fake Wedding Ring', icon: Lock, description: 'A ring on your left hand signals that you are married and can deter some attention. When asked if you are married, saying "yes" ends many conversations. You do not owe anyone the truth.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TRANSPORT SAFETY
   ═══════════════════════════════════════════════════════════════ */

const transportTips = [
  { mode: 'Petit Taxis', icon: MapPin, safety: 'Generally safe', advice: 'Use official petit taxis (red in Marrakech, blue in Rabat, white in Casablanca). Insist on the meter or agree on a price before getting in. Sit in the back seat. At night, note the taxi number and share it with someone.', price: 'From 10 MAD for short trips' },
  { mode: 'ONCF Trains', icon: Train, safety: 'Very safe', advice: 'The best way to travel between cities. First class (from 140 MAD Marrakech to Fes) is comfortable with fewer passengers. Sit near other women or families. Day trains are preferable to night trains. Book at oncf.ma.', price: 'From 80 MAD second class' },
  { mode: 'Grand Taxis', icon: Users, safety: 'Safe with precautions', advice: 'Shared taxis between cities. Sit by the window, not the middle. You can pay for two seats for more space. Avoid taking one alone with just the driver. Wait at official stations for shared departures.', price: 'From 30 MAD per seat' },
  { mode: 'Ride-Hailing Apps', icon: Phone, safety: 'Very safe', advice: 'inDrive and Careem operate in Marrakech, Casablanca, and Rabat. They offer accountability through digital receipts and driver identification. Excellent option for airport transfers.', price: 'From 15 MAD for short trips' },
  { mode: 'CTM & Supratours Buses', icon: Globe, safety: 'Safe', advice: 'Premium bus companies with fixed schedules and assigned seats. Book online in advance during peak season. Avoid random local bus companies. Day services are preferable.', price: 'From 70 MAD between cities' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING LIST
   ═══════════════════════════════════════════════════════════════ */

const packingList = [
  { category: 'Clothing Essentials', items: ['Lightweight maxi skirts (2-3)', 'Loose linen or cotton trousers', 'Tunics and loose blouses that cover shoulders', 'Large scarf/pashmina (doubles as headscarf, blanket, beach cover)', 'Light cardigan for evenings and air conditioning', 'Comfortable flat shoes with good grip', 'Sandals for riads and relaxed settings'] },
  { category: 'Safety & Practical', items: ['Portable door lock or rubber door stop', 'Headlamp or small flashlight (medina streets can be dark)', 'Portable power bank', 'Local SIM card (buy at airport, from 30 MAD)', 'Copies of passport and insurance (physical and digital)', 'Whistle on keychain', 'Small crossbody bag with zipper (anti-theft)'] },
  { category: 'Comfort & Wellness', items: ['Sunscreen SPF 50 (expensive in Morocco)', 'Insect repellent', 'Hand sanitizer and wet wipes', 'Reusable water bottle', 'Earplugs (call to prayer starts around 4:30 AM)', 'Period products (available but brands may differ)', 'Basic first aid kit with any personal medications'] },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SOLO FEMALE ITINERARIES
   ═══════════════════════════════════════════════════════════════ */

const itineraries = [
  {
    name: 'Gentle Introduction (7 Days)',
    icon: Heart,
    description: 'Perfect for first-time solo female travelers. Focuses on the two most relaxed and welcoming cities.',
    route: 'Marrakech (3 days) → Essaouira (3 days) → Marrakech (1 day)',
    highlights: ['Guided medina tour on day one in Marrakech', 'Hammam experience at a women-friendly spa', 'Bus to Essaouira (3 hours, from 80 MAD)', 'Beach walks and art galleries at your pace', 'Cooking class in either city'],
  },
  {
    name: 'The Classic Triangle (10 Days)',
    icon: Compass,
    description: 'The most popular route for solo female travelers. Covers the imperial cities with coastal relief.',
    route: 'Marrakech (3 days) → Essaouira (2 days) → Marrakech → Fes (3 days) → Chefchaouen (2 days)',
    highlights: ['Train from Marrakech to Fes (7 hours, from 140 MAD first class)', 'Guided tour of Fes medina', 'Bus to Chefchaouen (4 hours, from 75 MAD)', 'Blue city photography walks', 'Mix of bustling and tranquil destinations'],
  },
  {
    name: 'Adventure & Nature (12 Days)',
    icon: Globe,
    description: 'For confident solo travelers who want desert, mountains, and coast.',
    route: 'Marrakech (2 days) → Atlas Mountains (2 days) → Merzouga Desert (2 days) → Fes (2 days) → Chefchaouen (2 days) → Tangier (2 days)',
    highlights: ['Guided Atlas trek with female guides available', 'Desert camp experience (book reputable tour, from 800 MAD)', 'Sunrise over Sahara dunes', 'Diverse landscapes and cultures', 'Tangier for the strait of Gibraltar views'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ACCOMMODATION TIPS
   ═══════════════════════════════════════════════════════════════ */

const accommodationTips = [
  {
    type: 'Riads (Recommended)',
    icon: Lock,
    price: 'From 300 MAD/night',
    description: 'Traditional courtyard houses converted into guesthouses. Riads are the best option for solo women. They offer security (locked doors, gated entry), communal spaces to meet other travelers, and often have female staff. Many riad owners will arrange airport transfers, restaurant recommendations, and trusted guides.',
    lookFor: 'Reviews mentioning solo female guests, female ownership/management, 24-hour reception, well-lit location in the medina',
  },
  {
    type: 'Hotels',
    icon: ShieldCheck,
    price: 'From 400 MAD/night',
    description: 'International-standard hotels in the new town (ville nouvelle) offer familiarity and modern amenities. They are a good choice if you prefer a base outside the medina with easy taxi access. Chain hotels (Sofitel, Movenpick, Four Seasons) have excellent security protocols.',
    lookFor: '24-hour front desk, in-hotel restaurant for late arrivals, well-lit parking and entrance areas',
  },
  {
    type: 'Hostels',
    icon: Users,
    price: 'From 80 MAD/night (dorm bed)',
    description: 'Morocco has a growing hostel scene, especially in Marrakech, Fes, and Essaouira. Female-only dorms are available at several hostels. Hostels are great for meeting other solo travelers. Check reviews for cleanliness and security.',
    lookFor: 'Female-only dorm option, lockers, good recent reviews from solo female travelers, social common area',
  },
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
            An honest, practical guide to traveling Morocco alone as a woman. Safety tips, what to wear,
            the best cities, how to handle unwanted attention, and everything you need to plan with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Safety Guide</span>
            <span className="flex items-center gap-1.5"><Shirt className="w-4 h-4 text-emerald-400" /> Dress Code</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /> Best Cities</span>
            <span className="flex items-center gap-1.5"><Luggage className="w-4 h-4 text-emerald-400" /> Packing List</span>
          </div>
        </div>
      </section>

      {/* ── Honest Safety Assessment ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Is Morocco Safe for Solo Female Travelers?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            An honest assessment based on real experiences, not just marketing.
          </p>

          <div className="card-moroccan p-8 mb-8">
            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">The Short Answer</h3>
            <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
              Yes, Morocco is generally safe for solo female travelers. Millions of women visit every year and have
              overwhelmingly positive experiences. However, it requires more awareness and preparation than some
              other destinations. The main challenge is not physical danger but persistent verbal attention, particularly
              in busy tourist areas like Marrakech&apos;s Jemaa el-Fnaa and Fes&apos;s medina.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Morocco is a Muslim-majority country with conservative social norms around gender. Solo women will attract
              more attention than women in groups or couples. This is not unique to Morocco &mdash; it happens across North
              Africa and the Middle East. With the right preparation, mindset, and practical strategies, solo female
              travel in Morocco is not just safe but deeply rewarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6 border-l-4 border-l-emerald-500">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-emerald-600" /> The Good
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />Moroccans are genuinely hospitable and helpful</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />Violent crime against tourists is very rare</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />Tourist police are present in major cities</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />Women-only spaces exist (hammams, train cars)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />Growing tourism infrastructure welcomes solo travelers</li>
              </ul>
            </div>
            <div className="card-moroccan p-6 border-l-4 border-l-amber-500">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" /> The Challenges
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />Verbal street harassment (catcalling, comments)</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />Persistent touts and unofficial guides in medinas</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />Occasional following in less crowded areas</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />Being offered higher prices (not gender-specific)</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />Navigating complex medina streets alone</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Wear ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shirt className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Wear in Morocco as a Woman
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Dress code varies significantly by setting. Here is a practical breakdown of what to wear
            in every situation you will encounter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dressCode.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.setting} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                    {item.setting}
                  </h3>
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
                You do not need to wear a hijab or traditional Moroccan clothing. Morocco is used to tourists and
                does not expect Western women to dress identically to local women. The key is modest coverage:
                shoulders covered, knees covered, and loose-fitting fabrics. A large scarf is the single most
                versatile item you can pack &mdash; it works as a headscarf, shawl, beach cover-up, and even a blanket
                on overnight buses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dealing with Unwanted Attention ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dealing with Unwanted Attention
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical strategies from experienced solo female travelers to handle Morocco&apos;s street culture with confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyTips.map((item) => {
              const TipIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.tip}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto mt-10">
            <div className="card-moroccan p-6 border-l-4 border-l-[var(--color-accent)]">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Local Women Are Your Greatest Allies
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                If you ever feel uncomfortable, approach a local woman or a family. Moroccan women understand the
                situation immediately and will help you. Shopkeepers, restaurant staff, and riad hosts are also
                excellent resources. Do not hesitate to ask for help &mdash; it is considered normal and is met with genuine
                concern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Cities for Solo Female Travelers ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Cities for Solo Female Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Not all Moroccan cities offer the same experience for women traveling alone. Here are the top picks ranked by ease and comfort.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bestCities.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={city.image}
                      alt={`${city.city}, Morocco — popular destination for solo female travelers`}
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
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/90 text-white">
                        {city.rating}
                      </span>
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
                    <div className="flex items-center justify-between text-xs text-[var(--text-muted)] pt-3 border-t border-[var(--border-primary)]">
                      <span className="flex items-center gap-1"><Star className="w-3 h-3 text-[var(--color-gold)]" />{city.bestFor}</span>
                    </div>
                    <div className="mt-2 text-xs text-[var(--color-accent)] font-semibold">{city.stay}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Accommodation Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Stay as a Solo Woman
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Your accommodation choice makes a huge difference to your solo travel experience.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak months (October-April) and holidays.
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
              Women-Only Hammams
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Traditional public hammams are gender-separated, so women always have their own sessions. This is one of
              the most empowering experiences for solo female travelers &mdash; a space where Moroccan women gather to
              socialize, relax, and care for their skin. Entry starts from 15 MAD for a public hammam, and the tayeba
              (female attendant) will guide you through the process. For a private experience, luxury hammams like
              Heritage Spa in Marrakech start from 400 MAD per session. Seasonal pricing may apply during peak months.
            </p>
          </div>
        </div>
      </section>

      {/* ── Transport Safety ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Train className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Transport Safety for Solo Women
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            How to get around Morocco safely and confidently as a woman traveling alone.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices and may vary seasonally and by route.
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
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.mode}
                        </h3>
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                          {item.safety}
                        </span>
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
                <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />Night buses between cities (take day services or trains instead)</li>
                <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />Unofficial taxis without meters or marked identification</li>
                <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />Hitchhiking, even though some travelers do it</li>
                <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />Walking alone in poorly lit areas after midnight</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cultural Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cultural Tips for Women in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding Moroccan culture helps you navigate social situations with confidence and respect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MessageCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Greetings
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A smile and &quot;Salaam alaikum&quot; (peace be upon you) goes a long way. Women greet other women with
                cheek kisses (usually two). With men you do not know, a hand over your heart with a verbal greeting
                is appropriate. Avoid initiating handshakes with traditional men &mdash; follow their lead.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Local Women&apos;s Spaces
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The hammam, the rooftop (where women hang laundry and socialize), and certain cafes are traditionally
                female spaces. Spending time in these areas gives you a window into Moroccan women&apos;s lives that
                male travelers never see. Accept invitations to tea &mdash; it is a genuine gesture of hospitality.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Shield className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Setting Boundaries
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                You are not being rude by declining invitations, refusing to share personal details, or walking away
                from a conversation. Moroccan culture respects firmness. A polite but clear &quot;No&quot; is understood
                and accepted. Do not feel obligated to explain yourself or engage with every person who approaches you.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Bargaining
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Bargaining is expected in souks and is not related to gender. Start at about 40-50% of the asking price
                and meet in the middle. If a vendor will not budge, walk away &mdash; they will often call you back with a
                lower price. Do not feel pressured to buy anything. A firm &quot;La, shukran&quot; and walking away is
                perfectly acceptable.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Ramadan Considerations
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                If visiting during Ramadan, avoid eating, drinking, or smoking in public during daylight hours as
                a sign of respect. Many restaurants close during the day but tourist areas still have options. After
                iftar (sunset meal), the streets come alive and it is a magical time to explore.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Eye className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Photography Etiquette
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Always ask before photographing people, especially women and children. Some vendors and performers
                in Jemaa el-Fnaa will demand payment for photos. In conservative areas, do not photograph women
                without explicit permission. Landscapes, architecture, and food are always safe subjects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packing List ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Solo Female Packing List for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to pack, with items specific to solo female travel in Morocco.
          </p>

          <div className="space-y-6">
            {packingList.map((category) => (
              <div key={category.category} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                  {category.category}
                </h3>
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

      {/* ── Solo Female Itineraries ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Suggested Solo Female Itineraries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tried-and-tested routes designed with solo female safety and enjoyment in mind.
          </p>

          <div className="space-y-8">
            {itineraries.map((itin) => {
              const ItinIcon = itin.icon;
              return (
                <div key={itin.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItinIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{itin.name}</h3>
                      <p className="text-sm text-[var(--text-secondary)]">{itin.description}</p>
                    </div>
                  </div>
                  <div className="bg-[var(--surface-muted)] p-3 rounded-lg mb-4">
                    <p className="text-sm text-[var(--text-primary)] font-medium">
                      <MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                      {itin.route}
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    {itin.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Empowering Stories ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Solo Female Travelers Love Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beyond the practical tips, here is why women keep coming back to Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic mb-3">
                &quot;By day three I was bargaining in Darija, navigating the souks by memory, and sharing mint tea
                with a riad owner. The challenges made the connections deeper.&quot;
              </p>
              <p className="text-xs text-[var(--text-muted)]">&mdash; Fes medina</p>
            </div>
            <div className="card-moroccan p-6">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic mb-3">
                &quot;I sat in a cafe in Essaouira for three hours writing in my journal and not a single person
                bothered me. I went back the next year and stayed for a month.&quot;
              </p>
              <p className="text-xs text-[var(--text-muted)]">&mdash; Essaouira</p>
            </div>
            <div className="card-moroccan p-6">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic mb-3">
                &quot;The hammam was the highlight. Moroccan women of all ages, laughing and talking. I felt welcomed
                into a world most tourists never see.&quot;
              </p>
              <p className="text-xs text-[var(--text-muted)]">&mdash; Marrakech hammam</p>
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
                Is Morocco safe for solo female travelers?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, Morocco is generally safe. Millions of women visit each year without incident. The main challenges
                are verbal street harassment and persistent touts, not physical danger. Dress modestly, stick to
                well-trafficked areas, and book reputable accommodation for the best experience.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should women wear in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Cover shoulders and knees in cities and medinas. A lightweight scarf is invaluable. Coastal cities
                and beach resorts are more relaxed. At resort beaches swimwear is fine; at public beaches, choose
                a one-piece or modest swimwear.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the best cities for solo female travelers?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Essaouira is the most relaxed and female-friendly. Chefchaouen is very safe and welcoming. Marrakech
                and Fes are more intense but rewarding with preparation. Rabat is modern and hassle-free.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I deal with unwanted attention?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Walk with confidence, wear sunglasses, and use a firm &quot;La, shukran&quot; (No, thank you). Ignore
                catcalls entirely. If someone follows you, step into a shop or restaurant. A fake wedding ring
                can also help reduce attention.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Should I book a riad or a hotel?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Riads are excellent for solo women &mdash; many have female staff, secure gated entry, and communal
                spaces to meet other travelers. Look for 4-star+ reviews mentioning solo female guests. Prices
                start from 300 MAD per night. Seasonal pricing may apply during peak months.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it safe to take taxis alone?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Official petit taxis are generally safe. Insist on the meter or agree on a price before getting in.
                For longer trips, ONCF trains are the safest option. Ride-hailing apps (inDrive, Careem) offer
                digital accountability in major cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
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
                Season-by-season packing guide with recommended gear, clothing, and essentials for every type of trip.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-culture-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Deep dive into Moroccan customs, traditions, religion, and social norms to enrich your travel experience.
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
                Essential dos and don&apos;ts for respectful travel in Morocco, from greetings to dining to tipping.
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
