import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Heart,
  MapPin,
  Shield,
  Star,
  Clock,
  CheckCircle,
  Sun,
  Compass,
  Building,
  Phone,
  Thermometer,
  Users,
  Footprints,
  Camera,
  UtensilsCrossed,
  Bus,
  Plane,
  CalendarDays,
  Info,
  ArrowRight,
  MessageCircleQuestion,
  Stethoscope,
  Accessibility,
  Hotel,
  Gem,
  Coffee,
  Sunrise,
  Landmark,
  ShieldCheck,
  Globe,
  Lightbulb,
  Bed,
  HandHeart,
  TreePine,
  Waves,
  Mountain,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Morocco for Seniors | Travel Guide for Older Travelers 2025',
  description:
    'Plan a comfortable, rewarding trip to Morocco as a senior traveler. Covers mobility tips, medical facilities, senior-friendly tours, best cities, pace of travel advice, luxury and comfort options, and seasonal recommendations.',
  keywords: [
    'morocco senior travel',
    'morocco for older travelers',
    'senior tour morocco',
    'morocco retirement travel',
    'morocco elderly travel',
    'morocco accessible travel seniors',
    'morocco over 60 travel',
    'morocco mature travelers',
    'morocco senior group tours',
    'morocco luxury senior travel',
    'morocco comfortable travel',
    'morocco health travel tips',
    'morocco gentle pace travel',
    'senior friendly riads morocco',
    'morocco travel insurance seniors',
  ],
  openGraph: {
    title: 'Morocco for Seniors | Travel Guide for Older Travelers 2025',
    description:
      'A detailed, practical guide for senior travelers to Morocco. Medical info, mobility advice, curated city picks, tour options, and tips for a relaxed, enriching journey.',
    url: 'https://citytoursmorocco.com/morocco-senior-travel',
    images: [
      {
        url: '/images/hero-marrakech.webp',
        width: 1200,
        height: 630,
        alt: 'Senior travelers exploring a traditional Moroccan riad courtyard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco for Seniors | Travel Guide for Older Travelers 2025',
    description:
      'A practical guide for senior travelers: mobility tips, medical facilities, best cities, tour options, and seasonal advice for Morocco.',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/morocco-senior-travel',
  },
};

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  name: 'Morocco for Seniors — Travel Guide for Older Travelers',
  description:
    'A comprehensive guide for senior travelers planning a trip to Morocco, covering accessibility, medical facilities, tour options, city recommendations, and practical advice for a comfortable experience.',
  url: 'https://citytoursmorocco.com/morocco-senior-travel',
  publisher: {
    '@type': 'Organization',
    name: 'City Tours Morocco',
    url: 'https://citytoursmorocco.com',
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Senior Travelers',
  },
};

const faqItems = [
  {
    question: 'Is Morocco safe for senior travelers?',
    answer:
      'Morocco is generally safe for seniors. Tourist areas in Marrakech, Fes, Essaouira, and Rabat have visible police presence. Petty theft exists in crowded medinas, so use a crossbody bag and keep valuables in your riad safe. Violent crime against tourists is rare. Most Moroccans show deep respect for older people — elders hold honored status in Moroccan culture.',
  },
  {
    question: 'Can I get around Morocco with limited mobility?',
    answer:
      'Yes, but plan carefully. Medinas have cobblestones, steps, and uneven surfaces that challenge walkers and wheelchair users. The Ville Nouvelles (modern districts) in cities like Rabat, Casablanca, and Agadir are flat and paved. Private drivers and guided tours remove the need to navigate difficult terrain on foot. Many upscale riads have ground-floor rooms. Agadir and coastal resorts are the most accessible destinations.',
  },
  {
    question: 'What medical facilities are available for tourists?',
    answer:
      'Casablanca and Rabat have excellent private hospitals (Clinique Cheikh Zayd, Clinique Internationale) with English-speaking doctors. Marrakech has Clinique Internationale and several private clinics. Pharmacies are everywhere and pharmacists can advise on minor ailments. Carry prescription medications with original labels and a doctor letter. Private hospitals expect upfront payment — travel insurance with direct billing is worth the investment.',
  },
  {
    question: 'What is the best time of year for seniors to visit Morocco?',
    answer:
      'March through May and September through November offer the most comfortable conditions. Temperatures range from 18-28 degrees C, crowds are moderate, and prices are reasonable. Avoid July and August when inland cities like Marrakech hit 40 degrees C or more. Winter (December-February) suits coastal destinations like Essaouira and Agadir, though nights can be cold in mountain and desert areas.',
  },
  {
    question: 'Should I book a guided tour or travel independently?',
    answer:
      'For first-time senior visitors, a guided or semi-guided tour removes logistical stress. Private tours let you set your own pace, skip what does not interest you, and rest when needed. Independent travel works well if you stick to well-connected cities and book riads with airport transfers. A middle ground: book a private driver for intercity travel and explore cities on your own.',
  },
  {
    question: 'How much should I budget per day as a senior traveler?',
    answer:
      'Comfortable senior travel in Morocco costs from 1,200 to 2,500 MAD per day (roughly $120-250 USD) per person. This covers a quality riad with breakfast, restaurant meals, private transport, and guided activities. Luxury travel at five-star hotels runs from 3,500 MAD/day upward. Morocco offers exceptional value compared to European destinations — a five-star experience here costs what a three-star trip would in Spain or France.',
  },
  {
    question: 'Do I need special travel insurance for Morocco?',
    answer:
      'Standard travel insurance often has age limits or higher premiums for travelers over 65. Seek out policies specifically designed for senior travelers from providers like Staysure, AllClear, or World Nomads. Confirm coverage includes emergency medical evacuation (helicopter from the Atlas Mountains or Sahara if needed), repatriation, trip cancellation for medical reasons, and pre-existing condition coverage. Keep the policy number and emergency phone line accessible at all times.',
  },
];

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

