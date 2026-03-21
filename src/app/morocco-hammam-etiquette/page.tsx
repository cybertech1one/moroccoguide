import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Droplets,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  Waves,
  MessageCircleQuestion,
  HandCoins,
  Layers,
  Ban,
  Eye,
  Package,
  CircleDot,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-hammam-etiquette`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Hammam Etiquette Guide 2026 | What to Expect, Bring & Do',
  description:
    'Complete guide to hammam etiquette in Morocco. Step-by-step bathing ritual, nudity norms, what to bring, tipping the tayeba, public vs private hammams, body scrubbing process, gender rules, health benefits, and best hammams in Marrakech, Fes & beyond.',
  keywords: [
    'Morocco hammam etiquette',
    'hammam rules Morocco',
    'what to expect hammam Morocco',
    'hammam nudity norms Morocco',
    'tipping hammam Morocco',
    'tayeba kessala tip',
    'public hammam Morocco',
    'hammam what to bring',
    'kessa glove scrub Morocco',
    'savon beldi hammam',
    'gender separated hammam',
    'hammam health benefits',
    'best hammams Marrakech',
    'Heritage Spa Marrakech',
    'Hammam Mouassine',
    'first time hammam guide',
    'hammam hot room cold room',
    'Morocco bathing culture',
  ],
  openGraph: {
    title: 'Morocco Hammam Etiquette Guide 2026 | What to Expect, Bring & Do',
    description:
      'Everything first-timers need to know about Moroccan hammam etiquette: the three-room bathing ritual, nudity and modesty norms, tipping customs, what to bring, public vs tourist vs luxury hammams, and the best hammams by city.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-hammam.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan hammam with zellige tilework, warm steam, and copper water bowls',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Hammam Etiquette 2026 | First-Timer Guide',
    description:
      'Step-by-step hammam ritual, nudity norms, tipping the tayeba, what to bring, public vs luxury hammams, and the best hammams in Marrakech and Fes.',
    images: [`${BASE_URL}/images/hero-hammam.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Do I have to be naked in a Moroccan hammam?',
    a: 'No. Full nudity is not the norm in Moroccan hammams. Women typically keep underwear bottoms on, and many go topless. Men wear underwear or swim trunks. This is different from Turkish or Finnish baths. In luxury spas, you receive disposable underwear and a robe. Nobody will pressure you to remove more clothing than you are comfortable with.',
  },
  {
    q: 'How much should I tip the tayeba (scrubber) at a public hammam?',
    a: 'Tip the tayeba from 20 to 50 MAD on top of the scrub fee. She earns most of her income from tips. If the service was particularly thorough, from 50 MAD is a generous gesture. At boutique and luxury spas, from 50 to 100 MAD per therapist is standard. Seasonal pricing can change.',
  },
  {
    q: 'Can men and women visit a hammam together?',
    a: 'Not at public hammams, which are strictly gender-separated. Some have permanent separate wings; others alternate hours for men and women. If you want to bathe with a partner, book a private couples session at a boutique or luxury spa. Couples packages typically start from 1,200 MAD.',
  },
  {
    q: 'What should I bring to a public neighborhood hammam?',
    a: 'Bring a large towel, flip-flops or plastic sandals, underwear to wear inside, a change of dry underwear for after, savon beldi (black soap), a kessa exfoliating glove, ghassoul clay if you want it, shampoo, and a small bag for toiletries. You can buy soap and gloves at the hammam entrance for from 20 MAD each.',
  },
  {
    q: 'Is the body scrub painful?',
    a: 'The kessa scrub is firm and thorough, not gentle. You will see gray rolls of dead skin peeling off your body, which looks dramatic but is completely normal. Most people find it intense but satisfying. If it hurts, say "shwiya" (gently) or "bezzaf" (enough). At luxury spas, therapists check your comfort throughout.',
  },
  {
    q: 'When is the worst time to visit a public hammam?',
    a: 'Avoid Thursday evenings and Friday mornings. These are the busiest times because Moroccans traditionally bathe before Friday prayer. During Ramadan, hammams fill up just before iftar. For the quietest experience, go on a weekday morning between 9 and 11 AM.',
  },
  {
    q: 'Are Moroccan hammams hygienic?',
    a: 'Reputable hammams are cleaned regularly throughout the day. The hot steam itself has sanitizing properties. Bring your own flip-flops to protect your feet, use your own kessa glove and soap, and avoid hammams that look poorly maintained. Luxury and boutique spas follow strict hygiene protocols.',
  },
  {
    q: 'Can I visit the hammam during my period?',
    a: 'Yes. Many Moroccan women visit the hammam during their period. Wear a tampon or menstrual cup and dark underwear. This is common practice and nobody will notice or comment. Some women prefer to avoid the hottest room during this time.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Hammam Etiquette Guide 2026',
  description:
    'Complete guide to hammam etiquette in Morocco covering nudity norms, tipping, the step-by-step bathing ritual, what to bring, public vs private vs luxury hammams, and city-by-city recommendations.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-hammam.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Hammam Etiquette Guide', item: PAGE_URL },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ================================================================
   DATA: STEP-BY-STEP HAMMAM RITUAL
   ================================================================ */

