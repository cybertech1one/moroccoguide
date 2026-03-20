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
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Baby,
  Smile,
  Utensils,
  Building,
  Sun,
  Shield,
  Globe,
  Thermometer,
  Luggage,
  Bus,
  Waves,
  Mountain,
  Camera,
  TreeDeciduous,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco with Kids 2026 | Family Holiday Guide, Activities & Practical Tips',
  description:
    'Complete guide to visiting Morocco with kids. Best family-friendly cities, age-appropriate activities, riads with pools, food for picky eaters, camel ride age limits, desert camps, beach towns, stroller tips for medinas, and a realistic budget for a family of 4.',
  keywords: [
    'morocco with kids',
    'family holiday morocco',
    'is morocco good for families',
    'things to do in morocco with children',
    'family friendly morocco',
    'morocco family travel',
    'kids activities morocco',
    'family riads morocco',
    'morocco with toddlers',
    'morocco with teenagers',
    'camel ride kids morocco',
    'desert camp family morocco',
    'morocco beaches kids',
    'morocco picky eaters',
    'stroller medina morocco',
    'car seat morocco',
    'family budget morocco',
    'marrakech with kids',
    'essaouira family holiday',
    'morocco health tips children',
  ],
  openGraph: {
    title: 'Morocco with Kids 2026 | Family Holiday Guide, Activities & Practical Tips',
    description:
      'Plan a family trip to Morocco with confidence. City picks, kid-tested activities, family riads, food tips, safety advice, and a full budget breakdown for families of 4.',
    url: `${BASE_URL}/morocco-kids-family`,
    images: [
      {
        url: `${BASE_URL}/images/hero-family-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Family exploring a colorful Moroccan medina street with children',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco with Kids 2026 | Family Holiday Guide & Practical Tips',
    description:
      'Best cities, activities by age group, family riads, desert camps, picky eater solutions, stroller logistics, and a realistic family budget for Morocco.',
    images: [`${BASE_URL}/images/hero-family-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-kids-family` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-kids-family`,
  name: 'Morocco with Kids 2026 | Family Holiday Guide, Activities & Practical Tips',
  description:
    'Complete guide to visiting Morocco with kids. Best cities, age-appropriate activities, family riads, food tips, safety, desert camps, beaches, stroller logistics, and a budget breakdown for families.',
  url: `${BASE_URL}/morocco-kids-family`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-kids-family`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco with Kids & Family Guide', item: `${BASE_URL}/morocco-kids-family` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco safe for families with kids?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is generally safe for families. Moroccans love children and often go out of their way to help parents. Petty theft exists in busy medinas, so keep valuables close. Stick to well-lit areas after dark and use registered taxis. The biggest risks are heat-related illness and stomach bugs, both preventable with sun protection, hydration, and careful food choices.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum age for camel rides in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most operators accept children from age 4 and up for short camel rides (30 minutes to 1 hour). Kids under 7 typically ride with a parent on the same camel. For longer desert treks to overnight camps, age 6 or older is recommended. Always confirm with the specific operator before booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you use a stroller in Moroccan medinas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strollers are impractical in most medinas. Narrow alleys, uneven cobblestones, steps, and crowds make wheeled pushchairs a burden. Use a baby carrier or sling instead. Strollers work fine in the Ville Nouvelle (new town) areas, beach promenades in Agadir or Essaouira, and resort grounds.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do picky eater kids eat in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has plenty of kid-friendly options. Bread (khobz) is served at every meal. Plain couscous, french fries, grilled chicken, and cheese omelettes are available everywhere. Most restaurants prepare plain pasta on request. Fresh orange juice costs from 5 MAD per glass. Familiar international chains operate in Marrakech, Casablanca, and Agadir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are car seats available in Morocco rental cars?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Major rental agencies like Europcar and Hertz offer car seats, but availability is limited and quality varies. Book well in advance and specify the seat type (infant, toddler, or booster). Many families bring their own car seat from home for reliability. Morocco does not legally require car seats, but using one is strongly recommended.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best age to take kids to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any age works, but the trip style changes. Babies under 2 travel free on most flights and adapt well to riads. Ages 5-12 get the most from camel rides, medina treasure hunts, and cooking classes. Teenagers enjoy surfing in Essaouira, quad biking, and the independence of exploring souks. Toddlers (2-4) require more planning around nap schedules and heat management.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a family trip to Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A family of 4 can travel Morocco comfortably on from 800 MAD to 1,500 MAD per day (roughly 75-140 EUR). This covers a family riad room (from 400-800 MAD), meals (from 200-400 MAD for all four), local transport, and one activity. Desert tours and multi-day excursions add from 2,000-4,000 MAD per family. Budget 10-14 days and from 10,000-20,000 MAD total depending on comfort level.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit Morocco with kids?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March-May) and autumn (September-November) offer the best weather for families. Temperatures sit between 20-28°C, ideal for sightseeing without heat stress. Summer (June-August) hits 40°C+ in Marrakech and the desert, which is hard on young children. Winter (December-February) is mild on the coast but cold in the mountains. School holidays in April and October align well with Morocco travel.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST CITIES FOR FAMILIES
   ═══════════════════════════════════════════════════════════════ */

const familyCities = [
  {
    name: 'Marrakech',
    icon: Star,
    bestFor: 'First-timers, culture, souks',
    description:
      'The classic entry point for family trips. Jemaa el-Fnaa square captivates kids with snake charmers, acrobats, and fresh juice stalls. Majorelle Garden offers shaded paths and bright blue walls kids love to photograph. The medina works best with kids in the morning when crowds are thinner. Book a family cooking class at a riad, ride a calèche (horse carriage), or visit Le Jardin Secret for peaceful courtyards.',
    tips: ['Visit Jemaa el-Fnaa at sunset when performers peak', 'Book riads with pools for afternoon cool-downs', 'Use a guide for your first medina walk to learn the layout'],
    stay: 'Family riads in Kasbah district (quieter) or Ville Nouvelle hotels with pools',
  },
  {
    name: 'Essaouira',
    icon: Waves,
    bestFor: 'Beach, surfing teens, laid-back pace',
    description:
      'The most relaxed city in Morocco and a top pick for families who want beach time. The wide, flat beach stretches for kilometers with shallow water safe for paddling. The medina is compact, car-free, and easy to navigate with kids. Wind makes it a surf hub: teens can take lessons from from 350 MAD per session. The fishing port is a hands-on experience where kids watch boats unload sardines and see seagulls up close.',
    tips: ['Beach wind picks up after 2pm, mornings are calmest', 'Rent surf gear at the south end of the beach', 'The ramparts walk gives kids a pirate-fort experience'],
    stay: 'Beachfront riads in the medina or hotels along Avenue de l\'Istiqlal',
  },
  {
    name: 'Agadir',
    icon: Sun,
    bestFor: 'Resort-style, toddlers, easy logistics',
    description:
      'Morocco\'s most conventional beach resort city. Wide sandy beaches, hotel pools, playgrounds in the corniche area, and a crocodile park (Crocoparc) that kids rate as a highlight. The souk is modern, organized, and far less overwhelming than Marrakech. Agadir works well for families who want a beach base with optional day trips to Paradise Valley, Taroudant, or Tiznit.',
    tips: ['Crocoparc has 300+ crocodiles plus a cactus garden', 'Souk El Had is great for stress-free shopping with kids', 'Paradise Valley (30 min drive) has natural rock pools for swimming'],
    stay: 'All-inclusive beach hotels or serviced apartments along the corniche',
  },
  {
    name: 'Fes',
    icon: Building,
    bestFor: 'Older kids 8+, history, crafts',
    description:
      'The world\'s largest car-free urban area. Fes el-Bali medina is extraordinary but intense, best suited to older kids who can handle crowds, narrow passages, and strong smells from the tanneries. Reward them with a pottery painting workshop at Art Naji or a visit to the Bou Inania medersa. The Borj Nord weapons museum appeals to history-loving kids. Keep medina walks to 2-3 hours max to avoid meltdowns.',
    tips: ['Tannery terraces fascinate kids but the smell is strong: bring mint to sniff', 'Hire a medina guide for the first visit, from 300 MAD for a half day', 'Break up medina time with Jnan Sbil garden, a calm green space'],
    stay: 'Riads near Bab Boujloud for easy medina access and exit',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACTIVITIES BY AGE GROUP
   ═══════════════════════════════════════════════════════════════ */

const ageActivities = [
  {
    group: 'Toddlers (0-4)',
    icon: Baby,
    activities: [
      'Splash in riad plunge pools (many riads heat them on request)',
      'Feed pigeons at Place des Ferblantiers, Marrakech',
      'Ride a calèche (horse-drawn carriage) through the Palmeraie',
      'Play on Agadir or Essaouira beaches (shallow, sandy)',
      'Watch the tannery from a balcony in Fes (short visit)',
      'Majorelle Garden paths are flat and stroller-accessible',
    ],
    tip: 'Plan around nap time. Mornings out, back to the riad by 1pm, venture out again at 4pm when heat drops.',
  },
  {
    group: 'Kids (5-12)',
    icon: Smile,
    activities: [
      'Camel ride at Palmeraie or in the Agafay Desert (from 150 MAD, 30 min)',
      'Cooking class: kids roll couscous, shape pastilla, squeeze oranges (from 250 MAD)',
      'Treasure hunt in the Marrakech medina with a family guide',
      'Sandboarding on Erg Chebbi dunes near Merzouga',
      'Visit Crocoparc Agadir (300+ crocodiles, botanical garden)',
      'Horse or donkey ride in Ourika Valley (from 100 MAD)',
      'Swim in Ouzoud Waterfalls pools and spot Barbary macaques',
    ],
    tip: 'Kids this age love bartering in souks. Give them 50 MAD and let them buy their own souvenirs.',
  },
  {
    group: 'Teenagers (13-17)',
    icon: Users,
    activities: [
      'Surf lessons in Essaouira or Taghazout (from 350 MAD per 2-hour session)',
      'Quad biking in the Agafay Desert or Palmeraie (from 400 MAD, age 14+)',
      'Overnight desert camp in Merzouga with stargazing and drumming',
      'Rock climbing at Todra Gorge (routes for all levels, from 500 MAD with guide)',
      'Photography walk through Chefchaouen\'s blue streets',
      'Mountain biking in the Atlas foothills (from 450 MAD half day)',
      'Hammam experience at a family-friendly spa (from 150 MAD)',
    ],
    tip: 'Give teens an hour of solo souk time in safe areas like Essaouira medina. They appreciate the independence.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAMILY-FRIENDLY ACCOMMODATION
   ═══════════════════════════════════════════════════════════════ */

const familyStays = [
  {
    type: 'Family Riads',
    icon: Heart,
    description:
      'Traditional courtyard houses converted into guesthouses. The best family riads have plunge pools, roof terraces, and owners who cook kid-friendly meals on request. Many offer family suites with adjoining rooms. Book the entire riad (4-6 rooms) for larger families to have the courtyard to yourselves.',
    price: 'From 400 MAD per night for a family room, from 3,000 MAD per night for a full riad rental',
    locations: 'Marrakech (Kasbah, Mouassine), Fes (Bab Boujloud area), Essaouira medina',
  },
  {
    type: 'Beach Hotels & Resorts',
    icon: Sun,
    description:
      'Agadir and Taghazout have resort-style hotels with kids\' clubs, pools, buffet dining, and organized activities. These work for families who want a more predictable setup with optional excursions. Several hotels offer all-inclusive packages that simplify budgeting.',
    price: 'From 800 MAD per night for a family room at a 4-star, from 1,500 MAD for all-inclusive',
    locations: 'Agadir corniche, Taghazout Bay, Saaidia (Mediterranean coast)',
  },
  {
    type: 'Desert Camps',
    icon: Star,
    description:
      'Luxury desert camps in Merzouga and Zagora offer family tents with proper beds, shared bathrooms, and communal dinner under the stars. Standard camps are basic but adequate for one night. Kids sleep well after a sunset camel ride and sandboarding. Most camps accept children age 4+.',
    price: 'From 500 MAD per person for standard camps, from 1,200 MAD per person for luxury camps',
    locations: 'Erg Chebbi (Merzouga), Erg Chigaga (near M\'Hamid), Zagora',
  },
  {
    type: 'Guesthouses & Kasbahs',
    icon: Building,
    description:
      'Atlas Mountain guesthouses and converted kasbahs suit families who want hiking, river swimming, and rural calm. Many grow their own food and serve meals family-style. Kids run free in gardens while parents drink tea on the terrace. Expect simple but clean rooms.',
    price: 'From 300 MAD per night including dinner and breakfast for the family',
    locations: 'Imlil, Ourika Valley, Skoura, Dades Valley',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FOOD TIPS FOR PICKY EATERS
   ═══════════════════════════════════════════════════════════════ */

const kidFoodTips = [
  {
    food: 'Bread (Khobz)',
    icon: Utensils,
    note: 'Served at every single meal. Round, warm, and plain. Kids who eat nothing else will eat Moroccan bread.',
  },
  {
    food: 'French Fries',
    icon: Utensils,
    note: 'Available at almost every restaurant. Often served alongside tagine or grilled meat. A reliable fallback.',
  },
  {
    food: 'Grilled Chicken (Poulet Grille)',
    icon: Utensils,
    note: 'Rotisserie chicken shops are on every block. A whole chicken costs from 40 MAD. Plain, juicy, and familiar.',
  },
  {
    food: 'Plain Couscous',
    icon: Utensils,
    note: 'Ask for couscous without the vegetable stew on top. Most restaurants will serve it plain with butter.',
  },
  {
    food: 'Cheese Omelette',
    icon: Utensils,
    note: 'Breakfast staple at every riad and cafe. Eggs are fresh, cheese is a mild processed variety kids know.',
  },
  {
    food: 'Fresh Orange Juice',
    icon: Utensils,
    note: 'From 5 MAD per glass at street stalls. Squeezed in front of you. Most kids down three glasses a day.',
  },
  {
    food: 'Msemen (Flatbread)',
    icon: Utensils,
    note: 'Flaky, buttery, pan-fried pancakes. Served with honey or Laughing Cow cheese. A kid favorite at breakfast.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HEALTH & SAFETY
   ═══════════════════════════════════════════════════════════════ */

const healthSafety = [
  {
    title: 'Stomach Bugs',
    icon: Shield,
    advice:
      'The number one health issue for traveling kids. Avoid tap water (use bottled), skip raw salads at street stalls, and peel fruit yourselves. Bring oral rehydration salts (ORS) and Imodium. Most stomach upsets pass in 24-48 hours. Pharmacies stock Smecta, a child-safe anti-diarrheal available without prescription.',
  },
  {
    title: 'Sun & Heat',
    icon: Thermometer,
    advice:
      'Morocco\'s sun is fierce, especially March-October. Apply SPF 50 every 2 hours. Hats and UV shirts save reapplication battles with toddlers. Carry 1.5L water per child per day minimum. Take a midday break (12-3pm) at the riad during summer. Watch for signs of heat exhaustion: irritability, flushed skin, refusing to drink.',
  },
  {
    title: 'Pharmacies & Medical Care',
    icon: ShieldCheck,
    advice:
      'Moroccan pharmacies (look for the green cross) are well-stocked and pharmacists speak French. Paracetamol (Doliprane), antihistamines, and rehydration salts are available over the counter. Marrakech, Casablanca, and Agadir have private clinics with English-speaking doctors. Buy travel insurance that covers children before you go.',
  },
  {
    title: 'Medina Safety',
    icon: MapPin,
    advice:
      'Hold young children\'s hands in crowded medinas. Motorbikes weave through pedestrian areas in Marrakech and Fes with little warning. Teach kids to press against a wall when they hear a horn. Keep phones and wallets in front pockets or money belts. Medinas are safest in daylight.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING LIST
   ═══════════════════════════════════════════════════════════════ */

const packingEssentials = [
  'Baby carrier or sling (strollers fail in medinas)',
  'SPF 50 sunscreen (expensive in Morocco, bring your own)',
  'Reusable water bottles (refill from large 5L jugs)',
  'Oral rehydration salts and child-safe Imodium',
  'Lightweight long sleeves for sun protection and mosque visits',
  'Closed-toe sandals for cobblestone streets',
  'Snack stash: granola bars, dried fruit, crackers for transit days',
  'Car seat if renting a vehicle (rental ones vary in quality)',
  'Small backpack for each child (lets them carry their own water and treasures)',
  'Wet wipes and hand sanitizer (bathrooms often lack soap)',
  'Portable phone charger (kids drain batteries on long drives)',
  'Travel first aid kit: plasters, antiseptic, thermometer, tweezers',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET BREAKDOWN (FAMILY OF 4)
   ═══════════════════════════════════════════════════════════════ */

const budgetItems = [
  { category: 'Accommodation (family room, riad)', budget: 'From 400 MAD/night', mid: 'From 700 MAD/night', luxury: 'From 1,500 MAD/night' },
  { category: 'Meals (all 4, three per day)', budget: 'From 200 MAD/day', mid: 'From 400 MAD/day', luxury: 'From 800 MAD/day' },
  { category: 'Local transport (taxi/bus)', budget: 'From 50 MAD/day', mid: 'From 150 MAD/day', luxury: 'From 400 MAD/day (private driver)' },
  { category: 'Activities (1 per day)', budget: 'From 100 MAD/day', mid: 'From 300 MAD/day', luxury: 'From 600 MAD/day' },
  { category: 'Snacks & juice', budget: 'From 40 MAD/day', mid: 'From 80 MAD/day', luxury: 'From 120 MAD/day' },
  { category: 'Daily total (family of 4)', budget: 'From 790 MAD', mid: 'From 1,630 MAD', luxury: 'From 3,420 MAD' },
  { category: '10-day trip total', budget: 'From 7,900 MAD (~740 EUR)', mid: 'From 16,300 MAD (~1,520 EUR)', luxury: 'From 34,200 MAD (~3,200 EUR)' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEACH DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const familyBeaches = [
  {
    name: 'Agadir Main Beach',
    icon: Sun,
    description: 'Wide, sheltered, and gentle waves. Lifeguards patrol in summer. Sunbed rental from 30 MAD. Restaurants and ice cream shops line the promenade. The safest swimming beach for young kids.',
    bestAge: 'All ages',
  },
  {
    name: 'Essaouira Beach',
    icon: Waves,
    description: 'Huge flat beach perfect for sand castles and football. Water is cooler than Agadir. The south end has calmer water for paddling. Wind picks up after 2pm, great for kite-flying with kids.',
    bestAge: 'All ages (surfing: 8+)',
  },
  {
    name: 'Legzira Beach (Sidi Ifni)',
    icon: Camera,
    description: 'Dramatic red rock arches. Low tide exposes rock pools full of crabs and small fish that kids find fascinating. Remote, so pack food and water. Not for swimming due to currents.',
    bestAge: '5+ (rock scrambling)',
  },
  {
    name: 'Oualidia Lagoon',
    icon: Waves,
    description: 'A sheltered Atlantic lagoon with warm, shallow water and zero waves. Families kayak, paddleboard, and swim safely. Fresh oysters for parents while kids play. One of Morocco\'s hidden gems for families.',
    bestAge: 'All ages',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoKidsFamilyPage() {
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
            <span className="text-white">Morocco with Kids &amp; Family Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Users className="w-4 h-4" />
            Family Travel
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco with Kids:
            <br className="hidden md:block" /> The Complete Family Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Real activities, practical parent advice, and honest logistics for
            taking your family to Morocco. From toddlers to teenagers.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Is Morocco Good for Families? Absolutely.
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco ranks among the most family-friendly destinations outside Europe. Moroccans
                genuinely love children. Restaurant staff bring extra bread and juice without asking.
                Shopkeepers hand out small gifts. Taxi drivers help with luggage and car seats. Your
                kids will get more attention and warmth here than in most European holiday spots.
              </p>
              <p>
                The country also delivers experiences that stick with kids for years: riding a camel
                across Saharan dunes, bartering for a leather bag in a 1,000-year-old souk, eating
                couscous on a rooftop while the call to prayer echoes across the medina, swimming in
                waterfalls with wild monkeys overhead. Morocco turns a holiday into an education
                that no classroom can match.
              </p>
              <p>
                This guide covers the practical side: which cities work best at which ages, where
                to find food picky eaters will accept, how to handle strollers in medieval streets,
                camel ride age limits, and an honest budget breakdown for a family of four.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Cities for Families ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Cities for Families
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four cities that deliver different family experiences. Mix two or three for a balanced trip.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {familyCities.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {city.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">Best for: {city.bestFor}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{city.description}</p>
                  <div className="space-y-2 mb-3">
                    {city.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {tip}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--color-accent)] font-semibold">
                    <Building className="w-3 h-3" />
                    <span>Stay: {city.stay}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Activities by Age Group ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Activities by Age Group
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What actually works at each age. Tested by families, not written from a desk.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ageActivities.map((group) => {
              const GroupIcon = group.icon;
              return (
                <div key={group.group} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GroupIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {group.group}
                    </h3>
                  </div>
                  <div className="space-y-2 mb-4">
                    {group.activities.map((activity, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {activity}
                      </div>
                    ))}
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-3 text-xs text-[var(--text-muted)]">
                    <Info className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                    {group.tip}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Family-Friendly Accommodation ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Family-Friendly Places to Stay
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From courtyard riads to desert camps, each accommodation style shapes the trip differently.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting rates and vary by season. Book ahead for school holiday dates.
          </p>

          <div className="space-y-6">
            {familyStays.map((stay) => {
              const StayIcon = stay.icon;
              return (
                <div key={stay.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <StayIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {stay.type}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{stay.description}</p>
                      <div className="space-y-2 text-xs text-[var(--text-muted)]">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                          <span>{stay.price}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                          <span>{stay.locations}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Food for Picky Eaters ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food for Picky Eaters
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Your kids will not starve. Morocco has more plain, familiar food than you expect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {kidFoodTips.map((item) => (
              <div key={item.food} className="card-moroccan p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <Utensils className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {item.food}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beach Destinations for Kids ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beach Destinations for Kids
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has 3,500 km of coastline. These four beaches work best for families.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {familyBeaches.map((beach) => {
              const BeachIcon = beach.icon;
              return (
                <div key={beach.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <BeachIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {beach.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">Best age: {beach.bestAge}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{beach.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Health & Safety ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Health &amp; Safety with Kids
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The four things parents actually worry about, and how to handle each one.
          </p>

          <div className="space-y-6">
            {healthSafety.map((item) => {
              const SafetyIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SafetyIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">{item.advice}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Strollers, Car Seats & Transport ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Transport, Strollers &amp; Car Seats
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Logistics that make or break a family trip. Plan these before you pack.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Strollers in Medinas
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Leave the stroller at the riad. Medina streets have steps, uneven cobblestones, narrow
                passages, and motorbike traffic. A baby carrier (Ergobaby, BabyBjorn) or ring sling is
                essential for kids under 3. Strollers work on Agadir&apos;s promenade, Essaouira&apos;s
                seafront, and Ville Nouvelle sidewalks.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Car Seats
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco has no car seat law, and most taxis lack seatbelts in the back. If renting a
                car, request a seat from Europcar or Hertz but book early. Quality is hit-or-miss.
                Many families bring their own. For day trips, private drivers will accommodate your seat.
                Grand taxis between cities have no restraints at all.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Getting Between Cities
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Supratours and CTM buses are air-conditioned and comfortable for families. Kids under 4
                ride free on laps. Trains (ONCF) connect Marrakech, Casablanca, Fes, and Tangier and have
                more legroom. Private transfers cost from 1,500 MAD for Marrakech to Essaouira (3 hours)
                and let you stop for breaks on your schedule.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Internal Flights
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Royal Air Maroc and Air Arabia Maroc connect Casablanca, Marrakech, Fes, Agadir, and
                Ouarzazate. Flights take 45-90 minutes and save 6-8 hour drives. Book early for fares from
                400 MAD one-way. Children under 2 pay 10% of the adult fare and sit on a parent&apos;s lap.
                Strollers and car seats check free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packing for Families ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Family Packing Essentials
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The items that families consistently say they wished they had packed, or were glad they did.
          </p>

          <div className="card-moroccan p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {packingEssentials.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Budget Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Budget Breakdown: Family of 4
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Realistic daily costs across three comfort levels. Morocco rewards budget travelers generously.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting estimates. Seasonal pricing and location affect actual costs.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)]/10">
                    <th className="text-left px-4 py-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Category</th>
                    <th className="text-left px-4 py-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Budget</th>
                    <th className="text-left px-4 py-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Mid-Range</th>
                    <th className="text-left px-4 py-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Luxury</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetItems.map((item, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="px-4 py-3 text-[var(--text-primary)] font-medium">{item.category}</td>
                      <td className="px-4 py-3 text-[var(--text-secondary)]">{item.budget}</td>
                      <td className="px-4 py-3 text-[var(--text-secondary)]">{item.mid}</td>
                      <td className="px-4 py-3 text-[var(--text-secondary)]">{item.luxury}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Time to Visit ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Visit with Kids
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing matters more with kids. The wrong month can turn a great trip into a survival exercise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                season: 'Spring (March-May)',
                icon: TreeDeciduous,
                rating: 'Best',
                text: 'Temperatures between 20-28°C. Wildflowers in the Atlas. Comfortable sightseeing without heat exhaustion. Easter and April school holidays align perfectly. Book early as family riads fill up fast.',
              },
              {
                season: 'Autumn (Sep-Nov)',
                icon: Sun,
                rating: 'Best',
                text: 'Similar temperatures to spring. Post-summer crowds thin out. Ocean water is warmest in September-October. Harvest festivals in Atlas villages add cultural depth. October half-term works well.',
              },
              {
                season: 'Summer (Jun-Aug)',
                icon: Thermometer,
                rating: 'Tough',
                text: 'Marrakech and inland cities hit 40-45°C. Desert trips are brutal for kids. Coastal cities (Essaouira, Agadir) stay around 25-30°C and work fine. If you must go in summer, stay on the coast.',
              },
              {
                season: 'Winter (Dec-Feb)',
                icon: Mountain,
                rating: 'Mixed',
                text: 'Mild on the coast (15-20°C) but cold in the Atlas and desert (dropping below 5°C at night). Riads can be chilly without heating. Great for Marrakech sightseeing without crowds. Short daylight hours limit activities.',
              },
            ].map((s) => {
              const SeasonIcon = s.icon;
              return (
                <div key={s.season} className="card-moroccan p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {s.season}
                      </h3>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                      s.rating === 'Best' ? 'bg-green-100 text-green-700' :
                      s.rating === 'Tough' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {s.rating}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Camel Rides & Desert Camps ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Camel Rides &amp; Desert Camps with Kids
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The number one activity families ask about. Here are the specifics.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Camel Ride Age Limits
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Under 4:</strong> Not recommended. Camels sway unpredictably and the height scares most toddlers.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Ages 4-6:</strong> Short rides (30 min) with a parent on the same camel. The guide walks alongside.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Ages 7-12:</strong> Can ride their own camel for 1-2 hours. The guide leads the camel by rope.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Ages 13+:</strong> Full desert treks, sunset rides, and overnight camp journeys. No restrictions.</span>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Family Desert Camp Options
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Three tiers exist, and the right choice depends on your kids&apos; ages and your tolerance for rustic conditions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                  <h4 className="text-xs font-bold text-[var(--text-primary)] mb-2">Standard Camp</h4>
                  <p className="text-xs text-[var(--text-secondary)] mb-2">Shared tents, foam mattresses, communal bathroom. Basic but memorable. Kids love the campfire and drumming.</p>
                  <span className="text-xs font-semibold text-[var(--color-accent)]">From 500 MAD/person</span>
                </div>
                <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                  <h4 className="text-xs font-bold text-[var(--text-primary)] mb-2">Comfort Camp</h4>
                  <p className="text-xs text-[var(--text-secondary)] mb-2">Private tents, real beds, shared hot showers. Good food. The sweet spot for families with kids 5+.</p>
                  <span className="text-xs font-semibold text-[var(--color-accent)]">From 800 MAD/person</span>
                </div>
                <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                  <h4 className="text-xs font-bold text-[var(--text-primary)] mb-2">Luxury Camp</h4>
                  <p className="text-xs text-[var(--text-secondary)] mb-2">Private tent suites, en-suite bathroom, electricity, multi-course dinner. Feels like a hotel in the dunes.</p>
                  <span className="text-xs font-semibold text-[var(--color-accent)]">From 1,200 MAD/person</span>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Alternatives to the Full Desert Trip
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Merzouga requires a long drive from Marrakech (8-10 hours) or two days with an overnight in the Dades Valley.
                For younger kids, consider these shorter options:
              </p>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span><strong>Agafay Desert (40 min from Marrakech):</strong> Rocky desert, not sand dunes, but offers camel rides, quad bikes, and luxury camps. Perfect for families short on time. From 1,000 MAD per family for a sunset experience.</span>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span><strong>Palmeraie Camel Ride (20 min from Marrakech):</strong> A 30-minute camel ride through palm groves. Gentle, accessible, and low-commitment. From 150 MAD per person. Good for toddlers and first-timers.</span>
                </div>
              </div>
            </div>
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
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Family Trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-health-safety" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Health &amp; Safety Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Vaccinations, pharmacies, travel insurance, and staying healthy during your Morocco trip.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/best-beaches-morocco" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Beaches in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Top beach destinations for swimming, surfing, and coastal relaxation across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/budget-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Save money on accommodation, food, transport, and activities across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Tagines, couscous, street food, and regional dishes every visitor should try.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Take the Family to Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Your kids will ride camels, barter in souks, eat the best orange juice of their lives,
            and come home with stories that last. Start planning your family adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/best-time-visit-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Clock className="w-5 h-5" />
              Best Time to Visit
            </Link>
            <Link
              href="/first-time"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Globe className="w-5 h-5" />
              First-Time Visitor Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
