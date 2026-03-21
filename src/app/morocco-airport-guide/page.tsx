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
  MessageCircleQuestion,
  TrainFront,
  ShoppingBag,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-airport-guide`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Airport Guide 2026 | RAK, CMN, FEZ, TNG, AGA & RBA',
  description:
    'Complete guide to Morocco airports: Marrakech Menara (RAK), Casablanca Mohammed V (CMN), Fes-Saiss (FEZ), Tangier Ibn Battuta (TNG), Agadir Al Massira (AGA), and Rabat-Sale (RBA). Transfers, lounges, duty-free, airlines, arrival procedures, and first-timer tips.',
  keywords: [
    'Morocco airports',
    'Marrakech Menara airport RAK',
    'Casablanca Mohammed V airport CMN',
    'Fes-Saiss airport FEZ',
    'Tangier Ibn Battuta airport TNG',
    'Agadir Al Massira airport AGA',
    'Rabat-Sale airport RBA',
    'Morocco airport transfer',
    'Morocco airport taxi',
    'Morocco airport SIM card',
    'Morocco airport ATM',
    'Morocco duty-free',
    'Royal Air Maroc',
    'Ryanair Morocco',
    'easyJet Morocco',
    'flights to Morocco 2026',
    'Morocco immigration arrival',
    'Morocco airport lounge',
  ],
  openGraph: {
    title: 'Morocco Airport Guide 2026 | RAK, CMN, FEZ, TNG, AGA & RBA',
    description:
      'Everything you need to know about flying into Morocco. Six major airports covered with transfer options, facilities, airlines, duty-free, and step-by-step arrival procedures.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-airports.webp`,
        width: 1200,
        height: 630,
        alt: 'Modern Moroccan airport terminal with traditional architectural elements and arriving passengers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Airport Guide 2026 | Flights, Transfers & Arrival Tips',
    description:
      'All six major Morocco airports covered. Marrakech, Casablanca, Fes, Tangier, Agadir, and Rabat with transfers, lounges, duty-free, airlines, and immigration tips.',
    images: [`${BASE_URL}/images/hero-airports.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Which Morocco airport should I fly into?',
    a: 'It depends on your destination. Marrakech Menara (RAK) is best for Marrakech and the south. Casablanca Mohammed V (CMN) has the most international connections and is ideal for onward travel anywhere in Morocco by train. Fes-Saiss (FEZ) is the gateway to northern Morocco and the imperial cities. Tangier (TNG) works well if you plan to explore the Rif or continue to Chefchaouen. Agadir (AGA) serves the beach coast, and Rabat (RBA) is closest to the capital.',
  },
  {
    q: 'How do I get from Marrakech airport to the medina?',
    a: 'From Marrakech Menara Airport (RAK) to the medina, take an official taxi from the designated rank for from 100-150 MAD (fixed rate, 15-30 minutes), the airport bus Line 19 for from 30 MAD (20-40 minutes to Jemaa el-Fnaa), or pre-book a private transfer from 150 MAD. Always confirm the taxi fare before getting in.',
  },
  {
    q: 'Can I buy a SIM card at a Morocco airport?',
    a: 'Yes. Maroc Telecom, Inwi, and Orange have counters in the arrivals halls at all major airports. A tourist SIM with 4G data costs from 30-50 MAD and typically includes 5-10 GB valid for 30 days. Bring your passport for registration. Buy one right after clearing immigration to get maps and messaging working immediately.',
  },
  {
    q: 'Is there a train from Casablanca airport to the city?',
    a: 'Yes. Casablanca Mohammed V Airport (CMN) is the only Moroccan airport with a direct rail connection. ONCF trains run every hour from the station beneath Terminal 1 to Casa Voyageurs (from 43 MAD, 45-60 minutes) and onward to Rabat (from 95 MAD, 1.5 hours). The train is far cheaper than a taxi and avoids highway traffic.',
  },
  {
    q: 'Do I need a visa to enter Morocco?',
    a: 'Citizens of the EU, UK, USA, Canada, Australia, Japan, and over 60 other countries do not need a visa for stays up to 90 days. Your passport must be valid for at least 6 months from entry. You will fill out an entry form on the plane or at immigration with your personal details, flight info, and first accommodation address in Morocco.',
  },
  {
    q: 'What is the cheapest way to fly to Morocco from Europe?',
    a: 'Budget airlines like Ryanair and easyJet offer fares from 20-50 EUR one way when booked 2-3 months ahead. Fly midweek (Tuesday-Thursday) for the lowest prices. Consider alternative airports like Fes, Tangier, or Rabat, which often have cheaper fares than Marrakech. Use Google Flights or Skyscanner to set price alerts and compare dates.',
  },
  {
    q: 'How early should I arrive at a Morocco airport for departure?',
    a: 'For international flights, arrive at least 3 hours before departure. Security and check-in queues can be long, especially during peak season (July-August and December). For domestic flights, 2 hours is usually enough. During Ramadan and public holidays, add an extra 30 minutes as airports tend to be busier.',
  },
  {
    q: 'Are there airport lounges in Morocco?',
    a: 'Casablanca Mohammed V has the best lounge options, including the Pearl Lounge accessible with Priority Pass or for from 250 MAD. Marrakech has a smaller VIP lounge in departures. Other airports have limited lounge facilities. Most lounges offer refreshments, WiFi, power outlets, and comfortable seating away from the crowded gate areas.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Airport Guide 2026',
  description:
    'Complete guide to Morocco airports covering Marrakech Menara (RAK), Casablanca Mohammed V (CMN), Fes-Saiss (FEZ), Tangier Ibn Battuta (TNG), Agadir Al Massira (AGA), and Rabat-Sale (RBA) with transfer options, facilities, airlines, and arrival procedures.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-airports.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Airport Guide', item: PAGE_URL },
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
   DATA: AIRPORTS
   ================================================================ */

const airports = [
  {
    name: 'Marrakech Menara Airport',
    code: 'RAK',
    city: 'Marrakech',
    distance: '6 km from medina',
    passengers: '6+ million/year',
    terminals: '2 terminals (T1 international, T2 domestic + overflow)',
    description:
      'Morocco\'s busiest tourist airport and gateway to the Red City. Served by dozens of European budget and full-service carriers, Menara handles massive peak-season volumes from October through April. The terminal features a distinctive triangular roof inspired by the Atlas Mountains. Arrivals can be hectic when several flights land at once, so be patient at immigration.',
    transfers: [
      { method: 'Official taxi', price: 'From 100-150 MAD to medina (fixed rate)', time: '15-30 min' },
      { method: 'Airport bus (Line 19)', price: 'From 30 MAD', time: '20-40 min to Jemaa el-Fnaa' },
      { method: 'Private transfer', price: 'From 150 MAD (pre-booked)', time: '15-25 min' },
    ],
    facilities: ['Free WiFi', 'ATMs (BMCE, Attijariwafa)', 'SIM card counters', 'Car rental desks', 'Cafes', 'Duty-free shop', 'Prayer room', 'Currency exchange'],
    airlines: 'Ryanair, easyJet, Royal Air Maroc, Transavia, TUI fly, Air Arabia, Vueling, Iberia, Air France, British Airways, Wizz Air',
    lounges: 'Small VIP lounge in departures area. Limited seating and refreshments. No Priority Pass access. Best strategy is to arrive early and find a quieter corner in the main terminal.',
    tip: 'The taxi rank is directly outside arrivals. Ignore anyone inside the terminal offering you a taxi or transfer -- walk through to the official rank where prices are posted.',
  },
  {
    name: 'Casablanca Mohammed V Airport',
    code: 'CMN',
    city: 'Casablanca',
    distance: '30 km from city center',
    passengers: '10+ million/year',
    terminals: '2 terminals connected by free shuttle',
    description:
      'Morocco\'s largest international hub and the base for Royal Air Maroc. CMN offers the widest range of long-haul connections, including direct flights to New York (JFK), Montreal, Doha, Dubai, and dozens of African capitals. It is the only Moroccan airport with a direct train station, making onward travel to Rabat, Fes, Tangier, and Marrakech straightforward from the moment you land.',
    transfers: [
      { method: 'ONCF train', price: 'From 43 MAD to Casa Voyageurs', time: '45-60 min' },
      { method: 'Official taxi', price: 'From 300-350 MAD to city center', time: '30-50 min' },
      { method: 'Private transfer', price: 'From 350 MAD (pre-booked)', time: '30-45 min' },
    ],
    facilities: ['Free WiFi', 'ONCF train station', 'ATMs & currency exchange', 'Pearl Lounge (Priority Pass)', 'SIM card counters', 'Car rental desks', 'Hotels nearby', 'Duty-free shops', 'Restaurants'],
    airlines: 'Royal Air Maroc (hub), Air France, Lufthansa, Turkish Airlines, Qatar Airways, Emirates, British Airways, Ryanair, Air Arabia, Iberia, Saudia, Ethiopian Airlines',
    lounges: 'Pearl Lounge in Terminal 1 departures -- accessible with Priority Pass or for from 250 MAD. Offers hot food, drinks, WiFi, showers, and quiet seating. Terminal 2 has a smaller Royal Air Maroc business lounge for business class passengers.',
    tip: 'The train station is underneath Terminal 1. Follow signs for "Gare" after clearing customs. Trains depart roughly every hour to Casa Voyageurs, then connect to the national ONCF network.',
  },
  {
    name: 'Fes-Saiss Airport',
    code: 'FEZ',
    city: 'Fes',
    distance: '15 km from medina',
    passengers: '1.5+ million/year',
    terminals: '1 terminal (renovated)',
    description:
      'A compact, modern airport that has grown rapidly as budget airlines added European routes. Fes-Saiss is an excellent alternative to Marrakech, often with cheaper fares and significantly shorter immigration queues. The terminal is easy to navigate, and you can be through arrivals in 20-30 minutes on a good day. Fes itself is one of Morocco\'s most rewarding cities, with the world\'s largest car-free urban area.',
    transfers: [
      { method: 'Official taxi', price: 'From 120-150 MAD to medina', time: '20-30 min' },
      { method: 'City bus (Line 16)', price: 'From 5 MAD', time: '30-45 min' },
      { method: 'Private transfer', price: 'From 150 MAD (pre-booked)', time: '20-25 min' },
    ],
    facilities: ['Free WiFi', 'ATMs', 'SIM card counters', 'Car rental desks', 'Small cafe', 'Duty-free shop', 'Currency exchange'],
    airlines: 'Ryanair, Air Arabia, Royal Air Maroc, Transavia, TUI fly, Wizz Air',
    lounges: 'No dedicated lounge. The terminal has a small cafe area past security. Bring snacks if you have a long wait.',
    tip: 'Bus 16 is extremely cheap but slow and can be crowded. For first-time visitors arriving at night, a taxi or pre-booked transfer is strongly recommended since navigating the Fes medina in the dark is challenging.',
  },
  {
    name: 'Tangier Ibn Battuta Airport',
    code: 'TNG',
    city: 'Tangier',
    distance: '12 km from city center',
    passengers: '2+ million/year',
    terminals: '1 modern terminal',
    description:
      'Named after the legendary Moroccan explorer, Tangier\'s airport has expanded significantly with new European routes. The modern terminal handles a growing mix of international and domestic flights. Tangier is also reachable by high-speed ferry from Tarifa or Algeciras in Spain (35-60 minutes), making it a dual entry point. The airport serves as a natural starting point for exploring northern Morocco, including Chefchaouen, the Rif Mountains, and the Mediterranean coast.',
    transfers: [
      { method: 'Official taxi', price: 'From 150-200 MAD to city center', time: '15-25 min' },
      { method: 'City bus', price: 'From 5 MAD', time: '30-40 min' },
      { method: 'Private transfer', price: 'From 200 MAD (pre-booked)', time: '15-20 min' },
    ],
    facilities: ['Free WiFi', 'ATMs & currency exchange', 'SIM card counters', 'Car rental desks', 'Cafe', 'Duty-free shop'],
    airlines: 'Ryanair, Air Arabia, Royal Air Maroc, Transavia, Vueling, Wizz Air',
    lounges: 'No dedicated lounge. A small cafe in departures serves coffee and light snacks.',
    tip: 'If you are heading to Chefchaouen, arrange ground transport in advance. Shared taxis (grands taxis) to Chefchaouen leave from the city bus station, not the airport. Budget from 100 MAD per person for the shared ride.',
  },
  {
    name: 'Agadir Al Massira Airport',
    code: 'AGA',
    city: 'Agadir',
    distance: '25 km from city center',
    passengers: '2+ million/year',
    terminals: '1 terminal',
    description:
      'Gateway to Morocco\'s premier beach resort region and the Souss-Massa coast. Al Massira handles heavy charter traffic from northern Europe, especially from November through March when sun-seekers escape winter weather. The terminal is functional rather than fancy. Many arrivals are on package holidays with transfers included, but independent travelers have good taxi and bus options.',
    transfers: [
      { method: 'Official taxi', price: 'From 200-250 MAD to city center', time: '25-35 min' },
      { method: 'Bus', price: 'From 15 MAD', time: '40-50 min' },
      { method: 'Private transfer', price: 'From 250 MAD (pre-booked)', time: '25-30 min' },
    ],
    facilities: ['Free WiFi', 'ATMs', 'SIM card counters', 'Car rental desks', 'Cafe', 'Duty-free shop', 'Currency exchange'],
    airlines: 'Ryanair, easyJet, TUI fly, Royal Air Maroc, Transavia, Condor, Corendon, Jet2',
    lounges: 'No dedicated lounge. The departures area has a small cafe and a duty-free shop where you can spend remaining Dirhams before flying out.',
    tip: 'Agadir is 25 km from the airport with no train connection. If you are staying in Taghazout (surfing town), it is an additional 20 km north. Pre-book a transfer or negotiate with the taxi driver before leaving the airport.',
  },
  {
    name: 'Rabat-Sale Airport',
    code: 'RBA',
    city: 'Rabat',
    distance: '10 km from city center',
    passengers: '1+ million/year',
    terminals: '1 terminal',
    description:
      'The capital\'s airport is smaller and quieter than Casablanca but growing fast. Ryanair has built a solid route network here with several European connections, and Air Arabia also serves RBA. Immigration is typically faster than at larger airports. Rabat itself is an underrated destination with excellent museums, a relaxed medina, and the stunning Hassan Tower and Chellah necropolis.',
    transfers: [
      { method: 'Official taxi', price: 'From 150-200 MAD to city center', time: '15-25 min' },
      { method: 'Tram (connection via bus)', price: 'From 6 MAD', time: '40-50 min with connection' },
      { method: 'Private transfer', price: 'From 200 MAD (pre-booked)', time: '15-20 min' },
    ],
    facilities: ['Free WiFi', 'ATMs', 'SIM card counters', 'Car rental desks', 'Small cafe', 'Currency exchange'],
    airlines: 'Ryanair, Air Arabia, Royal Air Maroc, Transavia',
    lounges: 'No dedicated lounge. The terminal is small enough that waits are generally short.',
    tip: 'Rabat-Sale is a smart alternative to Casablanca. It is closer to the city center, less hectic, and Ryanair fares can be excellent. The Rabat-Sale tram system connects the two cities, but from the airport you will need a taxi or bus first.',
  },
] as const;

/* ================================================================
   DATA: AIRLINES SERVING MOROCCO
   ================================================================ */

const airlines = [
  {
    name: 'Royal Air Maroc (AT)',
    type: 'Flag carrier',
    icon: Award,
    hubs: 'Casablanca (CMN) main hub',
    routes: '100+ destinations: New York, Montreal, London, Paris, Dubai, Doha, Istanbul, and dozens of African cities',
    description:
      'Morocco\'s national airline and a Oneworld alliance member. Full-service with meals, checked bags, and entertainment included. The only realistic option for long-haul flights from North America and the Middle East. Casablanca CMN serves as its primary hub with connections across the ONCF network.',
    tip: 'Book on royalairmaroc.com for best availability. Safar Flyer miles can be earned and redeemed on Oneworld partners including British Airways and Qatar Airways.',
  },
  {
    name: 'Ryanair (FR)',
    type: 'Budget airline',
    icon: DollarSign,
    hubs: 'Marrakech, Fes, Tangier, Rabat, Agadir, Essaouira, Nador, Oujda',
    routes: 'UK, Spain, France, Germany, Italy, Portugal, Belgium, Netherlands, Poland, and more',
    description:
      'The largest budget carrier serving Morocco with an enormous European route network. Operates year-round to multiple Moroccan airports. Fares can drop below 20 EUR one way when booked early, but baggage fees add up quickly.',
    tip: 'Go carry-on only to keep costs down. Checked bag fees run from 20-40 EUR each way. Book 2-3 months ahead for the best fares.',
  },
  {
    name: 'easyJet (U2)',
    type: 'Budget airline',
    icon: DollarSign,
    hubs: 'Marrakech, Agadir',
    routes: 'UK (London Gatwick, Manchester, Bristol, Edinburgh) and select European cities',
    description:
      'Popular with British travelers. Operates seasonal and year-round routes to Marrakech and Agadir. Slightly more legroom and a better boarding experience than some ultra-low-cost rivals.',
    tip: 'Set fare alerts for price drops. easyJet Plus membership offers speedy boarding and seat selection if you fly frequently.',
  },
  {
    name: 'Air Arabia Maroc (3O)',
    type: 'Low-cost carrier',
    icon: Globe,
    hubs: 'Casablanca, Fes, Nador, Tangier, Rabat',
    routes: 'European cities, Middle East, and domestic Moroccan routes',
    description:
      'The Moroccan arm of the UAE-based Air Arabia group. Competitive pricing on both international and domestic routes. A solid option for connecting between Moroccan cities without going through Casablanca.',
    tip: 'Good for domestic flights. Check for bundle deals that include checked baggage for better value.',
  },
  {
    name: 'TUI fly & Transavia',
    type: 'Charter / low-cost',
    icon: Globe,
    hubs: 'Marrakech, Agadir, Nador',
    routes: 'Netherlands, Belgium, France, Germany, Scandinavia',
    description:
      'TUI fly serves Agadir and Marrakech from multiple European cities, popular with package holidays. Transavia (Air France subsidiary) connects Morocco with France and the Netherlands at competitive fares.',
    tip: 'TUI package deals including hotel and transfers often cost less than booking flights and accommodation separately.',
  },
];

/* ================================================================
   DATA: IMMIGRATION & FIRST ARRIVAL
   ================================================================ */

const arrivalSteps = [
  {
    step: 1,
    title: 'Fill Out the Entry Form',
    icon: BookOpen,
    text: 'You will receive an entry/exit form on the plane or find one at immigration counters. Fill in your full name, passport number, flight number, nationality, and the address of your first accommodation in Morocco. Have this information ready before landing to save time.',
  },
  {
    step: 2,
    title: 'Clear Immigration',
    icon: ShieldCheck,
    text: 'Present your passport and completed entry form at immigration. Officers may ask about the purpose of your visit and length of stay. Keep your return flight details accessible. Wait times range from 10 minutes (Fes, Rabat) to 60 minutes (Marrakech, Casablanca) during peak arrivals.',
  },
  {
    step: 3,
    title: 'Collect Luggage & Clear Customs',
    icon: Luggage,
    text: 'Proceed to the baggage carousel. Luggage carts are free at most airports. Customs is usually a brief walk-through with nothing to declare. You can bring up to 200 cigarettes, 1 liter of spirits, and personal effects duty-free. Prescription medication should be accompanied by a doctor\'s note.',
  },
  {
    step: 4,
    title: 'Get Cash & a SIM Card',
    icon: CreditCard,
    text: 'Withdraw Moroccan Dirhams (MAD) from an ATM in the arrivals hall. BMCE, Attijariwafa, and Banque Populaire ATMs accept international cards and offer better rates than exchange bureaus. Then pick up a SIM card from Maroc Telecom, Inwi, or Orange (from 30-50 MAD for data).',
  },
  {
    step: 5,
    title: 'Arrange Your Transfer',
    icon: Car,
    text: 'Head to the official taxi rank outside arrivals. Fares should be posted or agreed upon before departure. If you pre-booked a private transfer, look for your driver holding a sign with your name. Do not accept offers from touts inside the terminal.',
  },
];

/* ================================================================
   DATA: AIRPORT FACILITIES
   ================================================================ */

const facilityGuide = [
  {
    name: 'WiFi & Connectivity',
    icon: Wifi,
    text: 'All major Moroccan airports offer free WiFi. Connect to the network and register with your email or phone number. Speeds are adequate for messaging and browsing but slow down during peak hours. For reliable mobile data throughout your trip, buy a local SIM card from the telecom counters in arrivals.',
  },
  {
    name: 'ATMs & Currency Exchange',
    icon: CreditCard,
    text: 'ATMs from BMCE, Attijariwafa, and Banque Populaire are located in all airport arrivals halls and accept Visa, Mastercard, and Maestro cards. ATM rates are better than exchange bureau rates. Withdraw enough MAD for your taxi, first day of expenses, and initial tips. Moroccan Dirhams cannot be purchased outside the country.',
  },
  {
    name: 'SIM Cards',
    icon: Phone,
    text: 'Maroc Telecom, Inwi, and Orange counters are in arrivals at all major airports. A tourist SIM costs from 30-50 MAD and includes 5-10 GB of 4G data valid for 30 days. Bring your passport for mandatory registration. Mobile data is essential for Google Maps navigation, translation apps, and messaging.',
  },
  {
    name: 'Duty-Free Shopping',
    icon: ShoppingBag,
    text: 'Departures at Casablanca and Marrakech have the largest duty-free selections: argan oil products, saffron, handicrafts, alcohol, tobacco, perfumes, and international brands. Argan oil prices at duty-free are often fair compared to medina shops. Arrive early to browse since security queues can eat into shopping time.',
  },
  {
    name: 'VIP Lounges',
    icon: Coffee,
    text: 'Casablanca CMN has the Pearl Lounge (Priority Pass or from 250 MAD) with hot food, showers, and quiet seating. Marrakech has a smaller VIP lounge. Other airports have limited or no lounge access. If your airport lacks a lounge, seek out quieter gate areas and the cafes past security.',
  },
  {
    name: 'Luggage Services',
    icon: Luggage,
    text: 'Luggage carts are free at most airports. Wrapping services cost from 50-80 MAD. Lost luggage offices sit in the arrivals area. Porter services are available; tip from 20-30 MAD. Left luggage storage is available at Casablanca CMN for from 40 MAD per bag per day.',
  },
];

/* ================================================================
   DATA: CHEAP FLIGHT TIPS
   ================================================================ */

const flightTips = [
  {
    title: 'Book 2-3 Months Ahead',
    icon: Clock,
    text: 'For the best fares, book 8-12 weeks before travel. Last-minute flights can cost three to four times more during peak season (December-January, July-August). Set price alerts on Google Flights or Skyscanner to catch fare drops.',
  },
  {
    title: 'Fly Midweek',
    icon: DollarSign,
    text: 'Tuesday, Wednesday, and Thursday flights are typically 20-40% cheaper than weekend departures. Saturday is usually the most expensive day to fly. Shifting your travel day by one or two days can save a significant amount.',
  },
  {
    title: 'Try Alternative Airports',
    icon: MapPin,
    text: 'Fes, Tangier, and Rabat often have cheaper flights than Marrakech. Flying into Casablanca and taking the train to Marrakech (from 145 MAD, 2.5 hours) can sometimes be cheaper overall. Nador and Oujda also have surprisingly low fares from European cities.',
  },
  {
    title: 'Travel in Shoulder Season',
    icon: Star,
    text: 'March-May and September-November offer pleasant weather and lower airfares. Avoid the Christmas/New Year period and summer school holidays when fares peak. Ramadan can bring good deals as fewer tourists travel during fasting month.',
  },
  {
    title: 'Pack Carry-On Only',
    icon: Luggage,
    text: 'Budget airlines charge from 20-40 EUR per checked bag each way. Packing light and using just a cabin bag can cut your total flight cost significantly. Morocco has affordable laundry services everywhere if you need to wash clothes mid-trip.',
  },
  {
    title: 'Use Comparison Tools',
    icon: Globe,
    text: 'Google Flights, Skyscanner, and Kayak are excellent for comparing Morocco fares. Use their flexible date or calendar view features to find the cheapest travel dates. Also check airline websites directly, as some sales are not listed on aggregators.',
  },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoAirportGuidePage() {
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

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-airports.webp)' }}
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
            Morocco Airport Guide
            <br className="hidden md:block" /> for 2026
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-8">
            A detailed look at all six major Moroccan airports, from terminal layouts and transfer
            options to SIM cards, ATMs, duty-free, and the airlines that serve each one. Everything
            you need to land smoothly and start exploring.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
              <Plane className="w-4 h-4" /> 6 Major Airports Covered
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

      {/* ── Overview ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-6">
              Flying Into Morocco
            </h2>
            <p className="text-[var(--text-secondary)] text-center mb-8 max-w-3xl mx-auto">
              Morocco has invested heavily in airport infrastructure. The country&apos;s airports are
              managed by ONDA (Office National Des Aeroports), and the six busiest handle the vast
              majority of international traffic. Budget carriers from Europe have made Morocco one of
              the most accessible destinations in North Africa, with fares sometimes dropping below
              20 EUR one way.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-moroccan p-6 text-center">
                <Plane className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-3" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  ONDA Network
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Over 15 airports nationwide, six with major international traffic. Modern terminals
                  and ongoing expansion projects at Marrakech and Casablanca.
                </p>
              </div>
              <div className="card-moroccan p-6 text-center">
                <Car className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-3" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Transfer Options
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Every airport has official taxis and private transfers. Casablanca uniquely offers
                  a direct train connection. Always agree on taxi fares before departing.
                </p>
              </div>
              <div className="card-moroccan p-6 text-center">
                <ShieldCheck className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-3" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Visa-Free Entry
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Citizens of over 60 countries enjoy visa-free entry for up to 90 days. EU, UK, USA,
                  Canada, and Australian passport holders all qualify.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Airport Profiles ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Plane className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco&apos;s Six Major Airports
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            Each airport serves as a gateway to a different region. Here is what to expect at each
            one, including transfer options, facilities, and airline coverage.
          </p>

          <div className="space-y-8">
            {airports.map((airport) => (
              <div key={airport.code} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--color-accent)] font-bold text-sm">{airport.code}</span>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[var(--color-accent)]" /> Airlines
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)]">{airport.airlines}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                      <Coffee className="w-4 h-4 text-[var(--color-accent)]" /> Lounges
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)]">{airport.lounges}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <Info className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--text-secondary)]"><strong>Tip:</strong> {airport.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transfer Comparison Table ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Airport Transfer Comparison
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-3 max-w-2xl mx-auto">
            Side-by-side look at transfer costs from each airport to its respective city center.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting prices in MAD. Seasonal pricing can change during peak months and holidays.
          </p>
          <div className="card-moroccan overflow-hidden max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)] text-white text-left">
                    <th className="p-3 px-4">Airport</th>
                    <th className="p-3 px-4">Taxi</th>
                    <th className="p-3 px-4">Bus / Train</th>
                    <th className="p-3 px-4">Private Transfer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { airport: 'Marrakech (RAK)', taxi: 'From 100-150 MAD', public: 'Bus from 30 MAD', private: 'From 150 MAD' },
                    { airport: 'Casablanca (CMN)', taxi: 'From 300-350 MAD', public: 'Train from 43 MAD', private: 'From 350 MAD' },
                    { airport: 'Fes (FEZ)', taxi: 'From 120-150 MAD', public: 'Bus from 5 MAD', private: 'From 150 MAD' },
                    { airport: 'Tangier (TNG)', taxi: 'From 150-200 MAD', public: 'Bus from 5 MAD', private: 'From 200 MAD' },
                    { airport: 'Agadir (AGA)', taxi: 'From 200-250 MAD', public: 'Bus from 15 MAD', private: 'From 250 MAD' },
                    { airport: 'Rabat (RBA)', taxi: 'From 150-200 MAD', public: 'Bus from 6 MAD', private: 'From 200 MAD' },
                  ].map((row, i) => (
                    <tr key={row.airport} className={`border-b border-[var(--border-light)] ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}>
                      <td className="p-3 px-4 font-medium text-[var(--text-primary)]">{row.airport}</td>
                      <td className="p-3 px-4 text-[var(--text-secondary)]">{row.taxi}</td>
                      <td className="p-3 px-4 text-[var(--text-secondary)]">{row.public}</td>
                      <td className="p-3 px-4 text-[var(--text-secondary)]">{row.private}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Step-by-Step Arrival ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CheckCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Step-by-Step Arrival Procedure
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            What happens from the moment your plane touches down to when you leave the airport.
          </p>

          <div className="space-y-6">
            {arrivalSteps.map((s) => {
              const StepIcon = s.icon;
              return (
                <div key={s.step} className="card-moroccan p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                      <StepIcon className="w-4 h-4 text-[var(--color-accent)]" />
                      {s.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Airlines Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Airlines Flying to Morocco
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            From the national flag carrier to European budget airlines, Morocco is well-connected
            by air. Here are the key carriers to consider.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {airlines.map((airline) => {
              const AirlineIcon = airline.icon;
              return (
                <div key={airline.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                      <AirlineIcon className="w-5 h-5 text-[var(--color-accent)]" />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Airport Facilities ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Airport Facilities &amp; Services
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            What to expect at Moroccan airports in terms of connectivity, money, shopping, and comfort.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityGuide.map((f) => {
              const FIcon = f.icon;
              return (
                <div key={f.name} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <FIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {f.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cheap Flight Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Find Cheap Flights to Morocco
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            With dozens of airlines serving Morocco, finding an affordable fare is very achievable.
            Seasonal pricing can change, so flexibility on dates and airports makes the biggest difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flightTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Essential Tips (Checklists) ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Essential Airport Checklists
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
                <Plane className="w-5 h-5 text-[var(--color-accent)]" /> Departure Checklist
              </h3>
              <ul className="space-y-2">
                {[
                  'Arrive 3 hours before international flights',
                  'Keep receipts for expensive purchases',
                  'Spend remaining MAD at duty-free',
                  'Check hand luggage rules for argan oil bottles',
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
                  'Do not hand luggage to unofficial porters',
                  'Keep passport and valuables in a secure bag',
                  'Book airport transfers through your hotel if unsure',
                  'Avoid currency exchange touts outside the terminal',
                  'Inform your bank of travel plans to prevent card blocks',
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
                  'Moroccan Dirhams cannot be bought outside Morocco',
                  'Notify your bank before travel to avoid card freezes',
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
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions travelers ask about Morocco airports.
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Morocco Transport Guide',
                description: 'Trains, buses, taxis, and rental cars. Everything for getting around Morocco after you land.',
                href: '/morocco-transport',
                icon: Bus,
              },
              {
                title: 'First Time in Morocco',
                description: 'Essential tips, cultural advice, and practical information for first-time visitors.',
                href: '/morocco-first-time',
                icon: BookOpen,
              },
              {
                title: 'Morocco Visa Guide',
                description: 'Visa requirements, passport rules, entry forms, and extension procedures explained.',
                href: '/morocco-visa-guide',
                icon: ShieldCheck,
              },
              {
                title: 'Morocco Train Routes',
                description: 'ONCF rail network, schedules, fares, and the best scenic train journeys across the country.',
                href: '/morocco-train-routes',
                icon: TrainFront,
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

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Book Your Flight to Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the souks of Marrakech to the blue alleys of Chefchaouen, Morocco is just a
            short flight from Europe. Use this guide to navigate the airports with confidence
            and start your Moroccan adventure on the right foot.
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
