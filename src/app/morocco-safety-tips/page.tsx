import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Shield,
  AlertTriangle,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Eye,
  Users,
  Lock,
  CreditCard,
  Car,
  Heart,
  Info,
  Building,
  Globe,
  Banknote,
  Camera,
  Moon,
  Sun,
  Navigation,
  Landmark,
  Thermometer,
  Star,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Safety Tips 2026 | Practical Guide to Staying Safe in Morocco',
  description:
    'Practical safety tips for Morocco: taxi scam tactics, ATM safety, neighborhoods to avoid, solo female travel advice, emergency numbers, hospital locations, police stations, and embassy contacts. Updated for 2026.',
  keywords: [
    'Morocco safety tips',
    'is Morocco safe',
    'Morocco scams',
    'Morocco taxi scams',
    'solo female travel Morocco',
    'Morocco emergency numbers',
    'Morocco hospitals',
    'Morocco police stations',
    'Morocco embassy contacts',
    'ATM safety Morocco',
    'Morocco neighborhoods to avoid',
    'Morocco travel safety 2026',
  ],
  openGraph: {
    title: 'Morocco Safety Tips 2026 - Practical Guide to Staying Safe',
    description:
      'Avoid scams, stay safe at ATMs, navigate medinas confidently, and know your emergency contacts. The most practical Morocco safety guide online.',
    url: 'https://citytoursmorocco.com/morocco-safety-tips',
    images: [
      {
        url: '/images/hero-morocco-medina.webp',
        width: 1200,
        height: 630,
        alt: 'Narrow medina alleyway in Morocco with warm lantern light',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Safety Tips 2026 - Practical Safety Guide',
    description:
      'Taxi scam tactics, ATM safety, solo female travel advice, emergency numbers, hospital locations. The most practical Morocco safety guide.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/morocco-safety-tips' },
};

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Morocco Safety Tips 2026: Practical Guide to Staying Safe',
  description:
    'Comprehensive safety guide for Morocco covering scam avoidance, ATM safety, solo female travel, emergency contacts, hospital and police locations, and embassy information.',
  url: 'https://citytoursmorocco.com/morocco-safety-tips',
  image: '/images/hero-morocco-medina.webp',
  datePublished: '2026-01-15',
  dateModified: '2026-03-17',
  author: {
    '@type': 'Organization',
    name: 'City Tours Morocco',
    url: 'https://citytoursmorocco.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'City Tours Morocco',
    url: 'https://citytoursmorocco.com',
  },
};

/* =====================================================================
   DATA
   ===================================================================== */

const emergencyNumbers = [
  { service: 'Police', number: '19', note: 'National police, available in cities' },
  { service: 'Gendarmerie Royale', number: '177', note: 'Rural areas and highways' },
  { service: 'Fire & Ambulance', number: '15', note: 'SAMU emergency medical services' },
  { service: 'Tourist Police', number: '+212 524-384-601', note: 'Marrakech tourist brigade (multilingual)' },
  { service: 'SOS Médecins (Casablanca)', number: '+212 522-252-525', note: 'Private 24-hour home visit doctors' },
  { service: 'SOS Médecins (Marrakech)', number: '+212 524-404-040', note: 'Private 24-hour home visit doctors' },
];

const hospitals = [
  {
    name: 'Clinique Internationale de Marrakech',
    city: 'Marrakech',
    address: 'Route de Casablanca, Marrakech',
    phone: '+212 524-349-999',
    note: 'Private clinic, English-speaking staff, 24/7 ER. Accepted by most international travel insurance.',
  },
  {
    name: 'Clinique du Parc (Casablanca)',
    city: 'Casablanca',
    address: 'Rue Abou Hanifa, Casablanca',
    phone: '+212 522-297-979',
    note: 'Modern private hospital, French and English spoken, most specialties available.',
  },
  {
    name: 'Clinique Atlas (Fes)',
    city: 'Fes',
    address: 'Boulevard Allal El Fassi, Fes',
    phone: '+212 535-653-653',
    note: 'Private clinic with good emergency department. French spoken, limited English.',
  },
  {
    name: 'Clinique Agdal (Rabat)',
    city: 'Rabat',
    address: 'Rue Oued Fès, Agdal, Rabat',
    phone: '+212 537-773-773',
    note: 'Private, modern facility near diplomatic quarter. Multilingual staff.',
  },
  {
    name: 'Hôpital Militaire Avicenne (Marrakech)',
    city: 'Marrakech',
    address: 'Avenue des Nations Unies, Marrakech',
    phone: '+212 524-434-813',
    note: 'Military hospital open to civilians for emergencies. Quality care.',
  },
];

