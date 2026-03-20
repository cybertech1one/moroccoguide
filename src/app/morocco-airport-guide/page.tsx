import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Plane,
  MapPin,
  Clock,
  DollarSign,
  Wifi,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Info,
  CreditCard,
  Smartphone,
  Star,
  Bus,
  Car,
  Users,
  Building,
  Globe,
  Luggage,
  Navigation,
  BadgeCheck,
  HelpCircle,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Airport Guide 2026 | Best Airport to Fly Into Morocco & Arrival Tips',
  description:
    'Find the best airport to fly into Morocco for your trip. Compare Marrakech Menara, Casablanca Mohammed V, Fes-Saiss, Tangier, Agadir & more. Taxi fares from 70 MAD, budget airlines, visa info, and transport tips.',
  keywords: [
    'Morocco airports',
    'best airport to fly into Morocco',
    'Morocco airport guide',
    'fly into Morocco',
    'Morocco airport taxi',
    'Morocco airport transfers',
    'Marrakech airport',
    'Casablanca airport',
    'Morocco budget airlines',
    'Morocco visa on arrival',
    'Morocco airport SIM card',
    'Morocco airport currency exchange',
    'Morocco arrival tips 2026',
  ],
  openGraph: {
    title: 'Morocco Airport Guide 2026 - Best Airport to Fly Into Morocco',
    description:
      'Compare all major Morocco airports: which one to fly into, transport options from 70 MAD, budget airlines, visa rules, and arrival tips for a smooth landing.',
    url: 'https://citytoursmorocco.com/morocco-airport-guide',
    images: [
      {
        url: '/images/hero-casablanca-skyline.webp',
        width: 1200,
        height: 630,
        alt: 'Aerial view of Casablanca skyline representing Morocco airport connectivity and travel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Airport Guide 2026 | Best Airport to Fly Into',
    description:
      'Which airport should you fly into in Morocco? Compare 9 airports, taxi fares, budget airlines, visa info, and arrival tips.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/morocco-airport-guide' },
};

/* =====================================================================
   JSON-LD: TravelGuide + FAQPage
   ===================================================================== */

const travelGuideJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  name: 'Morocco Airport Guide 2026',
  description:
    'Comprehensive guide to choosing the best airport to fly into Morocco, with transport options, budget airlines, visa information, and practical arrival tips for all 9 major airports.',
  url: 'https://citytoursmorocco.com/morocco-airport-guide',
  image: '/images/hero-casablanca-skyline.webp',
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best airport to fly into Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Casablanca Mohammed V (CMN) is the best airport for onward connections and is the Royal Air Maroc hub. Marrakech Menara (RAK) is ideal if the medina is your main destination. Choose Fes-Saiss (FEZ) for the imperial city, Agadir (AGA) for beach holidays, and Tangier (TNG) for northern Morocco and Chefchaouen.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is a taxi from Marrakech airport to the medina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A petit taxi from Marrakech Menara airport to the medina costs from 70 MAD (metered). The official fixed rate is approximately 100-150 MAD. Airport bus Line 19 costs from 30 MAD and takes 20-30 minutes to Jemaa el-Fnaa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a visa to enter Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Citizens of the EU, USA, UK, Canada, Australia, and many other countries can enter Morocco visa-free for up to 90 days. You will need a passport valid for at least 6 months and a completed arrival card (distributed on the plane).',
      },
    },
    {
      '@type': 'Question',
      name: 'Which budget airlines fly to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ryanair, easyJet, Transavia, Wizz Air, and Air Arabia all serve multiple Moroccan airports from European cities. Royal Air Maroc also offers competitive fares on many routes. Budget fares from Europe start from around 200-400 MAD one way.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I buy a SIM card at Moroccan airports?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most major airports have Maroc Telecom, Inwi, and Orange kiosks in the arrivals hall. Tourist SIM packages start from 30 MAD for 5 GB data valid for 30 days. You will need your passport for activation. Smaller airports may not have kiosks, but SIM cards can be bought at any corner shop in town.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a train from Casablanca airport to the city?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Casablanca Mohammed V airport has a direct ONCF train connection from the basement of Terminal 1. Trains run hourly from 6:00 AM to 10:00 PM, costing from 70 MAD to Casa Voyageurs station (55 minutes). You can also connect directly to Rabat (from 100 MAD) and Marrakech (from 190 MAD).',
      },
    },
    {
      '@type': 'Question',
      name: 'How early should I arrive at a Moroccan airport for departure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Allow 3 hours before international flights and 2 hours for domestic flights. Immigration queues at Casablanca and Marrakech can be lengthy during peak periods. Security screening is thorough but generally efficient.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I exchange money at Moroccan airports?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all major airports have ATMs and currency exchange bureaux. ATMs typically offer the best rate. Exchange rates at airports are regulated by Bank Al-Maghrib and are within 1-2% of city rates. Major ATM networks accept Visa and Mastercard.',
      },
    },
  ],
};

/* =====================================================================
   DATA
   ===================================================================== */