const hammamSteps = [
  {
    step: 1,
    title: 'Arrive and Change',
    icon: Users,
    duration: '5-10 min',
    description:
      'At a public hammam, you enter through a simple doorway into a changing area. Leave your clothes in a locker or with the attendant. Strip down to underwear. Grab your bucket, soap, and glove. At a luxury spa, staff hand you a robe and slippers and guide you to a private changing room.',
    etiquette: 'Greet the attendant with "salaam alaikum." Keep your voice down. Leave valuables at your accommodation or use the locker.',
  },
  {
    step: 2,
    title: 'Enter the Cool Room (al-barrani)',
    icon: Thermometer,
    duration: '10 min',
    description:
      'The first chamber is the coolest. Your body adjusts to the humidity here. Pour warm water over yourself from a plastic bucket (satel). Sit on the tiled floor or a low bench. Breathe slowly through your mouth if the steam feels heavy.',
    etiquette: 'Do not rush through this room. Skipping the warmup makes the hot room feel overwhelming. Drink water before you enter.',
  },
  {
    step: 3,
    title: 'Move to the Warm Room (al-wastani)',
    icon: Thermometer,
    duration: '10-15 min',
    description:
      'The middle room is noticeably warmer. Steam thickens. This room prepares your skin by opening pores and loosening dead cells. Splash water over yourself regularly. Many people apply their first layer of savon beldi here and let it sit.',
    etiquette: 'Do not splash water at other bathers. Keep your satel (bucket) in your own area. If the room is crowded, find a corner.',
  },
  {
    step: 4,
    title: 'Enter the Hot Room (al-dakhli)',
    icon: Thermometer,
    duration: '15-20 min',
    description:
      'The innermost room sits directly above the furnace (farnachi). It is hot and thick with steam. The floor radiates heat. This is where the deep steaming happens. Apply savon beldi over your entire body and let it sit for 5-10 minutes while your pores open fully.',
    etiquette: 'If you feel dizzy or lightheaded, move back to a cooler room immediately. There is no shame in this. Stay hydrated.',
  },
  {
    step: 5,
    title: 'The Gommage (Body Scrub)',
    icon: Sparkles,
    duration: '15-20 min',
    description:
      'This is the main event. The tayeba (also called kessala) uses a rough kessa glove to scrub your entire body in firm, circular motions. She starts with your arms, then shoulders, back, chest, legs, and feet. Rolls of gray dead skin peel away in visible strips. The result is the softest skin you have ever felt.',
    etiquette: 'Lie still and let the tayeba work. Say "shwiya" for gentler or "bezzaf" for enough. Communication is expected and appreciated.',
  },
  {
    step: 6,
    title: 'Ghassoul Clay or Mask (Optional)',
    icon: Gem,
    duration: '10-15 min',
    description:
      'After the scrub, ghassoul clay from the Atlas Mountains is mixed with rose water and applied as a body and hair mask. The clay draws out impurities and delivers minerals like silica and magnesium. Let it dry slightly, then rinse. Some spas substitute argan oil wraps or honey masks.',
    etiquette: 'In public hammams, you apply your own ghassoul. At spas, the therapist handles everything. Bring your own clay if visiting a public hammam.',
  },
  {
    step: 7,
    title: 'Rinse and Cool Down',
    icon: Waves,
    duration: '10 min',
    description:
      'Rinse thoroughly with warm water, then gradually switch to cooler water. Move back through the rooms in reverse order. Some luxury spas offer a cold plunge pool. Pour a final splash of orange blossom water (ma zhar) over your hair for a fragrant finish.',
    etiquette: 'Rinse your area clean before leaving it. This is basic hammam courtesy that locals take seriously.',
  },
  {
    step: 8,
    title: 'Rest and Rehydrate',
    icon: Heart,
    duration: '15-30 min',
    description:
      'Back in the changing area, dry off and sit quietly. Your skin will feel impossibly smooth. At public hammams, locals chat and drink mint tea. At luxury spas, you are served tea, dried fruit, and pastries in a relaxation lounge. Do not rush this step.',
    etiquette: 'Tip the tayeba before you leave. From 20-50 MAD at public hammams, from 50-100 MAD at spas. Thank her with "shukran."',
  },
];

