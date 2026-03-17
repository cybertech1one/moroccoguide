import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Home,
  ChevronRight,
  Route,
  Car,
  Bus,
  Train,
  Clock,
  MapPin,
  Info,
  Navigation,
  Star,
  Zap,
  Fuel,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Morocco Distance & Travel Times | Routes Between Major Cities',
  description:
    'Distance matrix and travel times between 10 major Moroccan cities. Compare driving, bus, and train options with estimated journey times for Marrakech, Fes, Casablanca, Rabat, Tangier, and more.',
  keywords: [
    'Morocco distances between cities',
    'Morocco travel times',
    'Marrakech to Fes distance',
    'Morocco train times',
    'Morocco bus routes',
    'driving in Morocco',
    'Morocco road trip distances',
    'Casablanca to Marrakech',
    'Morocco transport guide',
    'Morocco city to city travel',
  ],
  openGraph: {
    title: 'Morocco Distance & Travel Times Between Cities',
    description:
      'Plan your Morocco route with distances and travel times between 10 major cities by car, bus, and train.',
    type: 'website',
    url: 'https://citytoursmorocco.com/tools/distances',
  },
}

/* ================================================================== */
/*  Route Data                                                         */
/* ================================================================== */
interface RouteInfo {
  from: string
  to: string
  distanceKm: number
  driveTime: string
  busTime: string
  trainTime: string | null
  highlight?: string
}

const POPULAR_ROUTES: RouteInfo[] = [
  {
    from: 'Marrakech',
    to: 'Fes',
    distanceKm: 533,
    driveTime: '6h 00min',
    busTime: '7h 30min',
    trainTime: '7h 15min',
    highlight: 'Most popular tourist route. Train goes via Casablanca.',
  },
  {
    from: 'Casablanca',
    to: 'Marrakech',
    distanceKm: 240,
    driveTime: '2h 30min',
    busTime: '3h 30min',
    trainTime: '2h 40min',
    highlight: 'Frequent train service. Al Boraq high-speed planned.',
  },
  {
    from: 'Casablanca',
    to: 'Rabat',
    distanceKm: 87,
    driveTime: '1h 00min',
    busTime: '1h 30min',
    trainTime: '0h 50min',
    highlight: 'Most frequent train connection in Morocco.',
  },
  {
    from: 'Tangier',
    to: 'Casablanca',
    distanceKm: 340,
    driveTime: '3h 30min',
    busTime: '5h 00min',
    trainTime: '2h 10min',
    highlight: 'Al Boraq high-speed train (320 km/h) operates this route.',
  },
  {
    from: 'Fes',
    to: 'Chefchaouen',
    distanceKm: 210,
    driveTime: '3h 30min',
    busTime: '4h 00min',
    trainTime: null,
    highlight: 'Scenic mountain road. No train connection.',
  },
  {
    from: 'Marrakech',
    to: 'Essaouira',
    distanceKm: 190,
    driveTime: '2h 30min',
    busTime: '3h 00min',
    trainTime: null,
    highlight: 'Popular day trip. Supratours bus is comfortable.',
  },
  {
    from: 'Marrakech',
    to: 'Ouarzazate',
    distanceKm: 200,
    driveTime: '4h 00min',
    busTime: '4h 30min',
    trainTime: null,
    highlight: 'Crosses the High Atlas via Tizi n\'Tichka pass (2,260m).',
  },
  {
    from: 'Ouarzazate',
    to: 'Merzouga',
    distanceKm: 370,
    driveTime: '5h 00min',
    busTime: '7h 00min',
    trainTime: null,
    highlight: 'Gateway to the Sahara. Road through Dades and Todra gorges.',
  },
  {
    from: 'Tangier',
    to: 'Chefchaouen',
    distanceKm: 115,
    driveTime: '2h 00min',
    busTime: '3h 00min',
    trainTime: null,
    highlight: 'Beautiful Rif mountain drive.',
  },
  {
    from: 'Agadir',
    to: 'Marrakech',
    distanceKm: 260,
    driveTime: '3h 00min',
    busTime: '4h 00min',
    trainTime: null,
    highlight: 'Highway connection through the Souss valley.',
  },
]

