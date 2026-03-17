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
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Airports Guide 2026 | Terminals, Transport & Tips for Every Airport',
  description:
    'Complete guide to all Morocco airports: Marrakech Menara, Casablanca Mohammed V, Fes-Saiss, Tangier, Agadir, Rabat-Sale, Ouarzazate, Nador, Essaouira. Terminal info, taxi costs from 70 MAD, SIM cards, currency exchange, and hotel transfers.',
  keywords: [
    'Morocco airports',
    'Marrakech Menara airport',
    'Casablanca Mohammed V airport',
    'Fes Saiss airport',
    'Tangier airport',
    'Agadir airport',
    'Rabat Sale airport',
    'Morocco airport transfer',
    'Morocco airport taxi',
    'Morocco airport SIM card',
    'Morocco airport currency exchange',
    'Morocco airport guide 2026',
  ],
  openGraph: {
    title: 'Morocco Airports Guide 2026 - Every Airport Covered',
    description:
      'Terminal maps, transport options, taxi prices from 70 MAD, SIM cards, currency exchange, and lounges at all major Morocco airports.',
    url: 'https://citytoursmorocco.com/morocco-airports-guide',
    images: [
      {
        url: '/images/hero-casablanca-skyline.webp',
        width: 1200,
        height: 630,
        alt: 'Aerial view of a major Moroccan city skyline representing airport connectivity',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/morocco-airports-guide' },
};

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  name: 'Morocco Airports Guide 2026',
  description:
    'Comprehensive guide to all major airports in Morocco including terminal information, ground transport, currency exchange, SIM cards, and hotel connections.',
  url: 'https://citytoursmorocco.com/morocco-airports-guide',
  image: '/images/hero-casablanca-skyline.webp',
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

/* =====================================================================
   DATA
   ===================================================================== */

const airports = [
  {
    name: 'Casablanca Mohammed V International Airport',
    code: 'CMN',
    city: 'Casablanca',
    terminals: 2,
    terminalInfo: 'Terminal 1 handles most international flights including Royal Air Maroc hub operations. Terminal 2 serves low-cost carriers and seasonal charters. Both terminals are connected by a free shuttle bus running every 15 minutes. The airport underwent a major expansion completed in 2024, adding new boarding gates and an expanded duty-free area in Terminal 1.',
    transportOptions: [
      { mode: 'Airport Train (ONCF)', price: 'from 70 MAD', time: '55 min to Casa Voyageurs', detail: 'Trains depart every hour from 6:00 AM to 10:00 PM. Direct connection to Rabat (from 100 MAD, 1h30), Marrakech (from 190 MAD, 3h30), and Fes. The station is in the basement of Terminal 1.' },
      { mode: 'Petit Taxi', price: 'from 250 MAD', time: '30-45 min to city center', detail: 'Official red petit taxis are metered. Use the taxi rank outside arrivals. Insist the driver uses the meter or agree on price before departure. Night surcharge of 50% applies after 8 PM.' },
      { mode: 'Grand Taxi', price: 'from 300 MAD', time: '30-45 min', detail: 'Shared grand taxis (Mercedes sedans) offer fixed-price service. Can accommodate up to 6 passengers. Ideal for groups.' },
      { mode: 'Private Transfer', price: 'from 400 MAD', time: '30-45 min', detail: 'Pre-bookable through hotels and transfer services. Driver meets you in arrivals with name sign. Most reliable option, especially for late arrivals.' },
      { mode: 'Car Rental', price: 'from 300 MAD/day', time: 'Self-drive', detail: 'Major international agencies (Hertz, Avis, Europcar) and local companies in the arrivals hall. Book online in advance for better rates.' },
    ],
    currencyExchange: 'Multiple BMCE and Attijariwafa bank branches in both terminals, open for all arriving flights. Rates are standardized by Bank Al-Maghrib, so differences between booths are minimal. ATMs (Banque Populaire, CIH Bank) are available before and after customs.',
    simCards: 'Maroc Telecom, Inwi, and Orange kiosks in the arrivals hall of both terminals. Tourist SIM packages start from 30 MAD for 5 GB data (valid 30 days). Passport required for activation. The Inwi kiosk in Terminal 1 often has the best data-heavy packages.',
    lounges: 'Pearl Lounge in Terminal 1 (from 350 MAD or Priority Pass). Offers hot food, showers, Wi-Fi, and quiet work areas. Terminal 2 has a smaller lounge operated by the same company.',
    hotelConnections: 'The Pullman Hotel is directly connected to Terminal 1 via covered walkway. Several budget hotels operate free shuttles within 5 km of the airport. For Casablanca city hotels, the train or transfer is recommended.',
    airlines: 'Royal Air Maroc (hub), Ryanair, EasyJet, Air France, Turkish Airlines, Emirates, Qatar Airways, Transavia, Vueling, TUI fly',
    annualPassengers: '10.3 million (2024)',
    highlights: ['Morocco\'s largest and busiest airport', 'Direct ONCF train connection', 'Hub for Royal Air Maroc', 'Most international route options'],
  },
  {
    name: 'Marrakech Menara Airport',
    code: 'RAK',
    city: 'Marrakech',
    terminals: 2,
    terminalInfo: 'Terminal 1 handles most European flights and full-service carriers. Terminal 2, expanded in 2023, primarily serves low-cost carriers. The terminals are a 5-minute walk apart. Menara is architecturally striking with its copper-toned roofline echoing traditional Moroccan design. Immigration processing has improved significantly with e-gate installations for EU and Moroccan passport holders.',
    transportOptions: [
      { mode: 'Bus (Line 19)', price: 'from 30 MAD', time: '20-30 min to Jemaa el-Fnaa', detail: 'The airport express bus runs from 6:00 AM to 11:30 PM, departing every 20-30 minutes. Stops at Jemaa el-Fnaa and the train station. The most affordable option.' },
      { mode: 'Petit Taxi', price: 'from 70 MAD', time: '15-20 min to medina', detail: 'Beige petit taxis are metered but drivers frequently refuse to use meters for airport runs. The official fixed rate to the medina is approximately 100-150 MAD. Do not pay more than 200 MAD even at night.' },
      { mode: 'Private Transfer', price: 'from 150 MAD', time: '15-20 min', detail: 'Most riads and hotels arrange airport pickups. This is the smoothest option as navigating to your riad in the medina can be confusing. Your driver will meet you at arrivals and guide you through the medina alleys to your accommodation.' },
      { mode: 'Car Rental', price: 'from 250 MAD/day', time: 'Self-drive', detail: 'All major rental agencies plus local companies. Note: driving in the Marrakech medina area is not recommended. Park at your hotel or in designated lots outside the medina walls.' },
    ],
    currencyExchange: 'Exchange bureaux in both terminals open for all flights. An BMCE bank ATM is located immediately after customs in both terminals. The exchange rate inside the airport is within 1-2% of city rates -- acceptable for an initial cash withdrawal.',
    simCards: 'All three carriers have kiosks in the arrivals area. The Maroc Telecom booth is usually busiest but has the most reliable nationwide coverage. From 30 MAD for a basic data SIM. Staff speak French, English, and Arabic.',
    lounges: 'Pearl Lounge in Terminal 1 (from 300 MAD or Priority Pass). Smaller than the CMN lounge but comfortable with Wi-Fi, snacks, and drinks. No lounge in Terminal 2.',
    hotelConnections: 'No directly connected hotels. The nearest hotels are 5-10 minutes by car along the Route de Casablanca. Most visitors head directly to the medina (15-20 minutes). Hotel and riad pickup is the recommended approach.',
    airlines: 'Ryanair, EasyJet, Transavia, Royal Air Maroc, Air France, British Airways, TUI fly, Vueling, Wizz Air, Norwegian',
    annualPassengers: '7.2 million (2024)',
    highlights: ['Closest airport to the medina (6 km)', 'Striking traditional architecture', 'Express bus to Jemaa el-Fnaa', 'High-volume low-cost carrier hub'],
  },
  {
    name: 'Fes-Saiss Airport',
    code: 'FEZ',
    city: 'Fes',
    terminals: 1,
    terminalInfo: 'A single modern terminal completed in 2017 handles all traffic. The airport is compact and easy to navigate, with immigration typically cleared in under 20 minutes. Facilities include a small cafe, newsstand, and prayer room. The terminal can feel crowded during peak summer months when multiple European charters arrive simultaneously.',
    transportOptions: [
      { mode: 'Bus (Line 16)', price: 'from 20 MAD', time: '30-40 min to city center', detail: 'Public bus runs from 6:00 AM to 10:00 PM. Frequency varies; roughly every 30-45 minutes. Stops at the train station and near Bab Boujloud.' },
      { mode: 'Petit Taxi', price: 'from 120 MAD', time: '20-25 min to medina', detail: 'Red petit taxis from the rank outside arrivals. Official fare to the medina is around 120-180 MAD. Agree on the price before entering.' },
      { mode: 'Private Transfer', price: 'from 200 MAD', time: '20-25 min', detail: 'Essential if staying in the old medina, as many riads are inaccessible by car. Your driver will drop you at the nearest gate and often arrange a porter to guide you through the narrow streets.' },
    ],
    currencyExchange: 'One exchange bureau and two ATMs (BMCE, Banque Populaire) in the arrivals hall. Limited opening hours outside of flight arrivals. Withdraw MAD from ATMs for the best rate.',
    simCards: 'Maroc Telecom kiosk in arrivals, though it may close between flights. If closed, SIM cards are easily purchased at any corner shop (hanout) in the city for the same price.',
    lounges: 'No dedicated lounge. The terminal cafe serves basic coffee and sandwiches.',
    hotelConnections: 'No airport hotels. The medina is 15 km south. All accommodation is in or near the old city. Pre-arranged riad transfers are strongly recommended for first-time visitors to Fes.',
    airlines: 'Ryanair, Transavia, Royal Air Maroc, Air Arabia, Wizz Air, TUI fly',
    annualPassengers: '1.8 million (2024)',
    highlights: ['Modern single-terminal design', 'Gateway to the ancient medina', 'Growing low-cost connections', 'Quick immigration processing'],
  },
  {
    name: 'Tangier Ibn Battouta Airport',
    code: 'TNG',
    city: 'Tangier',
    terminals: 1,
    terminalInfo: 'A modern terminal expanded in 2019 to handle the city\'s growing tourism and business traffic. Named after the famous medieval Moroccan explorer Ibn Battouta who was born in Tangier. The terminal features contemporary Moroccan design elements. Immigration is generally fast, and the airport has a calm, uncrowded atmosphere compared to Casablanca or Marrakech.',
    transportOptions: [
      { mode: 'Petit Taxi', price: 'from 150 MAD', time: '15-20 min to city center', detail: 'Blue and white petit taxis from the airport rank. The airport is only 12 km from the city center. Agree on price beforehand; metered fares tend to be lower.' },
      { mode: 'Grand Taxi', price: 'from 200 MAD', time: '15-20 min', detail: 'Shared service available. Can negotiate for private ride to the medina or Tangier Ville train station.' },
      { mode: 'Private Transfer', price: 'from 200 MAD', time: '15-20 min', detail: 'Pre-bookable through hotels. Recommended for direct access to the kasbah area where many boutique hotels are located.' },
    ],
    currencyExchange: 'ATMs and one exchange bureau in the arrivals area. Standard rates. The airport is small enough that you\'ll find these immediately on exiting customs.',
    simCards: 'Maroc Telecom counter in arrivals. From 30 MAD for a tourist data package.',
    lounges: 'Small VIP lounge available for business-class passengers and eligible card holders. Basic amenities.',
    hotelConnections: 'No airport hotels. The city center is 15 minutes away. Tangier\'s growing hotel scene is centered around the medina kasbah and the modern Tangier City Center district.',
    airlines: 'Ryanair, Royal Air Maroc, Air Arabia, Transavia, TUI fly, Vueling',
    annualPassengers: '2.1 million (2024)',
    highlights: ['Named after explorer Ibn Battouta', 'Close to city center (12 km)', 'Gateway to northern Morocco', 'Connection to Chefchaouen (2h drive)'],
  },
  {
    name: 'Agadir Al Massira Airport',
    code: 'AGA',
    city: 'Agadir',
    terminals: 2,
    terminalInfo: 'Terminal 1 serves scheduled flights while Terminal 2 handles charter operations, which peak during the European winter. The airport is located 25 km southeast of Agadir center along the N1 highway. Both terminals were renovated in 2022 with improved air conditioning and new departure lounges. Agadir is Morocco\'s premier beach resort destination, so expect a holiday atmosphere in arrivals.',
    transportOptions: [
      { mode: 'Bus (Line 22)', price: 'from 25 MAD', time: '40-50 min to city center', detail: 'Runs from the airport to Agadir bus station with stops along the main boulevard. Frequency is roughly every 40 minutes. Limited luggage space.' },
      { mode: 'Grand Taxi', price: 'from 200 MAD', time: '25-30 min to beach zone', detail: 'White grand taxis from the airport rank. Official fixed prices are posted at the taxi stand. Common destinations include the beach promenade and Taghazout (from 350 MAD).' },
      { mode: 'Private Transfer', price: 'from 250 MAD', time: '25-30 min', detail: 'Most resort hotels and surf camps in Taghazout arrange airport transfers. Book when you reserve your accommodation.' },
      { mode: 'Car Rental', price: 'from 250 MAD/day', time: 'Self-drive', detail: 'Recommended if you plan to explore the Souss-Massa region, Paradise Valley, or the Anti-Atlas. Roads around Agadir are excellent.' },
    ],
    currencyExchange: 'Exchange counters and ATMs in both terminals. The Banque Populaire ATM in Terminal 1 accepts all international cards.',
    simCards: 'Kiosks in Terminal 1 arrivals. Stock up here especially if heading to Taghazout or the coast where city shops are fewer.',
    lounges: 'Pearl Lounge in Terminal 1 (from 300 MAD). A comfortable space with views of the runway.',
    hotelConnections: 'No direct airport hotels. The beach hotel zone begins about 20 km northwest. Most all-inclusive resorts provide transfer buses.',
    airlines: 'TUI fly, Transavia, Ryanair, Royal Air Maroc, EasyJet, Condor, Jet2, Norwegian, SunExpress',
    annualPassengers: '2.8 million (2024)',
    highlights: ['Morocco\'s beach holiday gateway', 'High charter traffic in winter', 'Gateway to Taghazout surf scene', 'Good road connections to south Morocco'],
  },
  {
    name: 'Rabat-Sale Airport',
    code: 'RBA',
    city: 'Rabat',
    terminals: 1,
    terminalInfo: 'A compact, efficient single-terminal airport primarily serving domestic routes and limited European connections. Located 8 km northeast of Rabat center near the ancient necropolis of Chellah. The terminal is quiet and rarely crowded, making it one of the most pleasant airports to transit in Morocco. Best used for travelers specifically visiting Rabat, Meknes, or nearby regions.',
    transportOptions: [
      { mode: 'Petit Taxi', price: 'from 100 MAD', time: '15-20 min to city center', detail: 'Blue petit taxis are available outside the terminal. Rabat taxis reliably use meters. A comfortable, easy ride into the capital.' },
      { mode: 'Grand Taxi', price: 'from 150 MAD', time: '15-20 min', detail: 'Available for trips to Rabat center, Sale, or onward to Meknes.' },
      { mode: 'Tram + Taxi', price: 'from 40 MAD total', time: '30-40 min', detail: 'Take a taxi to the nearest tram stop (Hay Karima) then the Rabat-Sale tram to the city center. The cheapest option.' },
    ],
    currencyExchange: 'One ATM and a small exchange counter. Limited hours. Recommend withdrawing cash at city ATMs for better availability.',
    simCards: 'Small Maroc Telecom counter. May be closed outside peak hours. Easy to buy in the city.',
    lounges: 'No dedicated lounge facility.',
    hotelConnections: 'No airport hotels. Rabat city center is close and well-connected. The capital has excellent mid-range and luxury hotel options.',
    airlines: 'Royal Air Maroc, Ryanair, Air Arabia, Transavia',
    annualPassengers: '0.9 million (2024)',
    highlights: ['Morocco\'s capital city gateway', 'Calm and uncrowded terminal', 'Easy access to Rabat medina', 'Close to Meknes and Volubilis'],
  },
  {
    name: 'Ouarzazate Airport',
    code: 'OZZ',
    city: 'Ouarzazate',
    terminals: 1,
    terminalInfo: 'A small desert airport with a single terminal, serving primarily as a gateway to the film studios and Saharan adventure routes. The terminal is basic but functional, with dramatic Atlas Mountain views from the runway. Historically used for film crew transport (the city is known as "Morocco\'s Hollywood"), it now receives limited scheduled service.',
    transportOptions: [
      { mode: 'Petit Taxi', price: 'from 50 MAD', time: '10 min to city center', detail: 'The airport is just 3 km from the town center. Taxis are readily available when flights arrive.' },
      { mode: 'Hotel Transfer', price: 'from 100 MAD', time: '10-60 min', detail: 'Most kasbahs and desert lodges arrange airport pickup. Essential for remote desert camps in the Draa Valley or along the Route des Kasbahs.' },
    ],
    currencyExchange: 'One ATM in the terminal. Bring cash as the machine occasionally runs out. Exchange counters have very limited hours.',
    simCards: 'No airport kiosk. Purchase in town -- several shops on Avenue Mohammed V sell SIM cards.',
    lounges: 'No lounge facility.',
    hotelConnections: 'No airport hotels. Ouarzazate town offers kasbahs and mid-range hotels within 5 minutes. The famous Atlas Studios and Ait Benhaddou kasbah are within 30 km.',
    airlines: 'Royal Air Maroc (limited seasonal), Transavia (seasonal)',
    annualPassengers: '0.1 million (2024)',
    highlights: ['Gateway to the Sahara and kasbahs', 'Stunning Atlas Mountain runway views', 'Close to Ait Benhaddou UNESCO site', 'Film studio capital of Morocco'],
  },
  {
    name: 'Nador International Airport',
    code: 'NDR',
    city: 'Nador',
    terminals: 1,
    terminalInfo: 'Located in the Rif region of northeastern Morocco, Nador airport primarily serves the Moroccan diaspora community in Europe. The terminal was modernized in 2021. The airport provides access to the Mediterranean coast, the Spanish enclave of Melilla (12 km), and the Marchica lagoon development. Traffic peaks during summer when diaspora families return for holidays.',
    transportOptions: [
      { mode: 'Grand Taxi', price: 'from 100 MAD', time: '15-20 min to Nador center', detail: 'Shared grand taxis are the primary transport. Available at the airport exit. Also available to Al Hoceima (from 300 MAD, 2h) and Berkane.' },
      { mode: 'Private Transfer', price: 'from 200 MAD', time: '15-20 min', detail: 'Pre-arrange through your hotel, especially if heading to Marchica resort or Al Hoceima.' },
    ],
    currencyExchange: 'One ATM (Banque Populaire) in the terminal. Limited exchange services.',
    simCards: 'No dedicated airport kiosk. Purchase in Nador town center.',
    lounges: 'No lounge facility.',
    hotelConnections: 'No airport hotels. Nador town center has several modern hotels. The Marchica resort lagoon is 20 minutes away.',
    airlines: 'Ryanair, Air Arabia, Royal Air Maroc, Transavia, TUI fly',
    annualPassengers: '1.2 million (2024)',
    highlights: ['Gateway to Rif Mountains and Mediterranean', 'Strong European diaspora connections', 'Access to Marchica lagoon', 'Close to Spanish Melilla'],
  },
  {
    name: 'Essaouira Mogador Airport',
    code: 'ESU',
    city: 'Essaouira',
    terminals: 1,
    terminalInfo: 'A charming small airport 16 km east of Essaouira\'s historic medina. The terminal handles a limited but growing number of European routes, making the Atlantic coast windsurf capital and UNESCO-listed medina directly accessible without transiting through Marrakech. The airport has basic facilities -- a small cafe and one ATM.',
    transportOptions: [
      { mode: 'Grand Taxi', price: 'from 150 MAD', time: '15-20 min to medina', detail: 'Shared taxis wait for arriving flights. Private hire costs more but gets you to your riad directly.' },
      { mode: 'Hotel Transfer', price: 'from 150 MAD', time: '15-20 min', detail: 'Many riads arrange airport transfers. Recommended since navigating to accommodations within the medina walls requires local knowledge.' },
    ],
    currencyExchange: 'One ATM in the terminal. Exchange services may only open for arriving flights. Recommend having some MAD in advance or withdrawing from city ATMs.',
    simCards: 'No airport kiosk. Shops in the medina sell SIM cards from 30 MAD.',
    lounges: 'No lounge facility.',
    hotelConnections: 'No airport hotels. The walled medina with its riads and boutique hotels is 16 km west.',
    airlines: 'Ryanair, Transavia, EasyJet (seasonal)',
    annualPassengers: '0.4 million (2024)',
    highlights: ['Direct access to UNESCO medina', 'Avoids Marrakech transit', 'Gateway to wind sports coast', 'Growing European route network'],
  },
];

const generalTips = [
  { title: 'Arrive Early', icon: 'Clock', tip: 'Allow 3 hours before international flights and 2 hours for domestic. Immigration queues at Casablanca and Marrakech can be long during peak hours.' },
  { title: 'Currency on Arrival', icon: 'CreditCard', tip: 'ATMs offer the best exchange rate. Withdraw MAD at the airport ATM for immediate taxi needs. Most machines accept Visa and Mastercard. Notify your bank before travel.' },
  { title: 'SIM Card Strategy', icon: 'Smartphone', tip: 'Buy a tourist SIM at the airport if kiosks are open, otherwise purchase at any hanout (corner shop) in town. Maroc Telecom has the best rural coverage; Inwi often has the best data deals.' },
  { title: 'Taxi Negotiation', icon: 'Car', tip: 'Always agree on the price before entering a taxi at any airport. Petit taxis (small, colored cars) are cheaper but limited to 3 passengers. Grand taxis (large Mercedes) can carry 6 and serve longer routes.' },
  { title: 'Immigration Tips', icon: 'Globe', tip: 'Fill in your arrival card on the plane to save time. Have your hotel address written down. Visa-free entry for 90 days applies to EU, US, UK, Canadian, and Australian nationals.' },
  { title: 'Luggage Safety', icon: 'ShieldCheck', tip: 'Keep valuables in your carry-on. Use luggage wrapping services available at larger airports if checking expensive items. Baggage claim is generally reliable but keep your tags.' },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function MoroccoAirportsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* -- Hero -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-casablanca-skyline.webp"
            alt="Casablanca skyline with Mohammed V airport connections serving as Morocco main aviation hub"
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
            <span className="text-white font-medium">Morocco Airports Guide</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Plane className="w-4 h-4 text-[var(--color-accent)]" />
              Travel Guide
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Airports Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Everything you need to know about arriving at any airport in Morocco. Terminal info,
              transport to city centers, currency exchange, SIM cards, and practical tips for
              a smooth landing.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">9</p>
                <p className="text-sm text-white/70">Airports covered</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">From 70</p>
                <p className="text-sm text-white/70">MAD airport train</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">From 30</p>
                <p className="text-sm text-white/70">MAD SIM card</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose-moroccan">
                <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
                  Navigating Morocco&apos;s Airport Network
                </h2>
                <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Morocco operates 15 airports with commercial service, but nine handle the vast majority
                    of international traffic. Whether you&apos;re arriving at Casablanca Mohammed V -- the
                    country&apos;s busiest hub with over 10 million annual passengers -- or touching down at
                    the intimate Essaouira Mogador airport with its single runway and Atlantic breeze,
                    knowing what to expect makes your arrival seamless.
                  </p>
                  <p>
                    The good news: Moroccan airports have undergone significant modernization in recent
                    years. Terminal expansions at Casablanca, Marrakech, and Agadir have added capacity
                    and improved passenger flow. Immigration processing has accelerated with the
                    introduction of electronic gates at major airports. And the growth of low-cost
                    carriers like Ryanair, Transavia, and Air Arabia has made Morocco more accessible
                    than ever from dozens of European cities.
                  </p>
                  <p>
                    This guide covers every aspect of your airport experience: which terminal you&apos;ll
                    arrive at, how to get to your hotel, where to exchange currency, how to get a local
                    SIM card, and what to expect at each airport. Prices are quoted in Moroccan Dirhams
                    (MAD) and may vary seasonally.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="card-moroccan p-6 sticky top-28">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-5">
                  Quick Reference
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Busiest Airport', value: 'Casablanca (CMN)', detail: '10.3M passengers/year' },
                    { label: 'Cheapest Transfer', value: 'CMN Airport Train', detail: 'from 70 MAD to Casa center' },
                    { label: 'Tourist SIM', value: 'from 30 MAD', detail: '5 GB data, all carriers' },
                    { label: 'Visa-Free Entry', value: '90 days', detail: 'EU, US, UK, CA, AU + more' },
                    { label: 'Currency', value: 'Moroccan Dirham (MAD)', detail: 'ATMs at all airports' },
                  ].map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-[var(--text-primary)] text-sm">{info.label}</p>
                        <p className="text-sm text-[var(--text-secondary)]">{info.value} -- {info.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-4 italic">Prices may vary by season and operator. All prices are approximate.</p>
                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                  <a href="#airports" className="block w-full text-center px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors">
                    Jump to Airport Guides
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* -- General Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Before You Land
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Essential Airport Tips for Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              These tips apply to every airport in the country and will save you time, money, and hassle on arrival.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  {tip.icon === 'Clock' && <Clock className="w-4 h-4 text-[var(--color-secondary)]" />}
                  {tip.icon === 'CreditCard' && <CreditCard className="w-4 h-4 text-[var(--color-secondary)]" />}
                  {tip.icon === 'Smartphone' && <Smartphone className="w-4 h-4 text-[var(--color-secondary)]" />}
                  {tip.icon === 'Car' && <Car className="w-4 h-4 text-[var(--color-secondary)]" />}
                  {tip.icon === 'Globe' && <Globe className="w-4 h-4 text-[var(--color-secondary)]" />}
                  {tip.icon === 'ShieldCheck' && <ShieldCheck className="w-4 h-4 text-[var(--color-secondary)]" />}
                  {tip.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Airport Guides -- */}
      <section id="airports" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Airport by Airport
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Complete Airport Guides
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Detailed information for every major airport in Morocco, from terminals to transport.
            </p>
          </div>

          <div className="space-y-12">
            {airports.map((airport, index) => (
              <div key={airport.code} id={airport.code.toLowerCase()} className="card-moroccan overflow-hidden">
                <div className="bg-[var(--color-primary)] text-white p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-white/60 uppercase tracking-wider">Airport {index + 1} of {airports.length}</span>
                    <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold mt-1">
                      {airport.name}
                    </h3>
                    <p className="text-sm text-white/70 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5" /> {airport.city} &middot; IATA: {airport.code} &middot; {airport.annualPassengers} passengers
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
                      {airport.terminals} Terminal{airport.terminals > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                <div className="p-6 lg:p-8 space-y-6">
                  {/* Terminal Info */}
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                      <Building className="w-4 h-4 text-[var(--color-secondary)]" />
                      Terminal Information
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{airport.terminalInfo}</p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {airport.highlights.map((h) => (
                      <span key={h} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-medium">
                        <Star className="w-3 h-3" /> {h}
                      </span>
                    ))}
                  </div>

                  {/* Transport */}
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                      <Car className="w-4 h-4 text-[var(--color-secondary)]" />
                      Transport to City Center
                    </h4>
                    <div className="space-y-3">
                      {airport.transportOptions.map((t) => (
                        <div key={t.mode} className="bg-[var(--surface-muted)] rounded-lg p-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                            <p className="font-semibold text-sm text-[var(--text-primary)]">{t.mode}</p>
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-bold text-[var(--color-secondary)]">{t.price}</span>
                              <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {t.time}
                              </span>
                            </div>
                          </div>
                          <p className="text-xs text-[var(--text-muted)] leading-relaxed">{t.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                      <h5 className="font-semibold text-sm text-[var(--text-primary)] mb-1 flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-[var(--color-accent)]" />
                        Currency Exchange
                      </h5>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">{airport.currencyExchange}</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                      <h5 className="font-semibold text-sm text-[var(--text-primary)] mb-1 flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-[var(--color-accent)]" />
                        SIM Cards
                      </h5>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">{airport.simCards}</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                      <h5 className="font-semibold text-sm text-[var(--text-primary)] mb-1 flex items-center gap-2">
                        <Star className="w-4 h-4 text-[var(--color-accent)]" />
                        Airport Lounges
                      </h5>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">{airport.lounges}</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                      <h5 className="font-semibold text-sm text-[var(--text-primary)] mb-1 flex items-center gap-2">
                        <Building className="w-4 h-4 text-[var(--color-accent)]" />
                        Hotel Connections
                      </h5>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">{airport.hotelConnections}</p>
                    </div>
                  </div>

                  {/* Airlines */}
                  <div>
                    <h5 className="font-semibold text-sm text-[var(--text-primary)] mb-2 flex items-center gap-2">
                      <Plane className="w-4 h-4 text-[var(--color-secondary)]" />
                      Airlines Serving {airport.code}
                    </h5>
                    <p className="text-xs text-[var(--text-muted)]">{airport.airlines}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Important Notices -- */}
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
                  <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">Dirham Export Restrictions</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    The Moroccan Dirham is a restricted currency. You cannot legally bring more than 2,000 MAD into or out of the country. Exchange any remaining MAD back to your home currency before departing, or spend it at the airport duty-free shops.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-[var(--color-secondary)]">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">Departure Tax</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    There is no separate departure tax in Morocco -- it is included in your airline ticket price. You do not need to pay anything additional at the airport when leaving.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-[var(--color-secondary)]">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">Customs Allowances</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Arriving passengers may bring: 200 cigarettes or 50 cigars, 1 liter of spirits, personal effects, and gifts valued under 2,000 MAD. Alcohol import is permitted for non-Muslims. Drone import requires prior authorization from the Moroccan Civil Aviation Authority (DGAC).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Related Pages -- */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)] mb-4">
              Continue Planning Your Trip
            </h2>
            <p className="text-[var(--text-secondary)]">
              From the airport to your next adventure -- explore transport, cities, and travel essentials.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Train Routes Guide', href: '/morocco-train-routes', desc: 'Complete ONCF train guide with routes, schedules, and ticket prices across Morocco.' },
              { title: 'Morocco SIM Cards', href: '/sim-card', desc: 'Detailed comparison of Maroc Telecom, Inwi, and Orange for travelers.' },
              { title: 'First Time in Morocco', href: '/first-time', desc: 'Everything first-time visitors need to know before arriving in Morocco.' },
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