/* ================================================================
   DATA: WHAT TO BRING
   ================================================================ */

const whatToBring = [
  {
    item: 'Kessa Glove',
    icon: Layers,
    price: 'From 15 MAD',
    note: 'Rough exfoliating glove for the body scrub. Buy one at the hammam entrance or a souk. Start with medium roughness for your first time.',
    essential: true,
  },
  {
    item: 'Savon Beldi (Black Soap)',
    icon: Droplets,
    price: 'From 20 MAD',
    note: 'Thick olive-based paste that softens dead skin. Applied before the kessa scrub. Sold in small jars at hammam entrances and herbalists.',
    essential: true,
  },
  {
    item: 'Large Towel',
    icon: Package,
    price: 'Bring your own',
    note: 'Public hammams do not provide towels. Bring one large enough to wrap around your body for the changing room.',
    essential: true,
  },
  {
    item: 'Flip-Flops or Plastic Sandals',
    icon: CheckCircle,
    price: 'From 10 MAD',
    note: 'Protect your feet on the wet tile floors. Rubber sandals grip better than smooth-soled flip-flops.',
    essential: true,
  },
  {
    item: 'Underwear (Two Pairs)',
    icon: ShieldCheck,
    price: 'Bring your own',
    note: 'Wear one pair inside the hammam. Bring a dry pair to change into afterward. Dark colors are practical.',
    essential: true,
  },
  {
    item: 'Ghassoul Clay',
    icon: Gem,
    price: 'From 15 MAD',
    note: 'Atlas Mountain clay for a body and hair mask after the scrub. Mix with rose water for a smooth paste. Optional but recommended.',
    essential: false,
  },
  {
    item: 'Shampoo',
    icon: Droplets,
    price: 'Bring your own',
    note: 'Small travel-size bottle. Wash your hair at the end after the clay mask rinse.',
    essential: false,
  },
  {
    item: 'Small Plastic Bag',
    icon: Package,
    price: 'Free',
    note: 'To carry wet underwear and toiletries home. A ziplock bag works perfectly.',
    essential: false,
  },
];

/* ================================================================
   DATA: HAMMAM TYPE COMPARISON
   ================================================================ */

const hammamTypes = [
  {
    type: 'Public Neighborhood Hammam',
    icon: Building,
    price: 'From 50 MAD entry + from 50 MAD scrub',
    nudity: 'Underwear stays on. Women go topless; men wear shorts or briefs. Full nudity is rare.',
    atmosphere: 'Communal, lively, no-frills. Tiled rooms with domed ceilings and star-shaped skylights. Often centuries old. Locals chatting, children playing, steam thick.',
    who: 'Budget travelers, culture seekers, repeat visitors. This is how Moroccans have bathed for a thousand years.',
    tipping: 'From 20-50 MAD to the tayeba who scrubs you. She relies on tips as her primary income.',
    booking: 'Walk in. No reservation needed. Check the men/women schedule posted at the entrance.',
  },
  {
    type: 'Tourist / Boutique Hammam',
    icon: Sparkles,
    price: 'From 300 MAD per package',
    nudity: 'Disposable underwear and robe provided. Private or semi-private rooms. More modest overall.',
    atmosphere: 'Restored riad or purpose-built spa with designer interiors, mood lighting, ambient music. Calm and quiet.',
    who: 'First-timers, couples, travelers who want the ritual without the intensity of a public bath.',
    tipping: 'From 50-100 MAD per therapist. Service charge may be included in the price.',
    booking: 'Book 1-2 days ahead. Walk-ins sometimes possible on weekdays.',
  },
  {
    type: 'Luxury Hotel Hammam',
    icon: Crown,
    price: 'From 800 MAD per treatment',
    nudity: 'Fully private treatment rooms. Robes, slippers, and disposable underwear provided. Complete discretion.',
    atmosphere: 'Marble interiors, indoor pools, saunas, jacuzzis, relaxation lounges with tea and pastries. World-class facilities.',
    who: 'Luxury travelers, honeymooners, anyone wanting a spa-grade experience with hotel convenience.',
    tipping: 'From 50-100 MAD per therapist. Some hotels add a service charge automatically.',
    booking: 'Book 3-7 days ahead during peak season (October-April). Online booking common.',
  },
];