/* ================================================================== */
/*  Distance Matrix                                                    */
/* ================================================================== */
const CITIES = [
  'Marrakech', 'Fes', 'Casablanca', 'Rabat', 'Tangier',
  'Chefchaouen', 'Essaouira', 'Ouarzazate', 'Merzouga', 'Agadir',
]

// Distance matrix (km) - upper triangle only, read [row][col] where row < col
const MATRIX: Record<string, Record<string, number>> = {
  Marrakech: { Fes: 533, Casablanca: 240, Rabat: 327, Tangier: 580, Chefchaouen: 620, Essaouira: 190, Ouarzazate: 200, Merzouga: 570, Agadir: 260 },
  Fes: { Casablanca: 295, Rabat: 210, Tangier: 310, Chefchaouen: 210, Essaouira: 640, Ouarzazate: 610, Merzouga: 480, Agadir: 730 },
  Casablanca: { Rabat: 87, Tangier: 340, Chefchaouen: 430, Essaouira: 360, Ouarzazate: 440, Merzouga: 680, Agadir: 460 },
  Rabat: { Tangier: 250, Chefchaouen: 340, Essaouira: 440, Ouarzazate: 520, Merzouga: 720, Agadir: 530 },
  Tangier: { Chefchaouen: 115, Essaouira: 710, Ouarzazate: 740, Merzouga: 900, Agadir: 810 },
  Chefchaouen: { Essaouira: 750, Ouarzazate: 760, Merzouga: 700, Agadir: 840 },
  Essaouira: { Ouarzazate: 390, Merzouga: 700, Agadir: 175 },
  Ouarzazate: { Merzouga: 370, Agadir: 420 },
  Merzouga: { Agadir: 680 },
}

function getDistance(from: string, to: string): number | null {
  if (from === to) return 0
  return MATRIX[from]?.[to] ?? MATRIX[to]?.[from] ?? null
}