const bestCities = [
  {
    name: 'Marrakech',
    icon: Landmark,
    tagline: 'Cultural heart with luxury options',
    accessibility: 'Moderate — medina is challenging, Gueliz district is flat and modern',
    highlights: [
      'Majorelle Garden has paved paths and benches throughout',
      'La Mamounia and Royal Mansour offer world-class senior-friendly luxury',
      'Horse-drawn calèche tours let you see the medina without walking',
      'Bahia Palace has mostly flat ground-level rooms to explore',
      'Gueliz (new city) has wide pavements, taxis, and modern restaurants',
    ],
    stayDuration: '3-4 nights',
    bestFor: 'Culture, food, shopping, and a taste of the real Morocco',
  },
  {
    name: 'Essaouira',
    icon: Waves,
    tagline: 'Laid-back coastal charm',
    accessibility: 'Good — small, flat medina with ocean breezes keeping temperatures mild',
    highlights: [
      'Compact medina takes 20 minutes to cross at a slow pace',
      'Seafront promenade (skala) is flat with benches and sea views',
      'Fresh grilled fish at the port costs from 50 MAD per plate',
      'Art galleries and woodworking workshops require minimal walking',
      'Wind keeps summer temperatures around 22-25 degrees C',
    ],
    stayDuration: '2-3 nights',
    bestFor: 'Relaxation, seafood, art, and escaping the heat',
  },
  {
    name: 'Rabat',
    icon: Building,
    tagline: 'Clean, calm, and cosmopolitan',
    accessibility: 'Excellent — Morocco\'s most orderly city with modern infrastructure',
    highlights: [
      'Wide boulevards, traffic lights, and functioning pedestrian crossings',
      'Tram system is modern, accessible, and connects key sights',
      'Hassan Tower and Mausoleum of Mohammed V have smooth paths',
      'Kasbah of the Udayas is compact with some steps but manageable',
      'Ville Nouvelle restaurants and cafes match European accessibility standards',
    ],
    stayDuration: '2-3 nights',
    bestFor: 'History, modern comfort, and a gentle introduction to Morocco',
  },
  {
    name: 'Agadir',
    icon: Sun,
    tagline: 'Beach resort with full amenities',
    accessibility: 'Excellent — purpose-built resort city, flat terrain, modern hotels',
    highlights: [
      'Long, flat beach promenade perfect for morning walks',
      'International hotels with elevators, pools, and spa facilities',
      'Golf courses at Royal Golf Agadir and Golf du Soleil',
      'Souk El Had is organized and less chaotic than traditional medinas',
      'Direct flights from many European cities reduce travel fatigue',
    ],
    stayDuration: '4-7 nights',
    bestFor: 'Beach relaxation, golf, spa, and resort-style comfort',
  },
  {
    name: 'Fes',
    icon: Star,
    tagline: 'Ancient culture, guided exploration',
    accessibility: 'Challenging — steep medina streets, but manageable with a guide',
    highlights: [
      'Fes el-Bali (old medina) demands a guide — getting lost here is common',
      'Leather tanneries viewable from balconies, no walking required',
      'Palais Faraj and Riad Fes offer luxury with medina views from the terrace',
      'Mellah (Jewish Quarter) is flatter than the main medina',
      'Hire a local guide (from 400 MAD/half day) who knows the easiest routes',
    ],
    stayDuration: '2-3 nights',
    bestFor: 'History, craftsmanship, and deep cultural immersion',
  },
];

