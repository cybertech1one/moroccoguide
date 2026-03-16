import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Shield,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  Eye,
  UserX,
  Users,
  HeartPulse,
  Phone,
  Car,
  Thermometer,
  Info,
  MapPin,
  ArrowRight,
  Lightbulb,
  HandCoins,
  Store,
  Navigation,
  Ban,
  Pill,
  Scale,
  Mountain,
  Droplets,
  Sun,
  CircleAlert,
  CheckCircle,
  XCircle,
  Siren,
  MapPinned,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Safety in Morocco 2025-2026 | Complete Travel Safety Guide | CityGuide',
  description:
    'Complete safety guide for traveling in Morocco. Common scams, emergency numbers, health tips, women\'s safety, LGBTQ+ info, drugs and alcohol laws, natural hazards, safe areas, and what to do if something goes wrong.',
  keywords: [
    'Morocco safety',
    'is Morocco safe',
    'Morocco scams',
    'Morocco emergency numbers',
    'Morocco women travelers',
    'Morocco health',
    'Morocco travel safety',
    'Morocco tourist police',
    'Morocco safe for tourists',
    'Morocco LGBTQ safety',
    'Morocco drugs law',
    'Morocco safe areas',
    'Morocco pharmacy',
    'Morocco travel insurance',
  ],
  openGraph: {
    title: 'Safety in Morocco 2025-2026 - Complete Travel Safety Guide | CityGuide',
    description:
      'Everything you need to know about staying safe in Morocco. Scams, health, emergencies, laws, and practical advice for all travelers.',
    url: 'https://cityguide.ma/safety',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Moroccan medina street scene',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/safety' },
};

/* ===================================================================
   JSON-LD
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Safety in Morocco 2025-2026 | Travel Safety Guide',
  description:
    'Complete safety guide for traveling in Morocco including scam awareness, health tips, emergency contacts, laws, and advice for all travelers.',
  url: 'https://cityguide.ma/safety',
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: 'https://cityguide.ma' },
};

/* ===================================================================
   SCAMS DATA
   =================================================================== */

interface ScamInfo {
  title: string;
  icon: React.ReactNode;
  description: string;
  howToAvoid: string;
  whatToDo: string;
}

