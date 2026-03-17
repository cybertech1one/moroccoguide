import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Heart,
  Clock,
  Info,
  ArrowRight,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Phone,
  FileText,
  Plane,
  Stethoscope,
  Activity,
  Briefcase,
  MapPin,
  Star,
  XCircle,
  Building,
  Thermometer,
  Siren,
  BookOpen,
  HelpCircle,
  Globe,
  BadgeCheck,
  CircleDot,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Travel Insurance Guide 2026 | Best Plans, Coverage & Claims',
  description:
    'Complete guide to travel insurance for Morocco trips. Compare 6 top providers from 350 MAD/month. Medical coverage, adventure sports, evacuation, theft protection, and emergency procedures. Know what you need before you go.',
  keywords: [
    'Morocco travel insurance',
    'travel insurance Morocco 2026',
    'best travel insurance Morocco',
    'Morocco medical insurance',
    'adventure sports insurance Morocco',
    'Morocco evacuation coverage',
    'SafetyWing Morocco',
    'World Nomads Morocco',
    'Allianz travel insurance Morocco',
    'AXA travel insurance Morocco',
    'IATI travel insurance Morocco',
    'Heymondo travel insurance',
    'Morocco healthcare system',
    'emergency medical Morocco',
    'Morocco trip cancellation insurance',
    'baggage insurance Morocco',
    'Morocco travel safety',
    'Morocco health coverage',
    'travel insurance claims Morocco',
    'Morocco private hospital costs',
    'travel insurance for Sahara desert',
    'Morocco trekking insurance',
  ],
  openGraph: {
    title: 'Morocco Travel Insurance Guide 2026 | Best Plans, Coverage & Claims',
    description:
      'Compare 6 top travel insurance providers for Morocco trips. From 350 MAD/month. Medical, adventure sports, evacuation, and theft coverage explained with real claim examples.',
    url: `${BASE_URL}/morocco-travel-insurance`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Scenic view of Morocco with medina architecture, representing travel planning and insurance preparation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Travel Insurance Guide 2026 | Best Plans & Coverage',
    description:
      'Compare SafetyWing, World Nomads, Allianz, AXA, IATI & Heymondo for Morocco trips. Medical coverage, adventure sports, evacuation, and emergency procedures explained.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-travel-insurance` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-travel-insurance`,
  name: 'Morocco Travel Insurance Guide 2026 | Best Plans, Coverage & Claims',
  description:
    'Complete guide to travel insurance for Morocco trips. Compare 6 top providers, understand coverage types, learn emergency procedures, and know how to file claims.',
  url: `${BASE_URL}/morocco-travel-insurance`,
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  mainEntityOfPage: `${BASE_URL}/morocco-travel-insurance`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Travel Insurance Guide', item: `${BASE_URL}/morocco-travel-insurance` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   DATA: INSURANCE PLANS
   ═══════════════════════════════════════════════════════════════ */

const insurancePlans = [
  {
    name: 'SafetyWing',
    icon: Shield,
    monthlyPrice: 'From 350 MAD/month',
    coverage: 'Comprehensive travel medical insurance designed for nomads and long-term travelers. Covers 185 countries including Morocco. No fixed end date required; renews every 4 weeks automatically.',
    medicalLimit: 'From 2,500,000 MAD per injury/illness',
    adventureSports: 'Basic adventure activities covered (hiking, snorkeling). Excludes extreme sports like skydiving, paragliding, and motorsports.',
    evacuation: 'From 1,000,000 MAD emergency medical evacuation to nearest adequate facility. Repatriation of remains included.',
    pros: [
      'Affordable for long trips',
      'No fixed end date needed',
      'Easy online purchase',
      'Covers home country visits (15 days per 90)',
      'COVID-19 covered as any other illness',
    ],
    cons: [
      'Limited adventure sports coverage',
      'From 2,500 MAD deductible per claim',
      'No trip cancellation coverage',
      'Electronics theft cap at 5,000 MAD',
    ],
  },
  {
    name: 'World Nomads',
    icon: Globe,
    monthlyPrice: 'From 650 MAD/month',
    coverage: 'The go-to insurer for adventure travelers. Two plan levels: Standard and Explorer. Covers over 200 activities in Morocco from camel trekking to sandboarding. Purchase or extend while already abroad.',
    medicalLimit: 'From 10,000,000 MAD (Standard) to unlimited (Explorer)',
    adventureSports: 'Standard covers 150+ activities. Explorer covers 200+ including paragliding, quad biking, rock climbing, and mountain biking in the Atlas.',
    evacuation: 'From 5,000,000 MAD emergency evacuation and repatriation. Helicopter rescue for remote Atlas trekking included on Explorer.',
    pros: [
      'Best adventure sports coverage',
      'Buy or extend while traveling',
      'Trip cancellation included',
      'Gear and electronics covered up to 30,000 MAD',
      'Helicopter evacuation on Explorer plan',
    ],
    cons: [
      'More expensive than basic plans',
      'Claims process can be slow (30-60 days)',
      'Age limit: 69 years',
      'Deductible from 1,000 MAD per claim',
    ],
  },
  {
    name: 'Allianz',
    icon: ShieldCheck,
    monthlyPrice: 'From 500 MAD/month',
    coverage: 'One of the world\'s largest insurers with strong claim processing infrastructure. Multiple plan tiers from basic medical to comprehensive travel. 24/7 multilingual assistance hotline with operators who speak Arabic and French.',
    medicalLimit: 'From 5,000,000 MAD to 50,000,000 MAD depending on plan tier',
    adventureSports: 'Standard plan covers hiking and swimming. Premier plan adds camel trekking, surfing, and organized adventure tours. Extreme sports require supplemental rider.',
    evacuation: 'From 2,500,000 MAD medical evacuation. Search and rescue up to 500,000 MAD on Premier plan.',
    pros: [
      'Strong global network of hospitals',
      'Fast claims processing (7-14 days)',
      'Arabic and French-speaking support',
      'Direct billing at partner hospitals in Casablanca and Marrakech',
      'Multiple plan tiers for every budget',
    ],
    cons: [
      'Requires pre-authorization for non-emergency treatment',
      'Adventure sports need higher-tier plan',
      'Phone claims only (no app submission)',
      'Cancel for any reason not available on basic plan',
    ],
  },
  {
    name: 'AXA',
    icon: BadgeCheck,
    monthlyPrice: 'From 450 MAD/month',
    coverage: 'Major insurer with physical offices in Morocco (Casablanca, Marrakech, Rabat, Tangier). This local presence means faster claim resolution and direct hospital partnerships. Schengen-compliant plans available for those combining Morocco with Europe.',
    medicalLimit: 'From 3,000,000 MAD to 30,000,000 MAD depending on plan',
    adventureSports: 'Covers organized trekking, surfing, and camel rides. Higher tiers include quad biking and sandboarding. Motorsports excluded on all plans.',
    evacuation: 'From 2,000,000 MAD evacuation. Air ambulance included on Comfort and Premium tiers.',
    pros: [
      'Physical offices in 4 Moroccan cities',
      'Direct billing at Moroccan private hospitals',
      'Claims processed in Morocco (faster)',
      'Schengen-compliant plans available',
      'Local phone support in French and Arabic',
    ],
    cons: [
      'Online purchase interface less intuitive',
      'Basic plan has limited coverage ceiling',
      'Adventure sports surcharge from 50 MAD/month',
      'Dental emergency cap at 5,000 MAD',
    ],
  },
  {
    name: 'IATI',
    icon: Heart,
    monthlyPrice: 'From 400 MAD/month',
    coverage: 'Spanish insurer popular with European travelers to Morocco. Known for excellent customer service and straightforward claims. Plans range from Backpacker to Star, covering all travel styles. App-based claims with photo submission.',
    medicalLimit: 'From 3,000,000 MAD (Backpacker) to 10,000,000 MAD (Star)',
    adventureSports: 'Standard plan covers trekking up to 4,000m (covers Toubkal). Adventure plan adds surfing, quad biking, camel trekking, and organized desert tours.',
    evacuation: 'From 3,000,000 MAD evacuation and repatriation. Search and rescue included on Adventure and Star plans.',
    pros: [
      'App-based claims with photo upload',
      'Zero deductible on Star plan',
      'Covers trekking up to 4,000m on all plans',
      'Trip cancellation from 20,000 MAD',
      'Excellent customer reviews',
    ],
    cons: [
      'Support primarily in Spanish and English',
      'Less name recognition outside Europe',
      'No direct billing network in Morocco',
      'Baggage delay minimum 12 hours to claim',
    ],
  },
  {
    name: 'Heymondo',
    icon: Stethoscope,
    monthlyPrice: 'From 380 MAD/month',
    coverage: 'Modern digital-first travel insurer with a highly rated mobile app. 24/7 medical chat and video consultation included at no extra cost. Transparent pricing with no hidden fees. Growing rapidly among younger travelers.',
    medicalLimit: 'From 5,000,000 MAD to 100,000,000 MAD depending on plan',
    adventureSports: 'Covers hiking, surfing, snorkeling, and camel trekking on all plans. Premium plan adds quad biking, sandboarding, paragliding, and mountain biking.',
    evacuation: 'From 5,000,000 MAD evacuation. Air ambulance and helicopter rescue included on Premium plan.',
    pros: [
      'Best mobile app in the industry',
      '24/7 medical chat and video calls included',
      'Transparent pricing, no hidden fees',
      'Fast digital claims (average 5 days)',
      'High coverage limits on Premium plan',
    ],
    cons: [
      'Newer company, smaller hospital network',
      'No physical offices anywhere',
      'Pre-existing conditions excluded on all plans',
      'Trip cancellation requires documentation within 48 hours',
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: COVERAGE TYPES
   ═══════════════════════════════════════════════════════════════ */

const coverageTypes = [
  {
    type: 'Medical Coverage',
    icon: Stethoscope,
    description:
      'The most important coverage for Morocco. Covers hospitalization, doctor visits, prescription medications, emergency dental, and ambulance transport. Morocco\'s private hospitals deliver excellent care but charge international prices. A single night in a private hospital can cost from 5,000 MAD. Surgery can exceed 100,000 MAD.',
    whyMatters:
      'Public hospitals in Morocco are overcrowded and under-resourced. Any serious medical issue will require a private clinic, where costs add up fast. Without insurance, a simple fracture treatment can cost from 15,000 MAD.',
    minimumRecommended: 'From 5,000,000 MAD medical coverage',
    keyInclusions: ['Hospital stays', 'Surgery', 'Prescription medications', 'Ambulance transport', 'Emergency dental', 'Follow-up care'],
  },
  {
    type: 'Trip Cancellation',
    icon: Plane,
    description:
      'Reimburses non-refundable trip costs if you must cancel before departure due to illness, injury, family emergency, or other covered reasons. Also covers trip interruption if you must cut your Morocco trip short and return home early.',
    whyMatters:
      'Morocco trips often involve non-refundable riad bookings, internal flights, desert camp reservations, and guided tour deposits. A family emergency or illness before departure could mean losing thousands of MAD in bookings.',
    minimumRecommended: 'From 50,000 MAD trip cancellation coverage',
    keyInclusions: ['Pre-departure cancellation', 'Trip interruption', 'Travel delay compensation', 'Missed connection coverage', 'Rebooked flights', 'Non-refundable accommodation'],
  },
  {
    type: 'Adventure Sports',
    icon: Activity,
    description:
      'Morocco is an adventure destination: Atlas trekking, Sahara camel treks, surfing in Taghazout, quad biking in Merzouga, paragliding in Agadir, sandboarding in Erg Chebbi, and rock climbing in Todra Gorge. Standard policies often exclude these activities.',
    whyMatters:
      'A broken ankle while trekking Toubkal means helicopter evacuation from 4,167m. A surfing injury in Taghazout means an ambulance ride to Agadir. Without adventure sports coverage, you pay every dirham out of pocket.',
    minimumRecommended: 'Ensure your specific activities are listed on the policy',
    keyInclusions: ['Atlas trekking', 'Camel riding', 'Surfing', 'Quad biking', 'Sandboarding', 'Rock climbing'],
  },
  {
    type: 'Emergency Evacuation',
    icon: Siren,
    description:
      'Covers the cost of emergency transport to the nearest adequate medical facility or repatriation to your home country. In Morocco, this is critical for travelers in remote areas like the Sahara desert, the High Atlas mountains, or rural Draa-Tafilalet region.',
    whyMatters:
      'A medical emergency in the Sahara or High Atlas may require helicopter evacuation. Air ambulance from Merzouga to Casablanca can cost from 200,000 MAD. International medical repatriation by air can exceed 1,000,000 MAD.',
    minimumRecommended: 'From 5,000,000 MAD evacuation coverage',
    keyInclusions: ['Helicopter rescue', 'Air ambulance', 'Medical repatriation', 'Repatriation of remains', 'Escort travel costs', 'Ground ambulance transport'],
  },
  {
    type: 'Baggage & Theft',
    icon: Briefcase,
    description:
      'Covers loss, theft, or damage to personal belongings during your trip. Morocco\'s medinas are generally safe, but petty theft can occur in crowded souks, bus stations, and tourist areas. Delayed baggage compensation provides funds for essentials while you wait.',
    whyMatters:
      'Pickpocketing and bag snatching do occur in busy Moroccan cities, especially in Marrakech\'s Jemaa el-Fnaa and Casablanca\'s train stations. Replacement costs for electronics, cameras, and personal items add up quickly.',
    minimumRecommended: 'From 20,000 MAD baggage coverage with single item limit of 5,000 MAD',
    keyInclusions: ['Theft of personal belongings', 'Lost luggage', 'Delayed baggage', 'Damaged items', 'Travel documents replacement', 'Emergency purchases'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: COMMON CLAIMS IN MOROCCO
   ═══════════════════════════════════════════════════════════════ */

const commonClaims = [
  {
    claim: 'Food Poisoning & Stomach Illness',
    icon: Thermometer,
    frequency: 'Most common',
    description:
      'Traveler\'s diarrhea and food poisoning are the number one insurance claims in Morocco. Street food, unfamiliar spices, and tap water (which is safe in cities but can upset unaccustomed stomachs) contribute to this. Most cases are mild and resolve with rehydration, but severe cases require IV fluids at a private clinic.',
    averageCost: 'From 500 MAD (pharmacy) to 5,000 MAD (clinic visit with IV fluids)',
    prevention: 'Drink bottled water, eat at busy stalls with high turnover, avoid raw salads at questionable venues, and carry oral rehydration salts.',
    claimTip: 'Keep all pharmacy and clinic receipts. Get a medical report from the treating doctor even for minor visits.',
  },
  {
    claim: 'Adventure Activity Injuries',
    icon: Activity,
    frequency: 'Common',
    description:
      'Sprains, fractures, and muscle injuries from Atlas trekking, surfing in Taghazout, quad biking in the desert, and camel riding are frequent claims. Camel falls are more common than you might expect, and Atlas trails can be loose and uneven, especially in wet conditions.',
    averageCost: 'From 3,000 MAD (minor sprain treatment) to 50,000 MAD+ (fracture with surgery)',
    prevention: 'Use reputable tour operators, wear proper footwear for trekking, always wear a helmet on quad bikes, and do not ride camels if you have back problems.',
    claimTip: 'Photograph the accident scene and get a written incident report from your tour operator. This speeds up the claim significantly.',
  },
  {
    claim: 'Theft & Pickpocketing',
    icon: ShieldAlert,
    frequency: 'Common',
    description:
      'Phone snatching on mopeds, pickpocketing in crowded souks, and theft from parked vehicles or hotel rooms. Jemaa el-Fnaa in Marrakech, Casablanca train stations, and crowded bus terminals are hotspots. Petty theft rarely involves violence.',
    averageCost: 'From 5,000 MAD (phone) to 30,000 MAD+ (camera, laptop, multiple items)',
    prevention: 'Use a money belt or cross-body bag, keep phones in front pockets, never leave valuables in parked cars, and use hotel safes.',
    claimTip: 'File a police report (proces-verbal) at the nearest commissariat within 24 hours. Without a police report, most insurers will deny the claim.',
  },
  {
    claim: 'Flight Delays & Cancellations',
    icon: Plane,
    frequency: 'Moderate',
    description:
      'Weather disruptions, airline strikes, and overbooking can delay or cancel flights to and within Morocco. Domestic flights between Casablanca, Marrakech, Fes, and Ouarzazate are occasionally delayed. Fog at Fes-Saiss airport causes delays in winter.',
    averageCost: 'From 1,000 MAD (meals, accommodation during delay) to 20,000 MAD+ (rebooking international flights)',
    prevention: 'Build buffer days into your itinerary, especially around connecting flights. Download your airline\'s app for real-time notifications. Consider travel insurance with trip delay coverage.',
    claimTip: 'Keep all boarding passes, delay notifications, and receipts for meals and accommodation. Request a written delay confirmation from the airline.',
  },
  {
    claim: 'Vehicle Accidents & Road Injuries',
    icon: AlertTriangle,
    frequency: 'Less common but costly',
    description:
      'Morocco\'s roads, particularly mountain passes in the Atlas and rural highways, can be dangerous. Self-drive tourists, motorcycle renters, and even passengers in taxis or buses can be involved in accidents. Medical costs from serious road accidents can be substantial.',
    averageCost: 'From 10,000 MAD (minor injuries) to 500,000 MAD+ (serious injuries requiring surgery and rehabilitation)',
    prevention: 'Rent from reputable agencies with comprehensive insurance, avoid driving at night on rural roads, and always wear seatbelts. Consider hiring a private driver for mountain roads.',
    claimTip: 'Call the Gendarmerie Royale (177) for any road accident. Their official report is essential for insurance claims. Photograph the scene from multiple angles.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: HEALTHCARE IN MOROCCO
   ═══════════════════════════════════════════════════════════════ */

const healthcareMorocco = [
  {
    type: 'Private Clinics (Cliniques)',
    icon: Building,
    description:
      'Private clinics are the best option for travelers in Morocco. They offer modern equipment, shorter wait times, and English or French-speaking doctors. Major cities have excellent private facilities. Consultation fees start from 300 MAD.',
    locations: 'Available in all major cities: Casablanca, Marrakech, Rabat, Fes, Tangier, Agadir',
    cost: 'Consultation from 300 MAD, ER visit from 1,000 MAD, overnight stay from 5,000 MAD',
    topFacilities: [
      'Clinique du Parc, Casablanca',
      'Clinique Internationale de Marrakech',
      'Hôpital Cheikh Zayd, Rabat',
      'Clinique Atlas, Fes',
    ],
  },
  {
    type: 'Pharmacies (Pharmacies)',
    icon: Stethoscope,
    description:
      'Moroccan pharmacists are highly trained and can diagnose and treat minor ailments. Many medications that require prescriptions elsewhere are available over the counter. Pharmacies are identified by a green crescent sign and are found on nearly every main street.',
    locations: 'Ubiquitous in all cities and towns. Duty pharmacies (pharmacie de garde) operate 24/7 on rotation.',
    cost: 'Consultation free, medications from 20 MAD. Antibiotics from 50 MAD. Most common medications are very affordable.',
    topFacilities: [
      'Pharmacie de garde (rotating 24/7 duty pharmacy in each district)',
      'Pharmacie Centrale in most city centers',
      'Hospital-attached pharmacies for specialized medications',
    ],
  },
  {
    type: 'Public Hospitals (CHU)',
    icon: Users,
    description:
      'Morocco\'s public hospitals (Centre Hospitalier Universitaire) provide free or low-cost care but are often overcrowded with long wait times. They are best used only for genuine emergencies when no private clinic is available. Staff may only speak Arabic or French.',
    locations: 'Every city and most towns have a public hospital. Major CHUs in Casablanca, Rabat, Fes, Marrakech.',
    cost: 'Free to from 200 MAD for Moroccan citizens. Foreigners may be charged from 500 MAD for emergency care.',
    topFacilities: [
      'CHU Ibn Sina, Rabat (largest and most advanced)',
      'CHU Ibn Rochd, Casablanca',
      'CHU Mohammed VI, Marrakech',
      'CHU Hassan II, Fes',
    ],
  },
  {
    type: 'Emergency Services',
    icon: Siren,
    description:
      'Morocco\'s emergency number is 150 (SAMU ambulance) or 190 (fire/rescue). Response times vary: 10-20 minutes in major cities, potentially much longer in rural areas. For serious emergencies, consider arranging private ambulance transport directly to a private clinic.',
    locations: 'SAMU and fire services cover all urban areas. Rural response times are slower.',
    cost: 'Public ambulance from 500 MAD. Private ambulance from 2,000 MAD. Helicopter evacuation from 50,000 MAD.',
    topFacilities: [
      'SAMU (dial 150) for medical emergencies',
      'Fire/Rescue (dial 190)',
      'Gendarmerie Royale (dial 177) for road accidents',
      'Police (dial 19) in urban areas',
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: EMERGENCY PROCEDURES
   ═══════════════════════════════════════════════════════════════ */

const emergencyProcedures = [
  {
    step: 1,
    title: 'Assess the Situation & Call for Help',
    icon: Phone,
    description:
      'For life-threatening emergencies, call SAMU (150) or fire/rescue (190) immediately. In remote areas with no phone signal, send someone to the nearest town for help. If you are with a tour group, alert your guide immediately as they will know the fastest local response.',
    important: 'Save these numbers in your phone before your trip: SAMU 150, Fire 190, Police 19, Gendarmerie 177.',
  },
  {
    step: 2,
    title: 'Contact Your Insurance Provider',
    icon: Shield,
    description:
      'Call your insurer\'s 24/7 emergency hotline as soon as possible. They can authorize treatment, arrange direct billing with hospitals, coordinate evacuation, and guide you to the nearest approved medical facility. Most providers have multilingual operators.',
    important: 'Keep your policy number, emergency hotline number, and a copy of your insurance card both digitally (phone) and physically (printed in your bag).',
  },
  {
    step: 3,
    title: 'Get to the Nearest Private Clinic',
    icon: Building,
    description:
      'Unless the emergency is life-threatening and requires the nearest hospital, head to a private clinic (clinique). They offer better care, shorter waits, English/French-speaking staff, and are more familiar with international insurance procedures. Ask your hotel or riad for the nearest recommended clinic.',
    important: 'Research private clinics near your accommodation before you need them. Your riad or hotel staff will know exactly where to go.',
  },
  {
    step: 4,
    title: 'Document Everything',
    icon: FileText,
    description:
      'From the moment the incident occurs, start documenting. Photograph injuries, the accident scene, and damaged property. Keep every receipt (pharmacy, clinic, taxi to hospital, replacement essentials). Request a detailed medical report in French or English from the treating physician.',
    important: 'Ask for itemized bills, not just totals. Insurers require detailed breakdowns of charges for claim processing.',
  },
  {
    step: 5,
    title: 'File Your Claim Promptly',
    icon: FileText,
    description:
      'Most insurers require claims to be filed within 30 to 90 days of the incident. Gather your medical reports, receipts, police reports (for theft), flight delay confirmations, and any correspondence with providers. Submit via the insurer\'s app or online portal for fastest processing.',
    important: 'Do not wait until you return home to start the process. Begin organizing documents immediately and contact your insurer for claim guidance while still in Morocco.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoTravelInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Travel Insurance Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Shield className="w-4 h-4" />
            Travel Protection
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Travel Insurance Guide:
            <br className="hidden md:block" /> Plans, Coverage &amp; Claims
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From 350 MAD/month for basic coverage to comprehensive plans protecting your Sahara
            trek, Atlas hike, and everything in between. Do not travel to Morocco without it.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Travel Insurance Is Essential for Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the safest countries in Africa for tourists, with a well-developed tourism
                infrastructure and generally welcoming communities. But no destination is without risk, and
                Morocco&apos;s unique geography -- from the 4,167m peak of Mount Toubkal to the vast Sahara
                desert -- means that medical emergencies can happen far from hospitals.
              </p>
              <p>
                Morocco&apos;s public healthcare system is improving but remains under-resourced, particularly
                outside major cities. Private clinics provide excellent care but charge accordingly: a single
                night in a private hospital starts from 5,000 MAD, and emergency surgery can easily exceed
                100,000 MAD. An air ambulance evacuation from the Sahara can cost upward of 200,000 MAD.
              </p>
              <p>
                Travel insurance is not a luxury for Morocco -- it is a necessity. Whether you are trekking the
                Atlas, surfing in Taghazout, exploring the medinas of Fes and Marrakech, or riding camels into
                the Sahara, the right policy gives you peace of mind and financial protection against the
                unexpected. The cost of coverage is a tiny fraction of what you would pay out of pocket for
                a serious medical event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Insurance Matters for Morocco ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Key Risks for Travelers in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding the specific risks helps you choose the right coverage level for your Morocco trip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                <Activity className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Adventure Activity Injuries
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Atlas trekking, camel riding, surfing, quad biking, and sandboarding are popular but carry
                inherent risks. A broken bone on Mount Toubkal means helicopter evacuation at enormous cost.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                <Thermometer className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Food &amp; Waterborne Illness
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Traveler&apos;s diarrhea is the most common insurance claim in Morocco. Street food and unfamiliar
                cuisine can trigger stomach issues that occasionally require clinic visits and IV fluids.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Remote Locations
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The Sahara desert, High Atlas villages, and rural Draa-Tafilalet are far from hospitals. Medical
                evacuation from remote areas is the only option and costs from 50,000 MAD by helicopter.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                <ShieldAlert className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Petty Theft
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Pickpocketing and phone snatching occur in busy medinas, train stations, and tourist hotspots.
                Replacement costs for electronics and travel documents add up quickly without coverage.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Road Safety
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s mountain passes, rural roads, and intercity highways require cautious driving. Road
                accidents involving tourists -- whether driving or as passengers -- are a significant risk factor.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                <Plane className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Flight Disruptions
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Fog at Fes airport, airline strikes, and seasonal overbooking can disrupt travel plans. Trip
                delay coverage helps cover accommodation and rebooking costs during unexpected disruptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Plan Comparison Table ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleDot className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Compare 6 Top Insurance Providers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            We reviewed the most popular travel insurance providers used by Morocco-bound travelers. Here is how they compare.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in MAD. Actual premiums depend on age, trip duration, coverage level, and home country. Seasonal pricing may apply.
          </p>

          <div className="space-y-8">
            {insurancePlans.map((plan) => {
              const PlanIcon = plan.icon;
              return (
                <div key={plan.name} className="card-moroccan overflow-hidden">
                  <div className="p-6 border-b border-[var(--color-accent)]/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                        <PlanIcon className="w-6 h-6 text-[var(--color-accent)]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {plan.name}
                          </h3>
                          <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                            {plan.monthlyPrice}
                          </span>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] mt-2">{plan.coverage}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Stethoscope className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="font-semibold text-[var(--text-primary)]">Medical Limit</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]">{plan.medicalLimit}</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="font-semibold text-[var(--text-primary)]">Adventure Sports</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]">{plan.adventureSports}</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Siren className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="font-semibold text-[var(--text-primary)]">Evacuation</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]">{plan.evacuation}</p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Pros
                      </h4>
                      <ul className="space-y-1.5">
                        {plan.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                            <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-green-600" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-1">
                        <XCircle className="w-4 h-4 text-red-500" />
                        Cons
                      </h4>
                      <ul className="space-y-1.5">
                        {plan.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                            <XCircle className="w-3 h-3 mt-0.5 shrink-0 text-red-500" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Coverage Types ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            5 Coverage Types You Need for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Not all travel insurance is created equal. Here are the five coverage categories that matter most for a Morocco trip and why each one is important.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {coverageTypes.map((coverage) => {
              const CoverageIcon = coverage.icon;
              return (
                <div key={coverage.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CoverageIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {coverage.type}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">{coverage.description}</p>
                    </div>
                  </div>

                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">Why this matters in Morocco</p>
                        <p className="text-xs text-[var(--text-secondary)]">{coverage.whyMatters}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
                    <span className="text-sm font-semibold text-[var(--color-accent)]">Minimum recommended: {coverage.minimumRecommended}</span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {coverage.keyInclusions.map((inclusion, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {inclusion}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Common Claims ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <FileText className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            5 Most Common Insurance Claims in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Real scenarios that travelers face in Morocco, with average costs, prevention tips, and advice for filing successful claims.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {commonClaims.map((claim, index) => {
              const ClaimIcon = claim.icon;
              return (
                <div key={claim.claim} className="card-moroccan overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-[var(--color-accent)]">#{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {claim.claim}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <ClaimIcon className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                          <span className="text-xs text-[var(--text-muted)]">Frequency: {claim.frequency}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] mb-4">{claim.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                        <div className="flex items-center gap-1 mb-1">
                          <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                          <span className="text-xs font-semibold text-[var(--text-primary)]">Average Cost</span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">{claim.averageCost}</p>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                        <div className="flex items-center gap-1 mb-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                          <span className="text-xs font-semibold text-[var(--text-primary)]">Prevention</span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">{claim.prevention}</p>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                        <div className="flex items-center gap-1 mb-1">
                          <Info className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                          <span className="text-xs font-semibold text-[var(--text-primary)]">Claim Tip</span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">{claim.claimTip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Healthcare in Morocco ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Stethoscope className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Healthcare in Morocco: What Travelers Need to Know
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding Morocco&apos;s healthcare system helps you make informed decisions about coverage levels and know where to go if something goes wrong.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {healthcareMorocco.map((facility) => {
              const FacilityIcon = facility.icon;
              return (
                <div key={facility.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <FacilityIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {facility.type}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">{facility.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="font-semibold text-sm text-[var(--text-primary)]">Where to Find</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]">{facility.locations}</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="font-semibold text-sm text-[var(--text-primary)]">Cost</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]">{facility.cost}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      Key Facilities
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {facility.topFacilities.map((name, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Emergency Procedures ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Siren className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Do in a Medical Emergency
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow these steps if you or a travel companion experience a medical emergency in Morocco. Preparation and quick action can make all the difference.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {emergencyProcedures.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.step} className="relative flex gap-6">
                      {/* Step number circle */}
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>

                      <div className="card-moroccan p-6 flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {step.title}
                          </h3>
                          <StepIcon className="w-5 h-5 text-[var(--color-accent)] shrink-0 ml-4" />
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] mb-3">{step.description}</p>
                        <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                          <AlertTriangle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <p className="text-xs text-[var(--text-muted)]">
                            <span className="font-semibold text-[var(--text-primary)]">Important:</span> {step.important}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-atlas.webp"
                alt="High Atlas mountain range in Morocco, where trekking injuries and evacuation are common insurance claims"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Atlas Mountain Trekking</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-sahara-sunrise.webp"
                alt="Sahara desert sunrise with sand dunes, representing remote travel locations requiring evacuation coverage"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Remote Sahara Adventures</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-surfing-taghazout.webp"
                alt="Surfing at Taghazout beach in Morocco, an adventure sport requiring specific insurance coverage"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Surfing at Taghazout</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tips for Adventure Activities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Activity className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insurance Tips for Popular Morocco Adventures
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Atlas Trekking &amp; Toubkal
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Ensure your plan covers trekking above 4,000m and includes helicopter evacuation. The standard
                plan from most providers covers trekking up to 3,000m; you need an upgraded plan for Toubkal (4,167m).
                IATI covers up to 4,000m on their basic plan. World Nomads Explorer covers high-altitude trekking.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Activity className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Surfing in Taghazout &amp; Essaouira
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Most mid-tier plans cover recreational surfing. If you plan to kitesurf in Dakhla or Essaouira,
                check that kitesurfing is specifically listed. Board rental damage is not typically covered. Consider
                insuring expensive personal surfboards separately under a specialist sports equipment policy.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Sahara Desert Tours
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Desert excursions into the Sahara (Merzouga, Zagora, M&apos;Hamid) are remote, with the nearest
                hospital potentially 2-3 hours away. Camel riding is covered by most adventure plans, but quad
                biking and sandboarding require higher-tier coverage. Ensure evacuation coverage is at least from
                5,000,000 MAD for Sahara trips.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Activity className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Quad Biking &amp; Buggy Tours
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Quad biking in the Palmeraie of Marrakech or the desert near Merzouga is extremely popular but
                classified as a motor sport by many insurers. SafetyWing excludes it; World Nomads Explorer and
                Heymondo Premium cover it. Always wear a helmet even if the operator does not require one. Get
                the operator&apos;s written confirmation of safety briefing.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Activity className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Rock Climbing in Todra Gorge
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Todra Gorge is a world-class climbing destination but remote. Standard plans usually exclude rock
                climbing. World Nomads Explorer and Heymondo Premium cover it. Ensure your policy includes search
                and rescue, as crag evacuations require specialist rope teams. Carry an emergency satellite
                communicator if climbing off the beaten path.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Activity className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Hot Air Ballooning &amp; Paragliding
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Hot air ballooning over Marrakech is generally covered as a passenger activity by all plans.
                Paragliding in Agadir or the Atlas is considered extreme and requires World Nomads Explorer,
                Heymondo Premium, or a supplemental rider on Allianz. Always book with licensed, insured operators
                who provide safety equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is travel insurance mandatory for visiting Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco does not legally require proof of travel insurance for entry. However, it is strongly
                recommended by all major travel advisory services. Without insurance, you are personally liable
                for all medical costs, which can be substantial at private clinics. Some premium riad and tour
                operators now request proof of insurance before booking adventure activities.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I buy travel insurance after I have already arrived in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, several providers allow purchase while traveling. SafetyWing, World Nomads, and Heymondo
                all allow you to buy or extend coverage after departure. However, trip cancellation coverage
                typically only applies if purchased before departure. Medical and evacuation coverage usually
                begins 24-48 hours after purchase to prevent fraud.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Does my credit card travel insurance cover Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Some premium credit cards (Visa Platinum, Mastercard World, Amex Gold and above) include basic
                travel insurance. However, coverage is usually limited to from 500,000 MAD medical, does not cover
                adventure sports, has strict eligibility requirements (must have paid for the trip with the card),
                and excludes pre-existing conditions. For Morocco specifically, dedicated travel insurance provides
                significantly better protection.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What if I need to see a doctor for something minor?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                For minor issues (traveler&apos;s stomach, minor cuts, allergies), visit a pharmacy first. Moroccan
                pharmacists can dispense many medications without prescriptions and provide basic medical advice at
                no charge. If you need a doctor, private clinics charge from 300 MAD for a consultation. Keep receipts
                and file a claim afterward; most plans have no minimum claim amount though deductibles may apply.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are pre-existing medical conditions covered?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Most standard travel insurance policies exclude pre-existing conditions or require a stability
                period (typically 60-120 days of no treatment changes). If you have a pre-existing condition, look
                for providers that offer pre-existing condition waivers (usually available if you buy the policy
                within 14-21 days of your first trip payment). Allianz and World Nomads offer this on premium plans.
                Always disclose conditions honestly -- undisclosed conditions will void your entire policy.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I file a claim from Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Start by calling your insurer&apos;s 24/7 hotline to report the incident. For theft claims, obtain a
                police report (proces-verbal) from the local commissariat within 24 hours. For medical claims, keep
                all receipts and request a medical report from the treating doctor. Most insurers now accept digital
                claims via app or website. Heymondo and IATI have the fastest digital claims processes (averaging
                5-7 days). Submit all documentation within 30-90 days of the incident depending on your provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/safety" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Safety Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Comprehensive safety tips for traveling in Morocco, from medina navigation to scam prevention.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/adventure" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Activity className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Adventure Activities
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trekking, surfing, quad biking, and more. Complete guide to adventure sports in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/backpacking" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Briefcase className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                How to explore Morocco on a budget. From 200 MAD/day including accommodation, food, and transport.
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