const tourOptions = [
  {
    type: 'Private Guided Tour',
    priceRange: 'from 2,500 MAD/day',
    icon: Compass,
    description:
      'A dedicated English-speaking guide and driver at your pace. Stop when you want, skip sites that do not interest you, and rest when you need to. The gold standard for senior travel in Morocco.',
    includes: [
      'Air-conditioned vehicle with driver',
      'Licensed English-speaking guide',
      'Hotel pickup and drop-off daily',
      'Flexible schedule based on your energy',
      'Assistance with restaurant bookings and special requests',
    ],
  },
  {
    type: 'Small Group Tour (max 12)',
    priceRange: 'from 1,200 MAD/day',
    icon: Users,
    description:
      'Join a curated group of like-minded travelers, typically in a similar age bracket. Fixed itinerary but with a gentler pace than budget group tours. Social element adds to the experience.',
    includes: [
      'Comfortable minibus transport',
      'Experienced tour leader',
      'Pre-booked quality accommodation',
      'Most meals included',
      'Luggage handling between hotels',
    ],
  },
  {
    type: 'Self-Drive with Support',
    priceRange: 'from 800 MAD/day',
    icon: MapPin,
    description:
      'Rent a car and follow a custom itinerary prepared by a local travel specialist. Drive at your own pace with 24/7 phone support, pre-booked riads, and detailed directions. Works best for experienced travelers comfortable with Moroccan roads.',
    includes: [
      'Automatic transmission rental car with full insurance',
      'Pre-booked accommodation along the route',
      'Detailed driving instructions and GPS coordinates',
      '24/7 English-speaking phone support',
      'Emergency roadside assistance',
    ],
  },
  {
    type: 'Luxury Escorted Journey',
    priceRange: 'from 5,000 MAD/day',
    icon: Gem,
    description:
      'Five-star hotels, private dining, exclusive access to cultural sites, and a personal concierge. For travelers who want Morocco at its finest with zero logistics to manage.',
    includes: [
      'Five-star hotels and luxury riads',
      'Private chef experiences and rooftop dinners',
      'Exclusive access to artisan workshops',
      'Business-class domestic flights where available',
      'Personal concierge and on-call medical contact',
    ],
  },
];

const mobilityTips = [
  {
    title: 'Medina Navigation',
    icon: Footprints,
    tips: [
      'Cobblestones and uneven surfaces are standard in old medinas — wear sturdy, non-slip shoes with ankle support',
      'Fes medina has steep hills and narrow alleys; Marrakech medina is flatter but more crowded',
      'Motorscooters and donkeys share medina lanes — stay alert and press against a wall when they pass',
      'Take a calèche (horse carriage) or taxi to the medina entrance instead of walking from your riad',
      'Rest stops: most medina cafes welcome you to sit with just a mint tea (from 10 MAD)',
    ],
  },
  {
    title: 'Step-Free Alternatives',
    icon: Accessibility,
    tips: [
      'Agadir and its beach promenade are almost entirely flat and paved',
      'Rabat tram connects the main sights without any steps',
      'Request ground-floor riad rooms when booking — most riads have staircases with no elevator',
      'Modern hotels in Ville Nouvelle areas (Gueliz in Marrakech, Nouvelle Ville in Fes) have elevators',
      'Bahia Palace, Hassan Tower, and Majorelle Garden are largely accessible on flat paths',
    ],
  },
  {
    title: 'Transport Comfort',
    icon: Bus,
    tips: [
      'First-class ONCF trains between Casablanca, Rabat, Fes, and Marrakech are comfortable with reserved seating',
      'Private transfers beat public buses — arrange through your riad or a local agency (from 500 MAD between cities)',
      'Domestic flights (Royal Air Maroc) connect Casablanca to Ouarzazate, Agadir, and Fes in under an hour',
      'Grands taxis are shared — pay for two seats to guarantee space and legroom',
      'CTM and Supratours buses have air conditioning and assigned seats, but limited legroom for tall travelers',
    ],
  },
];

