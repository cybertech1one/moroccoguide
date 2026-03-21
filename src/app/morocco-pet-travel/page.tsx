import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Heart,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Building,
  Award,
  BookOpen,
  Phone,
  FileText,
  Syringe,
  Dog,
  Stethoscope,
  Plane,
  HelpCircle,
  Globe,
  Thermometer,
  CalendarCheck,
  ClipboardList,
  BriefcaseMedical,
  CircleDot,
  Bed,
  Navigation,
  MessageCircle,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Pet Travel Guide 2026 | Import Requirements, Pet-Friendly Hotels & Tips',
  description:
    'Complete guide to traveling with pets to Morocco. Rabies vaccination, microchip, ONSSA health certificate requirements, pet-friendly hotels, veterinary clinics, airline policies, and cultural tips for bringing your dog or cat to Morocco.',
  keywords: [
    'morocco pet travel',
    'traveling with dog morocco',
    'morocco pet import requirements',
    'pet friendly morocco',
    'bring dog to morocco',
    'morocco pet health certificate',
    'ONSSA pet import',
    'pet friendly hotels morocco',
    'morocco veterinary clinics',
    'morocco rabies certificate',
    'flying with pet to morocco',
    'morocco pet quarantine',
    'morocco cat travel',
    'pet friendly riads marrakech',
    'morocco pet vaccination requirements',
    'morocco stray dogs',
    'morocco pet customs',
    'morocco pet microchip',
    'morocco pet airline policy',
    'morocco pet travel tips 2026',
  ],
  openGraph: {
    title: 'Morocco Pet Travel Guide 2026 | Import Requirements, Pet-Friendly Hotels & Tips',
    description:
      'Everything you need to bring your dog or cat to Morocco. Official ONSSA import requirements, pet-friendly accommodations, vet clinics, airline rules, and cultural advice.',
    url: `${BASE_URL}/morocco-pet-travel`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Traveler with dog exploring a Moroccan coastal town with traditional architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Pet Travel Guide 2026 | Requirements & Pet-Friendly Places',
    description:
      'Complete guide to pet travel in Morocco: import paperwork, vaccinations, microchip rules, pet-friendly hotels, vet clinics, and tips for a smooth trip with your dog or cat.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-pet-travel` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-pet-travel`,
  name: 'Morocco Pet Travel Guide 2026 | Import Requirements, Pet-Friendly Hotels & Tips',
  description:
    'Complete guide to traveling with pets to Morocco. Rabies vaccination, microchip, ONSSA health certificate requirements, pet-friendly hotels, veterinary clinics, airline policies, and cultural tips.',
  url: `${BASE_URL}/morocco-pet-travel`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-pet-travel`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Pet Travel Guide', item: `${BASE_URL}/morocco-pet-travel` },
    ],
  },
};

const faqItems = [
  {
    question: 'Do I need a pet passport to bring my dog to Morocco?',
    answer:
      'Morocco does not accept the EU pet passport as a standalone document. You need a valid rabies vaccination certificate (administered at least 30 days before travel and no more than 12 months prior), an ISO 15-digit microchip, and an official veterinary health certificate issued within 10 days of departure. Some countries also require an ONSSA import permit obtained in advance from Morocco\'s food safety authority.',
  },
  {
    question: 'Is there a quarantine period for pets entering Morocco?',
    answer:
      'Morocco does not impose a mandatory quarantine for dogs and cats arriving with valid documentation. If your paperwork is incomplete or the rabies vaccination timing is outside the accepted window, customs officials may hold your animal at the port of entry until the situation is resolved. Keeping all documents organized and accessible prevents delays.',
  },
  {
    question: 'Which airlines allow pets on flights to Morocco?',
    answer:
      'Royal Air Maroc accepts small pets in the cabin (up to 10 kg including carrier) and larger animals in the pressurized cargo hold. Air France, Transavia, and Ryanair also serve Moroccan airports with varying pet policies. Most low-cost carriers do not allow cabin pets. Book your pet\'s spot at least 48 hours before departure, as each flight has limited pet capacity.',
  },
  {
    question: 'Are dogs allowed in Moroccan hotels and riads?',
    answer:
      'Most traditional riads and budget hotels do not accept pets. However, international hotel chains like Sofitel, Four Seasons, and select boutique properties in Marrakech, Essaouira, and Agadir welcome dogs with advance notice. Vacation rentals through Airbnb and Booking.com often have pet-friendly filters. Always confirm the pet policy before booking and expect a cleaning surcharge of from 150 MAD to 500 MAD.',
  },
  {
    question: 'What is the cultural attitude toward dogs in Morocco?',
    answer:
      'Moroccan culture has a complex relationship with dogs. In Islam, dogs are considered ritually unclean (najis), which means many Moroccans avoid physical contact with them. However, guard dogs and working dogs are common in rural areas. Cats, on the other hand, are highly regarded and well cared for throughout the country. Keep your dog leashed in public, avoid bringing them into mosques or food markets, and be respectful of locals who prefer distance from dogs.',
  },
  {
    question: 'Can I find a veterinarian easily in Morocco?',
    answer:
      'Major cities like Casablanca, Rabat, Marrakech, and Tangier have well-equipped veterinary clinics with French- and sometimes English-speaking vets. Rural areas have far fewer options. The Moroccan veterinary association (Ordre National des Vétérinaires) maintains a directory. Expect consultation fees of from 200 MAD to 500 MAD. Carry a basic pet first-aid kit for travel outside urban areas.',
  },
  {
    question: 'What vaccines does my pet need for Morocco beyond rabies?',
    answer:
      'Rabies is the only legally required vaccination for entry. However, vets strongly recommend your dog be current on distemper, parvovirus, hepatitis, and leptospirosis. For cats, feline calicivirus and panleukopenia are advisable. Leishmaniasis is present in Morocco via sandfly bites, so discuss preventive treatments (like Scalibor collars or miltefosine) with your vet before departure. Tick and flea prevention is essential year-round.',
  },
] as const;

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

/* ═══════════════════════════════════════════════════════════════
   DATA: IMPORT REQUIREMENTS CHECKLIST
   ═══════════════════════════════════════════════════════════════ */

const importRequirements = [
  {
    step: 1,
    title: 'ISO Microchip',
    icon: CircleDot,
    deadline: 'Before vaccination',
    detail:
      'Your pet must be implanted with an ISO 11784/11785 compliant 15-digit microchip. The chip must be readable by a universal scanner. If your country uses a different microchip standard (common in the US with 10-digit AVID chips), bring your own scanner or have a 15-digit chip implanted alongside it.',
  },
  {
    step: 2,
    title: 'Rabies Vaccination',
    icon: Syringe,
    deadline: '30 days to 12 months before travel',
    detail:
      'Administer the rabies vaccine at least 30 days before your departure date. The vaccine must not be older than 12 months (or match the manufacturer\'s recommended validity period). Your vet records the microchip number on the vaccination certificate. Puppies and kittens must be at least 12 weeks old at the time of vaccination.',
  },
  {
    step: 3,
    title: 'Veterinary Health Certificate',
    icon: FileText,
    deadline: 'Within 10 days of departure',
    detail:
      'Obtain an official health certificate from a licensed and government-accredited veterinarian. The certificate must confirm your pet is healthy, free from signs of infectious disease, and current on rabies vaccination. In the US, this is the USDA-endorsed APHIS Form 7001. EU travelers use the Annex IV health certificate.',
  },
  {
    step: 4,
    title: 'ONSSA Import Permit',
    icon: ShieldCheck,
    deadline: '2-4 weeks before travel',
    detail:
      'Contact the Office National de Sécurité Sanitaire des Produits Alimentaires (ONSSA) to obtain an import permit for your pet. This is Morocco\'s food safety and animal health authority. Email the regional ONSSA office near your Moroccan entry point. Include copies of the vaccination certificate, microchip documentation, and your travel itinerary. Processing takes 5-15 business days.',
  },
  {
    step: 5,
    title: 'Government Endorsement',
    icon: Award,
    deadline: 'After health certificate, before departure',
    detail:
      'In many countries, your health certificate must be endorsed by a national veterinary authority. US travelers submit to USDA APHIS for endorsement. UK travelers use APHA. EU travelers get endorsement from the Official Veterinarian. This step certifies that the document meets international standards. Some endorsements can be done electronically via the VEHCS system.',
  },
  {
    step: 6,
    title: 'Arrival & Customs Clearance',
    icon: Plane,
    deadline: 'At port of entry',
    detail:
      'Upon arrival at a Moroccan airport or seaport, present all documents to customs and the veterinary inspection service. Officials will scan the microchip, review the rabies certificate dates, and verify the health certificate. Keep originals in a clear folder, not buried in checked luggage. Processing typically takes 20-45 minutes.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: AIRLINE PET POLICIES
   ═══════════════════════════════════════════════════════════════ */

const airlinePolicies = [
  {
    airline: 'Royal Air Maroc',
    cabin: true,
    cargo: true,
    cabinWeight: '10 kg (pet + carrier)',
    fee: 'From 500 MAD (cabin), from 1,200 MAD (cargo)',
    notes: 'Book pet spot at least 48 hours in advance. Soft-sided carriers required for cabin. Maximum 2 pets per flight in cabin.',
  },
  {
    airline: 'Air France',
    cabin: true,
    cargo: true,
    cabinWeight: '8 kg (pet + carrier)',
    fee: 'From 700 MAD (cabin), from 1,500 MAD (cargo)',
    notes: 'Cabin pets limited to dogs and cats. Carrier must fit under seat (46 x 28 x 24 cm). Online booking available.',
  },
  {
    airline: 'Transavia',
    cabin: false,
    cargo: true,
    cabinWeight: 'N/A',
    fee: 'From 400 MAD (cargo only)',
    notes: 'No cabin pets on any route. Cargo transport only through partner services. Weight limit 75 kg including crate.',
  },
  {
    airline: 'Ryanair',
    cabin: false,
    cargo: false,
    cabinWeight: 'N/A',
    fee: 'N/A',
    notes: 'No pets allowed except registered assistance dogs. Consider alternative carriers if flying budget to Morocco.',
  },
  {
    airline: 'TUI fly',
    cabin: false,
    cargo: true,
    cabinWeight: 'N/A',
    fee: 'From 600 MAD (cargo)',
    notes: 'Cargo pets accepted on select routes to Marrakech, Agadir, and Nador. Must book through customer service by phone.',
  },
  {
    airline: 'Iberia',
    cabin: true,
    cargo: true,
    cabinWeight: '8 kg (pet + carrier)',
    fee: 'From 550 MAD (cabin), from 1,300 MAD (cargo)',
    notes: 'Flights via Madrid to Casablanca and Marrakech. Cabin carrier max 45 x 35 x 25 cm. Book via call center.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PET-FRIENDLY ACCOMMODATIONS
   ═══════════════════════════════════════════════════════════════ */

const petFriendlyHotels = [
  {
    name: 'Sofitel Marrakech Lounge & Spa',
    city: 'Marrakech',
    type: 'Luxury Hotel',
    petFee: 'From 300 MAD/night surcharge',
    policy: 'Dogs under 15 kg welcome. Pet bed and bowls provided. Must not be left unattended in room.',
  },
  {
    name: 'Four Seasons Resort Marrakech',
    city: 'Marrakech',
    type: 'Luxury Resort',
    petFee: 'From 500 MAD/night surcharge',
    policy: 'Dogs of any size accepted with advance notice. Dedicated pet concierge service. Pet menu available through room service.',
  },
  {
    name: 'Hyatt Regency Casablanca',
    city: 'Casablanca',
    type: 'Business Hotel',
    petFee: 'From 250 MAD/night surcharge',
    policy: 'Small pets under 10 kg. Maximum one pet per room. Pet relief area on ground floor garden.',
  },
  {
    name: 'Heure Bleue Palais',
    city: 'Essaouira',
    type: 'Boutique Hotel',
    petFee: 'From 200 MAD/night surcharge',
    policy: 'Small dogs and cats accepted. Rooftop terrace available for pets. Prior arrangement required.',
  },
  {
    name: 'Hilton Tangier Al Houara Resort',
    city: 'Tangier',
    type: 'Beach Resort',
    petFee: 'From 350 MAD/night surcharge',
    policy: 'Dogs welcome in garden-view rooms. Beach access for leashed dogs during off-peak hours. Pet sitting available.',
  },
  {
    name: 'Atlas Medina & Spa',
    city: 'Fes',
    type: 'Mid-Range Hotel',
    petFee: 'From 150 MAD/night surcharge',
    policy: 'Small pets accepted on request. Limited to ground floor rooms. Pet deposit of 500 MAD refundable upon checkout.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: VETERINARY CLINICS
   ═══════════════════════════════════════════════════════════════ */

const vetClinics = [
  {
    name: 'Clinique Vétérinaire de Casablanca',
    city: 'Casablanca',
    address: 'Bd Zerktouni, Casablanca',
    phone: '+212 522 27 XX XX',
    hours: 'Mon-Sat 9:00-18:00',
    languages: 'French, Arabic, English',
    services: 'Emergency care, surgery, vaccinations, dental, boarding',
  },
  {
    name: 'Cabinet Vétérinaire Marrakech',
    city: 'Marrakech',
    address: 'Avenue Mohammed V, Guéliz',
    phone: '+212 524 43 XX XX',
    hours: 'Mon-Fri 9:00-17:00, Sat 9:00-13:00',
    languages: 'French, Arabic',
    services: 'General practice, vaccinations, microchipping, X-ray',
  },
  {
    name: 'SOS Vétérinaire Rabat',
    city: 'Rabat',
    address: 'Avenue Hassan II, Agdal',
    phone: '+212 537 77 XX XX',
    hours: '24/7 emergency line',
    languages: 'French, Arabic, English',
    services: 'Emergency care, ICU, surgery, lab diagnostics',
  },
  {
    name: 'Clinique Vétérinaire Tanger',
    city: 'Tangier',
    address: 'Rue de Belgique, Tangier',
    phone: '+212 539 32 XX XX',
    hours: 'Mon-Sat 8:30-18:30',
    languages: 'French, Spanish, Arabic',
    services: 'General practice, travel certificates, vaccinations, pharmacy',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  { title: 'Morocco Visa Guide', href: '/morocco-visa-guide', icon: FileText },
  { title: 'First-Time Visitor Guide', href: '/morocco-first-time', icon: BookOpen },
  { title: 'Health & Safety in Morocco', href: '/morocco-health-safety', icon: ShieldCheck },
  { title: 'Morocco Transportation Guide', href: '/morocco-transport', icon: Navigation },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoPetTravelPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* ── JSON-LD ─────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGuide) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── HERO SECTION ────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-morocco.webp"
          alt="Moroccan coastal town with blue and white buildings, ideal for pet-friendly travel"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#C4960C] font-semibold text-sm tracking-widest uppercase mb-3 font-[family-name:var(--font-heading)]">
            Pet Travel Guide 2026
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-display)]">
            Traveling to Morocco with Pets
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            Import requirements, pet-friendly hotels, airline policies, and everything
            you need to bring your dog or cat to Morocco safely.
          </p>
        </div>
      </section>

      {/* ── BREADCRUMBS ─────────────────────────────────────── */}
      <nav
        className="container-morocco py-4"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center gap-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
          <li>
            <Link href="/" className="hover:text-[#A0522D] flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
          </li>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <li className="text-[#A0522D] font-medium">Morocco Pet Travel Guide</li>
        </ol>
      </nav>

      {/* ── INTRODUCTION ────────────────────────────────────── */}
      <section className="container-morocco py-10">
        <div className="max-w-4xl mx-auto">
          <div className="card-moroccan p-6 md:p-8">
            <div className="flex items-start gap-3 mb-4">
              <Dog className="w-7 h-7 text-[#A0522D] mt-1 shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
                Can You Bring Your Pet to Morocco?
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
              <p>
                Yes. Morocco allows the import of dogs, cats, and certain other domestic animals, provided
                you complete the required paperwork. The process involves a microchip, a rabies vaccination
                given within specific timeframes, a government-endorsed health certificate, and clearance
                from ONSSA (Morocco&apos;s food safety and animal health authority).
              </p>
              <p>
                The biggest hurdles are timing and documentation. Start the process at least 6 weeks before
                your trip. Missing a single document can result in your pet being denied entry or held at
                the airport until the issue is resolved. This guide walks you through each step, covers
                airline rules, lists pet-friendly hotels, and addresses the cultural realities of traveling
                with a pet in a country where attitudes toward animals differ from Western norms.
              </p>
              <div className="bg-amber-50 border-l-4 border-[#C4960C] p-4 rounded-r-lg mt-4">
                <div className="flex gap-2 items-start">
                  <AlertTriangle className="w-5 h-5 text-[#C4960C] mt-0.5 shrink-0" />
                  <p className="text-sm text-amber-900">
                    <strong>Important:</strong> Import regulations can change. Verify current requirements
                    with ONSSA (<a href="https://www.onssa.gov.ma" target="_blank" rel="noopener noreferrer"
                    className="underline hover:text-[#A0522D]">onssa.gov.ma</a>) and your country&apos;s
                    veterinary export authority before booking flights. This guide reflects rules as of
                    March 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPORT REQUIREMENTS CHECKLIST ────────────────────── */}
      <section className="container-morocco py-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)]">
              Pet Import Requirements: Step-by-Step
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Follow these six steps in order. Skipping or reordering them can invalidate your
              paperwork and delay entry.
            </p>
          </div>

          <div className="space-y-5">
            {importRequirements.map((req) => (
              <div key={req.step} className="card-moroccan p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                    <req.icon className="w-6 h-6 text-[#A0522D]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-[#A0522D] bg-[#A0522D]/10 px-2 py-0.5 rounded-full font-[family-name:var(--font-heading)]">
                        Step {req.step}
                      </span>
                      <span className="text-xs text-gray-500 font-[family-name:var(--font-heading)]">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {req.deadline}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)]">
                      {req.title}
                    </h3>
                    <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
                      {req.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick reference box */}
          <div className="zellige-border mt-8 p-5 md:p-6 bg-white rounded-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)] flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-[#A0522D]" />
              Quick Document Checklist
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 font-[family-name:var(--font-heading)] text-sm">
              {[
                'ISO 15-digit microchip (implanted before vaccination)',
                'Rabies vaccination certificate (30 days - 12 months)',
                'Official veterinary health certificate (within 10 days)',
                'ONSSA import permit (apply 2-4 weeks ahead)',
                'Government endorsement (USDA/APHA/EU Official Vet)',
                'Pet photos and description (breed, color, weight)',
                'Original vaccination booklet (all vaccinations)',
                'Carrier/crate compliant with IATA standards',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 py-1">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AIRLINE POLICIES ─────────────────────────────────── */}
      <section className="container-morocco py-10 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)]">
              Airline Pet Policies for Morocco
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Each airline has different rules for cabin pets, cargo transport, carrier dimensions,
              and fees. Confirm directly with the airline before booking.
            </p>
          </div>

          <div className="space-y-4">
            {airlinePolicies.map((airline, idx) => (
              <div key={idx} className="card-moroccan p-5">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)] flex items-center gap-2">
                      <Plane className="w-5 h-5 text-[#A0522D]" />
                      {airline.airline}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3 text-sm font-[family-name:var(--font-heading)]">
                      <div>
                        <span className="text-gray-500 block text-xs uppercase">Cabin</span>
                        <span className={airline.cabin ? 'text-green-700 font-semibold' : 'text-red-600 font-semibold'}>
                          {airline.cabin ? 'Allowed' : 'Not Allowed'}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-xs uppercase">Cargo</span>
                        <span className={airline.cargo ? 'text-green-700 font-semibold' : 'text-red-600 font-semibold'}>
                          {airline.cargo ? 'Available' : 'Not Available'}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-xs uppercase">Cabin Weight</span>
                        <span className="text-gray-800 font-medium">{airline.cabinWeight}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                      <DollarSign className="w-3.5 h-3.5 inline text-[#C4960C] mr-1" />
                      <strong>Fees:</strong> {airline.fee}
                    </p>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mt-1">
                      <Info className="w-3.5 h-3.5 inline text-[#A0522D] mr-1" />
                      {airline.notes}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mt-6">
            <div className="flex gap-2 items-start">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
              <p className="text-sm text-blue-900 font-[family-name:var(--font-heading)]">
                <strong>Pro tip:</strong> If you are driving to Morocco via ferry from Spain (Algeciras to
                Tangier Med or Tarifa to Tangier), ferries operated by FRS, Balearia, and Inter Shipping
                allow pets on board. Dogs must be leashed and muzzled on deck. Cats must remain in carriers.
                The ferry crossing takes 35-90 minutes depending on the route.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PET-FRIENDLY HOTELS ──────────────────────────────── */}
      <section className="container-morocco py-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)]">
              Pet-Friendly Hotels & Accommodations
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Finding pet-friendly lodging in Morocco takes planning. Most riads in the old medinas
              do not accept animals, but these properties actively welcome well-behaved pets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {petFriendlyHotels.map((hotel, idx) => (
              <div key={idx} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <Bed className="w-5 h-5 text-[#A0522D] mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)]">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 mb-2">
                      <span className="text-xs bg-[#A0522D]/10 text-[#A0522D] px-2 py-0.5 rounded-full font-[family-name:var(--font-heading)]">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        {hotel.city}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-[family-name:var(--font-heading)]">
                        {hotel.type}
                      </span>
                    </div>
                    <p className="text-sm text-[#C4960C] font-semibold font-[family-name:var(--font-heading)] mb-1">
                      {hotel.petFee}
                    </p>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                      {hotel.policy}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-6">
            <h3 className="font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)] flex items-center gap-2">
              <Building className="w-5 h-5 text-[#A0522D]" />
              Vacation Rental Tips
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                Use Booking.com&apos;s &quot;Pets Allowed&quot; filter or Airbnb&apos;s pet-friendly tag for more options beyond hotels.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                Villas in Essaouira, Agadir, and Tangier coastal areas often accept pets more readily than city-center riads.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                Always message the host directly before booking to confirm their current pet policy and any breed restrictions.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                Bring your own pet bed, bowls, and cleanup supplies. Most Moroccan properties will not have pet amenities.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── VETERINARY CLINICS ───────────────────────────────── */}
      <section className="container-morocco py-10 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)]">
              Veterinary Clinics in Morocco
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Major cities have competent veterinary facilities. Save these contacts before you travel.
              Consultation fees typically run from 200 MAD to 500 MAD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {vetClinics.map((clinic, idx) => (
              <div key={idx} className="card-moroccan p-5">
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)] flex items-center gap-2 mb-2">
                  <Stethoscope className="w-5 h-5 text-[#A0522D]" />
                  {clinic.name}
                </h3>
                <div className="space-y-1.5 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    {clinic.city} &mdash; {clinic.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    {clinic.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    {clinic.hours}
                  </p>
                  <p className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    {clinic.languages}
                  </p>
                  <p className="flex items-center gap-2">
                    <BriefcaseMedical className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    {clinic.services}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-6">
            <h3 className="font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)] flex items-center gap-2">
              <BriefcaseMedical className="w-5 h-5 text-[#A0522D]" />
              Pet First-Aid Kit for Morocco
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 font-[family-name:var(--font-heading)] text-sm">
              {[
                'Tick removal tool and tweezers',
                'Antiseptic wipes and wound spray',
                'Gauze pads and self-adhesive bandage',
                'Oral rehydration salts (for heat)',
                'Anti-diarrhea medication (vet-approved)',
                'Paw balm (hot pavement protection)',
                'Portable water bowl and bottled water',
                'Copy of all vet records and prescriptions',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 py-1">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CULTURAL ATTITUDES & STRAY ANIMALS ───────────────── */}
      <section className="container-morocco py-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)]">
              Cultural Attitudes Toward Pets in Morocco
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Understanding local perspectives on animals helps you navigate Morocco responsibly
              and reduces misunderstandings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)] flex items-center gap-2">
                <Dog className="w-5 h-5 text-[#A0522D]" />
                Dogs in Moroccan Culture
              </h3>
              <div className="space-y-3 text-sm text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
                <p>
                  In Islamic tradition, dogs are considered ritually impure. Many Moroccans will avoid
                  physical contact with dogs, and bringing a dog into someone&apos;s home without explicit
                  permission is a serious social misstep. This does not mean Moroccans dislike dogs &mdash;
                  guard dogs are common in rural properties, and attitudes are shifting in urban areas,
                  particularly among younger generations.
                </p>
                <p>
                  Keep your dog leashed at all times in public. Never bring a dog into a mosque, a food
                  souk, or a restaurant unless the owner explicitly invites it. Some taxi drivers will
                  refuse to transport dogs. Petit taxis almost never accept pets; grand taxis are more
                  flexible if you negotiate beforehand.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)] flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#A0522D]" />
                Cats in Moroccan Culture
              </h3>
              <div className="space-y-3 text-sm text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
                <p>
                  Cats hold a respected place in Moroccan society. A hadith attributed to Prophet Muhammad
                  describes cats as clean animals. You will see cats everywhere &mdash; in medinas, mosques,
                  riads, cafes, and shops. Many Moroccans feed street cats regularly, and some mosques
                  maintain resident cat colonies.
                </p>
                <p>
                  If you travel with a cat, locals will generally react positively. Keep your cat in a
                  secure carrier outdoors to prevent contact with the large street cat population, which
                  can carry diseases. Indoor-only housing is strongly recommended. Moroccan street cats
                  are not vaccinated and can transmit feline leukemia, FIV, and ringworm.
                </p>
              </div>
            </div>
          </div>

          {/* Stray animals section */}
          <div className="card-moroccan p-5 md:p-6 mt-5">
            <h3 className="font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              Stray Animals: What You Need to Know
            </h3>
            <div className="space-y-3 text-sm text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
              <p>
                Morocco has a significant stray dog and cat population, especially outside major cities.
                Stray dogs can form packs in rural areas and on the outskirts of towns. Most are not
                aggressive but are unvaccinated, and rabies remains a real risk. Do not let your pet
                interact with strays under any circumstances.
              </p>
              <p>
                Several animal welfare organizations operate in Morocco. The Moroccan Society for the
                Protection of Animals (SPA Maroc) runs shelters in Casablanca and Rabat. SPANA (Society
                for the Protection of Animals Abroad) focuses on working animals like donkeys and mules.
                If you encounter an injured stray, contact the local SPA or SPANA office rather than
                handling the animal yourself.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r-lg mt-3">
                <p className="text-red-900 text-sm flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <strong>Rabies warning:</strong> Morocco reports 20-30 human rabies deaths per year,
                  mostly from stray dog bites. Keep your pet&apos;s rabies vaccination current and avoid
                  all contact with stray animals. If your pet is bitten by a stray, seek veterinary
                  care immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRACTICAL TIPS ───────────────────────────────────── */}
      <section className="container-morocco py-10 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)]">
              Practical Tips for Traveling with Pets in Morocco
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)] flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-[#A0522D]" />
                Heat & Climate
              </h3>
              <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
                Summer temperatures in Marrakech, Fes, and inland cities regularly exceed 40°C (104°F).
                Walk your dog before 8:00 AM and after 7:00 PM during June through September. Test pavement
                with the back of your hand &mdash; if you cannot hold it for five seconds, it is too hot for paws.
                Carry water at all times. Brachycephalic breeds (pugs, bulldogs, Persian cats) are at extreme
                risk of heatstroke and should avoid summer travel to Morocco entirely.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)] flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[#A0522D]" />
                Getting Around
              </h3>
              <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
                Renting a car is the most practical way to travel Morocco with a pet. Trains (ONCF) do not
                allow animals except guide dogs. CTM and Supratours buses prohibit pets completely. Within
                cities, ride-hailing apps like Careem or InDrive let you message the driver before pickup
                to confirm they accept pets. Grand taxis between cities may accept a crated pet in the trunk
                area if you hire the entire taxi (from 200 MAD to 600 MAD depending on distance).
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#A0522D]" />
                Health Precautions
              </h3>
              <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
                Leishmaniasis, transmitted by sandflies, is endemic in Morocco. Discuss preventive measures
                with your vet before departure &mdash; Scalibor collars repel sandflies for 5-6 months. Tick-borne
                diseases (ehrlichiosis, babesiosis) are present year-round. Apply a veterinary-grade tick
                preventive before travel. Avoid letting your dog drink from standing water, irrigation channels,
                or communal animal troughs. Stick to bottled or filtered water.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)] flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-[#A0522D]" />
                Best Time to Visit
              </h3>
              <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
                October through April offers the most comfortable temperatures for pets. Coastal cities
                (Essaouira, Tangier, Agadir) remain mild year-round and are better choices than inland
                Marrakech or Fes during warm months. Spring (March-May) is ideal: moderate temperatures,
                fewer crowds, and lower accommodation rates. Avoid Ramadan period if you plan to eat at
                outdoor restaurants with your pet, as many close during daylight hours.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)] flex items-center gap-2">
                <Dog className="w-5 h-5 text-[#A0522D]" />
                Pet Supplies in Morocco
              </h3>
              <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
                Major supermarkets (Marjane, Carrefour, Acima) stock basic dry dog food, cat food, and
                litter. Premium brands (Royal Canin, Purina Pro Plan) are available at veterinary clinics
                and pet shops in Casablanca, Rabat, and Marrakech. Prices run from 80 MAD to 250 MAD for
                a 2-4 kg bag of premium food. Specialty items like grain-free food, prescription diets, or
                specific supplements are harder to find. Bring enough of your pet&apos;s regular food for the
                entire trip to avoid digestive issues from sudden diet changes.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)] flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#A0522D]" />
                Useful Arabic & French Phrases
              </h3>
              <div className="text-sm text-gray-700 font-[family-name:var(--font-heading)] space-y-1.5">
                <p><strong>&quot;J&apos;ai un chien/chat&quot;</strong> &mdash; I have a dog/cat (French)</p>
                <p><strong>&quot;Est-ce que les animaux sont acceptés?&quot;</strong> &mdash; Are pets accepted? (French)</p>
                <p><strong>&quot;Où est le vétérinaire?&quot;</strong> &mdash; Where is the vet? (French)</p>
                <p><strong>&quot;Kelb / Mush&quot;</strong> &mdash; Dog / Cat (Darija - Moroccan Arabic)</p>
                <p><strong>&quot;Wesh kayen tabib dial l-hayawanat?&quot;</strong> &mdash; Is there a vet? (Darija)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RE-ENTRY REQUIREMENTS ────────────────────────────── */}
      <section className="container-morocco py-10">
        <div className="max-w-4xl mx-auto">
          <div className="card-moroccan p-5 md:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)] flex items-center gap-2">
              <Globe className="w-6 h-6 text-[#A0522D]" />
              Returning Home: Re-Entry Requirements
            </h2>
            <div className="space-y-4 text-sm text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
              <p>
                Your home country&apos;s re-entry requirements may be stricter than Morocco&apos;s import rules.
                Plan for re-entry before you leave.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)]">EU / UK</h4>
                  <p>
                    Morocco is not on the EU&apos;s approved country list for simple pet re-entry. Your pet
                    needs a rabies antibody titer test (blood test) taken at least 30 days after vaccination
                    and at least 3 months before re-entry. Get this test done at an EU-approved laboratory
                    before you leave for Morocco.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)]">United States</h4>
                  <p>
                    The CDC updated dog import rules in 2024. Dogs entering the US must have a valid rabies
                    vaccination, a CDC Dog Import Form (completed online), and come from a country with low
                    risk of dog rabies reintroduction. Morocco is classified as high-risk, meaning additional
                    requirements apply including a USDA-endorsed foreign rabies vaccination certificate.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)]">Canada</h4>
                  <p>
                    Canada requires a valid rabies vaccination certificate for dogs over 3 months old. No
                    quarantine is required if documentation is in order. Cats do not need a rabies certificate
                    for Canadian entry but should have current vaccinations. Check the CFIA website for the
                    latest updates before your return trip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COSTS BREAKDOWN ──────────────────────────────────── */}
      <section className="container-morocco py-10 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)]">
              Pet Travel Costs Breakdown
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)]">
              Budget for these expenses when planning your trip. Prices reflect 2026 averages
              and seasonal pricing can change.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-[family-name:var(--font-heading)]">
                <thead>
                  <tr className="bg-[#A0522D] text-white">
                    <th className="text-left py-3 px-4 font-semibold">Expense</th>
                    <th className="text-left py-3 px-4 font-semibold">Estimated Cost</th>
                    <th className="text-left py-3 px-4 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { item: 'Microchip implant', cost: 'From 300 MAD', note: 'One-time; may already have' },
                    { item: 'Rabies vaccination', cost: 'From 200 MAD', note: 'Annual booster required' },
                    { item: 'Health certificate', cost: 'From 400 MAD', note: 'Vet consultation + certificate' },
                    { item: 'USDA/APHA endorsement', cost: 'From 500 MAD', note: 'Government fee; varies by country' },
                    { item: 'ONSSA import permit', cost: 'Free - 200 MAD', note: 'Processing fee varies' },
                    { item: 'Airline cabin fee', cost: 'From 500 MAD', note: 'Per flight, one way' },
                    { item: 'Airline cargo fee', cost: 'From 1,200 MAD', note: 'Per flight, one way' },
                    { item: 'IATA-compliant crate', cost: 'From 600 MAD', note: 'If you do not already own one' },
                    { item: 'Hotel pet surcharge', cost: 'From 150 MAD/night', note: 'Varies widely by property' },
                    { item: 'Vet visit in Morocco', cost: 'From 200 MAD', note: 'Consultation only; treatment extra' },
                    { item: 'Pet food (premium)', cost: 'From 80 MAD/bag', note: '2-4 kg bag, available in cities' },
                    { item: 'Rabies titer test (EU re-entry)', cost: 'From 800 MAD', note: 'Required before departure' },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-3 px-4 text-gray-900 font-medium">{row.item}</td>
                      <td className="py-3 px-4 text-[#C4960C] font-semibold">{row.cost}</td>
                      <td className="py-3 px-4 text-gray-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ──────────────────────────────────────── */}
      <section className="container-morocco py-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Answers to the most common questions about pet travel to Morocco.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <div key={idx} className="card-moroccan p-5">
                <h3 className="font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)] flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#A0522D] mt-0.5 shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED GUIDES ───────────────────────────────────── */}
      <section className="container-morocco py-10 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)]">
              Related Morocco Travel Guides
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedGuides.map((guide, idx) => {
              const GuideIcon = guide.icon;
              return (
                <Link
                  key={idx}
                  href={guide.href}
                  className="card-moroccan p-5 group hover:shadow-lg transition-shadow"
                >
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 mt-2 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ──────────────────────────────────────── */}
      <section className="container-morocco py-12">
        <div className="max-w-4xl mx-auto">
          <div className="moroccan-pattern rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">
              Plan Your Pet-Friendly Morocco Trip
            </h2>
            <p className="text-gray-700 font-[family-name:var(--font-heading)] mb-6 max-w-xl mx-auto">
              Start the paperwork process at least 6 weeks before your departure date.
              The earlier you begin, the fewer surprises at the airport.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/morocco-health-safety"
                className="inline-flex items-center justify-center gap-2 bg-[#A0522D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8B4726] transition-colors font-[family-name:var(--font-heading)]"
              >
                <ShieldCheck className="w-5 h-5" />
                Health & Safety Guide
              </Link>
              <Link
                href="/morocco-first-time"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#A0522D] text-[#A0522D] px-6 py-3 rounded-lg font-semibold hover:bg-[#A0522D]/5 transition-colors font-[family-name:var(--font-heading)]"
              >
                <BookOpen className="w-5 h-5" />
                First-Time Visitor Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
