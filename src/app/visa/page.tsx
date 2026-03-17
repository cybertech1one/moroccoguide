import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  FileCheck,
  Globe,
  Stamp,
  Plane,
  Clock,
  Banknote,
  Building2,
  ArrowRight,
  Search,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  Info,
  MapPin,
  Camera,
  Pill,
  Smartphone,
  Ship,
  Train,
  Footprints,
  Package,
  CircleAlert,
  XCircle,
  Lightbulb,
  Briefcase,
  Heart,
  HelpCircle,
  Scale,
  Users,
  MonitorSmartphone,
  BookOpen,
  CircleDot,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Visa & Entry Requirements for Morocco 2025-2026 | CityGuide',
  description:
    'Complete guide to Morocco visa and entry requirements. Visa-free countries list, visa-on-arrival, e-visa, passport validity, customs rules, embassy directory, business travel, travel insurance, overstay penalties, and FAQ.',
  keywords: [
    'Morocco visa',
    'Morocco entry requirements',
    'Morocco visa free',
    'Morocco passport',
    'Morocco customs',
    'Morocco immigration',
    'do I need a visa for Morocco',
    'Morocco 90 days',
    'Morocco visa extension',
    'Morocco embassy',
    'Morocco drone rules',
    'Morocco medication rules',
    'Morocco land border',
    'Morocco Ceuta Melilla',
    'Morocco currency limit',
    'Morocco airport arrival',
    'Morocco e-visa',
    'Morocco visa on arrival',
    'Morocco business visa',
    'Morocco travel insurance',
    'Morocco overstay penalty',
    'Morocco consulate directory',
  ],
  openGraph: {
    title: 'Visa & Entry Requirements for Morocco 2025-2026 | CityGuide',
    description:
      'Do you need a visa for Morocco? Check visa-free countries, visa-on-arrival, e-visa info, entry requirements, customs rules, embassy directory, and practical immigration advice.',
    url: 'https://citytoursmorocco.com/visa',
    images: [
      {
        url: '/images/hero-marrakech.webp',
        width: 1200,
        height: 630,
        alt: 'Moroccan passport control and airport',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/visa' },
};

/* ===================================================================
   JSON-LD
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Visa & Entry Requirements for Morocco 2025-2026',
  description:
    'Complete guide to visa and entry requirements for visiting Morocco, including visa-free countries, visa-on-arrival, e-visa, passport rules, customs, embassy directory, business travel, and immigration procedures.',
  url: 'https://citytoursmorocco.com/visa',
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: 'https://citytoursmorocco.com' },
};

/* ===================================================================
   VISA-FREE COUNTRIES DATA
   =================================================================== */

interface CountryGroup {
  region: string;
  countries: string[];
}

const visaFreeCountries: CountryGroup[] = [
  {
    region: 'Europe',
    countries: [
      'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic',
      'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece',
      'Hungary', 'Iceland', 'Ireland', 'Italy', 'Latvia', 'Liechtenstein',
      'Lithuania', 'Luxembourg', 'Malta', 'Monaco', 'Netherlands', 'Norway',
      'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain',
      'Sweden', 'Switzerland', 'United Kingdom', 'Andorra', 'San Marino',
    ],
  },
  {
    region: 'Americas',
    countries: [
      'United States', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'Chile',
      'Peru', 'Colombia', 'Venezuela', 'Ecuador', 'Bolivia',
      'Costa Rica', 'Guatemala', 'Honduras', 'El Salvador', 'Panama',
      'Paraguay', 'Uruguay', 'Trinidad and Tobago', 'Puerto Rico (US)',
    ],
  },
  {
    region: 'Asia-Pacific',
    countries: [
      'Japan', 'South Korea', 'Australia', 'New Zealand', 'Hong Kong',
      'Indonesia', 'Malaysia', 'Philippines', 'Singapore', 'Thailand',
      'Turkey',
    ],
  },
  {
    region: 'Africa',
    countries: [
      'Tunisia', 'Senegal', 'Mali', 'Niger', 'Ivory Coast',
      'Guinea', 'Gabon', 'Republic of the Congo',
      'Democratic Republic of the Congo', 'Libya',
    ],
  },
  {
    region: 'Middle East & Gulf',
    countries: [
      'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Bahrain',
      'Kuwait', 'Oman', 'Jordan',
    ],
  },
];

/* ===================================================================
   VISA-ON-ARRIVAL COUNTRIES
   =================================================================== */

const visaOnArrivalCountries = [
  {
    region: 'Select Nationalities',
    countries: [
      'Hong Kong (SAR passport)',
      'Macau (SAR passport)',
    ],
    note: 'Morocco does not operate a broad visa-on-arrival program. Most travelers either qualify for visa-free entry (90 days) or must obtain a visa in advance from a Moroccan embassy. The entries above reflect limited arrangements that may apply to specific travel document types. Always confirm with the Moroccan embassy in your country before traveling.',
  },
];

/* ===================================================================
   COUNTRIES THAT NEED A VISA
   =================================================================== */

const visaRequiredRegions = [
  {
    region: 'South & Central Asia',
    examples: 'India, Pakistan, Bangladesh, Sri Lanka, Nepal, Afghanistan',
  },
  {
    region: 'East Asia',
    examples: 'China (mainland), Taiwan, Vietnam, Cambodia, Myanmar, Laos',
  },
  {
    region: 'Sub-Saharan Africa (most)',
    examples: 'Nigeria, Ghana, Kenya, Ethiopia, Tanzania, South Africa, Uganda',
  },
  {
    region: 'Eastern Europe (some)',
    examples: 'Russia, Ukraine, Belarus, Moldova',
  },
  {
    region: 'Middle East (some)',
    examples: 'Iran, Iraq, Syria, Yemen',
  },
  {
    region: 'Pacific Islands',
    examples: 'Fiji, Papua New Guinea, Samoa',
  },
];

/* ===================================================================
   ENTRY REQUIREMENTS
   =================================================================== */

const entryRequirements = [
  {
    item: 'Valid Passport',
    detail: 'Must be valid for at least 6 months beyond your planned date of departure from Morocco. Ensure you have at least two blank pages for entry and exit stamps.',
    icon: <FileCheck className="w-5 h-5" />,
  },
  {
    item: 'Return or Onward Ticket',
    detail: 'Immigration officers may ask for proof of a return flight or onward travel from Morocco. Have a printed or digital copy accessible. This is not always checked but is officially required.',
    icon: <Plane className="w-5 h-5" />,
  },
  {
    item: 'Proof of Accommodation',
    detail: 'A hotel booking confirmation, riad reservation, or a letter of invitation from a Moroccan resident. At minimum, have the name and address of your first night\'s stay ready.',
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    item: 'Sufficient Funds',
    detail: 'You may be asked to demonstrate you have enough money for your stay. There is no official minimum, but having access to the equivalent of 500-1,000 MAD per day is advisable. A credit card usually suffices.',
    icon: <Banknote className="w-5 h-5" />,
  },
  {
    item: 'Immigration Form',
    detail: 'A white arrival card is distributed on your flight or available at the immigration desk. Fill it out with your personal details, passport number, flight information, and address in Morocco before joining the queue.',
    icon: <Stamp className="w-5 h-5" />,
  },
];

/* ===================================================================
   REQUIRED DOCUMENTS CHECKLIST
   =================================================================== */

const documentsChecklist = [
  { doc: 'Passport (6+ months validity, 2+ blank pages)', essential: true },
  { doc: 'Completed immigration arrival card', essential: true },
  { doc: 'Return or onward flight ticket (printed or digital)', essential: true },
  { doc: 'Hotel / riad booking confirmation', essential: true },
  { doc: 'Travel insurance certificate (recommended)', essential: false },
  { doc: 'Proof of sufficient funds (bank card or cash)', essential: false },
  { doc: 'Passport-size photos (2 extra, for visa applicants)', essential: false },
  { doc: 'Vaccination certificates (if arriving from yellow fever zone)', essential: false },
  { doc: 'Invitation letter (if staying with a Moroccan resident)', essential: false },
  { doc: 'Doctor\'s letter for prescription medication', essential: false },
  { doc: 'Vehicle registration + insurance (if driving across border)', essential: false },
  { doc: 'Business invitation letter (for business travelers)', essential: false },
];

/* ===================================================================
   DUTY FREE ALLOWANCES
   =================================================================== */

const dutyFreeAllowances = [
  { item: 'Cigarettes', allowance: '200 cigarettes or 50 cigars or 250g tobacco' },
  { item: 'Alcohol', allowance: '1 liter of spirits and 1 liter of wine' },
  { item: 'Perfume', allowance: '150ml of perfume or 250ml of eau de toilette' },
  { item: 'Gifts', allowance: 'Goods up to 2,000 MAD in value' },
];

/* ===================================================================
   AIRPORT ARRIVAL STEPS
   =================================================================== */

const arrivalSteps = [
  {
    step: 1,
    title: 'Fill Out Immigration Card',
    description: 'Complete the white arrival card distributed on your flight or pick one up at the desks before the immigration queues. You need: full name, passport number, nationality, flight number, address in Morocco, and profession.',
  },
  {
    step: 2,
    title: 'Join Passport Control Queue',
    description: 'There are separate lines for Moroccan nationals and foreign passport holders. Peak times (multiple flight arrivals) can mean 30-60 minute waits. Off-peak is usually 5-15 minutes.',
  },
  {
    step: 3,
    title: 'Present Documents',
    description: 'Hand the officer your passport, completed immigration card, and have your accommodation booking and return ticket accessible if asked. The officer may ask basic questions about the purpose and length of your visit.',
  },
  {
    step: 4,
    title: 'Receive Entry Stamp',
    description: 'The officer stamps your passport with a 90-day entry permit (for visa-free nationals). This process typically takes 2-5 minutes per person. Keep the stamped page accessible -- hotels may need to see it.',
  },
  {
    step: 5,
    title: 'Collect Luggage',
    description: 'Proceed to the baggage carousel. Luggage carts are usually free. Check that your bags have arrived intact. Report any missing luggage at the airline desk in the arrivals area before exiting.',
  },
  {
    step: 6,
    title: 'Clear Customs',
    description: 'If you have nothing to declare, use the green channel. If carrying goods above duty-free limits, use the red channel. Random bag checks do occur. Have electronics receipts handy if carrying expensive equipment.',
  },
  {
    step: 7,
    title: 'Arrivals Hall',
    description: 'After customs, you enter the public arrivals hall. Here you will find currency exchange booths, ATMs, SIM card vendors (Maroc Telecom, Inwi, Orange), and transport options (taxis, shuttles, car rental desks).',
  },
  {
    step: 8,
    title: 'Get a SIM Card & Cash',
    description: 'Buy a prepaid SIM card at the airport (20-50 MAD with data). Withdraw cash from ATMs (better exchange rate than currency counters). Have your accommodation address ready for your taxi driver.',
  },
];

/* ===================================================================
   LAND BORDER CROSSINGS
   =================================================================== */

const landBorders = [
  {
    name: 'Tangier to Spain (Ferry)',
    route: 'Tangier Med or Tangier Ville to Algeciras or Tarifa (Spain)',
    duration: '35 minutes (Tarifa) to 2 hours (Algeciras)',
    notes: 'The most popular sea crossing. Ferries run multiple times daily. Book in advance during summer. Immigration is done on the boat. Take the fast ferry to Tarifa for the quickest crossing.',
    operators: 'FRS, Inter Shipping, Balearia, Trasmediterranea',
  },
  {
    name: 'Ceuta (Spanish Enclave)',
    route: 'Fnideq/Castillejos border crossing to Ceuta',
    duration: '15 minutes (crossing), but queue times vary wildly',
    notes: 'Ceuta is a Spanish territory on the Moroccan coast. The border can be very congested, especially on weekends and holidays. Expect long waits (sometimes 2-4 hours). The crossing is on foot or by vehicle. EU/Schengen rules apply in Ceuta.',
    operators: 'Walk across or drive (no ferry needed)',
  },
  {
    name: 'Melilla (Spanish Enclave)',
    route: 'Beni Enzar border crossing to Melilla',
    duration: '15-30 minutes crossing, but queues can be long',
    notes: 'Similar to Ceuta -- a Spanish territory on Moroccan soil. Less touristic than Ceuta. The Beni Enzar border crossing is the only access point. EU/Schengen rules apply inside Melilla.',
    operators: 'Walk across or drive',
  },
  {
    name: 'Tangier to Spain (Road + Ferry)',
    route: 'Drive to Tangier Med port, take vehicle ferry to Algeciras',
    duration: 'Ferry is about 90 minutes; total with check-in about 3-4 hours',
    notes: 'If you are driving a rental car, confirm with the rental company that you can take the vehicle to Spain (many do not allow this). You will need the vehicle registration document and a green card insurance certificate.',
    operators: 'FRS, Trasmediterranea, GNV',
  },
];

/* ===================================================================
   EMBASSIES
   =================================================================== */

const moroccanEmbassies = [
  { country: 'United States', city: 'Washington, D.C.', website: 'embassyofmorocco.us', phone: '+1-202-462-7979' },
  { country: 'United Kingdom', city: 'London', website: 'moroccanembassylondon.org.uk', phone: '+44-20-7581-5001' },
  { country: 'France', city: 'Paris', website: 'amb-maroc.fr', phone: '+33-1-45-20-69-35' },
  { country: 'Canada', city: 'Ottawa', website: 'ambamaroc.ca', phone: '+1-613-236-7391' },
  { country: 'Germany', city: 'Berlin', website: 'botschaft-marokko.de', phone: '+49-30-206-1240' },
  { country: 'Spain', city: 'Madrid', website: 'embajada-marruecos.es', phone: '+34-91-563-1090' },
  { country: 'Netherlands', city: 'The Hague', website: 'marocembassy.nl', phone: '+31-70-346-9617' },
  { country: 'Italy', city: 'Rome', website: 'ambasciatamarocco.it', phone: '+39-06-440-2524' },
  { country: 'Australia', city: 'Canberra', website: 'moroccoembassy.org.au', phone: '+61-2-6290-0755' },
  { country: 'Japan', city: 'Tokyo', website: 'morocco-emba.jp', phone: '+81-3-5485-7171' },
];

const foreignEmbassiesInRabat = [
  { country: 'United States', address: 'Km 5.7, Avenue Mohammed VI, Souissi', phone: '0537-637200', emergency: '0537-637200' },
  { country: 'United Kingdom', address: '28, Avenue S.A.R. Sidi Mohammed, Souissi', phone: '0537-633333', emergency: '0537-633333' },
  { country: 'France', address: '1, Rue Abou Obeida Ibn Al Jarrah, Agdal', phone: '0537-689700', emergency: '0537-689700' },
  { country: 'Canada', address: '66, Mehdi Ben Barka Avenue, Souissi', phone: '0537-544949', emergency: '0537-544949' },
  { country: 'Germany', address: '7, Zankat Madnine, Souissi', phone: '0537-218600', emergency: '0537-218600' },
  { country: 'Spain', address: '1, Rue Ain Khalouiya, Souissi', phone: '0537-633900', emergency: '0537-633900' },
  { country: 'Netherlands', address: '40, Rue de Tunis, Hassan', phone: '0537-219600', emergency: '0537-219600' },
  { country: 'Italy', address: '2, Zankat Idriss Al Azhar, Hassan', phone: '0537-219730', emergency: '0537-219730' },
  { country: 'Australia', address: 'Represented by Embassy in Paris', phone: 'N/A', emergency: 'N/A' },
];

/* ===================================================================
   OVERSTAY PENALTIES
   =================================================================== */

const overstayConsequences = [
  { severity: 'Mild (days)', consequence: 'Possible fine at departure (amounts vary, often 300-1,000 MAD). Questioning by border officers. Noted on your immigration file.' },
  { severity: 'Moderate (weeks)', consequence: 'Higher fine, potential detention for questioning, possible ban on re-entry for 1-5 years. You may be required to appear before an immigration judge.' },
  { severity: 'Severe (months+)', consequence: 'Deportation at your expense, formal ban from re-entering Morocco (up to 10 years), possible criminal charges. Arrest is possible if encountered by police during random document checks.' },
];

/* ===================================================================
   BUSINESS TRAVEL
   =================================================================== */

const businessEntryInfo = [
  {
    title: 'Short Business Visits (Visa-Free Nationals)',
    detail: 'Citizens of visa-free countries can conduct business meetings, attend conferences, negotiate contracts, and visit trade fairs under the standard 90-day visa-free entry. No separate business visa is required for short-term activities that do not constitute employment.',
  },
  {
    title: 'Working in Morocco',
    detail: 'If you plan to work (employed by a Moroccan company or establishing a business), you need a work permit and residence card (Carte de Sejour). Your employer in Morocco must sponsor the work permit application through ANAPEC (national employment agency). The process takes 4-8 weeks.',
  },
  {
    title: 'Business Visa (for Non-Exempt Nationals)',
    detail: 'If your nationality requires a visa, apply for a business visa at the Moroccan embassy. In addition to standard documents, provide an invitation letter from your Moroccan business partner, your company\'s registration certificate, and a letter from your employer stating the purpose of the trip.',
  },
  {
    title: 'Bringing Samples & Equipment',
    detail: 'Business travelers may temporarily import product samples and professional equipment duty-free using an ATA Carnet or a customs declaration at the port of entry. Declare all items on arrival and ensure you export them when leaving. Failure to re-export may result in customs duties.',
  },
];

/* ===================================================================
   TRAVEL INSURANCE REQUIREMENTS
   =================================================================== */

const insuranceTips = [
  { point: 'Morocco does not legally require travel insurance for most visitors, but it is strongly recommended and may be required for visa applicants.' },
  { point: 'Your policy should cover medical expenses (minimum 30,000 EUR / $35,000 USD recommended), emergency evacuation, repatriation, trip cancellation, and lost luggage.' },
  { point: 'Moroccan public hospitals are affordable but vary in quality. Private clinics in Casablanca, Rabat, and Marrakech offer excellent care but are expensive without insurance.' },
  { point: 'If you plan adventure activities (trekking, desert tours, surfing), confirm your policy covers these. Standard policies often exclude "adventure sports."' },
  { point: 'EU citizens: the European Health Insurance Card (EHIC) is NOT valid in Morocco. You need separate travel insurance.' },
  { point: 'Keep your insurance certificate, policy number, and emergency contact number accessible at all times. Save them on your phone and carry a printed copy.' },
];

/* ===================================================================
   FAQ DATA
   =================================================================== */

const faqs = [
  {
    q: 'Do Americans need a visa for Morocco?',
    a: 'No. US citizens can enter Morocco visa-free for up to 90 days. You only need a valid passport (6+ months validity) and a completed immigration arrival card.',
  },
  {
    q: 'Can I extend my 90-day stay in Morocco?',
    a: 'The 90-day period is not automatically renewable. You can apply for an extension at the Bureau des Etrangers (police prefecture) before your 90 days expire. Alternatively, some travelers exit to Spain and re-enter, though this is not officially guaranteed to reset your clock.',
  },
  {
    q: 'What happens if I overstay my visa in Morocco?',
    a: 'Overstaying can result in fines, detention, deportation at your expense, and a potential ban on future entry (1-10 years depending on severity). Always resolve your status before your authorized stay expires.',
  },
  {
    q: 'Is there an e-visa for Morocco?',
    a: 'As of 2025-2026, Morocco does not have an online e-visa system. Visa applications must be submitted in person (or by post where accepted) at a Moroccan embassy or consulate. The Moroccan government has discussed launching an e-visa platform but no date has been confirmed.',
  },
  {
    q: 'Can I bring a drone to Morocco?',
    a: 'Drones are effectively banned for tourists. They can be confiscated at customs on arrival. Authorization from the Moroccan Civil Aviation Authority is technically possible but impractical for visitors. Leave your drone at home.',
  },
  {
    q: 'Do I need a COVID test or vaccination to enter Morocco?',
    a: 'As of early 2025, Morocco has lifted all COVID-related entry restrictions. No PCR test, antigen test, vaccination certificate, or health declaration is required. However, requirements can change. Check the Moroccan Ministry of Health or your airline before traveling.',
  },
  {
    q: 'Can I work on a tourist visa in Morocco?',
    a: 'No. The 90-day visa-free entry does not permit employment. Remote work (digital nomads working for foreign employers) exists in a legal gray area -- there is no specific digital nomad visa. If you plan to work for a Moroccan company, you need a work permit.',
  },
  {
    q: 'What vaccinations do I need for Morocco?',
    a: 'No vaccinations are required for entry from most countries. However, hepatitis A, hepatitis B, typhoid, and tetanus are recommended by the WHO. If arriving from a country with yellow fever risk, you must show proof of yellow fever vaccination.',
  },
  {
    q: 'Can I enter Morocco with an Israeli passport stamp?',
    a: 'Yes. Morocco normalized relations with Israel in 2020. Israeli passport holders can visit Morocco, and there are direct flights between the two countries. Having an Israeli stamp in your passport will not cause issues at Moroccan immigration.',
  },
  {
    q: 'How many blank passport pages do I need?',
    a: 'You need at least two blank pages -- one for the entry stamp and one for the exit stamp. If your passport is nearly full, renew it before traveling.',
  },
  {
    q: 'Can I enter Morocco by land from Algeria?',
    a: 'No. The Morocco-Algeria land border has been closed since 1994. There is no way to cross between the two countries overland. Flights between Morocco and Algeria are available.',
  },
  {
    q: 'Do children need their own passport for Morocco?',
    a: 'Yes. Every traveler, including infants, must have their own valid passport. Children listed on a parent\'s passport is not sufficient. If a child is traveling with one parent, carry a notarized consent letter from the other parent.',
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function VisaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-marrakech.webp"
            alt="Moroccan airport and travel"
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
            <span className="text-white">Visa &amp; Entry</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Entry Requirements
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Visa &amp; Entry Requirements
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Morocco welcomes visitors from over 60 countries visa-free for up to 90 days. Find out if you need a visa, what to bring, what to expect at the border, and how to handle customs &mdash; updated for 2025-2026.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ============================================================
          OVERVIEW
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Overview
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco has a generous visa policy that allows citizens of the United States, European Union countries, the United Kingdom, Canada, Australia, Japan, and many other nations to enter visa-free for stays of up to 90 days. No advance application is required &mdash; you simply arrive, get your passport stamped, and begin your adventure.
            </p>
            <p>
              For those who do need a visa, the process is straightforward through Moroccan embassies and consulates abroad. Morocco does not currently offer an e-visa or visa-on-arrival for most nationalities. This guide covers everything: which countries qualify for visa-free entry, which need a visa, what documents to have ready, what happens at immigration step by step, how to extend your stay, customs rules for electronics, drones, medication, and currency, embassy directories, business travel procedures, travel insurance guidance, overstay penalties, and answers to frequently asked questions.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          VISA-FREE COUNTRIES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Globe className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Visa-Free Countries (90 Days)
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
            Citizens of the following countries can enter Morocco without a visa for up to 90 days. This list is current as of 2025 but visa policies can change &mdash; always verify with the nearest Moroccan embassy before traveling.
          </p>

          <div className="space-y-6">
            {visaFreeCountries.map((group) => (
              <div key={group.region} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
                  {group.region}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.countries.map((country) => (
                    <span
                      key={country}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-[var(--surface-muted)] text-[var(--text-secondary)] border border-[var(--border-light)]"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--text-secondary)]">
                This is not an exhaustive list. Over 60 countries enjoy visa-free access to Morocco. If your country is not listed here, check with the Moroccan embassy or consulate in your country for the most up-to-date information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marrakech Souk Image ── */}
      <section className="py-8 md:py-12">
        <div className="container-morocco max-w-4xl">
          <img src="/images/poster-marrakech-souk.webp" alt="Colorful Marrakech souk scene showcasing the vibrant markets that await visitors arriving in Morocco" loading="lazy" className="w-full rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ============================================================
          VISA-ON-ARRIVAL & E-VISA
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <MonitorSmartphone className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Visa-on-Arrival &amp; E-Visa Status
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Visa-on-Arrival</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Morocco does not operate a broad visa-on-arrival program for tourists. The vast majority of nationalities either enter visa-free (90 days) or must apply at a Moroccan embassy in advance. Limited arrangements may apply to specific passport types (such as certain SAR passport holders from Hong Kong and Macau).
              </p>
              <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Do not arrive in Morocco expecting to obtain a visa at the airport if your nationality requires one. You will be denied entry and placed on the next return flight at your own expense.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">E-Visa (Electronic Visa)</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                As of 2025-2026, Morocco does <strong className="text-[var(--text-primary)]">not</strong> have an online e-visa application system. All visa applications must be submitted through Moroccan embassies and consulates.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                The Moroccan government has discussed plans to implement an electronic visa platform to streamline the application process, particularly for business travelers and tourists from countries requiring visas. No official launch date has been announced. We will update this page as soon as an e-visa system becomes available.
              </p>
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Beware of unofficial websites claiming to offer Morocco e-visas. These are scams. The only legitimate way to obtain a Moroccan visa is through an official embassy or consulate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          COUNTRIES THAT NEED A VISA
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Stamp className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Countries That Need a Visa
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                If your country is not on the visa-free list, you will need to apply for a tourist visa at a Moroccan embassy or consulate before traveling. Visas are not available on arrival.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {visaRequiredRegions.map((region) => (
                  <div key={region.region} className="p-4 rounded-lg bg-[var(--surface-muted)] border border-[var(--border-light)]">
                    <h4 className="font-bold text-[var(--text-primary)] text-sm mb-1">{region.region}</h4>
                    <p className="text-xs text-[var(--text-secondary)]">{region.examples}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-[var(--text-primary)] mt-8">How to Apply for a Visa</h3>
              <ol className="space-y-3 list-decimal list-inside">
                <li>Locate the nearest <strong className="text-[var(--text-primary)]">Moroccan Embassy or Consulate</strong> in your country.</li>
                <li>Complete the <strong className="text-[var(--text-primary)]">visa application form</strong> (available at the embassy or downloadable from their website).</li>
                <li>Gather the required documents:
                  <ul className="ml-6 mt-2 space-y-1 list-disc">
                    <li>Valid passport (6+ months validity, at least 2 blank pages)</li>
                    <li>Two recent passport-sized photos (white background)</li>
                    <li>Proof of accommodation in Morocco</li>
                    <li>Return or onward flight booking</li>
                    <li>Bank statements showing sufficient funds (last 3 months)</li>
                    <li>Travel insurance certificate covering Morocco</li>
                    <li>Visa fee (varies by country, typically 25-80 USD equivalent)</li>
                  </ul>
                </li>
                <li>Submit your application in person or by post (depending on the embassy).</li>
                <li>Processing typically takes <strong className="text-[var(--text-primary)]">5-15 business days</strong>. Apply at least 4-6 weeks before travel.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          REQUIRED DOCUMENTS CHECKLIST
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Required Documents Checklist
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-6">
            Print this checklist or save it on your phone. Items marked as essential are required by immigration. Recommended items may be requested or are advisable for a smooth entry.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-3">
              {documentsChecklist.map((item) => (
                <div key={item.doc} className="flex items-start gap-3 py-2 border-b border-[var(--border-light)] last:border-0">
                  {item.essential ? (
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  ) : (
                    <CircleDot className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <span className="text-[var(--text-primary)] text-sm">{item.doc}</span>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.essential ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'}`}>
                    {item.essential ? 'Essential' : 'Recommended'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PASSPORT REQUIREMENTS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <FileCheck className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Passport Requirements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {entryRequirements.map((req) => (
              <div key={req.item} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {req.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{req.item}</h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{req.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Passport Validity &amp; Blank Pages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-[var(--surface-muted)] border border-[var(--border-light)] text-center">
                <p className="text-3xl font-bold text-[var(--color-primary)] mb-2">6+</p>
                <p className="text-sm text-[var(--text-secondary)]">Months validity beyond your departure date from Morocco</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--surface-muted)] border border-[var(--border-light)] text-center">
                <p className="text-3xl font-bold text-[var(--color-primary)] mb-2">2+</p>
                <p className="text-sm text-[var(--text-secondary)]">Blank pages required for entry and exit stamps</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--surface-muted)] border border-[var(--border-light)] text-center">
                <p className="text-3xl font-bold text-[var(--color-primary)] mb-2">90</p>
                <p className="text-sm text-[var(--text-secondary)]">Maximum days of visa-free stay per entry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          AIRPORT ARRIVAL PROCESS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Plane className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Airport Arrival: Step by Step
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
            Here is exactly what to expect when you land in Morocco, whether you arrive at Mohammed V (Casablanca), Marrakech Menara, Fes-Saiss, Tangier Ibn Battouta, or Agadir Al Massira.
          </p>

          <div className="space-y-4">
            {arrivalSteps.map((s) => (
              <div key={s.step} className="card-moroccan p-5 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-moroccan flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">{s.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Entry &amp; Exit Stamps</h3>
            <div className="space-y-3 text-[var(--text-secondary)] text-sm leading-relaxed">
              <p>
                When entering Morocco, the immigration officer stamps your passport with a dated entry stamp indicating a 90-day authorized stay. On departure, you receive an exit stamp. Both stamps are placed on blank visa pages in your passport.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Keep track of your stamps.</strong> Hotels and riads may photograph your passport page showing the entry stamp as part of their check-in process (required by Moroccan law for reporting foreign guests). If your entry stamp is illegible or missing, this can cause complications. Ask the immigration officer to stamp clearly.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">No exit card required.</strong> Unlike some countries, Morocco does not require an exit card or departure form. Simply proceed through passport control with your passport on departure day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          EXTENDING YOUR STAY
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Clock className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Extending Your Stay
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                The standard 90-day visa-free period cannot be officially &quot;renewed&quot; within Morocco. However, there are options if you wish to stay longer.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="p-4 rounded-lg bg-[var(--surface-muted)] border border-[var(--border-light)]">
                  <h3 className="font-bold text-[var(--text-primary)] mb-2">Extension at Police Prefecture</h3>
                  <p className="text-sm">
                    Before your 90 days expire, visit the <strong>Bureau des Etrangers</strong> (Foreigners&apos; Office) at the nearest police prefecture. Bring your passport, passport photos, proof of accommodation, proof of funds (bank statements), and a letter explaining why you need to extend. Extensions are granted at the discretion of local authorities and are not guaranteed. The process can take several days to weeks. Start this process at least 2 weeks before your 90 days expire.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[var(--surface-muted)] border border-[var(--border-light)]">
                  <h3 className="font-bold text-[var(--text-primary)] mb-2">Border Exit &amp; Re-Entry</h3>
                  <p className="text-sm">
                    Some travelers exit Morocco (commonly to Spain via ferry from Tangier to Algeciras or Tarifa, or to the Spanish enclaves of Ceuta or Melilla) and re-enter to reset their 90-day clock. While this has worked for many, immigration officers may question frequent exits and re-entries. There is no official rule on how long you must stay outside Morocco, but at least a few days is advisable. This is not an officially sanctioned method and carries some risk.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[var(--surface-muted)] border border-[var(--border-light)] mt-4">
                <h3 className="font-bold text-[var(--text-primary)] mb-2">Long-Stay Options</h3>
                <p className="text-sm">
                  If you plan to stay longer than 90 days regularly (digital nomads, retirees, students), consider applying for a <strong>Carte de Sejour</strong> (residence permit). Requirements include proof of income or employment, accommodation in Morocco, health insurance, and a clean criminal record. The application is made at the local police prefecture. Processing takes 2-4 weeks. A residence permit is typically issued for 1 year and is renewable.
                </p>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Overstaying is taken seriously.</strong> Exceeding your 90-day stay without authorization can result in fines, detention, deportation, and being banned from future entry to Morocco. Always address your visa situation before your time expires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          OVERSTAY PENALTIES
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Scale className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Overstay Penalties
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Morocco enforces its immigration laws. If you exceed your authorized stay, the consequences escalate with the length of the overstay.
            </p>
            <div className="space-y-4">
              {overstayConsequences.map((item) => (
                <div key={item.severity} className="flex gap-4 p-4 rounded-lg bg-[var(--surface-muted)] border border-[var(--border-light)]">
                  <div className="flex-shrink-0">
                    <CircleAlert className="w-5 h-5 text-red-500 mt-0.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)] text-sm mb-1">{item.severity}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{item.consequence}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)]">Bottom line:</strong> Never overstay. If you realize your 90 days are approaching and you cannot leave, visit the Bureau des Etrangers immediately. It is always better to request an extension (even if denied) than to overstay without any attempt to regularize your status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CUSTOMS: WHAT YOU CAN & CANNOT BRING
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Package className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Customs Declarations &amp; What You Can Bring
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Duty-Free Allowances</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border-light)]">
                      <th className="text-left py-2 font-semibold text-[var(--text-primary)]">Item</th>
                      <th className="text-left py-2 font-semibold text-[var(--text-primary)]">Duty-Free Allowance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dutyFreeAllowances.map((item) => (
                      <tr key={item.item} className="border-b border-[var(--border-light)] last:border-0">
                        <td className="py-2 font-medium text-[var(--text-primary)]">{item.item}</td>
                        <td className="py-2 text-[var(--text-secondary)]">{item.allowance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Currency Import/Export Limits</h3>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <Banknote className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--text-primary)]">Foreign currency:</strong> There is no limit on importing foreign currency, but amounts exceeding the equivalent of 100,000 MAD must be declared on arrival using the official customs form.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--text-primary)]">Dirham export limit:</strong> You may not take more than 2,000 MAD out of Morocco. The Dirham is a restricted currency. Convert excess dirhams at a bank or exchange bureau before departing -- you will need to show your original exchange receipts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--text-primary)]">Tip:</strong> Keep your currency exchange receipts. You may need them to reconvert dirhams at the airport, and customs may ask for them when declaring foreign currency on departure.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ELECTRONICS, DRONES, MEDICATION
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Smartphone className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Electronics, Drones &amp; Medication
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Smartphone className="w-5 h-5 text-[var(--color-primary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Electronics</h3>
              </div>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Personal laptops, tablets, and phones are fine. No special declaration needed for 1 of each.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Cameras and photography equipment are permitted. Professional-grade gear may attract questions -- carry a letter explaining it is for personal use.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>If bringing multiple expensive electronics (for business), carry receipts and consider declaring them to avoid issues on departure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Morocco uses Type C and Type E electrical outlets (European-style, 220V). Bring an adapter.</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Camera className="w-5 h-5 text-[var(--color-primary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Drones</h3>
              </div>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Drones are effectively banned for tourists.</strong> Flying a drone in Morocco without authorization is illegal and drones can be confiscated at customs on arrival.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Authorization requires advance permission from the Moroccan Civil Aviation Authority (Direction Generale de l&apos;Aviation Civile) and is extremely difficult to obtain for tourists.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>If your drone is confiscated at customs, it is held until departure. You receive a receipt and collect it when you leave the country. This process is not always smooth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  <span><strong>Recommendation:</strong> Leave your drone at home. The risk of confiscation is very high and the authorization process is impractical for tourists.</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Pill className="w-5 h-5 text-[var(--color-primary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Medication</h3>
              </div>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Bring prescription medications in their original packaging with your name on the label.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Carry a doctor&apos;s letter (ideally in French or English) listing your medications and why you need them.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Controlled substances:</strong> Some medications legal in your country may be restricted in Morocco, particularly opioids, amphetamines (including some ADHD medications), and strong sedatives. Check with the Moroccan embassy before traveling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Moroccan pharmacies are well-stocked and can provide many common medications without prescription. Look for the green cross sign.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROHIBITED ITEMS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <CircleAlert className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Prohibited &amp; Restricted Items
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-red-600 mb-3">Strictly Prohibited</h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    All recreational drugs (including cannabis, despite local production)
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    Firearms and ammunition (without special license)
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    Pornographic material
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    Material deemed offensive to Islam or the Moroccan monarchy
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    Counterfeit goods
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-amber-600 mb-3">Restricted (Require Authorization)</h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    Drones (advance authorization from aviation authority required)
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    Satellite phones and radio transmitters
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    Controlled prescription medications (carry doctor&apos;s letter)
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    Professional broadcasting/filming equipment (media permit needed)
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    GPS equipment (technically restricted but personal devices are fine in practice)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BUSINESS TRAVEL
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Briefcase className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Business Travel &amp; Special Entry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessEntryInfo.map((info) => (
              <div key={info.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{info.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{info.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 card-moroccan p-6">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Conference &amp; Event Entry</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
              Morocco hosts numerous international conferences and trade events (COP summits, Africa investment forums, tech conferences). If attending as a delegate from a visa-requiring country, the event organizer can often facilitate a streamlined visa process by providing official invitation letters and coordinating with the Moroccan foreign ministry. Contact the event organizer well in advance for visa support documentation.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          TRAVEL INSURANCE
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Heart className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Travel Insurance Requirements
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {insuranceTips.map((tip, index) => (
                <div key={index} className="flex gap-3 py-3 border-b border-[var(--border-light)] last:border-0">
                  <ShieldCheck className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{tip.point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          COVID-ERA ENTRY REQUIREMENTS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              COVID-Era Entry Requirements (Current Status)
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 p-3 rounded-lg bg-green-100 dark:bg-green-900/20">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">All COVID Restrictions Lifted</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  As of 2025, Morocco has removed all COVID-19 related entry requirements. Travelers no longer need to present PCR tests, antigen tests, vaccination certificates, or health declaration forms. The Moroccan health pass (pass vaccinal) is no longer checked at borders or at venues.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-[var(--surface-muted)] border border-[var(--border-light)]">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)]">Note:</strong> Health entry requirements can be reintroduced at short notice in response to new health emergencies. Before traveling, check the Moroccan Ministry of Health website and your airline&apos;s travel requirements page for the latest information. It is always prudent to have proof of vaccination accessible in case requirements change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          LAND BORDER CROSSINGS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Ship className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Land &amp; Sea Border Crossings
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
            Morocco&apos;s only accessible international borders are with Spain (by ferry or through the Spanish enclaves of Ceuta and Melilla). The border with Algeria has been closed since 1994. The Mauritanian border at Guerguerat is open but remote and mainly used by overland travelers heading to West Africa.
          </p>

          <div className="space-y-4">
            {landBorders.map((border) => (
              <div key={border.name} className="card-moroccan p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-[var(--text-primary)] mb-1">{border.name}</h3>
                    <p className="text-sm text-[var(--color-primary)] font-medium mb-2">{border.route}</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{border.notes}</p>
                    <div className="flex flex-col sm:flex-row gap-4 text-xs text-[var(--text-secondary)]">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        <span>{border.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Ship className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        <span>{border.operators}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm text-[var(--text-secondary)]">
                <p className="mb-2">
                  <strong className="text-[var(--text-primary)]">Algeria border:</strong> The Morocco-Algeria land border has been closed since 1994. There is no way to cross between the two countries by land. Flights between Morocco and Algeria are available.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">Mauritania border (Guerguerat):</strong> Open but very remote. Used primarily by overland travelers heading to Senegal and West Africa. The road through Western Sahara is long and services are sparse. A 4x4 is not required but recommended. You will need a Mauritanian visa arranged in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          EMBASSY DIRECTORY
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Building2 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Embassy &amp; Consulate Directory
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Moroccan Embassies Abroad</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                For visa applications and consular services before your trip.
              </p>
              <div className="space-y-3">
                {moroccanEmbassies.map((embassy) => (
                  <div key={embassy.country} className="flex items-center justify-between p-3 rounded-lg bg-[var(--surface-muted)]">
                    <div>
                      <p className="font-semibold text-sm text-[var(--text-primary)]">{embassy.country}</p>
                      <p className="text-xs text-[var(--text-secondary)]">{embassy.city}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[var(--color-primary)] block">{embassy.website}</span>
                      <span className="text-xs text-[var(--text-muted)]">{embassy.phone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Foreign Embassies in Rabat</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                For consular assistance during your stay in Morocco. All major embassies are located in the Souissi or Hassan districts of Rabat.
              </p>
              <div className="space-y-3">
                {foreignEmbassiesInRabat.map((embassy) => (
                  <div key={embassy.country} className="p-3 rounded-lg bg-[var(--surface-muted)]">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-sm text-[var(--text-primary)]">{embassy.country}</p>
                      <span className="text-xs text-[var(--color-primary)] font-medium">{embassy.phone}</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">{embassy.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ SECTION
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <HelpCircle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed ml-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Planning Guides */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            Plan the Rest of Your Trip
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/morocco-airports-guide', title: 'Airports Guide', desc: 'Find your arrival airport, terminals, and transfer options.' },
              { href: '/morocco-travel-insurance', title: 'Travel Insurance', desc: 'Compare 6 insurance providers for Morocco coverage.' },
              { href: '/morocco-safety-tips', title: 'Safety Tips', desc: 'Practical safety advice for your Morocco trip.' },
              { href: '/morocco-weather-monthly', title: 'Weather Guide', desc: 'Month-by-month climate to choose the best travel dates.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Plan Your Trip?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Now that you know the entry requirements, dive into our practical tips and planning tools to make your Morocco trip unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Trip Planner
            </Link>
            <Link
              href="/safety"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <ShieldCheck className="w-4 h-4" /> Safety Guide
            </Link>
            <Link
              href="/solo-travel"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Solo Travel Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