/* ================================================================== */
/*  Transport Comparison                                               */
/* ================================================================== */
const TRANSPORT_OPTIONS = [
  {
    mode: 'Train (ONCF)',
    icon: Train,
    pros: ['Comfortable and reliable', 'Al Boraq high-speed Tangier-Casablanca (2h10)', 'Affordable (from 100 MAD)', 'Good WiFi on newer trains'],
    cons: ['Limited network (mainly Atlantic coast)', 'No service to desert, mountains, or Essaouira', 'Can be crowded during holidays'],
    bestFor: 'Casablanca-Rabat-Tangier-Fes-Marrakech corridor',
  },
  {
    mode: 'Bus (CTM / Supratours)',
    icon: Bus,
    pros: ['Reaches every city and town', 'Very affordable (from 70 MAD)', 'AC, comfortable seats, luggage hold', 'Supratours connects to ONCF network'],
    cons: ['Slower than driving', 'Fixed schedules, limited frequency', 'Overnight buses can be tiring'],
    bestFor: 'Budget travelers and routes without trains',
  },
  {
    mode: 'Rental Car',
    icon: Car,
    pros: ['Maximum flexibility', 'Stop at scenic viewpoints', 'Access remote areas', 'Affordable for groups (from 300 MAD/day)'],
    cons: ['Driving in cities is chaotic', 'Medina parking is difficult', 'Fuel costs (from 12 MAD/liter)', 'Mountain roads can be challenging'],
    bestFor: 'Road trips, Atlas Mountains, desert routes',
  },
  {
    mode: 'Grand Taxi (Shared)',
    icon: Users,
    pros: ['Faster than buses', 'Departs when full (no schedule)', 'Very affordable when shared', 'Available everywhere'],
    cons: ['Cramped (6 passengers in a sedan)', 'No AC in many vehicles', 'Drivers can be aggressive', 'Fixed routes only'],
    bestFor: 'Short inter-city hops and last-mile connections',
  },
]

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */
export default function DistancesPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <section className="relative bg-[#1A1814] py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center gap-2 text-sm text-[#FAF8F5]/30 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#C4960C] transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/tools" className="hover:text-[#C4960C] transition-colors">Tools</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#FAF8F5]/60">Distances &amp; Travel Times</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-14 w-14 rounded-2xl bg-[#C4960C]/10 border border-[#C4960C]/20 flex items-center justify-center">
              <Route className="h-7 w-7 text-[#C4960C]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#FAF8F5] font-[family-name:var(--font-display)]">
                Distances &amp; Travel Times
              </h1>
              <p className="text-[#FAF8F5]/50 mt-1">
                Distances and transport options between 10 major Moroccan cities
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Distance Matrix */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#1A1814]/5 shadow-lg mb-8">
          <h2 className="text-lg font-bold text-[#1A1814] mb-2 flex items-center gap-2 font-[family-name:var(--font-display)]">
            <MapPin className="h-5 w-5 text-[#C4960C]" />
            Distance Matrix (km)
          </h2>
          <p className="text-xs text-[#1A1814]/40 mb-5">
            Road distances in kilometers between major Moroccan cities. Scroll horizontally on mobile.
          </p>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-xs min-w-[800px]">
              <thead>
                <tr>
                  <th className="text-left py-2 px-2 text-[#1A1814]/40 font-semibold uppercase tracking-wider sticky left-0 bg-white z-10"></th>
                  {CITIES.map((city) => (
                    <th key={city} className="text-center py-2 px-1 text-[#1A1814]/40 font-semibold uppercase tracking-wider whitespace-nowrap">
                      <span className="inline-block -rotate-45 origin-center">{city.slice(0, 4)}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CITIES.map((rowCity) => (
                  <tr key={rowCity} className="border-t border-[#1A1814]/5">
                    <td className="py-2 px-2 font-semibold text-[#1A1814] whitespace-nowrap sticky left-0 bg-white z-10">
                      {rowCity}
                    </td>
                    {CITIES.map((colCity) => {
                      const dist = getDistance(rowCity, colCity)
                      const isSame = rowCity === colCity
                      return (
                        <td
                          key={colCity}
                          className={`text-center py-2 px-1 ${isSame ? 'bg-[#1A1814]/5' : dist && dist < 300 ? 'text-[#4A6741] font-semibold' : 'text-[#1A1814]/50'}`}
                        >
                          {isSame ? '-' : dist ?? '-'}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top 10 Popular Routes */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-[#1A1814] mb-5 flex items-center gap-2 font-[family-name:var(--font-display)]">
            <Star className="h-5 w-5 text-[#C4960C]" />
            Top 10 Popular Routes
          </h2>
          <div className="space-y-4">
            {POPULAR_ROUTES.map((route, idx) => (
              <div
                key={`${route.from}-${route.to}`}
                className="p-5 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-7 w-7 rounded-full bg-[#C4960C]/10 flex items-center justify-center text-xs font-bold text-[#C4960C]">
                      {idx + 1}
                    </span>
                    <span className="text-base font-bold text-[#1A1814] font-[family-name:var(--font-heading)]">
                      {route.from}
                    </span>
                    <Navigation className="h-3.5 w-3.5 text-[#C4960C]" />
                    <span className="text-base font-bold text-[#1A1814] font-[family-name:var(--font-heading)]">
                      {route.to}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[#C4960C]">{route.distanceKm} km</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF8F5] border border-[#1A1814]/5">
                    <Car className="h-4 w-4 text-[#1A1814]/40" />
                    <div>
                      <div className="text-[10px] text-[#1A1814]/30 uppercase font-semibold">Drive</div>
                      <div className="text-sm font-bold text-[#1A1814]">{route.driveTime}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF8F5] border border-[#1A1814]/5">
                    <Bus className="h-4 w-4 text-[#1A1814]/40" />
                    <div>
                      <div className="text-[10px] text-[#1A1814]/30 uppercase font-semibold">Bus</div>
                      <div className="text-sm font-bold text-[#1A1814]">{route.busTime}</div>
                    </div>
                  </div>
                  {route.trainTime ? (
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#C4960C]/5 border border-[#C4960C]/10">
                      <Train className="h-4 w-4 text-[#C4960C]" />
                      <div>
                        <div className="text-[10px] text-[#C4960C]/60 uppercase font-semibold">Train</div>
                        <div className="text-sm font-bold text-[#C4960C]">{route.trainTime}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF8F5] border border-[#1A1814]/5">
                      <Train className="h-4 w-4 text-[#1A1814]/15" />
                      <div>
                        <div className="text-[10px] text-[#1A1814]/30 uppercase font-semibold">Train</div>
                        <div className="text-xs text-[#1A1814]/30">No service</div>
                      </div>
                    </div>
                  )}
                </div>
                {route.highlight && (
                  <div className="flex items-start gap-2 text-xs text-[#1A1814]/50">
                    <Info className="h-3.5 w-3.5 text-[#C4960C] shrink-0 mt-0.5" />
                    <span>{route.highlight}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Transport Comparison */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-[#1A1814] mb-5 flex items-center gap-2 font-[family-name:var(--font-display)]">
            <Navigation className="h-5 w-5 text-[#C4960C]" />
            Transport Options Compared
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TRANSPORT_OPTIONS.map((opt) => {
              const Icon = opt.icon
              return (
                <div key={opt.mode} className="p-6 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-[#C4960C]/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[#C4960C]" />
                    </div>
                    <h3 className="text-base font-bold text-[#1A1814] font-[family-name:var(--font-heading)]">{opt.mode}</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-[10px] text-[#4A6741] uppercase font-bold tracking-wider mb-1">Pros</div>
                      <ul className="space-y-1">
                        {opt.pros.map((pro) => (
                          <li key={pro} className="text-xs text-[#1A1814]/60 flex items-start gap-1.5">
                            <span className="text-[#4A6741] mt-0.5">+</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#A0522D] uppercase font-bold tracking-wider mb-1">Cons</div>
                      <ul className="space-y-1">
                        {opt.cons.map((con) => (
                          <li key={con} className="text-xs text-[#1A1814]/60 flex items-start gap-1.5">
                            <span className="text-[#A0522D] mt-0.5">-</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t border-[#1A1814]/5">
                      <span className="text-[10px] text-[#1A1814]/30 uppercase font-bold tracking-wider">Best for: </span>
                      <span className="text-xs text-[#C4960C] font-semibold">{opt.bestFor}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Driving Tips */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#1A1814] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="relative">
            <h2 className="text-lg font-bold text-[#FAF8F5] mb-5 flex items-center gap-2 font-[family-name:var(--font-display)]">
              <Car className="h-5 w-5 text-[#C4960C]" />
              Driving Tips for Morocco
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Info, title: 'Drive on the right', text: 'Morocco drives on the right side. International Driving Permit recommended along with your home license.' },
                { icon: Fuel, title: 'Fuel is affordable', text: 'Gasoline costs about from 12 MAD/liter. Gas stations are frequent on highways but scarce in remote desert and mountain areas.' },
                { icon: Zap, title: 'Toll highways are excellent', text: 'Morocco has a modern motorway network (autoroute). Tolls are reasonable (from 50 MAD for long stretches) and roads are in great condition.' },
                { icon: Clock, title: 'Add buffer time', text: 'Google Maps times are optimistic for Morocco. Add 30-60 minutes for mountain roads, police checkpoints, and slower rural sections.' },
                { icon: Navigation, title: 'Avoid night driving', text: 'Unlit roads, pedestrians, donkeys, and parked trucks without lights make night driving risky outside highways.' },
                { icon: Star, title: 'Scenic routes exist', text: 'The N9 through Dades Valley, the Tizi n\'Tichka pass, and the road to Chefchaouen are among the most beautiful drives in North Africa.' },
              ].map((tip, idx) => {
                const TipIcon = tip.icon
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#C4960C]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <TipIcon className="h-4 w-4 text-[#C4960C]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#FAF8F5]/80 mb-0.5">{tip.title}</div>
                      <p className="text-xs text-[#FAF8F5]/40 leading-relaxed">{tip.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