/* ================================================================
   DATA: NUDITY & MODESTY NORMS
   ================================================================ */

const modestryNorms = [
  {
    rule: 'Women keep underwear bottoms on',
    detail: 'Most Moroccan women wear underwear bottoms in the hammam. Going topless is standard and nobody looks twice. Full nudity happens occasionally among close friends or family but is not the norm.',
    icon: CheckCircle,
  },
  {
    rule: 'Men wear shorts or briefs',
    detail: 'Moroccan men wear swim trunks, underwear, or shorts. Full nudity in men\u2019s sections is less common than in European baths. Respect the local standard.',
    icon: CheckCircle,
  },
  {
    rule: 'No staring, no comments',
    detail: 'The hammam is a space of body neutrality. People of all ages, shapes, and sizes bathe side by side. Keep your eyes on your own space. This is deeply ingrained Moroccan hammam culture.',
    icon: Eye,
  },
  {
    rule: 'Luxury spas provide coverage',
    detail: 'Boutique and hotel spas give you disposable underwear, a robe, and slippers. You are never expected to be fully undressed. Therapists drape towels over areas they are not working on.',
    icon: ShieldCheck,
  },
  {
    rule: 'Photographs are strictly forbidden',
    detail: 'Never bring a phone or camera into the bathing area. This is a private, intimate space. Photos would be a serious breach of trust. Leave your phone in the locker.',
    icon: Ban,
  },
  {
    rule: 'Children are welcome',
    detail: 'Moroccan mothers bring young children of either gender to the women\u2019s hammam. Older boys go to the men\u2019s section. This is a normal family activity, not unusual.',
    icon: Users,
  },
];

/* ================================================================
   DATA: TIPPING GUIDE
   ================================================================ */

const tippingGuide = [
  { role: 'Tayeba / Kessala (scrubber) at public hammam', amount: 'From 20-50 MAD', note: 'Her primary source of income. Tip generously if the scrub was thorough.' },
  { role: 'Hammam entrance attendant', amount: 'From 5-10 MAD', note: 'Optional but appreciated, especially if she watched your belongings.' },
  { role: 'Boutique spa therapist', amount: 'From 50-100 MAD', note: 'Per therapist. Some spas include service charge already.' },
  { role: 'Luxury hotel spa therapist', amount: 'From 50-100 MAD', note: 'Check if service charge is included in the bill. Tip on top if the service was exceptional.' },
  { role: 'Couples session therapists', amount: 'From 100 MAD per therapist', note: 'You have two therapists. Tip each one individually.' },
];

/* ================================================================
   DATA: HEALTH BENEFITS
   ================================================================ */

const healthBenefits = [
  { benefit: 'Deep Skin Exfoliation', detail: 'The kessa scrub removes layers of dead skin cells that daily showering misses. Skin texture improves noticeably after a single session.', icon: Sparkles },
  { benefit: 'Improved Circulation', detail: 'Alternating between hot steam and cool rinses dilates and constricts blood vessels, boosting circulation throughout the body.', icon: Heart },
  { benefit: 'Muscle and Joint Relief', detail: 'Heat and steam relax tight muscles and ease joint stiffness. Moroccans with physically demanding jobs rely on the weekly hammam for recovery.', icon: Thermometer },
  { benefit: 'Respiratory Clearing', detail: 'Steam inhalation opens nasal passages and clears congestion. Eucalyptus-infused steam at some hammams amplifies this effect.', icon: Waves },
  { benefit: 'Stress Reduction', detail: 'The slow, ritualized pace of the hammam forces you to disconnect from screens and schedules. The social aspect adds community and belonging.', icon: Award },
  { benefit: 'Natural Skin Nourishment', detail: 'Ghassoul clay delivers silica and magnesium. Argan oil provides vitamin E and essential fatty acids. These are pure, plant-derived treatments with centuries of use.', icon: Gem },
];

/* ================================================================
   DATA: BEST HAMMAMS BY CITY
   ================================================================ */