const healthInfo = [
  {
    title: 'Prescription Medications',
    icon: Stethoscope,
    details: [
      'Carry all medications in original packaging with a doctor\'s letter listing drug names and dosages',
      'Moroccan customs rarely checks, but having documentation avoids any issue',
      'Many common medications are available at Moroccan pharmacies without prescription and at lower prices',
      'Refrigerated medications (like insulin): most riads and hotels can store them if asked in advance',
      'Bring enough medication for your entire trip plus 3-5 extra days in case of delays',
    ],
  },
  {
    title: 'Private Hospitals & Clinics',
    icon: Building,
    details: [
      'Clinique Internationale de Marrakech: English-speaking staff, modern facilities',
      'Clinique Cheikh Zayd (Rabat): teaching hospital with specialist departments',
      'Clinique du Parc (Casablanca): private hospital near the city center',
      'Private clinics expect payment upfront — keep your insurance details accessible',
      'For emergencies, call 150 (ambulance) or ask your riad to arrange a doctor house call (from 500 MAD)',
    ],
  },
  {
    title: 'Stomach Health',
    icon: ShieldCheck,
    details: [
      'Drink only bottled water — Sidi Ali and Sidi Harazem are the most common brands',
      'Avoid raw salads at cheap restaurants; cooked tagines and grilled meats are safe choices',
      'Carry Imodium and oral rehydration sachets as a precaution',
      'Street food from busy stalls with high turnover is generally safe; avoid food sitting in the sun',
      'Moroccan mint tea is always made with boiled water and is safe to drink anywhere',
    ],
  },
  {
    title: 'Sun & Heat Protection',
    icon: Thermometer,
    details: [
      'Marrakech exceeds 40 degrees C from June through August — plan mornings and late afternoons only',
      'Carry a wide-brimmed hat, high-SPF sunscreen, and a refillable water bottle',
      'Rest at your riad during the 12:00 to 16:00 peak heat — this is normal in Morocco',
      'Coastal cities (Essaouira, Agadir) stay 10-15 degrees cooler than inland destinations',
      'Dehydration happens fast at altitude in the Atlas — drink water even when you do not feel thirsty',
    ],
  },
];

const luxuryVsComfort = [
  {
    tier: 'Comfort Travel',
    budget: 'from 1,200 MAD/day per person',
    icon: Hotel,
    color: 'var(--color-accent)',
    accommodation: 'Quality riads (3-4 star) with breakfast, courtyard, and rooftop terrace',
    dining: 'Mix of riad meals, restaurant lunches, and the occasional fine dining experience',
    transport: 'First-class trains, private transfers between cities, taxis within cities',
    activities: 'Guided medina walks, museum visits, cooking classes, garden tours',
    ideal: 'Active seniors who want authentic experiences at a reasonable price',
  },
  {
    tier: 'Luxury Travel',
    budget: 'from 3,500 MAD/day per person',
    icon: Gem,
    color: 'var(--color-gold)',
    accommodation: 'Five-star hotels (La Mamounia, Royal Mansour) or boutique luxury riads',
    dining: 'Private chef dinners, rooftop restaurants, wine-paired tasting menus',
    transport: 'Private driver and vehicle for the entire trip, domestic flights',
    activities: 'Private guided tours, exclusive artisan workshops, hot air balloon rides, spa days',
    ideal: 'Travelers celebrating milestones or seeking a once-in-a-lifetime Moroccan experience',
  },
];

const paceTips = [
  {
    title: 'Build in Rest Days',
    icon: Coffee,
    description:
      'For every two active sightseeing days, schedule one day at a slower pace. Use rest days for a hammam visit, rooftop reading, or a leisurely riad lunch. Morocco rewards those who sit still and watch life unfold.',
  },
  {
    title: 'Limit City Moves',
    icon: MapPin,
    description:
      'Three to four cities in two weeks is plenty. Constant packing and unpacking exhausts anyone. Spend 2-4 nights per city rather than trying to see everything. Depth beats breadth in Morocco.',
  },
  {
    title: 'Mornings Are Gold',
    icon: Sunrise,
    description:
      'Markets are freshest, medinas are quietest, and temperatures are mildest before 10:00. Start early, return to your riad by noon, and head out again after 16:00 when the heat breaks and the light turns golden.',
  },
  {
    title: 'Say No to Packed Itineraries',
    icon: Clock,
    description:
      'Tour operators pack 5 activities into a day because younger travelers demand it. As a senior traveler, communicate your pace clearly. A good operator will adapt. If they push back, find a different operator.',
  },
  {
    title: 'Use Internal Flights',
    icon: Plane,
    description:
      'The 8-hour drive from Marrakech to Fes can be replaced with a 1-hour flight (from 600 MAD one way via Royal Air Maroc). The Casablanca-Ouarzazate route also saves a full day of driving through the Atlas.',
  },
  {
    title: 'Embrace the Hammam',
    icon: Heart,
    description:
      'A traditional hammam (public bathhouse) is the ultimate recovery after a day of walking. The scrub and steam loosen tired muscles. Many riads have private hammams — ask about a 60-minute session (from 200 MAD).',
  },
];

