import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Award,
  BookOpen,
  Globe,
  Landmark,
  Plane,
  Wifi,
  CreditCard,
  Luggage,
  Bus,
  Car,
  AlertCircle,
  Coffee,
  Phone,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Airport Guide 2026 | Marrakech, Casablanca, Fez & Tangier Airports',
  description:
    'Complete guide to Morocco airports including Marrakech Menara (RAK), Casablanca Mohammed V (CMN), Fez-Saiss (FEZ), and Tangier Ibn Battouta (TNG). Airport transfers, cheap flights, facilities, immigration tips, and duty-free shopping.',
  keywords: [
    'morocco airports',
    'marrakech airport',
    'casablanca airport',
    'morocco airport transfer',
    'flights to morocco',
    'morocco airport tips',
    'marrakech menara airport',
    'casablanca mohammed v airport',
    'fez airport',
    'tangier airport',
    'cheap flights morocco',
    'royal air maroc',
    'morocco airport taxi',
    'morocco immigration',
    'morocco duty free',
    'airport to marrakech city',
    'morocco airport wifi',
    'morocco sim card airport',
    'ryanair morocco',
    'easyjet morocco',
  ],
  openGraph: {
    title: 'Morocco Airport Guide 2026 | Marrakech, Casablanca, Fez & Tangier Airports',
    description:
      'Everything you need to know about flying to Morocco. Airport guides for Marrakech, Casablanca, Fez, and Tangier with transfer options, facilities, and insider tips.',
    url: `${BASE_URL}/morocco-airport-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-airports.webp`,
        width: 1200,
        height: 630,
        alt: 'Aerial view of a modern Moroccan airport terminal with Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Airport Guide 2026 | Flights, Transfers & Airport Tips',
    description:
      'Complete guide to Morocco airports. Marrakech, Casablanca, Fez, and Tangier airport transfers, cheap flights, facilities, immigration, and duty-free shopping tips.',
    images: [`${BASE_URL}/images/hero-airports.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-airport-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-airport-guide`,
  name: 'Morocco Airport Guide 2026 | Marrakech, Casablanca, Fez & Tangier Airports',
  description:
    'Complete guide to Morocco airports including Marrakech Menara, Casablanca Mohammed V, Fez-Saiss, and Tangier Ibn Battouta. Airport transfers, cheap flights, facilities, immigration tips, and duty-free shopping.',
  url: `${BASE_URL}/morocco-airport-guide`,
  image: `${BASE_URL}/images/hero-airports.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-airport-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Airport Guide', item: `${BASE_URL}/morocco-airport-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the main international airport in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Casablanca Mohammed V International Airport (CMN) is Morocco\'s largest and busiest airport, handling over 10 million passengers annually. It serves as the main hub for Royal Air Maroc and offers the most international connections. However, Marrakech Menara Airport (RAK) is the most popular for tourists, especially those arriving on budget airlines from Europe.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get from Marrakech airport to the city center?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From Marrakech Menara Airport to the city center (about 6 km), you have several options: official airport taxis cost from 100-150 MAD (fixed rate to the medina), the airport bus (Line 19) costs from 30 MAD, and private transfers can be pre-booked from 150 MAD. The journey takes 15-30 minutes depending on traffic. Always agree on the taxi fare before getting in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I buy a SIM card at Morocco airports?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, SIM cards are available at all major Moroccan airports. Maroc Telecom, Inwi, and Orange have counters in the arrivals hall. A tourist SIM with data costs from 30-50 MAD and includes several gigabytes of 4G data valid for 30 days. You will need your passport for registration. It is recommended to buy one immediately upon arrival for maps and communication.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest way to fly to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget airlines like Ryanair and easyJet offer the cheapest flights to Morocco from Europe, often from 20-50 EUR one way. Book 2-3 months in advance for the best rates. Flying midweek (Tuesday or Wednesday) is usually cheaper. Consider alternative airports like Fez or Tangier which sometimes have lower fares than Marrakech. Use flight comparison tools like Skyscanner or Google Flights to find the best deals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a visa to enter Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Citizens of the EU, UK, USA, Canada, Australia, and many other countries do not need a visa for stays up to 90 days. Your passport must be valid for at least 6 months from your entry date. You will need to fill out an entry form on the plane or at immigration. Extensions beyond 90 days require visiting a local police station before your stay expires.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there WiFi at Moroccan airports?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, free WiFi is available at all major Moroccan airports including Marrakech, Casablanca, Fez, and Tangier. Connect to the airport network and register with your phone number or email. The connection is generally reliable for browsing and messaging but can be slow during peak hours. For faster internet, consider buying a local SIM card with data from the telecom counters in arrivals.',
      },
    },
    {
      '@type': 'Question',
      name: 'How early should I arrive at a Moroccan airport for my flight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For international flights, arrive at least 3 hours before departure. Moroccan airport security and check-in can be thorough and queues may be long, especially during peak season (July-August and December). For domestic flights, 2 hours is usually sufficient. During Ramadan and public holidays, allow extra time as airports tend to be busier than usual.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: MAJOR AIRPORTS
   ═══════════════════════════════════════════════════════════════ */

const majorAirports = [
  {
    name: 'Marrakech Menara Airport (RAK)',
    code: 'RAK',
    icon: Plane,
    city: 'Marrakech',
    distance: '6 km from city center',
    passengers: 'Over 6 million passengers per year',
    description:
      'Morocco\'s most popular tourist airport and the gateway to the Red City. Marrakech Menara is served by dozens of European budget and full-service carriers. The terminal was expanded in 2016 with a modern arrivals hall, though it can feel crowded during peak season. The airport features a distinctive triangular-roofed terminal designed to echo the nearby Atlas Mountains.',
    terminals: '2 terminals (T1 international, T2 domestic and some international)',
    transfers: [
      { method: 'Official taxi', price: 'From 100-150 MAD to medina (fixed rate)', time: '15-30 minutes' },
      { method: 'Airport bus (Line 19)', price: 'From 30 MAD', time: '20-40 minutes' },
      { method: 'Private transfer', price: 'From 150 MAD (pre-booked)', time: '15-25 minutes' },
    ],
    facilities: ['Free WiFi', 'ATMs & currency exchange', 'SIM card counters', 'Car rental desks', 'Cafes and restaurants', 'Duty-free shop', 'Prayer room'],
  },
  {
    name: 'Casablanca Mohammed V Airport (CMN)',
    code: 'CMN',
    icon: Plane,
    city: 'Casablanca',
    distance: '30 km from city center',
    passengers: 'Over 10 million passengers per year',
    description:
      'Morocco\'s largest and busiest airport, serving as the primary international gateway and hub for Royal Air Maroc. Located 30 km south of Casablanca, it offers the widest range of long-haul destinations including direct flights to North America, the Middle East, and Sub-Saharan Africa. The airport has two modern terminals connected by a free shuttle.',
    terminals: '2 terminals (T1 and T2) connected by shuttle',
    transfers: [
      { method: 'Train (ONCF)', price: 'From 43 MAD to Casa Voyageurs', time: '45-60 minutes' },
      { method: 'Official taxi', price: 'From 300-350 MAD to city center', time: '30-50 minutes' },
      { method: 'Private transfer', price: 'From 350 MAD (pre-booked)', time: '30-45 minutes' },
    ],
    facilities: ['Free WiFi', 'ATMs & currency exchange', 'ONCF train station', 'VIP lounges', 'SIM card counters', 'Car rental desks', 'Hotels nearby', 'Duty-free shops'],
  },
  {
    name: 'Fez-Saiss Airport (FEZ)',
    code: 'FEZ',
    icon: Plane,
    city: 'Fez',
    distance: '15 km from city center',
    passengers: 'Over 1.5 million passengers per year',
    description:
      'A growing airport serving the imperial city of Fez, increasingly popular with budget airlines from Europe. The terminal was renovated and expanded with a new modern building. Fez-Saiss is an excellent alternative to Marrakech, often with cheaper flights and shorter queues. The airport is compact and easy to navigate.',
    terminals: '1 terminal',
    transfers: [
      { method: 'Official taxi', price: 'From 120-150 MAD to medina', time: '20-30 minutes' },
      { method: 'Bus (Line 16)', price: 'From 5 MAD', time: '30-45 minutes' },
      { method: 'Private transfer', price: 'From 150 MAD (pre-booked)', time: '20-25 minutes' },
    ],
    facilities: ['Free WiFi', 'ATMs & currency exchange', 'SIM card counters', 'Car rental desks', 'Small cafe', 'Duty-free shop'],
  },
  {
    name: 'Tangier Ibn Battouta Airport (TNG)',
    code: 'TNG',
    icon: Plane,
    city: 'Tangier',
    distance: '12 km from city center',
    passengers: 'Over 2 million passengers per year',
    description:
      'Named after the famous Moroccan explorer, Tangier\'s airport has grown significantly with new routes from European carriers. Its modern terminal handles a mix of international and domestic flights. Tangier is also accessible by ferry from Spain, making it a dual gateway. The airport serves as a convenient entry point for exploring northern Morocco and the Rif region.',
    terminals: '1 terminal',
    transfers: [
      { method: 'Official taxi', price: 'From 150-200 MAD to city center', time: '15-25 minutes' },
      { method: 'Bus', price: 'From 5 MAD', time: '30-40 minutes' },
      { method: 'Private transfer', price: 'From 200 MAD (pre-booked)', time: '15-20 minutes' },
    ],
    facilities: ['Free WiFi', 'ATMs & currency exchange', 'SIM card counters', 'Car rental desks', 'Cafe', 'Duty-free shop'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SECONDARY AIRPORTS
   ═══════════════════════════════════════════════════════════════ */

const secondaryAirports = [
  {
    name: 'Agadir Al Massira Airport (AGA)',
    code: 'AGA',
    city: 'Agadir',
    distance: '25 km from city center',
    description:
      'Gateway to the Souss-Massa region and Morocco\'s premier beach resort city. Popular with European charter flights especially during winter when northern Europeans seek warmth. Taxi to Agadir center costs from 200-250 MAD.',
  },
  {
    name: 'Nador International Airport (NDR)',
    code: 'NDR',
    city: 'Nador',
    distance: '25 km from city center',
    description:
      'Serves northeastern Morocco and the Rif region. Strong connections to European cities with large Moroccan diaspora communities, particularly in the Netherlands, Belgium, and Germany. Useful for reaching Al Hoceima and the Mediterranean coast.',
  },
  {
    name: 'Rabat-Sale Airport (RBA)',
    code: 'RBA',
    city: 'Rabat',
    distance: '10 km from city center',
    description:
      'The capital\'s airport with growing international connections. Smaller than Casablanca but more convenient for visiting Rabat, Sale, and the surrounding region. Ryanair operates several European routes from here.',
  },
  {
    name: 'Essaouira Mogador Airport (ESU)',
    code: 'ESU',
    city: 'Essaouira',
    distance: '16 km from city center',
    description:
      'A small airport serving the coastal city of Essaouira. Limited but growing connections, mainly from Ryanair and some charter services. An alternative to flying into Marrakech if Essaouira is your main destination.',
  },
  {
    name: 'Ouarzazate Airport (OZZ)',
    code: 'OZZ',
    city: 'Ouarzazate',
    distance: '2 km from city center',
    description:
      'A small airport serving the "Hollywood of Africa." Mostly domestic flights connecting to Casablanca. Useful for reaching the Draa Valley, Ait Benhaddou, and the desert without a long road trip from Marrakech.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: AIRLINES SERVING MOROCCO
   ═══════════════════════════════════════════════════════════════ */

const airlines = [
  {
    name: 'Royal Air Maroc (AT)',
    type: 'Flag carrier',
    icon: Award,
    hubs: 'Casablanca (CMN)',
    routes: 'Over 100 destinations worldwide including New York, Montreal, London, Paris, Dubai, Doha, and many African cities',
    description:
      'Morocco\'s national airline and the country\'s largest carrier. Oneworld alliance member since 2020. Full-service with meals, checked bags, and entertainment included. The best option for long-haul flights and connections via Casablanca hub.',
    tip: 'Book directly on royalairmaroc.com for best availability and to earn Safar Flyer miles.',
  },
  {
    name: 'Ryanair (FR)',
    type: 'Budget airline',
    icon: DollarSign,
    hubs: 'Marrakech, Fez, Tangier, Rabat, Agadir, Essaouira, Nador, Oujda',
    routes: 'Extensive European network with flights from UK, Spain, France, Germany, Italy, Portugal, Belgium, and more',
    description:
      'The largest budget carrier serving Morocco with an extensive route network to European cities. Operates year-round schedules to multiple Moroccan airports. Fares can be extremely cheap if booked early.',
    tip: 'Carry-on only saves money. Check bag fees are steep. Book 2-3 months ahead for the best fares.',
  },
  {
    name: 'easyJet (U2)',
    type: 'Budget airline',
    icon: DollarSign,
    hubs: 'Marrakech, Agadir',
    routes: 'UK (London Gatwick, Manchester, Bristol, Edinburgh) and select European cities',
    description:
      'Popular with British travelers heading to Morocco. Operates seasonal and year-round routes, mainly to Marrakech and Agadir. Generally offers slightly more legroom and a more comfortable experience than ultra-low-cost rivals.',
    tip: 'Set fare alerts for price drops. easyJet Plus membership offers speedy boarding and seat selection.',
  },
  {
    name: 'Air Arabia Maroc (3O)',
    type: 'Low-cost carrier',
    icon: DollarSign,
    hubs: 'Casablanca, Fez, Nador, Tangier',
    routes: 'European cities, Middle East, and domestic Moroccan routes',
    description:
      'The Moroccan arm of the UAE-based Air Arabia group. Offers affordable flights between Morocco and Europe, as well as domestic routes connecting Moroccan cities. Competitive pricing and growing route network.',
    tip: 'Good for domestic flights within Morocco. Check for bundle deals that include baggage.',
  },
  {
    name: 'TUI fly & Transavia',
    type: 'Charter and low-cost',
    icon: Globe,
    hubs: 'Marrakech, Agadir, Nador',
    routes: 'Netherlands, Belgium, France, Germany, and Scandinavia',
    description:
      'TUI fly serves Agadir and Marrakech from multiple European cities, especially popular for package holidays. Transavia (Air France subsidiary) connects Morocco with France and the Netherlands at competitive fares.',
    tip: 'Package deals through TUI often include hotel and transfers at a lower total cost than booking separately.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: AIRPORT FACILITIES
   ═══════════════════════════════════════════════════════════════ */

const airportFacilities = [
  {
    name: 'WiFi & Connectivity',
    icon: Wifi,
    description:
      'All major Moroccan airports offer free WiFi. Connect to the network and register with your email or phone number. Speeds are adequate for messaging and browsing but may slow down during peak hours. For reliable mobile data, purchase a local SIM card immediately upon arrival.',
  },
  {
    name: 'ATMs & Currency Exchange',
    icon: CreditCard,
    description:
      'ATMs (distributeurs) from major Moroccan banks are available in all airport arrivals halls. BMCE, Attijariwafa, and Banque Populaire ATMs accept international cards. Currency exchange bureaus (bureaux de change) are also available, though ATM rates are generally better. Withdraw Moroccan Dirhams (MAD) upon arrival for taxis and tips.',
  },
  {
    name: 'SIM Cards & Mobile',
    icon: Phone,
    description:
      'Maroc Telecom, Inwi, and Orange have counters in arrivals at major airports. A tourist SIM with data costs from 30-50 MAD and typically includes 5-10 GB of 4G data valid for 30 days. Bring your passport for registration. Having mobile data is essential for maps, translation apps, and ride booking in Morocco.',
  },
  {
    name: 'VIP Lounges',
    icon: Coffee,
    description:
      'Casablanca (CMN) has the best lounge options, including the Pearl Lounge accessible with Priority Pass or for from 250 MAD. Marrakech has a smaller VIP lounge. Most lounges offer refreshments, WiFi, and comfortable seating. For other airports, lounge options are limited but the main cafes serve decent coffee and light meals.',
  },
  {
    name: 'Luggage & Services',
    icon: Luggage,
    description:
      'Luggage carts are available for free at most Moroccan airports. Luggage wrapping services cost from 50-80 MAD. Lost luggage offices are located in arrivals. Porter services are available but tipping from 20-30 MAD is expected. Left luggage storage is available at Casablanca for from 40 MAD per bag per day.',
  },
  {
    name: 'Duty-Free Shopping',
    icon: Sparkles,
    description:
      'Duty-free shops at departures in Casablanca and Marrakech offer Moroccan argan oil products, saffron, handicrafts, alcohol, tobacco, perfumes, and international brands. Prices are competitive for argan oil and local products. Casablanca has the largest selection. Arrive early to browse, as queues at security can eat into shopping time.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CHEAP FLIGHT TIPS
   ═══════════════════════════════════════════════════════════════ */

const cheapFlightTips = [
  {
    title: 'Book 2-3 Months in Advance',
    icon: Clock,
    description:
      'For the best fares to Morocco, book 8-12 weeks before your trip. Last-minute flights can be three to four times more expensive, especially during peak season (December-January and July-August). Set price alerts on Google Flights or Skyscanner to catch fare drops.',
  },
  {
    title: 'Fly Midweek for Savings',
    icon: DollarSign,
    description:
      'Tuesday, Wednesday, and Thursday flights are typically 20-40% cheaper than weekend departures. Saturday is usually the most expensive day. If your schedule is flexible, shifting your travel day can save significant money on your Morocco flights.',
  },
  {
    title: 'Consider Alternative Airports',
    icon: MapPin,
    description:
      'Fez, Tangier, and Rabat often have cheaper flights than Marrakech. If Marrakech is your final destination, flying into Casablanca and taking the train (from 145 MAD, 2.5 hours) can sometimes be cheaper overall. Nador and Oujda also have surprisingly cheap fares from European cities.',
  },
  {
    title: 'Use Flight Comparison Tools',
    icon: Globe,
    description:
      'Google Flights, Skyscanner, and Kayak are excellent for comparing fares to Morocco. Use the "Explore" or flexible date features to find the cheapest travel dates. Check airline websites directly too, as some budget carriers do not list all sales on aggregators.',
  },
  {
    title: 'Travel in Shoulder Season',
    icon: Star,
    description:
      'March-May and September-November offer the best combination of pleasant weather and lower airfares. Avoid the Christmas/New Year period and summer school holidays when fares peak. Ramadan period can also offer good deals as fewer tourists travel.',
  },
  {
    title: 'Go Carry-On Only',
    icon: Luggage,
    description:
      'Budget airlines like Ryanair charge from 20-40 EUR for checked bags each way. Packing light and using just a carry-on can halve your total flight cost. Morocco has plenty of affordable laundry services if you need to wash clothes during your trip.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: IMMIGRATION TIPS
   ═══════════════════════════════════════════════════════════════ */

const immigrationTips = [
  {
    title: 'Entry Form',
    icon: BookOpen,
    description:
      'You will need to fill out an entry/exit form with your personal details, passport number, flight information, and the address of your first accommodation in Morocco. Forms are usually distributed on the plane or available at immigration counters. Have your hotel address ready.',
  },
  {
    title: 'Passport Requirements',
    icon: ShieldCheck,
    description:
      'Your passport must be valid for at least 6 months from your date of entry. Citizens of the EU, UK, USA, Canada, Australia, Japan, and many other countries enjoy visa-free access for up to 90 days. Check the latest requirements for your nationality before traveling.',
  },
  {
    title: 'Immigration Queue Tips',
    icon: Users,
    description:
      'Lines can be long, especially when multiple flights arrive simultaneously. Casablanca and Marrakech can take 30-60 minutes during peak times. Have your completed entry form, passport, and return flight details ready. E-gates are being introduced at major airports for faster processing.',
  },
  {
    title: 'Customs Regulations',
    icon: AlertCircle,
    description:
      'You can bring up to 200 cigarettes, 1 liter of spirits, and personal effects duty-free. Importing Moroccan Dirhams is technically prohibited, though small amounts are rarely checked. Drones require advance permission from Moroccan authorities. Prescription medication should be accompanied by a doctor\'s note.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoAirportGuidePage() {
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
            backgroundImage: 'url(/images/hero-airports.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Airport Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Plane className="w-4 h-4" />
            Travel &amp; Transport
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Airport Guide:
            <br className="hidden md:block" /> Flights, Transfers &amp; Tips
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-8">
            Everything you need to know about arriving in Morocco by air. From finding cheap flights
            and navigating airport facilities to getting from the terminal to your riad, this guide
            covers all major Moroccan airports and essential travel tips for 2026.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
              <Plane className="w-4 h-4" /> 15+ Airports Nationwide
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
              <Globe className="w-4 h-4" /> 50+ Airlines Serving Morocco
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
              <Users className="w-4 h-4" /> 25+ Million Passengers Yearly
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-6">
              Flying to Morocco: What You Need to Know
            </h2>
            <p className="text-[var(--text-secondary)] text-center mb-8 max-w-3xl mx-auto">
              Morocco has invested heavily in its airport infrastructure, with modern terminals and growing
              route networks connecting the country to Europe, Africa, the Middle East, and North America.
              Whether you are arriving for a Marrakech city break, a Sahara desert adventure, or a beach
              holiday in Agadir, understanding the airport landscape will smooth your arrival.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-moroccan p-6 text-center">
                <Plane className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-3" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  ONDA Network
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Morocco&apos;s airports are managed by ONDA (Office National Des Aeroports). The country has
                  over 15 airports, with six handling significant international traffic.
                </p>
              </div>
              <div className="card-moroccan p-6 text-center">
                <Car className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-3" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Transfer Options
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Every major airport offers taxis, buses, and private transfers. Casablanca uniquely has
                  a direct train connection. Always agree on taxi fares before departure.
                </p>
              </div>
              <div className="card-moroccan p-6 text-center">
                <ShieldCheck className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-3" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Visa-Free Entry
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Citizens of over 60 countries enjoy visa-free entry to Morocco for up to 90 days.
                  Most European, North American, and many Asian passport holders qualify.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Major Airports Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Major International Airports
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            Morocco&apos;s four busiest airports handle the vast majority of international arrivals.
            Each serves as a gateway to a different region of the country.
          </p>

          <div className="space-y-8">
            {majorAirports.map((airport) => (
              <div key={airport.code} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                    <airport.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {airport.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-secondary)] mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {airport.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> {airport.passengers}
                      </span>
                      <span className="flex items-center gap-1">
                        <Building className="w-3.5 h-3.5" /> {airport.terminals}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-5">{airport.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                      <Car className="w-4 h-4 text-[var(--color-accent)]" /> Transfer Options
                    </h4>
                    <div className="space-y-2">
                      {airport.transfers.map((t) => (
                        <div key={t.method} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                          <span className="text-[var(--text-secondary)]">
                            <strong className="text-[var(--text-primary)]">{t.method}:</strong> {t.price} ({t.time})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[var(--color-accent)]" /> Facilities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {airport.facilities.map((f) => (
                        <span
                          key={f}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-[var(--surface-muted)] rounded-full text-xs text-[var(--text-secondary)]"
                        >
                          <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Secondary Airports Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Other Moroccan Airports
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            Beyond the four major gateways, these regional airports offer alternative entry points
            that can save you time and money depending on your itinerary.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryAirports.map((airport) => (
              <div key={airport.code} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-bold text-xs">
                    {airport.code}
                  </span>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {airport.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-xs text-[var(--text-secondary)] mb-2">
                  <MapPin className="w-3 h-3" /> {airport.distance}
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{airport.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Airlines Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Airlines Flying to Morocco
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            From national flag carriers to European budget airlines, Morocco is well-connected
            by air. Here are the key airlines to consider when booking your flights.
          </p>

          <div className="space-y-6">
            {airlines.map((airline) => (
              <div key={airline.name} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                    <airline.icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {airline.name}
                      </h3>
                      <span className="px-2 py-0.5 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs rounded-full font-medium">
                        {airline.type}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">{airline.description}</p>
                    <div className="text-sm text-[var(--text-secondary)] space-y-1">
                      <p>
                        <strong className="text-[var(--text-primary)]">Morocco hubs:</strong> {airline.hubs}
                      </p>
                      <p>
                        <strong className="text-[var(--text-primary)]">Routes:</strong> {airline.routes}
                      </p>
                    </div>
                    <div className="mt-3 flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                      <Info className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-[var(--text-secondary)]">{airline.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cheap Flights Tips Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            How to Find Cheap Flights to Morocco
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            With dozens of airlines serving Morocco, finding an affordable fare is very achievable.
            Follow these tips to get the best deals on your flights. Prices and availability are
            seasonal and can change frequently.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cheapFlightTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                  <tip.icon className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Airport Facilities Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Airport Facilities &amp; Services
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            From WiFi and ATMs to SIM cards and lounges, here is what you can expect at Moroccan airports.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airportFacilities.map((facility) => (
              <div key={facility.name} className="card-moroccan p-5">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                  <facility.icon className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {facility.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Immigration & Customs Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Immigration &amp; Customs
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            Arriving in Morocco is straightforward for most nationalities. Here is what to expect
            when you land and pass through border control.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {immigrationTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                    <tip.icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transfer Comparison Table ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Airport Transfer Comparison
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            Compare the main transport options from Morocco&apos;s airports to city centers. Prices are
            approximate and seasonal pricing can change.
          </p>
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)]/5 border-b border-[var(--border-light)]">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Airport</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Taxi</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Bus/Train</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Private Transfer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--border-light)]">
                    <td className="p-4 font-medium text-[var(--text-primary)]">Marrakech (RAK)</td>
                    <td className="p-4 text-[var(--text-secondary)]">From 100-150 MAD</td>
                    <td className="p-4 text-[var(--text-secondary)]">Bus from 30 MAD</td>
                    <td className="p-4 text-[var(--text-secondary)]">From 150 MAD</td>
                  </tr>
                  <tr className="border-b border-[var(--border-light)]">
                    <td className="p-4 font-medium text-[var(--text-primary)]">Casablanca (CMN)</td>
                    <td className="p-4 text-[var(--text-secondary)]">From 300-350 MAD</td>
                    <td className="p-4 text-[var(--text-secondary)]">Train from 43 MAD</td>
                    <td className="p-4 text-[var(--text-secondary)]">From 350 MAD</td>
                  </tr>
                  <tr className="border-b border-[var(--border-light)]">
                    <td className="p-4 font-medium text-[var(--text-primary)]">Fez (FEZ)</td>
                    <td className="p-4 text-[var(--text-secondary)]">From 120-150 MAD</td>
                    <td className="p-4 text-[var(--text-secondary)]">Bus from 5 MAD</td>
                    <td className="p-4 text-[var(--text-secondary)]">From 150 MAD</td>
                  </tr>
                  <tr className="border-b border-[var(--border-light)]">
                    <td className="p-4 font-medium text-[var(--text-primary)]">Tangier (TNG)</td>
                    <td className="p-4 text-[var(--text-secondary)]">From 150-200 MAD</td>
                    <td className="p-4 text-[var(--text-secondary)]">Bus from 5 MAD</td>
                    <td className="p-4 text-[var(--text-secondary)]">From 200 MAD</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[var(--text-primary)]">Agadir (AGA)</td>
                    <td className="p-4 text-[var(--text-secondary)]">From 200-250 MAD</td>
                    <td className="p-4 text-[var(--text-secondary)]">Bus from 15 MAD</td>
                    <td className="p-4 text-[var(--text-secondary)]">From 250 MAD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-[var(--text-secondary)] text-center mt-4">
            Prices are indicative and may vary by season, time of day, and negotiation. Always confirm the fare before departure.
          </p>
        </div>
      </section>

      {/* ── Essential Tips Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Essential Airport Tips for Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[var(--color-accent)]" /> Arrival Checklist
              </h3>
              <ul className="space-y-2">
                {[
                  'Fill in entry form before landing',
                  'Have hotel address and return flight info ready',
                  'Withdraw MAD from ATM in arrivals',
                  'Buy a local SIM card for data',
                  'Agree on taxi fare before getting in',
                  'Keep airport WiFi password for return trip',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Plane className="w-5 h-5 text-[var(--color-accent)]" /> Departure Checklist
              </h3>
              <ul className="space-y-2">
                {[
                  'Arrive 3 hours before international flights',
                  'Keep receipts for expensive purchases for customs',
                  'Spend remaining MAD at duty-free',
                  'Check hand luggage restrictions for argan oil',
                  'Confirm your terminal if at Casablanca',
                  'Allow extra time during Ramadan and holidays',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" /> Safety Tips
              </h3>
              <ul className="space-y-2">
                {[
                  'Use only official taxis from the designated rank',
                  'Never hand your luggage to unofficial porters',
                  'Keep your passport and valuables in a secure bag',
                  'Book airport transfers through your hotel if unsure',
                  'Avoid currency exchange touts outside the terminal',
                  'Save your hotel phone number offline',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[var(--color-accent)]" /> Money Tips
              </h3>
              <ul className="space-y-2">
                {[
                  'Airport ATMs offer better rates than exchange bureaus',
                  'Withdraw enough MAD for taxi and first day expenses',
                  'Keep small bills for tips (from 10-20 MAD per service)',
                  'Credit cards accepted at airport shops and car rentals',
                  'Moroccan Dirham cannot be bought outside Morocco',
                  'Inform your bank of travel plans to avoid card blocks',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
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
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the main international airport in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Casablanca Mohammed V International Airport (CMN) is Morocco&apos;s largest and busiest airport,
                handling over 10 million passengers annually. It serves as the main hub for Royal Air Maroc
                with extensive international connections. However, Marrakech Menara (RAK) is the most popular
                for tourists, especially on budget airlines from Europe.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I get from Marrakech airport to the city center?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                From Marrakech Menara Airport to the city center (about 6 km), take an official taxi for
                from 100-150 MAD (fixed rate to the medina), the airport bus (Line 19) for from 30 MAD,
                or pre-book a private transfer from 150 MAD. The journey takes 15-30 minutes depending
                on traffic. Always agree on the taxi fare before getting in.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I buy a SIM card at Morocco airports?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, Maroc Telecom, Inwi, and Orange have counters in arrivals at all major airports.
                A tourist SIM with data costs from 30-50 MAD and includes several gigabytes of 4G data
                valid for 30 days. Bring your passport for registration. It is recommended to buy one
                immediately upon arrival for maps and communication.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the cheapest way to fly to Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Budget airlines like Ryanair and easyJet offer flights from Europe often from 20-50 EUR
                one way. Book 2-3 months ahead, fly midweek, and consider alternative airports like Fez
                or Tangier which sometimes have lower fares than Marrakech. Use Google Flights or Skyscanner
                to compare prices and set fare alerts.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need a visa to enter Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Citizens of the EU, UK, USA, Canada, Australia, and many other countries do not need a visa
                for stays up to 90 days. Your passport must be valid for at least 6 months from your entry
                date. Fill out an entry form on the plane or at immigration. Extensions beyond 90 days require
                visiting a local police station before your stay expires.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is there WiFi at Moroccan airports?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, free WiFi is available at all major Moroccan airports. Connect to the airport network
                and register with your phone number or email. The connection is reliable for messaging and
                browsing but can be slow during peak hours. For faster internet, buy a local SIM card with
                data from the telecom counters in the arrivals hall.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How early should I arrive at a Moroccan airport for my flight?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                For international flights, arrive at least 3 hours before departure. Moroccan airport
                security and check-in can be thorough and queues may be long during peak season (July-August
                and December). For domestic flights, 2 hours is usually sufficient. During Ramadan and
                public holidays, allow extra time as airports tend to be busier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-transport-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Bus className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Transport Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trains, buses, taxis, and rental cars. Everything you need to get around Morocco.
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
                How to explore Morocco on a budget, from accommodation to food and activities.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/first-time" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                First Time in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Essential tips and advice for first-time visitors to Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-packing-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Luggage className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Packing Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                What to pack for Morocco including clothing, essentials, and seasonal recommendations.
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
            Ready to Book Your Flight to Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the bustling souks of Marrakech to the blue streets of Chefchaouen, Morocco is
            just a flight away. Use this guide to navigate the airports with confidence and start
            your Moroccan adventure on the right foot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Landmark className="w-5 h-5" />
              Explore Marrakech
            </Link>
            <Link
              href="/casablanca"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Building className="w-5 h-5" />
              Discover Casablanca
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