const airportComparison = [
  { code: 'CMN', city: 'Casablanca', name: 'Mohammed V International', passengers: '10.3M', bestFor: 'Connecting flights, Casablanca, Rabat, national hub', taxiToCenter: 'from 250 MAD', trainAvailable: true },
  { code: 'RAK', city: 'Marrakech', name: 'Menara', passengers: '7.2M', bestFor: 'Marrakech medina, Atlas Mountains, Essaouira day trips', taxiToCenter: 'from 70 MAD', trainAvailable: false },
  { code: 'FEZ', city: 'Fes', name: 'Fes-Saiss', passengers: '1.8M', bestFor: 'Fes medina, Meknes, Volubilis, Middle Atlas', taxiToCenter: 'from 120 MAD', trainAvailable: false },
  { code: 'TNG', city: 'Tangier', name: 'Ibn Battouta', passengers: '2.1M', bestFor: 'Tangier, Chefchaouen, northern Morocco, Rif Mountains', taxiToCenter: 'from 150 MAD', trainAvailable: false },
  { code: 'AGA', city: 'Agadir', name: 'Al Massira', passengers: '2.8M', bestFor: 'Beach holidays, Taghazout surf, Souss-Massa, Anti-Atlas', taxiToCenter: 'from 200 MAD', trainAvailable: false },
  { code: 'RBA', city: 'Rabat', name: 'Rabat-Sale', passengers: '0.9M', bestFor: 'Capital city visits, Meknes, business travel', taxiToCenter: 'from 100 MAD', trainAvailable: false },
  { code: 'ESU', city: 'Essaouira', name: 'Mogador', passengers: '0.4M', bestFor: 'Essaouira medina, wind sports, Atlantic coast', taxiToCenter: 'from 150 MAD', trainAvailable: false },
  { code: 'OZZ', city: 'Ouarzazate', name: 'Ouarzazate', passengers: '0.1M', bestFor: 'Sahara Desert, kasbahs, Ait Benhaddou, film studios', taxiToCenter: 'from 50 MAD', trainAvailable: false },
  { code: 'NDR', city: 'Nador', name: 'Nador International', passengers: '1.2M', bestFor: 'Rif coast, Al Hoceima, Marchica lagoon, Melilla', taxiToCenter: 'from 100 MAD', trainAvailable: false },
] as const;