const scams: ScamInfo[] = [
  {
    title: 'Fake Guides in Medinas',
    icon: <UserX className="w-5 h-5" />,
    description:
      'Unofficial "guides" approach tourists at medina entrances, offering to show the way to a riad or attraction. They lead you through confusing alleys and then demand a large payment, sometimes becoming aggressive if you refuse.',
    howToAvoid:
      'Politely but firmly say "La, shukran" (No, thank you) and keep walking. Use GPS or download offline maps before entering the medina. If you need a guide, book an official one through your hotel or a licensed agency.',
    whatToDo:
      'If cornered, stay calm and offer a small tip (10-20 MAD) to end the interaction. If they become aggressive, walk toward a shop or busy area and ask for help. Report persistent harassment to the tourist police.',
  },
  {
    title: '"My Shop Is This Way"',
    icon: <HandCoins className="w-5 h-5" />,
    description:
      'A friendly person starts chatting, claims to work at a nearby shop, and offers to show you something "interesting" or "free." They lead you to a carpet, argan oil, or leather shop where high-pressure sales tactics await. Your "friend" earns a commission on anything you buy.',
    howToAvoid:
      'Be skeptical of unsolicited friendliness that quickly steers toward shopping. If someone says "come see my shop" or "I know a special place," politely decline and continue your route. Genuine friendly encounters rarely involve shopping.',
    whatToDo:
      'You are never obligated to buy anything. Thank them, say you need to go, and leave. No matter how much time was spent or tea was served, you do not owe a purchase. Simply stand up and walk out.',
  },
  {
    title: 'Henna Artists (Forced Application)',
    icon: <HandCoins className="w-5 h-5" />,
    description:
      'Women in tourist squares (especially Jemaa el-Fnaa in Marrakech) grab your hand and start applying henna before you consent, then demand 200-500 MAD for a design you never asked for.',
    howToAvoid:
      'Keep your hands in your pockets or behind your back when walking through areas with henna artists. If someone reaches for your hand, pull away immediately and say "No" firmly. If you want henna, go to a salon or ask your riad to arrange it.',
    whatToDo:
      'If henna is already applied, do not pay the inflated price. Offer 20-30 MAD maximum and walk away. The design washes off easily if you scrub quickly with soap and water.',
  },
  {
    title: 'Taxi Meter Tricks',
    icon: <Navigation className="w-5 h-5" />,
    description:
      'Taxi drivers refuse to use the meter, claim it is broken, or start the meter with an inflated starting amount. Some take unnecessarily long routes. This is especially common at airports and tourist hotspots.',
    howToAvoid:
      'Always insist on the meter before getting in. If the driver refuses, find another taxi. Know the approximate fare for common routes (ask your hotel). Use ride-hailing apps like inDrive or Careem for transparent pricing.',
    whatToDo:
      'If you realize mid-ride that the meter is off or rigged, note the taxi number and calmly tell the driver to use the meter. At your destination, pay what you believe is fair based on the distance. If there is a dispute, suggest going to the nearest police station.',
  },
  {
    title: 'Carpet Shop Bait-and-Switch',
    icon: <Store className="w-5 h-5" />,
    description:
      'A friendly local befriends you, invites you for tea, and leads you to a carpet or craft shop. Inside, high-pressure sales tactics are used with inflated prices. The "friend" receives a commission on any sale.',
    howToAvoid:
      'Be wary of overly friendly strangers who steer the conversation toward shopping. Visit cooperatives and fixed-price shops for pressure-free browsing. If you want carpets, research prices before your trip and visit multiple shops.',
    whatToDo:
      'You are never obligated to buy. Thank them for the tea, say you need time to think, and leave. If pressured, simply stand up and walk out. No purchase is required, regardless of how much time was spent.',
  },
  {
    title: 'Spice Market Rip-Offs',
    icon: <Store className="w-5 h-5" />,
    description:
      'Spice vendors in tourist areas sell common spices at extreme markups, often claiming they have medicinal or "Viagra-like" properties. Pre-mixed spice blends are presented as rare finds. Saffron is frequently fake (safflower dyed red).',
    howToAvoid:
      'Research fair spice prices before shopping. Real saffron costs 30-50 MAD per gram. For quality spices, shop at Cooperative stores or supermarkets like Marjane. Compare prices at multiple stalls before buying.',
    whatToDo:
      'If you suspect you overpaid, it is a learning experience. For future purchases, always ask the price per gram or kilo before the vendor starts scooping. Never let a vendor package spices before agreeing on a price.',
  },
  {
    title: '"It\'s Closed" Scam',
    icon: <Ban className="w-5 h-5" />,
    description:
      'Someone near a monument, tannery, or attraction tells you it is closed today but offers to take you to their "cousin\'s shop" or an alternative attraction instead. The original site is usually open.',
    howToAvoid:
      'Ignore anyone who tells you a public attraction is closed unless they are clearly official staff at the entrance. Walk past them and check for yourself. Research opening hours in advance.',
    whatToDo:
      'Thank them and proceed to the attraction entrance. If it genuinely is closed, check the official sign or ask nearby shop owners (not touts) for confirmation.',
  },
  {
    title: 'Restaurant Menu Without Prices',
    icon: <Store className="w-5 h-5" />,
    description:
      'Some tourist restaurants, especially in Jemaa el-Fnaa and medina alleys, do not display prices on their menus. When the bill arrives, items are significantly overpriced, and unexpected "extras" like bread, olives, or sauces are added.',
    howToAvoid:
      'Always ask for a menu with prices before ordering. Confirm the price of individual items, especially fish and meat which may be priced by weight. Avoid restaurants with aggressive touts pulling you inside.',
    whatToDo:
      'If overcharged, calmly question each item on the bill. Refuse to pay for items you did not order. If the restaurant will not negotiate, pay what you consider fair, note the establishment name, and report it to the tourist police.',
  },
];

/* ===================================================================
   EMERGENCY NUMBERS
   =================================================================== */