const bestHammams = [
  {
    city: 'Marrakech',
    icon: Star,
    image: '/images/art-moroccan-hammam-ritual.webp',
    intro: 'Marrakech has the widest range of hammam options in Morocco. The medina alone has dozens of neighborhood hammams, and the city\'s boutique spa scene is the most developed in the country.',
    picks: [
      { name: 'Heritage Spa', type: 'Boutique Spa', price: 'From 400 MAD', note: 'Restored riad near Bab Doukkala. Black soap hammam followed by argan oil massage. English-speaking staff. Excellent for first-timers.' },
      { name: 'Les Bains de Marrakech', type: 'Day Spa', price: 'From 500 MAD', note: 'Palace-like setting near Kasbah. Ghassoul clay ritual, couples packages, rooftop terrace for post-hammam mint tea.' },
      { name: 'Hammam Mouassine', type: 'Public', price: 'From 50 MAD', note: 'In the heart of the medina. Expert tayebas, separate men/women hours. Authentic neighborhood atmosphere. Bring your own supplies.' },
      { name: 'Hammam Dar el-Bacha', type: 'Historic Public', price: 'From 50 MAD', note: '16th-century hammam with star-shaped skylights. Local regulars, no tourist crowds. A true piece of living history.' },
      { name: 'La Mamounia Spa', type: 'Ultra-Luxury', price: 'From 1,500 MAD', note: '2,500 sqm spa complex. Royal Hammam ritual with gold-infused argan oil. Indoor pool, sauna, fitness center.' },
    ],
  },
  {
    city: 'Fes',
    icon: Building,
    image: '/images/photo-hammam-interior.webp',
    intro: 'Fes has some of the oldest operating hammams in Morocco. The medina hammams are less touristy than Marrakech, and the riad spas use traditional Fassi herbal preparations passed down through generations.',
    picks: [
      { name: 'Hammam Sidi Azzouz', type: 'Public', price: 'From 50 MAD', note: 'Neighborhood hammam in the heart of Fes el-Bali. Original vaulted ceilings, thick steam, welcoming tayebas.' },
      { name: 'Riad Laaroussa Spa', type: 'Riad Spa', price: 'From 400 MAD', note: '17th-century palace with original zellige. Fassi herb treatments, small and intimate. Book ahead.' },
      { name: 'Palais Amani Spa', type: 'Boutique', price: 'From 350 MAD', note: 'Organic products grown in the riad\'s Andalusian garden. Medina rooftop views post-treatment.' },
    ],
  },
  {
    city: 'Casablanca',
    icon: Building,
    image: '/images/hero-hammam-interior.webp',
    intro: 'Casablanca\'s hammam scene blends traditional neighborhood baths in older quarters with modern, internationally influenced spas in the new city. The hotel spa standard is among the highest in Morocco.',
    picks: [
      { name: 'Hammam Ziani', type: 'Public/Tourist', price: 'From 150 MAD', note: 'Clean, well-maintained hammam popular with both locals and visitors. Separate floors for men and women.' },
      { name: 'Four Seasons Casablanca Spa', type: 'Luxury Hotel', price: 'From 1,200 MAD', note: 'Atlantic Ocean views, indoor pool, exclusive product line. The city\'s most premium spa experience.' },
      { name: 'Mythic Oriental Spa', type: 'Day Spa', price: 'From 350 MAD', note: 'Moroccan-Asian fusion treatments. Thai-Moroccan massage, hammam ritual, competitive pricing.' },
    ],
  },
  {
    city: 'Essaouira',
    icon: Waves,
    image: '/images/hero-hammam.webp',
    intro: 'This coastal town has a handful of excellent hammams. The Atlantic breeze makes the post-hammam cool-down especially refreshing. Several riads offer private hammam sessions.',
    picks: [
      { name: 'Hammam Lalla Mira', type: 'Eco-Hammam', price: 'From 150 MAD', note: 'Solar-heated water, organic argan oil products. Small and personal. Book at least a day ahead.' },
      { name: 'Les Bains d\'Essaouira', type: 'Boutique', price: 'From 300 MAD', note: 'Traditional hammam ritual with a modern touch. Central medina location. Couples sessions available.' },
    ],
  },
];

/* ================================================================
   DATA: WHEN NOT TO GO
   ================================================================ */