const embassies = [
  {
    country: 'United States',
    address: 'Km 5.7, Avenue Mohamed VI, Rabat',
    phone: '+212 537-637-200',
    emergency: '+212 537-637-200 (press 1 for emergency)',
    hours: 'Mon-Fri 8:00-17:00',
  },
  {
    country: 'United Kingdom',
    address: '28, Avenue S.A.R. Sidi Mohammed, Rabat',
    phone: '+212 537-633-333',
    emergency: '+44 20-7008-5000 (after hours London)',
    hours: 'Mon-Thu 8:30-12:30, 13:30-17:00; Fri 8:30-13:00',
  },
  {
    country: 'Canada',
    address: '66, Mehdi Ben Barka Avenue, Rabat',
    phone: '+212 537-544-949',
    emergency: '+1 613-996-8885 (after hours Ottawa)',
    hours: 'Mon-Fri 8:00-12:00, 13:00-16:30',
  },
  {
    country: 'France',
    address: '1, Rue Aguelmame Sidi Ali, Rabat',
    phone: '+212 537-689-700',
    emergency: '+212 537-689-700',
    hours: 'Mon-Fri 8:30-12:00, 14:00-17:30',
  },
  {
    country: 'Germany',
    address: '7, Zankat Madnine, Rabat',
    phone: '+212 537-218-600',
    emergency: '+212 537-218-600',
    hours: 'Mon-Fri 8:00-11:30',
  },
  {
    country: 'Australia',
    address: 'No embassy in Morocco. Nearest: Paris, France.',
    phone: '+33 1-40-59-33-00',
    emergency: '+61 2-6261-3305 (Canberra)',
    hours: 'Contact Paris embassy',
  },
];

const taxiScams = [
  {
    scam: 'Broken Meter',
    description: 'Driver claims the meter is broken and quotes an inflated flat rate. In petit taxis, the meter is legally required. If it does not work, find another taxi.',
    prevention: 'Always insist on the meter (compteur) before entering. If the driver refuses, walk away and hail another cab. There are always more taxis.',
  },
  {
    scam: 'Airport Markup',
    description: 'Drivers at airport arrivals quote 3-5x the normal fare, knowing you are tired and unfamiliar. The standard airport-to-city fare is posted on signs but drivers ignore them.',
    prevention: 'Check the official posted fare before exiting arrivals. Use Careem or inDrive apps for fixed-price rides. Or walk to the departures level to catch taxis dropping off passengers -- they will use the meter.',
  },
  {
    scam: 'Scenic Route',
    description: 'Driver takes a longer route through unfamiliar streets, running up the meter. Common when going from airports or train stations.',
    prevention: 'Open Google Maps or Maps.me on your phone and follow the route. The visual presence of a map on your screen is often enough to deter detours.',
  },
  {
    scam: 'Wrong Change',
    description: 'Driver gives back change for a smaller bill, claiming you gave 20 MAD when you gave 50 MAD. Sometimes done with sleight of hand.',
    prevention: 'State the bill denomination out loud as you hand it over: "Here is fifty dirhams." Keep small bills (10 and 20 MAD notes) for taxis to avoid change disputes entirely.',
  },
  {
    scam: 'Night Surcharge Scam',
    description: 'Driver claims there is a 50% night surcharge when none exists, or inflates the actual surcharge. The real surcharge is a small fixed increase after 8 PM.',
    prevention: 'Know that the legitimate night supplement in most cities is only a few dirhams (typically 1.50-2 MAD flagfall increase). Ask the fare before entering.',
  },
];