const emergencyNumbers = [
  { service: 'Police', number: '19', note: 'From any phone (landline or mobile)' },
  { service: 'Fire / Ambulance (SAMU)', number: '15', note: 'SAMU emergency medical services' },
  { service: 'Gendarmerie (rural police)', number: '177', note: 'For incidents outside cities' },
  { service: 'General Emergency (mobile)', number: '112', note: 'European-style emergency number, works from any mobile' },
  { service: 'Tourist Police (Marrakech)', number: '0524-384601', note: 'Dedicated tourist assistance in Marrakech' },
  { service: 'Tourist Police (Fes)', number: '0535-624973', note: 'Dedicated tourist assistance in Fes' },
  { service: 'Tourist Police (Casablanca)', number: '0522-442424', note: 'Dedicated tourist assistance in Casablanca' },
  { service: 'Tourist Police (Agadir)', number: '0528-840818', note: 'Dedicated tourist assistance in Agadir' },
];

/* ===================================================================
   SAFE AREAS VS AREAS OF CAUTION
   =================================================================== */

const safeAreas = [
  { area: 'Marrakech - Gueliz (Ville Nouvelle)', level: 'very-safe', note: 'Modern district with wide boulevards, international restaurants, and well-lit streets.' },
  { area: 'Rabat - City Center & Souissi', level: 'very-safe', note: 'The capital is very well-policed and feels safe at all hours. Embassy district is especially secure.' },
  { area: 'Essaouira - Entire Medina', level: 'very-safe', note: 'Small, laid-back, extremely low crime. One of the safest places in Morocco.' },
  { area: 'Chefchaouen - Medina', level: 'very-safe', note: 'Tiny, walkable, very safe even late at night. Minimal hustle.' },
  { area: 'Casablanca - Corniche & Maarif', level: 'safe', note: 'Upscale neighborhoods with good security. The Corniche seafront promenade is popular and well-lit.' },
  { area: 'Fes - Ville Nouvelle', level: 'safe', note: 'Modern area with restaurants and hotels. Less intense than the medina.' },
  { area: 'Marrakech - Medina (daytime)', level: 'safe', note: 'Generally safe during the day with normal tourist awareness. Very crowded areas near Jemaa el-Fnaa attract pickpockets.' },
  { area: 'Fes - Medina', level: 'caution', note: 'Safe but disorienting. Expect persistent touts and faux guides, especially near Bab Bou Jeloud. Hire official guides.' },
  { area: 'Casablanca - Derb Sultan & Hay Mohammadi', level: 'caution', note: 'Residential neighborhoods with little tourist infrastructure. Not dangerous but not recommended for wandering alone at night.' },
  { area: 'Tangier - Old Medina (night)', level: 'caution', note: 'Fine during the day but can feel unsafe in darker alleys after dark. Stick to main routes and well-lit streets.' },
  { area: 'Rif Mountains (rural areas)', level: 'caution', note: 'Cannabis cultivation region. Travelers may be offered drugs or feel pressured to buy. Decline firmly and move on.' },
  { area: 'Algeria & Mauritania Border Zones', level: 'avoid', note: 'Remote border areas have security concerns. Check government travel advisories before visiting.' },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function SafetyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&q=80"
            alt="Moroccan medina street"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Safety</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Travel Safety
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Safety in Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Morocco is one of the safest countries in Africa for travelers. Here is an honest, practical guide to staying safe, healthy, and informed throughout your trip &mdash; updated for 2025-2026.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ============================================================
          OVERVIEW / 2025-2026 ASSESSMENT
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            2025-2026 Safety Assessment
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco remains one of the safest and most stable countries in North Africa and the broader MENA region for tourism. The kingdom has invested heavily in security infrastructure, maintains a strong police presence in tourist areas, and operates a dedicated tourist police force in major cities including Marrakech, Fes, Casablanca, Agadir, and Tangier.
            </p>
            <p>
              Violent crime against tourists is extremely rare. The most common issues visitors face are petty theft in crowded areas, aggressive touts in medinas, and occasional scams targeting newcomers. Morocco&apos;s Global Peace Index ranking has improved steadily, and the country continues to develop its tourism security as it prepares for the 2030 FIFA World Cup (co-hosted with Spain and Portugal).
            </p>
            <p>
              With basic awareness and the practical advice in this guide, you can navigate Morocco confidently and enjoy the extraordinary warmth and hospitality that Moroccans are famous for. Over 14 million tourists visited Morocco in 2024, the vast majority without any significant safety incidents.
            </p>
          </div>

          {/* Safety at a Glance */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="card-moroccan p-4 text-center">
              <div className="text-2xl font-bold text-[var(--color-green)]">Low</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Violent Crime Risk</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <div className="text-2xl font-bold text-[var(--color-accent)]">Medium</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Petty Theft Risk</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <div className="text-2xl font-bold text-[var(--color-accent)]">Medium</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Scam Risk</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <div className="text-2xl font-bold text-[var(--color-green)]">Low</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Terrorism Risk</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          GENERAL SAFETY TIPS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              General Safety Tips
            </h2>
          </div>
          <div className="card-moroccan p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-4 text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Keep valuables hidden and avoid displaying expensive jewelry, watches, or electronics in crowded areas. Use the hotel safe for passports and excess cash.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Photocopy your passport and important documents. Store copies separately from originals and keep digital copies in your email or cloud storage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Stay in well-reviewed accommodations and let someone know your daily plans. Share your itinerary with a trusted contact back home.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Carry a card with your accommodation&apos;s name and address written in Arabic. This helps when taking taxis or asking for directions.</span>
                </li>
              </ul>
              <ul className="space-y-4 text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Avoid walking alone in poorly lit areas at night, especially in unfamiliar neighborhoods. Stick to main streets and well-trafficked areas after dark.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Be aware of your surroundings in crowded spaces like souks, bus stations, and festival crowds. Pickpocketing is the most common petty crime.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Register with your country&apos;s embassy in Rabat and enroll in travel alert programs. Carry your embassy&apos;s emergency phone number.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Download offline maps (Google Maps or Maps.me) for all cities on your route. Cell coverage is good but data can be slow in rural areas.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SCAMS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Eye className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Common Scams & How to Avoid Them
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
            These scams are not unique to Morocco and exist in tourist destinations worldwide. Knowing about them in advance takes away their power. Most Moroccans are genuinely friendly and hospitable &mdash; these scams are the work of a small minority concentrated in tourist hotspots.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {scams.map((scam) => (
              <div key={scam.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {scam.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{scam.title}</h3>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{scam.description}</p>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/10">
                    <p className="text-sm">
                      <strong className="text-green-700 dark:text-green-400">How to avoid:</strong>{' '}
                      <span className="text-[var(--text-secondary)]">{scam.howToAvoid}</span>
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                    <p className="text-sm">
                      <strong className="text-blue-700 dark:text-blue-400">If it happens:</strong>{' '}
                      <span className="text-[var(--text-secondary)]">{scam.whatToDo}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          EMERGENCY NUMBERS
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-white/10">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white">
              Emergency Numbers
            </h2>
          </div>
          <p className="text-white/70 mb-8 max-w-2xl">
            Save these numbers in your phone before arriving in Morocco. All emergency numbers are free to call from any phone, including mobiles without a SIM card.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {emergencyNumbers.map((item) => (
              <div key={item.service} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <p className="text-white/70 text-sm mb-1">{item.service}</p>
                <p className="text-3xl font-bold text-white mb-1">{item.number}</p>
                <p className="text-sm text-white/60">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          HEALTH & MEDICAL
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <HeartPulse className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Health &amp; Medical
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Vaccinations &amp; Prevention</h3>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                  <span>No mandatory vaccinations required for entry. Recommended: Hepatitis A, Hepatitis B, Typhoid, and routine boosters (Tetanus, MMR).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                  <span>Drink bottled water only. Avoid ice in drinks at small establishments and street stalls. Sealed bottle caps should &quot;crack&quot; when opened.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                  <span>Traveler&apos;s diarrhea is the most common health issue. Eat at busy places with high food turnover. Carry rehydration salts and Imodium.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                  <span>Pack high-SPF sunscreen, insect repellent for rural areas, and any prescription medications with original packaging and a doctor&apos;s letter.</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Pharmacies &amp; Medical Facilities</h3>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Pharmacies</strong> (look for the green cross sign) are plentiful and pharmacists can provide basic medical advice. Many medications available without prescription. Night pharmacies rotate -- ask your hotel for the nearest one.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Private clinics</strong> in Casablanca, Rabat, and Marrakech offer good quality care. Clinique Internationale and Clinique du Sud are well-regarded. Expect to pay upfront and claim on insurance later.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Hospitals:</strong> Public hospitals (CHU) exist in all major cities but may have limited facilities and few English-speaking staff. For serious issues, private hospitals are strongly recommended.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Travel insurance</strong> with medical evacuation coverage is essential. For serious emergencies, private air ambulance to Casablanca or evacuation to Europe may be necessary.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WOMEN'S SAFETY
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Users className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Women&apos;s Safety
            </h2>
          </div>
          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Thousands of women, both solo and in groups, travel Morocco safely every year and have wonderful experiences. However, it is important to be aware that unwanted attention, catcalling, and persistent approaches from men can be more frequent than in many Western countries, particularly in tourist areas, medinas, and smaller towns.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Dress modestly:</strong> Covering shoulders and knees significantly reduces unwanted attention and shows respect for local culture. Loose-fitting clothing is both culturally appropriate and comfortable in the heat. In cosmopolitan areas like Gueliz (Marrakech) or the Corniche (Casablanca), standards are more relaxed, but conservative dress is always appreciated.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Dealing with harassment:</strong> Street harassment is typically verbal (comments, catcalling) rather than physical. Do not engage or make eye contact. A firm &quot;La, shukran&quot; (No, thank you) or &quot;Sir f-halek&quot; (Go away) usually works. Wearing sunglasses helps avoid eye contact. Walk with purpose and confidence. If someone follows you, walk into the nearest shop or restaurant and ask for help. Moroccan women and shop owners will almost always intervene on your behalf.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Practical tips:</strong> Consider wearing a ring on your wedding finger. If asked, mentioning a husband who is &quot;waiting at the hotel&quot; is effective. Use taxi apps like Careem or InDriver instead of hailing cabs. Avoid walking alone in dark areas at night. Many women find that traveling with at least one other person reduces the frequency of approaches significantly.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Safe spaces:</strong> Riads and reputable hotels are safe havens. Hammams designated for women are excellent cultural experiences. Many cafes and restaurants in the ville nouvelle (new city) areas are comfortable for women dining alone. Essaouira, Chefchaouen, and Rabat tend to feel most relaxed. For detailed female solo travel advice, see our{' '}
                <Link href="/solo-travel" className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-dark)]">
                  Solo Travel Guide
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          LGBTQ+ TRAVELERS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Info className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              LGBTQ+ Travelers
            </h2>
          </div>
          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                It is important to be aware that same-sex sexual activity is illegal in Morocco under Article 489 of the Penal Code, carrying potential penalties of six months to three years in prison and fines. While prosecutions of tourists are very rare, the law does exist and reflects broader social attitudes.
              </p>
              <p>
                In practice, LGBTQ+ travelers do visit Morocco regularly, but discretion is strongly advised. Public displays of affection between same-sex couples are not recommended. Many hotels and riads are welcoming and will not question booking arrangements for same-sex travelers, particularly in tourist-oriented cities like Marrakech and Essaouira.
              </p>
              <p>
                There is no openly visible LGBTQ+ scene. Morocco is a conservative country where homosexuality is a taboo topic for most people. Two friends of the same gender sharing a room or walking together will not attract attention, but romantic behavior in public will. Major cosmopolitan cities like Casablanca and Rabat are generally more tolerant than smaller towns and rural areas.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Practical advice:</strong> Avoid discussing your sexual orientation with strangers. Be cautious with dating apps as they have been used to entrap people. If you encounter any issues, contact your embassy immediately. Several international LGBTQ+ travel organizations maintain updated safety guides for Morocco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          DRUGS & ALCOHOL LAWS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Scale className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Drugs &amp; Alcohol Laws
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Drug Laws</h3>
              <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  <strong className="text-[var(--text-primary)]">Cannabis/Hashish:</strong> Despite Morocco being one of the world&apos;s largest cannabis producers (mainly in the Rif Mountains), possession and use are illegal. Penalties include imprisonment of up to 10 years and heavy fines. Tourists are not exempt from prosecution.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">Other drugs:</strong> All recreational drugs are illegal. Drug trafficking carries extremely severe penalties, including up to 30 years imprisonment. Morocco is serious about drug enforcement, particularly at borders and airports.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">Common trap:</strong> In places like Chefchaouen, locals may openly offer hashish to tourists. Some travelers have reported being set up -- accepting an offer and then being reported to police, who demand a bribe. Always decline firmly.
                </p>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Alcohol</h3>
              <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Morocco is a Muslim-majority country, but alcohol is legal and available. It is sold in licensed bars, restaurants, hotels, and designated liquor stores (look for stores with little signage, often marked &quot;Vins et Spiritueux&quot;). Supermarkets like Carrefour and Marjane also sell alcohol.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">Where you cannot drink:</strong> Public intoxication is illegal. Do not drink alcohol in public spaces, on the street, in parks, or near mosques. Drinking is socially acceptable inside restaurants, hotels, and private residences, but not in medina streets or traditional neighborhoods.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">During Ramadan:</strong> Many restaurants and bars close during daylight hours. Hotels catering to tourists may still serve alcohol discreetly. Be respectful of those who are fasting and avoid conspicuous daytime drinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ROAD SAFETY
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Car className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Road Safety
            </h2>
          </div>
          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Road traffic accidents are one of the biggest genuine safety risks in Morocco. Driving standards differ significantly from Western norms: overtaking on blind corners, speeding, and disregard for lane markings are common. Pedestrians, cyclists, motorbikes, donkey carts, and livestock share the road, especially in rural areas.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">As a driver:</strong> Drive defensively and assume other drivers may behave unpredictably. Avoid night driving outside cities, as unlit vehicles, pedestrians, and animals on the road are serious hazards. The autoroute (toll motorway) is generally safe and well-maintained. Mountain roads through the Atlas require extra caution due to sharp curves, narrow widths, and occasional rockfalls.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">As a pedestrian:</strong> Cross streets carefully, as drivers do not always stop at crosswalks. In medinas, stay alert for motorbikes and delivery carts that share the narrow alleys with pedestrians. Wear visible clothing at night if walking near roads.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Public transport safety:</strong> CTM and Supratours buses are modern and well-maintained. ONCF trains are safe and comfortable. Avoid unregulated grand taxis if they appear overcrowded or in poor condition. For taxis within cities, petit taxis (small, colored by city) are generally safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          NATURAL HAZARDS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Thermometer className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Natural Hazards
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Extreme Heat &amp; Sun</h3>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Summer temperatures in Marrakech, Fes, and the interior regularly exceed 40&deg;C (104&deg;F). Heatstroke is a genuine risk. Stay hydrated (drink at least 3 liters of water daily), wear a hat and high-SPF sunscreen, avoid strenuous activity during midday (12pm-4pm), and take advantage of the Moroccan tradition of resting during the hottest hours. The Sahara Desert is even more extreme, with temperatures sometimes exceeding 50&deg;C. Sunburn can occur even on cloudy days -- Morocco&apos;s UV index is very high.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Mountain className="w-5 h-5 text-blue-500" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Cold &amp; Altitude in the Atlas</h3>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Winter in the High Atlas Mountains brings heavy snowfall and freezing temperatures, especially above 2,000 meters. Mountain passes like Tizi n&apos;Tichka may close temporarily. If trekking in winter, bring proper cold-weather gear, check conditions before setting out, and hire an experienced local guide. Even in spring and autumn, mountain nights can be bitterly cold. Altitude sickness is possible above 3,000 meters -- ascend gradually if climbing Jebel Toubkal (4,167m).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Flash Floods</h3>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Flash floods can occur in dry riverbeds (oueds) and gorges, particularly in the Todra Gorge, Dades Valley, and southern oasis regions. These are most common in autumn and spring. Never camp in a dry riverbed. Check weather forecasts before gorge hikes. If you see rising water or hear rushing water in a gorge, move to higher ground immediately.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Earthquakes</h3>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Morocco lies in a seismically active zone. The September 2023 Al Haouz earthquake (magnitude 6.8) near Marrakech was a stark reminder. While significant earthquakes are infrequent, know the basics: if indoors, shelter under sturdy furniture away from windows. If outdoors, move to an open area away from buildings. Familiarize yourself with exit routes in your accommodation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SAFE AREAS VS AREAS OF CAUTION
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <MapPinned className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Safe Areas vs Areas to Be Cautious
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
            Morocco is overwhelmingly safe for tourists. The distinction here is between areas where you can relax completely and areas where normal urban awareness is advisable.
          </p>

          <div className="space-y-3">
            {safeAreas.map((area) => (
              <div key={area.area} className={`card-moroccan p-4 flex flex-col md:flex-row md:items-center gap-3 ${
                area.level === 'avoid' ? 'border-l-4 border-red-500' :
                area.level === 'caution' ? 'border-l-4 border-amber-500' :
                area.level === 'safe' ? 'border-l-4 border-blue-500' :
                'border-l-4 border-green-500'
              }`}>
                <div className="md:w-1/3 flex items-center gap-2">
                  {area.level === 'very-safe' && <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />}
                  {area.level === 'safe' && <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />}
                  {area.level === 'caution' && <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />}
                  {area.level === 'avoid' && <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
                  <span className="font-semibold text-[var(--text-primary)] text-sm">{area.area}</span>
                </div>
                <div className="md:w-1/6">
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    area.level === 'very-safe' ? 'text-green-600' :
                    area.level === 'safe' ? 'text-blue-600' :
                    area.level === 'caution' ? 'text-amber-600' :
                    'text-red-600'
                  }`}>
                    {area.level === 'very-safe' ? 'Very Safe' :
                     area.level === 'safe' ? 'Safe' :
                     area.level === 'caution' ? 'Use Caution' :
                     'Check Advisories'}
                  </span>
                </div>
                <div className="md:w-1/2 text-sm text-[var(--text-secondary)]">{area.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT TO DO IF SOMETHING GOES WRONG
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Siren className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              What to Do If Something Goes Wrong
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">If You Are Robbed or Pickpocketed</h3>
              <ol className="space-y-2 text-sm text-[var(--text-secondary)] list-decimal list-inside">
                <li>Go to the nearest police station to file a report (you need this for insurance claims).</li>
                <li>Ask for a &quot;proces-verbal&quot; (official police report) -- insist on receiving a copy.</li>
                <li>Cancel any stolen credit cards immediately.</li>
                <li>If your passport is stolen, contact your embassy in Rabat for an emergency travel document.</li>
                <li>Contact your travel insurance provider within 24 hours.</li>
                <li>If in a tourist area, look for the tourist police who speak multiple languages.</li>
              </ol>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">If You Need Medical Help</h3>
              <ol className="space-y-2 text-sm text-[var(--text-secondary)] list-decimal list-inside">
                <li>For minor issues, visit the nearest pharmacy (green cross sign). Pharmacists in Morocco are well-trained and can advise on common ailments.</li>
                <li>For urgent care, go to a private clinic rather than a public hospital. Ask your hotel to recommend one.</li>
                <li>Call 15 (SAMU) for ambulance services in serious emergencies.</li>
                <li>Contact your travel insurance&apos;s 24-hour helpline -- they can arrange direct billing with partner hospitals.</li>
                <li>Keep all medical receipts and documentation for insurance claims.</li>
              </ol>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">If You Are Arrested</h3>
              <ol className="space-y-2 text-sm text-[var(--text-secondary)] list-decimal list-inside">
                <li>Stay calm and cooperate with authorities.</li>
                <li>Request to contact your embassy immediately -- this is your right under the Vienna Convention.</li>
                <li>Do not sign any documents you do not understand. Request a translator.</li>
                <li>Do not admit guilt or pay any &quot;fines&quot; directly to officers (this may be a bribe solicitation).</li>
                <li>Your embassy can provide a list of local lawyers and ensure you are treated fairly.</li>
              </ol>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">If You Lose Your Passport</h3>
              <ol className="space-y-2 text-sm text-[var(--text-secondary)] list-decimal list-inside">
                <li>File a police report at the nearest station (required for replacement).</li>
                <li>Contact your embassy in Rabat to arrange an emergency travel document.</li>
                <li>Bring two passport photos, a copy of your original passport (this is why you keep photocopies), and the police report.</li>
                <li>Emergency travel documents usually take 1-3 business days to process.</li>
                <li>You may need to visit the Moroccan immigration office (Surete Nationale) to get an exit stamp.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Travel With Confidence
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Now that you know how to stay safe, explore our travel tips and planning tools to build your perfect Moroccan adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/solo-travel"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Shield className="w-4 h-4" /> Solo Travel Guide
            </Link>
            <Link
              href="/tips"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> All Travel Tips
            </Link>
            <Link
              href="/visa"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Visa &amp; Entry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