const seasonGuide = [
  {
    season: 'Spring (March - May)',
    icon: TreePine,
    temp: '18 - 28°C',
    verdict: 'Best overall season for seniors',
    details:
      'Comfortable temperatures everywhere, wildflowers in the Atlas, gardens in full bloom. Moderate tourist numbers and fair prices. The absolute sweet spot for a Morocco trip.',
  },
  {
    season: 'Autumn (September - November)',
    icon: Sun,
    temp: '20 - 30°C',
    verdict: 'Excellent — warm but manageable',
    details:
      'Summer heat fades by late September. October is ideal — warm days, cool evenings, and thinner crowds than spring. Dates and pomegranates are in season. November brings occasional rain in the north.',
  },
  {
    season: 'Winter (December - February)',
    icon: Mountain,
    temp: '8 - 20°C',
    verdict: 'Good for coast and south',
    details:
      'Agadir and the south stay warm (18-22 degrees C) while Marrakech nights drop to 5-8 degrees C. Atlas Mountains see snow. Riads can be cold — ask about heating before you book. Fewer tourists, lower prices.',
  },
  {
    season: 'Summer (June - August)',
    icon: Thermometer,
    temp: '28 - 45°C',
    verdict: 'Avoid inland cities',
    details:
      'Marrakech and Fes exceed 40 degrees C regularly. Only coastal Essaouira and Agadir remain comfortable. If you must travel in summer, stick to the coast or plan for very limited daytime activity.',
  },
];

const relatedGuides = [
  {
    title: 'Accessible Travel in Morocco',
    href: '/accessible-travel',
    description: 'Wheelchair access, mobility aids, and disability-friendly accommodation',
  },
  {
    title: 'Health & Safety Guide',
    href: '/health-safety',
    description: 'Vaccinations, pharmacies, hospitals, and staying healthy in Morocco',
  },
  {
    title: 'Best Time to Visit Morocco',
    href: '/best-time-visit-morocco',
    description: 'Month-by-month weather, festivals, and crowd levels',
  },
  {
    title: 'Morocco Transport Guide',
    href: '/transport',
    description: 'Trains, buses, taxis, flights, and getting between cities',
  },
  {
    title: 'Best Riads in Morocco',
    href: '/best-riads-morocco',
    description: 'Hand-picked traditional guesthouses across every major city',
  },
  {
    title: 'Morocco Travel Insurance',
    href: '/travel-tips',
    description: 'Insurance recommendations, visa info, and packing advice',
  },
];