const neighborhoodAdvice = [
  {
    city: 'Marrakech',
    areas: [
      { name: 'Jemaa el-Fnaa (after midnight)', risk: 'moderate', note: 'The square itself empties late. Side streets become deserted. Stay on lit main paths or take a taxi back to your riad.' },
      { name: 'Derb areas deep in the medina (night)', risk: 'moderate', note: 'Narrow unlabeled alleys with no lighting. Very easy to get lost. Use phone GPS offline maps and stay in groups.' },
      { name: 'Sidi Youssef Ben Ali', risk: 'moderate', note: 'Residential area with few tourist facilities. Not dangerous by day but no reason to wander there, and avoid at night.' },
    ],
  },
  {
    city: 'Casablanca',
    areas: [
      { name: 'Derb Sultan / Old Medina (night)', risk: 'moderate', note: 'Can feel intimidating after dark. Stick to the Corniche, Maarif, and Anfa neighborhoods instead for nightlife.' },
      { name: 'Hay Mohammadi', risk: 'moderate', note: 'Working-class neighborhood. No tourist attractions. Pickpocketing reported more frequently here.' },
      { name: 'Around Casa-Port train station (night)', risk: 'moderate', note: 'Deserted after 9 PM. Taxi directly to/from the station. Do not walk to nearby hotels at night.' },
    ],
  },
  {
    city: 'Tangier',
    areas: [
      { name: 'Grand Socco area (late night)', risk: 'moderate', note: 'The area quiets down significantly after midnight. Drug solicitation can be persistent. Walk confidently and decline firmly.' },
      { name: 'Port area', risk: 'low-moderate', note: 'Pickpocketing near the ferry terminal. Keep valuables in front pockets. Ignore "helpers" offering to carry bags.' },
    ],
  },
  {
    city: 'Fes',
    areas: [
      { name: 'Deep medina (unguided, night)', risk: 'moderate', note: 'The Fes medina is a UNESCO site and the world\'s largest car-free urban zone. It is a maze. Download an offline map or use a guide after dark.' },
      { name: 'Bab Boujloud at closing time', risk: 'low-moderate', note: 'When shops close, the area empties quickly. Touts become more aggressive. Have your riad directions saved on your phone.' },
    ],
  },
];

const atmSafetyTips = [
  { tip: 'Use bank-attached ATMs only', detail: 'ATMs inside bank lobbies or directly on bank walls are safest. Avoid standalone machines in shops, hotels, or random street corners -- these have higher skimming risk.' },
  { tip: 'Cover your PIN every time', detail: 'Card skimming exists in Morocco. Use your other hand or wallet to physically shield the keypad. Check for loose card slots before inserting.' },
  { tip: 'Withdraw during banking hours', detail: 'If your card gets swallowed, you can walk into the bank immediately. After hours, you could lose the card entirely. Best hours: 8:30 AM - 3:00 PM.' },
  { tip: 'Decline currency conversion', detail: 'When the ATM asks "Convert to your home currency?" always select NO (decline DCC). The bank\'s exchange rate is always worse. Choose to be charged in MAD.' },
  { tip: 'Notify your bank before traveling', detail: 'Morocco triggers fraud alerts for many banks. Set a travel notification or your card may be blocked on the first withdrawal.' },
  { tip: 'Carry a backup card', detail: 'ATM networks go down, cards get eaten, fraud departments freeze accounts. Always have at least two different cards from different banks.' },
  { tip: 'Preferred banks for ATMs', detail: 'Attijariwafa, BMCE Bank of Africa, and Banque Populaire have the most reliable ATMs and the widest networks. CIH and Crédit du Maroc are also fine.' },
];