const whenNotToGo = [
  { reason: 'Sunburn or open wounds', detail: 'The kessa scrub will aggravate sunburned or broken skin. Wait until your skin has fully healed before booking a gommage.', icon: AlertTriangle },
  { reason: 'Immediately after eating', detail: 'Wait at least 2 hours after a meal. Heat and steam on a full stomach cause nausea and discomfort.', icon: AlertTriangle },
  { reason: 'Active skin infections', detail: 'Fungal infections, bacterial skin conditions, or contagious rashes should be treated before visiting a communal bathing space.', icon: Ban },
  { reason: 'Severe heart or blood pressure issues', detail: 'The extreme heat stresses the cardiovascular system. Consult a doctor if you have a heart condition or uncontrolled high blood pressure.', icon: ShieldCheck },
  { reason: 'Pregnancy (first trimester)', detail: 'Many doctors advise avoiding extreme heat during early pregnancy. Consult your healthcare provider. Warm (not hot) rooms may be acceptable later in pregnancy.', icon: Info },
  { reason: 'Heavy alcohol consumption', detail: 'Never enter a hammam while intoxicated. Alcohol plus extreme heat causes dangerous dehydration, dizziness, and fainting.', icon: Ban },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoHammamEtiquettePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-hammam.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Hammam Etiquette Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Droplets className="w-4 h-4" />
            Updated March 2026
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4 max-w-4xl">
            Morocco Hammam Etiquette
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl font-[family-name:var(--font-heading)]">
            Everything you need to know before your first Moroccan bathhouse visit: the three-room ritual, body scrubbing, nudity norms, tipping customs, and the best hammams by city.
          </p>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              The hammam is central to Moroccan life. For over a thousand years, these steam baths have served as places to wash, socialize, mark life milestones, and maintain physical health. Every neighborhood has one. Moroccans visit weekly, often on the same day, at the same hour, with the same group of friends or family.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              For foreign visitors, the hammam can feel disorienting the first time. The rules are unwritten. The layout is unfamiliar. The scrubbing is more vigorous than any exfoliation you have experienced. But the rewards are real: your skin will feel like it belongs to someone ten years younger, and you will understand a piece of Moroccan culture that no museum or restaurant can teach you.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              This guide covers every aspect of hammam etiquette so you can walk in with confidence. From what to bring in your bucket to how much to tip the tayeba, from the correct level of undress to which room to enter first, every detail is here.
            </p>
          </div>
        </div>
      </section>

      {/* ── Step-by-Step Ritual ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Hammam Ritual: Step by Step
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Eight stages from arrival to departure. The entire process takes 90 minutes to two hours.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {hammamSteps.map((s) => {
              const StepIcon = s.icon;
              return (
                <div key={s.step} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <StepIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-[var(--color-gold)] bg-[var(--color-gold)]/10 px-2 py-0.5 rounded-full">
                          Step {s.step}
                        </span>
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {s.title}
                        </h3>
                        <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {s.duration}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{s.description}</p>
                      <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          <ShieldCheck className="w-3.5 h-3.5 inline-block text-[var(--color-gold)] mr-1" />
                          <strong className="text-[var(--text-primary)]">Etiquette:</strong> {s.etiquette}
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

      {/* ── Nudity & Modesty Norms ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nudity and Modesty Norms
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Moroccan hammam is not a nudist space. There are clear, respected norms around what to wear and how to behave.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modestryNorms.map((norm) => {
              const NormIcon = norm.icon;
              return (
                <div key={norm.rule} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <NormIcon className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    {norm.rule}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{norm.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What to Bring ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Package className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Bring to a Public Hammam
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Luxury spas provide everything. Public hammams require you to bring your own supplies. Here is the complete packing list.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whatToBring.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.item} className="card-moroccan p-5">
                  <div className="flex items-start gap-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.item}
                        </h3>
                        {item.essential && (
                          <span className="text-[10px] font-bold text-white bg-[var(--color-accent)] px-1.5 py-0.5 rounded">
                            ESSENTIAL
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[var(--color-gold)] font-medium mb-1">{item.price}</p>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.note}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Public vs Tourist vs Luxury ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Public vs Tourist vs Luxury Hammams
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three tiers of the same ritual. The core experience is identical, but the setting, price, and level of hand-holding differ greatly.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hammamTypes.map((h) => {
              const TypeIcon = h.icon;
              return (
                <div key={h.type} className="card-moroccan p-6 zellige-border">
                  <TypeIcon className="w-10 h-10 text-[var(--color-accent)] mb-4" />
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                    {h.type}
                  </h3>
                  <p className="text-sm font-bold text-[var(--color-gold)] mb-4">{h.price}</p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-bold text-[var(--text-primary)] mb-0.5">Dress Code</p>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{h.nudity}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--text-primary)] mb-0.5">Atmosphere</p>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{h.atmosphere}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--text-primary)] mb-0.5">Best For</p>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{h.who}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--text-primary)] mb-0.5">Tipping</p>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{h.tipping}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--text-primary)] mb-0.5">Booking</p>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{h.booking}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── The Scrubbing Process Deep Dive ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Body Scrub: What Actually Happens
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The gommage is the heart of every hammam visit. Here is exactly what to expect from the tayeba.
          </p>

          <div className="card-moroccan p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CircleDot className="w-4 h-4 text-[var(--color-gold)]" />
                  Before the Scrub
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  After 15-20 minutes of steaming, the tayeba applies savon beldi (black soap) over your entire body. This thick olive paste sits on your skin for 5-10 minutes, softening the top layer of dead cells. You lie on the warm tile floor or a marble slab, letting the steam and soap do their work.
                </p>
              </div>

              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CircleDot className="w-4 h-4 text-[var(--color-gold)]" />
                  The Scrub Itself
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  The tayeba puts on her kessa glove, a coarse woven mitt, and begins scrubbing in firm circular motions. She works systematically: arms first, then shoulders, back, chest, stomach, each leg, and finally feet. The pressure is strong. You will see gray-brown rolls of dead skin peeling off your body in visible strips. This looks alarming the first time but is completely normal. Everyone sheds this much dead skin; daily showers simply do not remove it.
                </p>
              </div>

              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CircleDot className="w-4 h-4 text-[var(--color-gold)]" />
                  Communication During the Scrub
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  The tayeba will gesture for you to turn over, lift your arms, or extend your legs. Even without a shared language, the physical directions are clear. Key phrases: &quot;shwiya&quot; means gently, &quot;bezzaf&quot; means enough or too much, &quot;mezyan&quot; means good. Using these words shows respect and helps the tayeba calibrate her pressure to your tolerance.
                </p>
              </div>

              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CircleDot className="w-4 h-4 text-[var(--color-gold)]" />
                  After the Scrub
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Warm water is poured over you to rinse away the debris. Your skin will feel incredibly smooth, almost squeaky clean. This is when ghassoul clay is applied if you brought some, or when a spa therapist transitions to a massage or wrap. The whole scrubbing process takes 15-20 minutes. Your skin may appear slightly pink, which is normal and fades within an hour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tipping Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandCoins className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tipping at the Hammam
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tipping is an important part of hammam culture. The tayeba at a public hammam depends on tips as her main income. Seasonal pricing can change.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full card-moroccan overflow-hidden">
              <thead>
                <tr className="bg-[var(--color-accent)]/10">
                  <th className="text-left text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] p-4">Role</th>
                  <th className="text-left text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] p-4">Amount</th>
                  <th className="text-left text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] p-4">Notes</th>
                </tr>
              </thead>
              <tbody>
                {tippingGuide.map((t) => (
                  <tr key={t.role} className="border-t border-[var(--border-light)]">
                    <td className="text-sm text-[var(--text-primary)] p-4 font-medium">{t.role}</td>
                    <td className="text-sm text-[var(--color-gold)] p-4 font-bold whitespace-nowrap">{t.amount}</td>
                    <td className="text-xs text-[var(--text-secondary)] p-4">{t.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Gender Separation ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Gender Separation: How It Works
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Public hammams are always gender-separated. Understanding the system avoids awkward situations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[var(--color-gold)]" />
                Alternating Hours
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Most neighborhood hammams serve men and women at different times. A typical schedule: women from morning until early afternoon, men from late afternoon until closing. The exact hours are posted on the door, often in Arabic only.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Ask your riad or hotel to check the schedule for you. Arriving during the wrong hours will be gently corrected by the attendant.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Building className="w-5 h-5 text-[var(--color-gold)]" />
                Separate Wings
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Larger hammams, especially in cities like Fes and Meknes, have permanent separate sections for men and women with their own entrances. These operate all day without alternating hours.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Boutique and luxury spas offer mixed-gender relaxation lounges and couples treatment rooms, but the hammam bathing area itself remains separated or fully private.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Health Benefits ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Health Benefits of the Hammam
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The hammam is more than a bath. Moroccans have relied on it for physical and mental well-being for centuries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthBenefits.map((b) => {
              const BenefitIcon = b.icon;
              return (
                <div key={b.benefit} className="card-moroccan p-5">
                  <BenefitIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {b.benefit}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{b.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Hammams by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Hammams by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tested recommendations across Morocco, from neighborhood public baths to five-star hotel spas. Seasonal pricing can change.
          </p>

          <div className="space-y-12">
            {bestHammams.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city}>
                  <div className="flex items-center gap-3 mb-4">
                    <CityIcon className="w-6 h-6 text-[var(--color-gold)]" />
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {city.city}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <div className="relative h-48 lg:h-full rounded-xl overflow-hidden">
                        <img
                          src={city.image}
                          alt={`Hammam scene in ${city.city}, Morocco`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <p className="absolute bottom-3 left-3 text-white text-sm font-medium">{city.city}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-3">
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{city.intro}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {city.picks.map((pick) => (
                          <div key={pick.name} className="card-moroccan p-4">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                                {pick.name}
                              </h4>
                              <span className="text-[10px] font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-1.5 py-0.5 rounded whitespace-nowrap">
                                {pick.type}
                              </span>
                            </div>
                            <p className="text-xs font-bold text-[var(--color-gold)] mb-1">{pick.price}</p>
                            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{pick.note}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── When NOT to Go ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            When NOT to Visit the Hammam
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The hammam is safe for most people, but these situations call for caution or postponement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whenNotToGo.map((w) => {
              const WarnIcon = w.icon;
              return (
                <div key={w.reason} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <WarnIcon className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    {w.reason}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{w.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── First-Timer Quick Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Tips for First-Timers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice to make your first hammam visit smooth and enjoyable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Start at a Boutique Spa', icon: Sparkles, text: 'If the public hammam sounds intimidating, book a boutique spa first (from 300 MAD). Staff speak English or French and walk you through every step. After one spa visit, you will feel confident enough for a neighborhood hammam.' },
              { title: 'Arrive with an Empty Stomach', icon: AlertTriangle, text: 'Eat at least 2 hours before the hammam. The combination of heat, steam, and lying down on a full stomach causes nausea. A light snack beforehand is fine.' },
              { title: 'Bring Cash for Everything', icon: DollarSign, text: 'Public hammams are cash-only. Bring enough for the entry fee (from 50 MAD), the scrub (from 50 MAD), supplies if needed, and the tip. Keep your money in a waterproof pouch or leave it with the attendant.' },
              { title: 'Go on a Weekday Morning', icon: Clock, text: 'Weekday mornings between 9 and 11 AM are the quietest times at most public hammams. You get more personal attention from the tayeba and more space in each room.' },
              { title: 'Skip the Sun Afterward', icon: ShieldCheck, text: 'Your skin will be sensitive for 24 hours after a deep gommage. Avoid direct sunlight, chlorinated pools, and harsh soaps. Apply argan oil or a gentle moisturizer. Many Moroccans follow their hammam with a nap.' },
              { title: 'Ask Your Riad for Help', icon: Info, text: 'Your riad or hotel staff can recommend a nearby hammam, check the schedule, and even send someone to accompany you the first time. This is a common request and they are happy to help.' },
            ].map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <TipIcon className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Inside the Moroccan Hammam
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-hammam-interior.webp"
                alt="Traditional Moroccan hammam interior with vaulted stone ceilings and warm tiled floors"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Traditional Hammam Interior</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-hammam-interior.webp"
                alt="Steam-filled hammam room with zellige tilework and atmospheric lighting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Hammam Steam Room</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/art-moroccan-hammam-ritual.webp"
                alt="Moroccan hammam ritual with traditional kessa glove and savon beldi soap"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Hammam Ritual Supplies</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Real questions from travelers planning their first hammam visit.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Morocco Spa & Hammam Guide',
                description: 'Deep dive into spa treatments, traditional products like savon noir and ghassoul clay, and city-by-city spa recommendations.',
                href: '/morocco-spa-guide',
                icon: Droplets,
              },
              {
                title: 'Morocco Etiquette Guide',
                description: 'Dress code, greetings, dining customs, tipping norms, and social rules for respectful travel across Morocco.',
                href: '/morocco-etiquette',
                icon: ShieldCheck,
              },
              {
                title: 'First Time in Morocco',
                description: 'Everything first-time visitors need to know: airports, currency, language, safety, transport, and day-by-day planning.',
                href: '/morocco-first-time',
                icon: BookOpen,
              },
              {
                title: 'Luxury Travel Morocco',
                description: 'The finest riads, palace hotels, private tours, and premium experiences for travelers who want the best.',
                href: '/morocco-luxury-travel',
                icon: Crown,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready for Your First Hammam?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 font-[family-name:var(--font-heading)]">
            The hammam is one of the most memorable experiences Morocco offers. Book a boutique spa session for your first visit, or ask your riad to point you to the nearest neighborhood hammam. Your skin will thank you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/morocco-spa-guide"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[var(--color-accent)] rounded-full font-[family-name:var(--font-heading)] font-bold hover:bg-white/90 transition-colors"
            >
              Explore Spa Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-first-time"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 text-white rounded-full font-[family-name:var(--font-heading)] font-bold hover:bg-white/20 transition-colors border border-white/30"
            >
              First-Time Visitor Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