export default function MoroccoSeniorTravelPage() {
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

      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center">
        <img
          src="/images/hero-marrakech.webp"
          alt="Senior travelers enjoying a sunny courtyard at a traditional Moroccan riad"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] mb-4 drop-shadow-lg">
            Morocco for Seniors
          </h1>
          <p className="text-lg md:text-xl font-[family-name:var(--font-heading)] max-w-2xl mx-auto drop-shadow">
            A practical guide for older travelers seeking culture, comfort, and unforgettable experiences in Morocco
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-morocco py-3">
          <nav className="flex items-center text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="flex items-center hover:text-[var(--color-accent)] transition-colors">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[var(--color-accent)] font-medium">Morocco for Seniors</span>
          </nav>
        </div>
      </div>

      {/* Introduction */}
      <section className="container-morocco py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
            Why Morocco Works for Senior Travelers
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4 font-[family-name:var(--font-heading)]">
            <p>
              Morocco rewards patience. The country unfolds slowly — over long lunches of lamb tagine, unhurried
              conversations in riad courtyards, and afternoons spent watching artisans shape brass and leather
              using techniques passed down for centuries. This pace suits senior travelers perfectly.
            </p>
            <p>
              Moroccan culture holds elders in genuine esteem. You will notice it immediately: shopkeepers
              offering you a seat and tea before any discussion of prices, younger people stepping aside on
              narrow medina lanes, waiters bringing extra cushions without being asked. This respect is not
              performative — it runs deep in Moroccan family structure and Islamic tradition.
            </p>
            <p>
              Practically, Morocco delivers a high standard of comfort at prices that shock European travelers.
              A riad with a private courtyard, home-cooked breakfast, and rooftop terrace costs what a
              mid-range chain hotel charges in Barcelona. A private guide and driver for a full day runs
              from 2,500 MAD — roughly what a guided museum tour costs in London.
            </p>
            <p>
              That said, Morocco has real challenges for older travelers. Medina streets are uneven. Summer
              heat is punishing inland. Medical facilities outside major cities are basic. This guide addresses
              all of it honestly so you can plan a trip that matches your abilities and expectations.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { icon: Plane, label: 'Flight Time', value: '3-4h from Europe' },
              { icon: Globe, label: 'Time Zone', value: 'GMT+1 (no DST)' },
              { icon: Shield, label: 'Safety', value: 'Low crime, tourist-friendly' },
              { icon: CalendarDays, label: 'Best Months', value: 'Mar-May, Sep-Nov' },
            ].map((fact) => (
              <div key={fact.label} className="card-moroccan p-4 text-center">
                <fact.icon className="w-6 h-6 mx-auto mb-2 text-[var(--color-accent)]" />
                <p className="text-sm font-semibold text-gray-900 font-[family-name:var(--font-heading)]">{fact.label}</p>
                <p className="text-sm text-gray-600">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Cities */}
      <section className="bg-[#FAF8F5] py-12">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Best Cities for Senior Travelers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Five destinations ranked by accessibility, comfort infrastructure, and cultural reward
            </p>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {bestCities.map((city) => (
              <div key={city.name} className="card-moroccan p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[var(--color-accent)]/10 shrink-0">
                    <city.icon className="w-7 h-7 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
                      {city.name}
                    </h3>
                    <p className="text-[var(--color-accent)] font-medium text-sm font-[family-name:var(--font-heading)]">
                      {city.tagline}
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1 font-[family-name:var(--font-heading)]">
                      <Accessibility className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                      Accessibility: {city.accessibility}
                    </p>
                    <p className="text-sm text-gray-600">
                      <Clock className="w-4 h-4 inline mr-1 text-gray-400" />
                      Recommended stay: {city.stayDuration}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      <Star className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                      Best for: {city.bestFor}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {city.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobility & Accessibility */}
      <section className="container-morocco py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Mobility & Getting Around
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Honest advice on terrain, transport, and step-free options
            </p>
          </div>
          <div className="space-y-8">
            {mobilityTips.map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--color-accent)]/10">
                    <section.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-[family-name:var(--font-display)]">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <ArrowRight className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health & Medical */}
      <section className="bg-[#FAF8F5] py-12">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Health & Medical Facilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              What you need to know about staying healthy and accessing care in Morocco
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {healthInfo.map((section) => (
              <div key={section.title} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--color-gold)]/10">
                    <section.icon className="w-5 h-5 text-[var(--color-gold)]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-[family-name:var(--font-display)]">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {section.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Emergency Numbers */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="zellige-border p-6 bg-white rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-600" />
                Emergency Numbers to Save
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {[
                  { label: 'Police', number: '19' },
                  { label: 'Ambulance', number: '150' },
                  { label: 'Fire', number: '15' },
                  { label: 'Tourist Police', number: '+212 524 384 601' },
                ].map((item) => (
                  <div key={item.label} className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-gray-900">{item.label}</p>
                    <p className="text-[var(--color-accent)] font-mono">{item.number}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Options */}
      <section className="container-morocco py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Senior-Friendly Tour Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              From fully independent to fully managed — pick the travel style that fits your comfort level
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {tourOptions.map((tour) => (
              <div key={tour.type} className="card-moroccan p-5 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[var(--color-accent)]/10">
                    <tour.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)]">
                      {tour.type}
                    </h3>
                    <p className="text-sm text-[var(--color-gold)] font-semibold">{tour.priceRange}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">{tour.description}</p>
                <ul className="space-y-2 mt-auto">
                  {tour.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center italic">
            Prices are approximate starting points. Seasonal pricing can change depending on dates and group size.
          </p>
        </div>
      </section>

      {/* Luxury vs Comfort */}
      <section className="bg-[#FAF8F5] py-12">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Comfort vs Luxury: What to Expect
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Morocco delivers exceptional value at both levels — the difference is in the details
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {luxuryVsComfort.map((tier) => (
              <div key={tier.tier} className="card-moroccan p-6 border-t-4" style={{ borderTopColor: tier.color }}>
                <div className="flex items-center gap-3 mb-4">
                  <tier.icon className="w-7 h-7" style={{ color: tier.color }} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
                      {tier.tier}
                    </h3>
                    <p className="text-sm font-semibold" style={{ color: tier.color }}>{tier.budget}</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900 flex items-center gap-1">
                      <Bed className="w-4 h-4 text-gray-400" /> Accommodation
                    </p>
                    <p>{tier.accommodation}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 flex items-center gap-1">
                      <UtensilsCrossed className="w-4 h-4 text-gray-400" /> Dining
                    </p>
                    <p>{tier.dining}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 flex items-center gap-1">
                      <Bus className="w-4 h-4 text-gray-400" /> Transport
                    </p>
                    <p>{tier.transport}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 flex items-center gap-1">
                      <Camera className="w-4 h-4 text-gray-400" /> Activities
                    </p>
                    <p>{tier.activities}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <p className="font-semibold text-gray-900 flex items-center gap-1">
                      <HandHeart className="w-4 h-4 text-gray-400" /> Ideal For
                    </p>
                    <p>{tier.ideal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pace of Travel */}
      <section className="container-morocco py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Setting the Right Pace
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              The single biggest mistake senior travelers make in Morocco is trying to see too much too fast
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paceTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[var(--color-gold)]/10">
                    <tip.icon className="w-5 h-5 text-[var(--color-gold)]" />
                  </div>
                  <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)] text-sm">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-700">{tip.description}</p>
              </div>
            ))}
          </div>

          {/* Sample 2-Week Itinerary */}
          <div className="mt-10 zellige-border p-6 bg-white rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-[var(--color-accent)]" />
              Sample 14-Day Senior-Paced Itinerary
            </h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-700">
              {[
                { days: 'Days 1-3', city: 'Marrakech', note: 'Arrive, recover from travel, explore Gueliz and Majorelle Garden' },
                { days: 'Day 4', city: 'Rest Day', note: 'Hammam, rooftop lunch, riad courtyard reading' },
                { days: 'Days 5-6', city: 'Essaouira', note: 'Private transfer (2.5h), seafront walks, port lunch' },
                { days: 'Day 7', city: 'Essaouira', note: 'Art galleries, rampart sunset, cooking class' },
                { days: 'Day 8', city: 'Travel Day', note: 'Return to Marrakech, afternoon medina with guide' },
                { days: 'Days 9-10', city: 'Rabat', note: 'Train from Marrakech (4h first class), Hassan Tower, Kasbah' },
                { days: 'Day 11', city: 'Rabat', note: 'Rest day, Chellah gardens, Ville Nouvelle cafe lunch' },
                { days: 'Days 12-13', city: 'Fes', note: 'Train from Rabat (2.5h), guided medina half-day' },
                { days: 'Day 14', city: 'Departure', note: 'Morning free, transfer to Fes airport' },
              ].map((day) => (
                <div key={day.days} className="flex gap-3 py-2 border-b border-gray-100">
                  <span className="font-semibold text-[var(--color-accent)] whitespace-nowrap min-w-[80px]">{day.days}</span>
                  <span className="font-medium text-gray-900 min-w-[90px]">{day.city}</span>
                  <span className="text-gray-600">{day.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Season */}
      <section className="bg-[#FAF8F5] py-12">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Best Season to Visit
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Temperature matters more for seniors — plan around the heat, not the calendar
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {seasonGuide.map((season) => (
              <div key={season.season} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <season.icon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)]">
                      {season.season}
                    </h3>
                  </div>
                  <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">
                    {season.temp}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[var(--color-gold)] mb-2">{season.verdict}</p>
                <p className="text-sm text-gray-700">{season.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Insurance */}
      <section className="container-morocco py-12">
        <div className="max-w-4xl mx-auto">
          <div className="zellige-border p-6 bg-white rounded-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-[var(--color-accent)]/10 shrink-0">
                <ShieldCheck className="w-7 h-7 text-[var(--color-accent)]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-2">
                  Travel Insurance for Senior Travelers
                </h2>
                <p className="text-gray-600 font-[family-name:var(--font-heading)]">
                  Do not skip this. Medical evacuation from the Sahara or Atlas Mountains can cost upward of 50,000 MAD.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3 font-[family-name:var(--font-heading)]">Must-Have Coverage</h3>
                <ul className="space-y-2">
                  {[
                    'Emergency medical treatment and hospitalization',
                    'Medical evacuation and repatriation',
                    'Trip cancellation and interruption',
                    'Pre-existing condition coverage',
                    'Lost luggage and delayed flight coverage',
                    'Direct billing with Moroccan private hospitals',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3 font-[family-name:var(--font-heading)]">Senior-Friendly Providers</h3>
                <ul className="space-y-2">
                  {[
                    'Staysure — specialist over-50s policies, covers pre-existing conditions',
                    'AllClear — no upper age limit, comprehensive medical coverage',
                    'World Nomads — flexible policies, adventure activity add-ons',
                    'Allianz Global — well-known in Morocco, direct billing network',
                    'Compare quotes from at least 3 providers before purchasing',
                    'Read the exclusions carefully — not all policies cover Morocco equally',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Info className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="bg-[#FAF8F5] py-12">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6 text-center">
              Practical Tips for Senior Travelers
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Lightbulb,
                  title: 'Packing Smart',
                  tips: [
                    'Pack layers — mornings and evenings can be 15 degrees cooler than midday',
                    'Bring comfortable, broken-in walking shoes with good grip for cobblestones',
                    'A collapsible walking stick is useful in medinas and on uneven terrain',
                    'Sunhat, quality sunglasses, and SPF 50 sunscreen are non-negotiable',
                  ],
                },
                {
                  icon: UtensilsCrossed,
                  title: 'Eating Well',
                  tips: [
                    'Moroccan food is flavorful but not spicy-hot — ask for harissa on the side',
                    'Tagines are slow-cooked and tender, ideal for any dietary need',
                    'Riads often accommodate dietary restrictions with advance notice',
                    'Eat lunch as your main meal — Moroccans do, and restaurants are at their best',
                  ],
                },
                {
                  icon: HandHeart,
                  title: 'Cultural Etiquette',
                  tips: [
                    'Dress modestly — shoulders and knees covered — as a sign of respect',
                    'Accept mint tea when offered; refusing is considered rude',
                    'Ask permission before photographing people, especially in rural areas',
                    'Learn "shukran" (thank you) and "salam" (peace/hello) — locals appreciate the effort',
                  ],
                },
                {
                  icon: Phone,
                  title: 'Staying Connected',
                  tips: [
                    'Buy a Maroc Telecom SIM at the airport (from 50 MAD with data)',
                    'Most riads and hotels have WiFi, though speeds vary',
                    'Download offline Google Maps of each city before arrival',
                    'WhatsApp is the primary communication tool in Morocco — riad hosts, guides, and drivers all use it',
                  ],
                },
              ].map((section) => (
                <div key={section.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <section.icon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)]">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <ArrowRight className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-morocco py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Straight answers to the most common concerns senior travelers have about Morocco
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="card-moroccan p-5">
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)] mb-2 flex items-start gap-2">
                  <MessageCircleQuestion className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-700 ml-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="bg-[#FAF8F5] py-12">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6 text-center">
              Related Guides
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-moroccan p-5 hover:shadow-lg transition-shadow group"
                >
                  <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)] group-hover:text-[var(--color-accent)] transition-colors mb-1 text-sm">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-gray-600">{guide.description}</p>
                  <span className="text-xs text-[var(--color-accent)] font-semibold mt-2 inline-flex items-center gap-1">
                    Read guide <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="moroccan-pattern py-16">
        <div className="container-morocco text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              Ready to Plan Your Morocco Trip?
            </h2>
            <p className="text-gray-700 mb-8 font-[family-name:var(--font-heading)]">
              Morocco has been welcoming travelers for centuries. With the right preparation, your age becomes
              an advantage — locals treat you with extra warmth, the pace suits you, and the depth of experience
              surpasses anything a rushed trip could offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
              >
                <Compass className="w-5 h-5" />
                Browse Senior-Friendly Tours
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-accent)]/5 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Ask Us a Question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