const majorAirports = [
  {
    name: 'Casablanca Mohammed V (CMN)',
    city: 'Casablanca',
    distance: '30 km south of city center',
    terminals: 2,
    summary: 'Morocco\'s largest and busiest airport, serving as the Royal Air Maroc hub with over 10.3 million annual passengers. Terminal 1 handles most international flights; Terminal 2 serves low-cost and charter carriers. The only Moroccan airport with a direct rail connection -- ONCF trains run hourly from the Terminal 1 basement to Casablanca, Rabat, Marrakech, and Fes.',
    transport: 'Airport Train from 70 MAD (55 min to Casa Voyageurs) | Petit Taxi from 250 MAD (30-45 min) | Grand Taxi from 300 MAD | Private Transfer from 400 MAD | Car Rental from 300 MAD/day',
    topAirlines: 'Royal Air Maroc, Ryanair, easyJet, Air France, Turkish Airlines, Emirates, Qatar Airways, Transavia',
    tip: 'Take the airport train -- it is the cheapest and most reliable way into Casablanca and connects to the national rail network for onward travel.',
  },
  {
    name: 'Marrakech Menara (RAK)',
    city: 'Marrakech',
    distance: '6 km southwest of medina',
    terminals: 2,
    summary: 'The tourist gateway to Morocco with 7.2 million annual passengers. Terminal 1 handles full-service carriers; Terminal 2 (expanded 2023) serves low-cost airlines. Only 15-20 minutes from the medina by taxi. The architecturally striking copper-toned roofline echoes traditional Moroccan design. E-gates for EU and Moroccan passport holders speed up immigration.',
    transport: 'Bus Line 19 from 30 MAD (20-30 min to Jemaa el-Fnaa) | Petit Taxi from 70 MAD (15-20 min) | Private Transfer from 150 MAD | Car Rental from 250 MAD/day',
    topAirlines: 'Ryanair, easyJet, Transavia, Royal Air Maroc, British Airways, Wizz Air, TUI fly, Norwegian',
    tip: 'If staying in the medina, book a riad transfer -- navigating the narrow alleys to your accommodation is nearly impossible without local knowledge.',
  },
  {
    name: 'Fes-Saiss (FEZ)',
    city: 'Fes',
    distance: '15 km south of medina',
    terminals: 1,
    summary: 'A modern single terminal completed in 2017, handling 1.8 million passengers annually. Compact and easy to navigate with immigration typically cleared in under 20 minutes. The gateway to Morocco\'s oldest imperial city, the world\'s largest car-free urban area, and the nearby Roman ruins of Volubilis.',
    transport: 'Bus Line 16 from 20 MAD (30-40 min) | Petit Taxi from 120 MAD (20-25 min) | Private Transfer from 200 MAD',
    topAirlines: 'Ryanair, Transavia, Royal Air Maroc, Air Arabia, Wizz Air, TUI fly',
    tip: 'Pre-arrange a riad transfer if staying in the old medina. Many riads are deep within pedestrian-only zones and impossible to reach by car -- your driver will arrange a porter.',
  },
  {
    name: 'Tangier Ibn Battouta (TNG)',
    city: 'Tangier',
    distance: '12 km from city center',
    terminals: 1,
    summary: 'Named after the famous medieval Moroccan explorer, this modern terminal was expanded in 2019. Handles 2.1 million passengers annually with a calm, uncrowded atmosphere. The gateway to northern Morocco, the Rif Mountains, and the blue-painted town of Chefchaouen (2-hour drive).',
    transport: 'Petit Taxi from 150 MAD (15-20 min) | Grand Taxi from 200 MAD | Private Transfer from 200 MAD',
    topAirlines: 'Ryanair, Royal Air Maroc, Air Arabia, Transavia, TUI fly, Vueling',
    tip: 'Tangier is connected by the Al Boraq high-speed train to Casablanca (2h10) and Rabat (1h20), making it an excellent entry point for a multi-city tour heading south.',
  },
  {
    name: 'Agadir Al Massira (AGA)',
    city: 'Agadir',
    distance: '25 km southeast of city center',
    terminals: 2,
    summary: 'Morocco\'s beach holiday gateway with 2.8 million annual passengers. Terminal 1 handles scheduled flights; Terminal 2 serves winter charters from Europe. Both terminals renovated in 2022. Access to the Agadir beach promenade, the famous surf town of Taghazout (30 min north), and the Anti-Atlas mountains.',
    transport: 'Bus Line 22 from 25 MAD (40-50 min) | Grand Taxi from 200 MAD (25-30 min to beach zone) | Private Transfer from 250 MAD | Car Rental from 250 MAD/day',
    topAirlines: 'TUI fly, Transavia, Ryanair, Royal Air Maroc, easyJet, Condor, Jet2, SunExpress',
    tip: 'If heading to Taghazout for surfing, arrange a surf camp shuttle in advance. Grand taxis to Taghazout cost from 350 MAD from the airport.',
  },
  {
    name: 'Rabat-Sale (RBA)',
    city: 'Rabat',
    distance: '8 km northeast of city center',
    terminals: 1,
    summary: 'A compact, efficient single-terminal airport serving Morocco\'s capital city with 0.9 million annual passengers. Rarely crowded and one of the most pleasant airports to transit. Limited international routes but ideal for visitors specifically targeting Rabat, Meknes, or the nearby Chellah necropolis.',
    transport: 'Petit Taxi from 100 MAD (15-20 min, metered) | Grand Taxi from 150 MAD | Tram + Taxi from 40 MAD total (30-40 min)',
    topAirlines: 'Royal Air Maroc, Ryanair, Air Arabia, Transavia',
    tip: 'Rabat petit taxis reliably use meters, unlike some other cities. The capital also offers excellent tram connections from the city center.',
  },
  {
    name: 'Essaouira Mogador (ESU)',
    city: 'Essaouira',
    distance: '16 km east of medina',
    terminals: 1,
    summary: 'A charming small airport with 0.4 million annual passengers, providing direct access to the UNESCO-listed medina and Atlantic coast without transiting through Marrakech (3-hour drive avoided). Growing European route network from Ryanair and Transavia.',
    transport: 'Grand Taxi from 150 MAD (15-20 min) | Hotel Transfer from 150 MAD',
    topAirlines: 'Ryanair, Transavia, easyJet (seasonal)',
    tip: 'Flying directly into ESU saves 3 hours compared to arriving at Marrakech and driving. Limited facilities at the airport -- have some MAD ready or withdraw from the single ATM.',
  },
  {
    name: 'Ouarzazate (OZZ)',
    city: 'Ouarzazate',
    distance: '3 km from city center',
    terminals: 1,
    summary: 'A small desert airstrip known as the gateway to Morocco\'s film studios and the Sahara Desert, handling just 0.1 million passengers annually. Dramatic Atlas Mountain views from the runway. Limited seasonal flights but transformative if available for your dates -- skips the 5-hour drive from Marrakech.',
    transport: 'Petit Taxi from 50 MAD (10 min) | Hotel/Kasbah Transfer from 100 MAD',
    topAirlines: 'Royal Air Maroc (limited seasonal), Transavia (seasonal)',
    tip: 'Flights are infrequent and seasonal. Check availability early. The single ATM occasionally runs out of cash -- bring MAD from your previous stop.',
  },
  {
    name: 'Nador International (NDR)',
    city: 'Nador',
    distance: '12 km from city center',
    terminals: 1,
    summary: 'Located in northeastern Morocco\'s Rif region, primarily serving the Moroccan diaspora community in Europe with 1.2 million annual passengers. Terminal modernized in 2021. Gateway to the Mediterranean coast, Marchica lagoon resort, and access to Al Hoceima (2-hour drive).',
    transport: 'Grand Taxi from 100 MAD (15-20 min) | Private Transfer from 200 MAD',
    topAirlines: 'Ryanair, Air Arabia, Royal Air Maroc, Transavia, TUI fly',
    tip: 'Traffic peaks in summer when diaspora families return. Book transfers in advance during July and August.',
  },
] as const;

const budgetAirlines = [
  { name: 'Ryanair', base: 'Europe-wide', airports: 'CMN, RAK, FEZ, TNG, AGA, RBA, ESU, NDR', note: 'Largest low-cost presence in Morocco. Fares from around 200 MAD one way from dozens of European cities. Strict baggage policies -- book carry-on priority boarding in advance to guarantee overhead space. Serves 8 of 9 major Moroccan airports.' },
  { name: 'easyJet', base: 'UK & Europe', airports: 'CMN, RAK, AGA, ESU', note: 'Strong service from London Gatwick, Paris CDG, and other major European hubs. Slightly more generous baggage allowance than Ryanair. Frequent sales with fares from 300 MAD one way.' },
  { name: 'Transavia', base: 'France & Netherlands', airports: 'CMN, RAK, FEZ, TNG, AGA, OZZ, NDR', note: 'Air France subsidiary with the strongest Morocco route network among budget carriers. Competitive fares from Paris Orly, Amsterdam, and Lyon. One of the few airlines serving Ouarzazate.' },
  { name: 'Royal Air Maroc', base: 'Casablanca (CMN)', airports: 'All Moroccan airports', note: 'National carrier and Star Alliance member with the widest route network. Not strictly budget but competitive on many routes, especially domestic hops (from 500 MAD). Full baggage allowance included. The only airline connecting all 9 airports domestically.' },
  { name: 'Wizz Air', base: 'Central Europe', airports: 'RAK, FEZ', note: 'Ultra-low fares from Budapest, Vienna, Rome, and other Central European cities. Growing Morocco presence. All add-ons are paid -- pack light for the lowest fares.' },
  { name: 'Air Arabia', base: 'Casablanca & Middle East', airports: 'CMN, TNG, FEZ, NDR, RBA', note: 'UAE-based low-cost carrier operating a secondary hub from Casablanca Mohammed V. Excellent for connections from the Gulf region and affordable domestic routes within Morocco.' },
  { name: 'TUI fly', base: 'Europe (charter & scheduled)', airports: 'CMN, RAK, FEZ, TNG, AGA, NDR', note: 'Charter and scheduled flights from Germany, Belgium, Netherlands, and Scandinavia. Popular for package holidays, especially winter sun to Agadir. Generous baggage allowances on package deals.' },
] as const;