const soloFemaleTips = [
  {
    category: 'Clothing',
    tips: [
      'Cover shoulders and knees in medinas, mosques, and rural areas. This is not about restriction -- it reduces unwanted attention by 90%.',
      'A lightweight scarf is your best friend: use it as a head covering in conservative areas, a shawl for air-conditioned buses, or a beach cover-up.',
      'In Marrakech Gueliz, Casablanca, Rabat Agdal, and beach towns like Essaouira, Western dress is normal and fine. Adjust to the neighborhood.',
    ],
  },
  {
    category: 'Street Harassment',
    tips: [
      'Verbal catcalling happens, especially in medinas. The most effective response is zero response -- no eye contact, no smile, no engagement. Walk with purpose.',
      'A firm "La, shukran" (No, thank you) or "Barak Allahu fik" (God bless you -- a polite dismissal) works when someone is persistent.',
      'If someone follows you, walk into any shop or restaurant. Moroccan shopkeepers will help you. You can also call out "Shuf, shuf!" (Look!) loudly to draw public attention.',
      'Wearing a simple band on your ring finger and mentioning "my husband" (zoji) is a culturally effective deterrent.',
    ],
  },
  {
    category: 'Transportation',
    tips: [
      'Sit in the back seat of petit taxis and grand taxis. Never sit in the front.',
      'Use Careem or inDrive apps when available (Casablanca, Rabat, Marrakech, Tangier). The driver is tracked, the route is recorded, and pricing is transparent.',
      'For night travel, have your riad/hotel call a trusted taxi driver rather than hailing one from the street.',
      'On trains, the first-class cars are quieter and more comfortable. Second-class is perfectly safe but can be crowded.',
    ],
  },
  {
    category: 'Accommodation',
    tips: [
      'Riads in the medina are generally very safe -- they have locking front doors, staff presence, and the owners/managers are protective of guests.',
      'Read recent reviews from solo female travelers specifically. Booking.com and Google Maps reviews often mention safety impressions.',
      'In hostels, choose female-only dorms if available. Many Moroccan hostels now offer them.',
    ],
  },
  {
    category: 'Social Situations',
    tips: [
      'Accepting a tea invitation from a shopkeeper is normal and generally safe -- it is a sales ritual. You are not obligated to buy anything.',
      'Be cautious accepting invitations to "see my cousin\'s shop" or "visit my family home" from strangers. This is almost always a sales tactic or worse.',
      'Making friends with other travelers, riad staff, and official guides is great. Making friends with random men who approach you on the street is risky.',
    ],
  },
];

const policeStations = [
  { city: 'Marrakech', location: 'Commissariat Central, Avenue Mohammed V', note: 'Main tourist area station. Some officers speak French and basic English.' },
  { city: 'Marrakech', location: 'Tourist Police Brigade, Jemaa el-Fnaa', note: 'Specifically for tourist issues. Multilingual officers. Open 24/7.' },
  { city: 'Casablanca', location: 'Préfecture de Police, Boulevard Zerktouni', note: 'Central police headquarters.' },
  { city: 'Fes', location: 'Commissariat de Police, Avenue Hassan II', note: 'Near Bab Boujloud entrance to the medina.' },
  { city: 'Tangier', location: 'Commissariat Central, Rue de la Liberté', note: 'City center, near Grand Socco.' },
  { city: 'Essaouira', location: 'Commissariat de Police, Avenue Oqba Ibn Nafiaa', note: 'Near Bab Doukkala entrance.' },
  { city: 'Rabat', location: 'Direction Générale de la Sûreté Nationale, Rue Soekarno', note: 'National police HQ. For serious matters.' },
];