const facilities = [
  { title: 'Currency Exchange & ATMs', icon: 'DollarSign', description: 'All major airports have ATMs (BMCE, Banque Populaire, CIH Bank) accepting Visa and Mastercard. Exchange bureaux offer rates regulated by Bank Al-Maghrib, within 1-2% of city rates. Withdraw MAD from ATMs for the best deal -- most machines dispense 100 and 200 MAD notes. Notify your bank before travel to avoid card blocks.' },
  { title: 'SIM Cards & Mobile Data', icon: 'Smartphone', description: 'Maroc Telecom, Inwi, and Orange operate kiosks at Casablanca, Marrakech, Agadir, Tangier, and Fes airports. Tourist SIM packages start from 30 MAD for 5 GB data (30-day validity). Maroc Telecom has the best rural coverage for Atlas and Sahara trips; Inwi typically offers the best data-heavy packages. Passport required for activation.' },
  { title: 'Airport WiFi', icon: 'Wifi', description: 'Free WiFi is available at Casablanca, Marrakech, Tangier, and Agadir airports. Connection quality varies -- expect speeds of 2-5 Mbps, sufficient for messaging but not video calls. Time-limited sessions (30-60 minutes free). For reliable connectivity throughout your trip, purchasing a SIM card on arrival is strongly recommended.' },
  { title: 'Airport Lounges', icon: 'Star', description: 'Pearl Lounge operates paid-access lounges at Casablanca (from 350 MAD, Terminal 1), Marrakech (from 300 MAD, Terminal 1), and Agadir (from 300 MAD, Terminal 1). Priority Pass is accepted at all three. Lounges offer hot food, drinks, WiFi, power outlets, and showers at CMN. Smaller airports have no lounge facilities.' },
  { title: 'Prayer Rooms & Accessibility', icon: 'Building', description: 'All Moroccan airports have prayer rooms (musalla) available to passengers regardless of faith, signposted in Arabic, French, and English. Wheelchair assistance is available at major airports -- request through your airline at least 48 hours before departure. Family facilities including baby-changing rooms are available at CMN, RAK, and AGA.' },
  { title: 'Luggage Storage & Wrapping', icon: 'Luggage', description: 'Luggage wrapping services are available at Casablanca and Marrakech airports from 50 MAD per bag. Left-luggage storage is limited -- only Casablanca offers a formal service (from 40 MAD per bag per day). If you have a long layover, consider using the luggage storage at Casa Voyageurs train station as an alternative.' },
] as const;

const arrivalChecklist = [
  { title: 'Fill Your Arrival Card on the Plane', detail: 'Immigration cards are distributed during the flight. Complete yours before landing to skip the writing desks at immigration. You need your passport number, hotel/riad name and address, flight number, and length of stay. Cards are available in French and English.' },
  { title: 'Visa-Free Entry for 60+ Countries', detail: 'EU, USA, UK, Canada, Australia, Japan, South Korea, New Zealand, and 60+ other nationalities enter visa-free for 90 days. Your passport must be valid for at least 6 months beyond your entry date. No vaccination certificates are required as of 2026. Have your hotel booking confirmation accessible.' },
  { title: 'Immigration & E-Gates', detail: 'Major airports (CMN and RAK) have electronic passport gates for EU and Moroccan nationals, significantly speeding up processing. Other nationalities use staffed booths. Peak wait times at Casablanca can reach 30-45 minutes in summer; off-peak, expect 10-15 minutes. Fes, Tangier, and smaller airports are typically much faster.' },
  { title: 'Customs Declaration & Allowances', detail: 'You may bring: 200 cigarettes or 50 cigars, 1 liter of spirits, personal effects, and gifts valued under 2,000 MAD. Alcohol import is permitted for non-Muslims. Drone import requires prior DGAC authorization. Professional filming equipment may require a carnet. Undeclared items over the limit may be confiscated.' },
  { title: 'Baggage Claim & Exit Checks', detail: 'Luggage generally arrives within 20-40 minutes. At Casablanca and Marrakech, security staff check your baggage tag receipts against your luggage at the exit doors -- keep your stubs from check-in. Report any damage or loss immediately at the airline desk in the arrivals hall before leaving the airport.' },
  { title: 'First Steps After Customs', detail: 'After clearing customs, visit the ATM to withdraw MAD (from 200 MAD minimum), purchase a SIM card if kiosks are open, and locate your transport. Official taxi ranks and transfer meeting points are signposted. Avoid touts offering "special prices" inside the terminal -- walk to the official ranks outside.' },
] as const;