const generalSafetyTips = [
  { title: 'Photocopy Your Passport', icon: 'camera', detail: 'Keep a photo of your passport on your phone and email a copy to yourself. If your passport is lost or stolen, this dramatically speeds up the replacement process at your embassy.' },
  { title: 'Register with Your Embassy', icon: 'building', detail: 'Register your trip with your country\'s embassy or consulate. The US has STEP (Smart Traveler Enrollment Program), the UK has a similar service. This allows them to contact you in emergencies.' },
  { title: 'Travel Insurance is Non-Negotiable', icon: 'shield', detail: 'Medical evacuation from Morocco can cost 50,000-100,000 USD. A good travel insurance policy costs 5-10 USD per day. World Nomads and SafetyWing are popular with travelers.' },
  { title: 'Offline Maps are Essential', icon: 'navigation', detail: 'Download Google Maps offline data for all cities you plan to visit. Also install Maps.me which has excellent medina mapping. Cell data can be unreliable in medinas and rural areas.' },
  { title: 'Learn Five Darija Phrases', icon: 'globe', detail: 'Salam (hello), Shukran (thanks), La (no), Bslama (goodbye), Bshhal (how much). Even basic Darija earns enormous goodwill and signals that you are not a naive first-day tourist.' },
  { title: 'Keep Cash Distributed', icon: 'banknote', detail: 'Do not carry all your money in one place. Keep daily spending money in a front pocket, backup cash in your hotel safe, and an emergency 500 MAD note hidden in your luggage.' },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function MoroccoSafetyTipsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* -- Hero -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-morocco-medina.webp"
            alt="Narrow medina alleyway in Morocco with warm lantern light illuminating the path"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/safety" className="hover:text-white transition-colors">Safety</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Practical Safety Tips</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Shield className="w-4 h-4 text-[var(--color-accent)]" />
              Updated March 2026
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Safety Tips
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              No sugarcoating, no scare tactics. Practical, specific safety advice from real
              experience on the ground -- taxi scam playbooks, ATM dos and don&apos;ts, neighborhood
              advice, emergency contacts, and everything solo female travelers need to know.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* -- Overall Safety Assessment -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose-moroccan">
                <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
                  Is Morocco Safe? The Honest Answer
                </h2>
                <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Morocco is one of the safest countries in Africa and safer than many popular European
                    destinations for violent crime. The Moroccan government invests heavily in tourism
                    security -- there are dedicated tourist police brigades, plainclothes officers in
                    medinas, and a visible security presence at all major sites. Violent crime against
                    tourists is exceptionally rare.
                  </p>
                  <p>
                    The real safety concerns in Morocco are not about violence. They are about petty
                    scams, aggressive touts, pickpocketing in crowded spaces, taxi overcharging, and
                    occasional street harassment (primarily affecting women). These are annoyances, not
                    dangers -- and they are almost entirely preventable with the right knowledge.
                  </p>
                  <p>
                    This page gives you that knowledge. It is based on years of on-the-ground experience,
                    traveler reports, and local insight. The goal is not to frighten you but to equip you
                    so that you spend your trip enjoying Morocco rather than worrying about it.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar: Emergency Quick Reference */}
            <aside className="lg:col-span-1">
              <div className="card-moroccan p-6 sticky top-28 border-l-4 border-red-500">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-5 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-red-500" />
                  Emergency Numbers
                </h3>
                <div className="space-y-3">
                  {emergencyNumbers.map((item) => (
                    <div key={item.service} className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-[var(--text-primary)]">{item.service}</p>
                        <p className="text-sm font-bold text-[var(--color-secondary)]">{item.number}</p>
                        <p className="text-xs text-[var(--text-muted)]">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-4 italic">
                  Save these numbers in your phone before arrival.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* -- Taxi Scams -- */}
      <section id="taxi-scams" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Most Common Issue
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Taxi Scam Tactics & How to Beat Them
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Taxi overcharging is the number one complaint from Morocco visitors. Here are the exact
              tactics used and how to counter each one.
            </p>
          </div>
          <div className="space-y-4">
            {taxiScams.map((scam, index) => (
              <div key={scam.scam} className="card-moroccan overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[var(--color-accent)]">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-2">
                        {scam.scam}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">The Tactic</p>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{scam.description}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-1">Your Counter</p>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{scam.prevention}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-secondary)]">
            <div className="flex items-start gap-3">
              <Car className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">Typical Taxi Fares (2026)</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Marrakech airport to medina: 70-100 MAD (meter) / Casablanca airport to city center: 250-350 MAD (fixed) /
                  Average petit taxi ride within a city: 10-25 MAD / Grand taxi between cities: from 50 MAD per seat.
                  Prices are approximate and seasonal pricing varies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- ATM Safety -- */}
      <section id="atm-safety" className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              ATM & Money Safety
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is still largely a cash economy outside major hotels. Knowing how to handle
              ATMs and cash safely will save you both money and stress.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {atmSafetyTips.map((item) => (
              <div key={item.tip} className="card-moroccan p-5 flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-[var(--text-primary)]">{item.tip}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Neighborhoods -- */}
      <section id="neighborhoods" className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Neighborhood Awareness by City
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              No neighborhood in Morocco is truly &quot;dangerous&quot; in the way some Western cities are. But some areas
              require more awareness, especially at night. Here is specific guidance for each major city.
            </p>
          </div>
          <div className="space-y-8">
            {neighborhoodAdvice.map((city) => (
              <div key={city.city} className="card-moroccan overflow-hidden">
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />
                    {city.city}
                  </h3>
                  <div className="space-y-3">
                    {city.areas.map((area) => (
                      <div key={area.name} className="flex items-start gap-3 p-3 rounded-lg bg-[var(--surface-muted)]">
                        <Eye className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold text-sm text-[var(--text-primary)]">{area.name}</p>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${area.risk === 'moderate' ? 'bg-amber-100 text-amber-800' : 'bg-yellow-50 text-yellow-700'}`}>
                              {area.risk}
                            </span>
                          </div>
                          <p className="text-xs text-[var(--text-muted)] leading-relaxed">{area.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Solo Female Travel -- */}
      <section id="solo-female" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Detailed Advice
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Solo Female Travel in Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Thousands of women travel Morocco solo every year and have incredible experiences. The key is
              preparation, not fear. Here is category-by-category advice from women who have done it.
            </p>
          </div>
          <div className="space-y-6">
            {soloFemaleTips.map((section) => (
              <div key={section.category} className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  {section.category === 'Clothing' && <Heart className="w-5 h-5 text-[var(--color-secondary)]" />}
                  {section.category === 'Street Harassment' && <Shield className="w-5 h-5 text-[var(--color-secondary)]" />}
                  {section.category === 'Transportation' && <Car className="w-5 h-5 text-[var(--color-secondary)]" />}
                  {section.category === 'Accommodation' && <Lock className="w-5 h-5 text-[var(--color-secondary)]" />}
                  {section.category === 'Social Situations' && <Users className="w-5 h-5 text-[var(--color-secondary)]" />}
                  {section.category}
                </h3>
                <div className="space-y-3">
                  {section.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- General Safety Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
            Essential Safety Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {generalSafetyTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5 flex items-start gap-3">
                {tip.icon === 'camera' && <Camera className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />}
                {tip.icon === 'building' && <Building className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />}
                {tip.icon === 'shield' && <Shield className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />}
                {tip.icon === 'navigation' && <Navigation className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />}
                {tip.icon === 'globe' && <Globe className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />}
                {tip.icon === 'banknote' && <Banknote className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />}
                <div>
                  <p className="font-semibold text-sm text-[var(--text-primary)]">{tip.title}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">{tip.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Hospitals -- */}
      <section id="hospitals" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Hospitals & Medical Facilities
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Private clinics provide the best care for tourists. Public hospitals exist but are
              overcrowded and have longer waits. Always go to a private clinic if you have travel insurance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hospitals.map((hospital) => (
              <div key={hospital.name} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">{hospital.name}</h3>
                    <p className="text-xs text-[var(--text-muted)] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" /> {hospital.city} -- {hospital.address}
                    </p>
                    <p className="text-sm font-bold text-[var(--color-secondary)] mt-1">{hospital.phone}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">{hospital.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Police Stations -- */}
      <section id="police" className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
            Police Stations for Tourists
          </h2>
          <div className="space-y-3">
            {policeStations.map((station, i) => (
              <div key={i} className="card-moroccan p-4 flex items-start gap-3">
                <Shield className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm text-[var(--text-primary)]">{station.city}</p>
                    <span className="text-xs text-[var(--text-muted)]">--</span>
                    <p className="text-sm text-[var(--text-secondary)]">{station.location}</p>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{station.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Embassies -- */}
      <section id="embassies" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Embassy & Consulate Contacts
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              All major embassies are located in Rabat. Several countries also maintain consulates in
              Casablanca and Marrakech. Save your embassy&apos;s emergency number before you travel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {embassies.map((embassy) => (
              <div key={embassy.country} className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[var(--color-secondary)]" />
                  {embassy.country}
                </h3>
                <p className="text-xs text-[var(--text-muted)] mt-2 flex items-center gap-1">
                  <MapPin className="w-3 h-3 shrink-0" /> {embassy.address}
                </p>
                <p className="text-sm font-bold text-[var(--color-secondary)] mt-1">{embassy.phone}</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">
                  After hours: {embassy.emergency}
                </p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">
                  <Clock className="w-3 h-3 inline mr-1" />{embassy.hours}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)] mb-4">
              Related Safety & Travel Guides
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Morocco Scam Guide', href: '/scams', desc: 'Deep dive into common tourist scams and how to avoid every single one.' },
              { title: 'Solo Female Travel', href: '/women-travel', desc: 'Complete guide for women traveling Morocco independently.' },
              { title: 'Morocco Safety Overview', href: '/safety', desc: 'General safety overview, health info, and travel advisories.' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="card-moroccan p-6 group hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">{link.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{link.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-secondary)] group-hover:text-[var(--color-secondary-dark)] transition-colors">
                  Read Guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