const departureChecklist = [
  { title: 'Check-In Timing', detail: 'Arrive 3 hours before international flights and 2 hours for domestic. Online check-in is available on most airlines and strongly recommended to skip counter queues. Print your boarding pass or have it accessible on your phone. Some low-cost carriers charge for airport check-in.' },
  { title: 'Security & Screening', detail: 'Security screening is thorough at all Moroccan airports. Liquids must be in containers under 100 ml within a clear plastic bag. Electronics may need to be removed from bags. Remove belts and jackets. The process is efficient but can be slow during peak departure waves, especially at Casablanca between 10:00 AM and 2:00 PM.' },
  { title: 'Passport Control on Departure', detail: 'All departing passengers go through exit immigration. Have your passport and boarding pass ready. The process is usually quick (5-10 minutes) but can back up when multiple flights depart simultaneously. E-gates are available for eligible passport holders at CMN and RAK.' },
  { title: 'Duty-Free Shopping', detail: 'Casablanca and Marrakech have the best duty-free selections including argan oil (from 80 MAD), Moroccan sweets, leather goods, local ceramics, and international perfume and electronics brands. Prices are reasonable compared to European airports. Smaller airports have minimal or no shopping beyond a newsstand and cafe.' },
  { title: 'Dirham Export Restrictions', detail: 'The Moroccan Dirham is a restricted currency -- you cannot legally take more than 2,000 MAD out of the country. Exchange remaining MAD at airport exchange counters before departing, or spend it at duty-free. Keep exchange receipts in case they are requested at customs.' },
  { title: 'No Separate Departure Tax', detail: 'There is no separate departure tax in Morocco. All airport fees and taxes are included in your airline ticket price. You do not need to pay anything additional at the airport when leaving. This applies to all airlines and all airports.' },
] as const;

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function MoroccoAirportGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelGuideJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-casablanca-skyline.webp"
            alt="Casablanca cityscape at sunset representing Morocco aviation hub and airport connectivity"
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
            <Link href="/travel-tips" className="hover:text-white transition-colors">Travel Tips</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Morocco Airport Guide</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Plane className="w-4 h-4 text-[var(--color-accent)]" />
              Airport &amp; Travel Guide
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Airport Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Which airport should you fly into? How do you get to your hotel? From
              Casablanca&apos;s international hub to the intimate desert airstrip at Ouarzazate,
              this guide covers every airport you need to know for a seamless arrival
              in Morocco.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">9</p>
                <p className="text-sm text-white/70">Major airports</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">From 70</p>
                <p className="text-sm text-white/70">MAD airport taxi</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">90 Days</p>
                <p className="text-sm text-white/70">Visa-free entry</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">7+</p>
                <p className="text-sm text-white/70">Budget airlines</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose-moroccan">
                <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
                  Choosing the Right Airport for Your Morocco Trip
                </h2>
                <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Morocco has nine major airports handling international flights, and picking the
                    right one can save you hours of overland travel and hundreds of dirhams in
                    transfers. The best airport to fly into depends entirely on your itinerary: are
                    you heading straight to the Marrakech medina, exploring the imperial cities of
                    Fes and Meknes, surfing in Taghazout, or starting a Sahara Desert adventure?
                  </p>
                  <p>
                    Casablanca Mohammed V (CMN) is the country&apos;s largest hub with the most
                    international connections and the only airport rail link. Marrakech Menara (RAK)
                    is the tourist favorite, just 15 minutes from the medina by taxi. But
                    lesser-known airports like Essaouira Mogador and Ouarzazate can put you exactly
                    where you want to be without a long road journey.
                  </p>
                  <p>
                    The explosion of budget airlines serving Morocco -- Ryanair, easyJet, Transavia,
                    Wizz Air, and Air Arabia -- means you have more routing options from Europe than
                    ever before, with one-way fares starting from around 200 MAD. Prices quoted
                    throughout this guide are in Moroccan Dirhams (MAD) and may vary by season
                    and operator.
                  </p>
                  <p>
                    All nine airports have undergone significant modernization in recent years.
                    Terminal expansions at Casablanca, Marrakech, and Agadir have added capacity
                    and improved passenger flow. Electronic passport gates at major airports have
                    accelerated immigration processing for EU and Moroccan nationals. And
                    Morocco&apos;s ONDA (the national airports authority) has invested in improved
                    WiFi, signage in Arabic, French, and English, and expanded duty-free shopping
                    at the busiest terminals.
                  </p>
                  <p>
                    Whether you are a first-time visitor or a returning traveler, understanding
                    the differences between airports will help you make smarter booking decisions.
                    A traveler heading to Chefchaouen, for example, saves 4-5 hours by flying
                    into Tangier instead of Casablanca. Someone planning a Sahara Desert
                    expedition might find a seasonal Transavia flight into Ouarzazate that
                    eliminates the 5-hour drive over the Atlas Mountains entirely.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="card-moroccan p-6 sticky top-28">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-5">
                  Quick Airport Finder
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Marrakech Trip', value: 'Fly into RAK', detail: 'Menara -- 6 km from medina' },
                    { label: 'Fes & Imperial Cities', value: 'Fly into FEZ', detail: 'Fes-Saiss -- 15 km to medina' },
                    { label: 'Beach Holiday', value: 'Fly into AGA', detail: 'Al Massira -- Agadir & Taghazout' },
                    { label: 'Multi-City Tour', value: 'Fly into CMN', detail: 'Casablanca -- train hub to all cities' },
                    { label: 'Northern Morocco', value: 'Fly into TNG', detail: 'Ibn Battouta -- gateway to Chefchaouen' },
                  ].map((tip) => (
                    <div key={tip.label} className="flex items-start gap-3">
                      <Navigation className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-[var(--text-primary)] text-sm">{tip.label}</p>
                        <p className="text-sm text-[var(--text-secondary)]">{tip.value} -- {tip.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-4 italic">
                  Prices may vary by season and operator. All prices are approximate.
                </p>
                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                  <a href="#airports" className="block w-full text-center px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors">
                    View All Airport Guides
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Airport Comparison Table ── */}
      <section id="comparison" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Side-by-Side Comparison
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              All 9 Major Morocco Airports at a Glance
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              A quick overview to help you decide which airport is right for your itinerary and budget.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="text-left p-3 font-semibold rounded-tl-lg">Code</th>
                  <th className="text-left p-3 font-semibold">City / Airport</th>
                  <th className="text-left p-3 font-semibold">Passengers</th>
                  <th className="text-left p-3 font-semibold">Best For</th>
                  <th className="text-left p-3 font-semibold">Taxi to Center</th>
                  <th className="text-left p-3 font-semibold rounded-tr-lg">Train</th>
                </tr>
              </thead>
              <tbody>
                {airportComparison.map((a, i) => (
                  <tr key={a.code} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                    <td className="p-3 font-bold text-[var(--color-secondary)]">{a.code}</td>
                    <td className="p-3 font-semibold text-[var(--text-primary)]">
                      {a.city} -- {a.name}
                    </td>
                    <td className="p-3 text-[var(--text-secondary)]">{a.passengers}</td>
                    <td className="p-3 text-[var(--text-secondary)]">{a.bestFor}</td>
                    <td className="p-3 font-semibold text-[var(--color-accent)]">{a.taxiToCenter}</td>
                    <td className="p-3">
                      {a.trainAvailable ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <span className="text-[var(--text-muted)]">--</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-4 text-center italic">
            Passenger figures are 2024 estimates. Taxi fares are approximate starting prices and may vary seasonally.
          </p>
        </div>
      </section>

      {/* ── Major Airport Overviews ── */}
      <section id="airports" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Airport by Airport
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Major Airport Overviews
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Key details for each of Morocco&apos;s nine international airports, including
              transport options and insider tips.
            </p>
          </div>
          <div className="space-y-6">
            {majorAirports.map((airport, index) => (
              <div key={airport.name} className="card-moroccan overflow-hidden">
                <div className="bg-[var(--color-primary)] text-white p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-white/60 uppercase tracking-wider">
                      Airport {index + 1} of {majorAirports.length}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold mt-1">
                      {airport.name}
                    </h3>
                    <p className="text-sm text-white/70 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5" /> {airport.city} &middot; {airport.distance}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
                      {airport.terminals} Terminal{airport.terminals > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8 space-y-4">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{airport.summary}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                      <h4 className="font-semibold text-sm text-[var(--text-primary)] mb-2 flex items-center gap-2">
                        <Car className="w-4 h-4 text-[var(--color-secondary)]" />
                        Transport to City Center
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">{airport.transport}</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                      <h4 className="font-semibold text-sm text-[var(--text-primary)] mb-2 flex items-center gap-2">
                        <Plane className="w-4 h-4 text-[var(--color-secondary)]" />
                        Top Airlines
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">{airport.topAirlines}</p>
                    </div>
                  </div>
                  <div className="bg-[var(--color-secondary)]/5 rounded-lg p-4 border-l-4 border-[var(--color-secondary)]">
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-bold text-[var(--color-secondary)]">Insider Tip:</span> {airport.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Airport by Itinerary ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Match Your Trip
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Best Airport for Every Itinerary
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Not sure which airport to book? Here are our recommendations based on popular Morocco trip types.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { itinerary: 'Marrakech & Atlas Mountains', airport: 'Marrakech Menara (RAK)', reason: 'Only 6 km from the medina. The Atlas foothills begin 45 minutes south by car. No need to transit through Casablanca. The best airport if Marrakech is your primary destination.', time: '15-20 min to medina' },
              { itinerary: 'Imperial Cities Tour', airport: 'Casablanca (CMN) or Fes (FEZ)', reason: 'CMN offers ONCF train connections to all four imperial cities. FEZ puts you directly in the oldest medina. For maximum efficiency, fly into one and out of the other.', time: 'Train hub access' },
              { itinerary: 'Sahara Desert Adventure', airport: 'Ouarzazate (OZZ) or Marrakech (RAK)', reason: 'OZZ is closest to the desert but has limited seasonal flights. RAK is the practical choice with a stunning 5-hour drive to Merzouga via the Tizi n\'Tichka mountain pass.', time: '5h drive from RAK' },
              { itinerary: 'Beach & Surf Holiday', airport: 'Agadir Al Massira (AGA)', reason: 'Direct access to Agadir\'s 10-km beach promenade and the famous surf town of Taghazout (30 min drive north). Excellent winter charter availability from November to March.', time: '25-30 min to beach' },
              { itinerary: 'Chefchaouen & the Rif', airport: 'Tangier Ibn Battouta (TNG)', reason: 'The blue-painted town of Chefchaouen is a 2-hour drive southeast. No airport is closer. Combine with Tangier\'s vibrant medina and stunning Cape Spartel views.', time: '2h to Chefchaouen' },
              { itinerary: 'Essaouira & Atlantic Coast', airport: 'Essaouira Mogador (ESU)', reason: 'Skip the 3-hour drive from Marrakech entirely. Direct Ryanair and Transavia flights from European cities put you 15 minutes from the UNESCO-listed medina and wind sports coast.', time: '15-20 min to medina' },
              { itinerary: 'Rabat & Roman Ruins', airport: 'Rabat-Sale (RBA)', reason: 'Direct access to Morocco\'s elegant capital city and within easy reach of the Roman ruins at Volubilis and the imperial city of Meknes. The calmest, least crowded airport in the country.', time: '15-20 min to Rabat' },
              { itinerary: 'Multi-City Open Jaw', airport: 'Fly into RAK, out of FEZ (or reverse)', reason: 'Book two one-way budget flights on Ryanair or Transavia. Cover Marrakech, the Atlas, and Fes without backtracking. Add Casablanca and Rabat as train stops in between.', time: 'Saves 1-2 days' },
            ].map((item) => (
              <div key={item.itinerary} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-[var(--color-secondary)]" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {item.itinerary}
                  </h3>
                </div>
                <p className="text-sm font-semibold text-[var(--color-secondary)] mb-2">
                  <Plane className="w-3.5 h-3.5 inline mr-1" />{item.airport}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{item.reason}</p>
                <span className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)]">
                  <Clock className="w-3 h-3" /> {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Airport Facilities ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              On the Ground
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Airport Facilities &amp; Services
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              What to expect when you land -- from exchanging money to getting connected with a local SIM card.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f) => (
              <div key={f.title} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  {f.icon === 'DollarSign' && <DollarSign className="w-4 h-4 text-[var(--color-secondary)]" />}
                  {f.icon === 'Smartphone' && <Smartphone className="w-4 h-4 text-[var(--color-secondary)]" />}
                  {f.icon === 'Wifi' && <Wifi className="w-4 h-4 text-[var(--color-secondary)]" />}
                  {f.icon === 'Star' && <Star className="w-4 h-4 text-[var(--color-secondary)]" />}
                  {f.icon === 'Building' && <Building className="w-4 h-4 text-[var(--color-secondary)]" />}
                  {f.icon === 'Luggage' && <Luggage className="w-4 h-4 text-[var(--color-secondary)]" />}
                  {f.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transport from Airports ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Getting to Your Hotel
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Airport Transport Options Explained
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Every way to get from the airport to your accommodation, with typical costs and journey times.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { mode: 'Petit Taxis', icon: Car, price: 'from 50 MAD', desc: 'Small, colored taxis limited to 3 passengers. Metered in theory, but airport drivers frequently quote fixed prices. Always negotiate before entering. The cheapest motorized option after buses. Taxi colors vary by city: red in Casablanca and Fes, beige in Marrakech, blue in Rabat, and blue-and-white in Tangier.' },
              { mode: 'Grand Taxis', icon: Users, price: 'from 100 MAD', desc: 'Large Mercedes sedans carrying up to 6 passengers on shared routes, or hired privately for a higher fare. Fixed-price service from all airports. Ideal for groups, families, or destinations not served by petit taxis. Available at all airports and often the only taxi option at smaller airports like Nador and Essaouira.' },
              { mode: 'Airport Buses', icon: Bus, price: 'from 20 MAD', desc: 'Available at Casablanca, Marrakech (Line 19 to Jemaa el-Fnaa, from 30 MAD), Fes (Line 16 to city center, from 20 MAD), and Agadir (Line 22, from 25 MAD). The cheapest way into town. Services run from early morning to late evening with 20-45 minute frequency. Limited luggage space on busy routes.' },
              { mode: 'ONCF Airport Train', icon: Navigation, price: 'from 70 MAD', desc: 'Only available at Casablanca Mohammed V airport. Trains run hourly from 6:00 AM to 10:00 PM to Casa Voyageurs station (55 min), with direct connections to Rabat (from 100 MAD, 1h30), Marrakech (from 190 MAD, 3h30), Fes, and Tangier. Station is in the Terminal 1 basement.' },
              { mode: 'Private Transfers', icon: BadgeCheck, price: 'from 150 MAD', desc: 'Pre-booked through your hotel, riad, or an online transfer service. Driver meets you in the arrivals hall with a name sign. The most stress-free option, especially for medina riads where navigating narrow alleys is challenging. Book at least 24 hours in advance. Most riads include this service or arrange it for a fee.' },
              { mode: 'Car Rental', icon: Car, price: 'from 250 MAD/day', desc: 'Major international agencies (Hertz, Avis, Europcar) and local companies operate desks at Casablanca, Marrakech, Fes, Tangier, and Agadir. Book online for better rates and guaranteed availability. An International Driving Permit is recommended though not always required. Note: driving inside medinas is impractical and often prohibited.' },
            ].map((t) => (
              <div key={t.mode} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-secondary)]/10 flex items-center justify-center">
                    <t.icon className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{t.mode}</h3>
                    <p className="text-sm font-semibold text-[var(--color-accent)]">{t.price}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-6 text-center italic">
            All prices are approximate starting fares in Moroccan Dirhams (MAD). Actual costs vary by distance, time of day, and seasonal demand.
          </p>
        </div>
      </section>

      {/* ── Budget Airlines ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Getting There for Less
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Budget Airlines Serving Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Low-cost carriers have made Morocco one of the most affordable destinations from Europe. Here are the key airlines to compare.
            </p>
          </div>
          <div className="space-y-4">
            {budgetAirlines.map((airline) => (
              <div key={airline.name} className="card-moroccan p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <Plane className="w-4 h-4 text-[var(--color-secondary)]" />
                    {airline.name}
                  </h3>
                  <span className="text-xs text-[var(--text-muted)]">Base: {airline.base}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">{airline.note}</p>
                <p className="text-xs text-[var(--text-muted)]">
                  <span className="font-semibold">Morocco airports served:</span> {airline.airports}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Arrival Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Smooth Landing
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Arrival Tips: Visa, Customs &amp; Baggage
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to know for a smooth arrival at any Moroccan airport.
            </p>
          </div>
          <div className="space-y-4">
            {arrivalChecklist.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5 border-l-4 border-[var(--color-secondary)]">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">{tip.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Departure Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Heading Home
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Departure Tips: Check-In, Duty Free &amp; Regulations
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              What to know before you head to the airport for your flight home.
            </p>
          </div>
          <div className="space-y-4">
            {departureChecklist.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5 border-l-4 border-[var(--color-accent)]">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">{tip.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Important Travel Notices ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
            Important Travel Notices
          </h2>
          <div className="space-y-4">
            <div className="card-moroccan p-5 border-l-4 border-[var(--color-accent)]">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">
                    Currency Restrictions on Entry &amp; Exit
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    The Moroccan Dirham is a restricted currency. You cannot legally bring
                    more than 2,000 MAD into or out of the country. Plan to withdraw MAD
                    from airport ATMs on arrival and exchange any remaining MAD back before
                    departure. Airport exchange counters and duty-free shops accept MAD.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-[var(--color-secondary)]">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">
                    Passport Validity Requirement
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Your passport must be valid for at least 6 months beyond your date of
                    entry into Morocco. This is strictly enforced at check-in counters and
                    immigration. Airlines may deny boarding if your passport does not meet
                    this requirement. Check your passport expiry date before booking flights.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-[var(--color-secondary)]">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">
                    Drone Import Regulations
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Bringing a drone into Morocco requires prior authorization from the
                    Moroccan Civil Aviation Authority (DGAC). Unauthorized drones may be
                    confiscated at customs. Apply at least 2 weeks before travel. Flying
                    drones near airports, military installations, and royal palaces is
                    strictly prohibited.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-[var(--color-secondary)]">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">
                    Open Jaw Flights Save Time
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    For multi-city itineraries, consider booking &quot;open jaw&quot; flights --
                    flying into one airport and out of another. For example, fly into
                    Marrakech (RAK) and out of Fes (FEZ) to cover both cities without
                    backtracking. Budget airlines like Ryanair make this affordable as
                    you simply book two separate one-way tickets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Common Questions
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Quick answers to the most common questions about flying to and from Morocco.
            </p>
          </div>
          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq) => (
              <details key={faq.name} className="card-moroccan group">
                <summary className="p-5 cursor-pointer flex items-start gap-3 list-none [&::-webkit-details-marker]:hidden">
                  <HelpCircle className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] flex-1">
                    {faq.name}
                  </span>
                  <ChevronRight className="w-5 h-5 text-[var(--text-muted)] transition-transform group-open:rotate-90 shrink-0 mt-0.5" />
                </summary>
                <div className="px-5 pb-5 pl-13">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)] mb-4">
              Related Travel Guides
            </h2>
            <p className="text-[var(--text-secondary)]">
              Continue planning your Morocco trip with these detailed guides on transport,
              airports, and getting around.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Morocco Airports Overview', href: '/airports', desc: 'Quick-reference airport directory with codes, locations, and key facts for all commercial Moroccan airports.' },
              { title: 'Detailed Airports Guide', href: '/morocco-airports-guide', desc: 'In-depth terminal information, complete airline lists, lounges, and services at every major Morocco airport.' },
              { title: 'Airport Transfers', href: '/morocco-airport-transfers', desc: 'Complete guide to booking private transfers, shared shuttles, and hotel pickups from any Moroccan airport.' },
              { title: 'Morocco Transport Guide', href: '/transport', desc: 'Trains, buses, grand taxis, and domestic flights -- how to get around Morocco once you arrive.' },
              { title: 'Car Rental Guide', href: '/morocco-car-rental', desc: 'Everything you need to know about renting a car in Morocco: costs from 250 MAD/day, insurance, and driving tips.' },
              { title: 'First Time in Morocco', href: '/first-time', desc: 'Essential tips for first-time visitors including money, safety, cultural etiquette, and what to pack.' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                  {link.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{link.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-secondary)] group-hover:text-[var(--color-secondary-dark)] transition-colors">
                  Read Guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Save Money
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Flight Booking Tips for Morocco
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[var(--color-secondary)]" />
                Book Early for Peak Season
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Peak season runs from October to April for southern Morocco (Marrakech,
                Agadir) and June to September for northern cities (Tangier, Chefchaouen).
                Book at least 2-3 months ahead for the best budget airline fares. Last-minute
                prices can be 3-5 times higher during school holidays.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Star className="w-4 h-4 text-[var(--color-secondary)]" />
                Compare Multiple Airports
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Fares to smaller airports like Fes, Tangier, and Essaouira are often
                cheaper than flights to Marrakech and Casablanca. Use flight comparison
                tools that search nearby airports. A cheaper flight plus a bus or train
                connection can save significantly on the total trip cost.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Luggage className="w-4 h-4 text-[var(--color-secondary)]" />
                Budget Airline Baggage Strategy
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Budget carriers charge from 150-400 MAD for checked luggage if booked
                online, and significantly more at the airport. Pack light with just a
                carry-on if possible. Buy souvenirs in Marrakech? Consider shipping
                them home rather than paying excess baggage fees on your return flight.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4 text-[var(--color-secondary)]" />
                Midweek Flights Are Cheapest
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Tuesday, Wednesday, and Thursday departures are typically 20-40% cheaper
                than weekend flights to Morocco. If your schedule allows flexibility,
                searching for midweek options can yield significant savings, especially
                on Ryanair and easyJet routes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Ready to Book Your Morocco Flight?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
            Now that you know which airport to fly into, explore our city guides to plan every
            detail of your Moroccan adventure -- from medina walks to Sahara Desert camps
            and Atlantic coast surfing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors"
            >
              Explore City Guides <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/best-time"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] font-semibold rounded-lg hover:bg-[var(--color-secondary)]/5 transition-colors"
            >
              Best Time to Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
