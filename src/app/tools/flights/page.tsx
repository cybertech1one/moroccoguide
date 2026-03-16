'use client'

import { useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Plane,
  ExternalLink,
  Search,
  Users,
  CalendarDays,
  MapPin,
  Clock,
  Lightbulb,
  Building2,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  Moroccan Airports                                                  */
/* ------------------------------------------------------------------ */
interface Airport {
  code: string
  name: string
  city: string
  distanceToCenter: string
  transportOptions: string
  airlines: string[]
  avgFlightTimes: Record<string, string>
}

const MOROCCAN_AIRPORTS: Airport[] = [
  {
    code: 'RAK', name: 'Marrakech Menara Airport', city: 'Marrakech',
    distanceToCenter: '6 km', transportOptions: 'Bus 19 (30 MAD), Taxi (70-100 MAD), Airport shuttle',
    airlines: ['Royal Air Maroc', 'Ryanair', 'EasyJet', 'Air France', 'British Airways', 'Transavia', 'Vueling', 'TUI'],
    avgFlightTimes: { 'London': '3h 30m', 'Paris': '3h 15m', 'New York': '8h 30m', 'Madrid': '1h 45m', 'Amsterdam': '3h 45m' },
  },
  {
    code: 'CMN', name: 'Mohammed V International Airport', city: 'Casablanca',
    distanceToCenter: '30 km', transportOptions: 'Train to Casa Voyageurs (50 MAD, 30 min), Taxi (250-300 MAD)',
    airlines: ['Royal Air Maroc', 'Air France', 'Emirates', 'Turkish Airlines', 'Lufthansa', 'Qatar Airways', 'KLM', 'British Airways'],
    avgFlightTimes: { 'London': '3h 15m', 'Paris': '3h', 'New York': '8h', 'Dubai': '7h 30m', 'Istanbul': '4h 30m' },
  },
  {
    code: 'FEZ', name: 'Fes-Saiss Airport', city: 'Fes',
    distanceToCenter: '15 km', transportOptions: 'Bus 16 (4 MAD), Taxi (120-150 MAD)',
    airlines: ['Ryanair', 'Transavia', 'Royal Air Maroc', 'Air Arabia', 'Vueling', 'TUI'],
    avgFlightTimes: { 'London': '3h 15m', 'Paris': '3h', 'Barcelona': '2h 30m', 'Brussels': '3h 15m' },
  },
  {
    code: 'TNG', name: 'Tangier Ibn Battouta Airport', city: 'Tangier',
    distanceToCenter: '11 km', transportOptions: 'Taxi (100-150 MAD), No public bus to center',
    airlines: ['Ryanair', 'Royal Air Maroc', 'Air Arabia', 'Transavia', 'Vueling'],
    avgFlightTimes: { 'London': '3h', 'Paris': '2h 45m', 'Madrid': '1h 30m', 'Barcelona': '2h' },
  },
  {
    code: 'AGA', name: 'Agadir Al Massira Airport', city: 'Agadir',
    distanceToCenter: '22 km', transportOptions: 'Taxi (200-250 MAD), Hotel shuttle',
    airlines: ['Ryanair', 'TUI', 'Transavia', 'Royal Air Maroc', 'EasyJet', 'Condor'],
    avgFlightTimes: { 'London': '3h 45m', 'Paris': '3h 30m', 'Amsterdam': '4h', 'Frankfurt': '4h' },
  },
  {
    code: 'RBA', name: 'Rabat-Sale Airport', city: 'Rabat',
    distanceToCenter: '10 km', transportOptions: 'Taxi (100-150 MAD), Tram to city center',
    airlines: ['Royal Air Maroc', 'Ryanair', 'Air Arabia', 'Transavia'],
    avgFlightTimes: { 'London': '3h', 'Paris': '2h 45m', 'Madrid': '1h 30m' },
  },
  {
    code: 'NDR', name: 'Nador International Airport', city: 'Nador',
    distanceToCenter: '23 km', transportOptions: 'Taxi (150-200 MAD)',
    airlines: ['Royal Air Maroc', 'Ryanair', 'Air Arabia', 'Transavia'],
    avgFlightTimes: { 'Madrid': '1h 45m', 'Brussels': '3h', 'Amsterdam': '3h 15m' },
  },
  {
    code: 'OUD', name: 'Oujda Angads Airport', city: 'Oujda',
    distanceToCenter: '12 km', transportOptions: 'Taxi (80-120 MAD)',
    airlines: ['Royal Air Maroc', 'Ryanair', 'Air Arabia', 'Transavia'],
    avgFlightTimes: { 'Paris': '2h 45m', 'Brussels': '3h', 'Marseille': '2h 15m' },
  },
  {
    code: 'ESU', name: 'Essaouira Mogador Airport', city: 'Essaouira',
    distanceToCenter: '16 km', transportOptions: 'Taxi (100-150 MAD)',
    airlines: ['Ryanair', 'Transavia'],
    avgFlightTimes: { 'London': '3h 30m', 'Paris': '3h 15m' },
  },
  {
    code: 'VIL', name: 'Dakhla Airport', city: 'Dakhla',
    distanceToCenter: '4 km', transportOptions: 'Taxi (30-50 MAD)',
    airlines: ['Royal Air Maroc', 'Air Arabia'],
    avgFlightTimes: { 'Casablanca': '1h 45m' },
  },
]

const ORIGIN_CITIES = [
  { city: 'London', code: 'LON' }, { city: 'Paris', code: 'PAR' }, { city: 'New York', code: 'NYC' },
  { city: 'Madrid', code: 'MAD_CITY' }, { city: 'Barcelona', code: 'BCN' }, { city: 'Amsterdam', code: 'AMS' },
  { city: 'Frankfurt', code: 'FRA' }, { city: 'Brussels', code: 'BRU' }, { city: 'Rome', code: 'ROM' },
  { city: 'Lisbon', code: 'LIS' }, { city: 'Istanbul', code: 'IST' }, { city: 'Dubai', code: 'DXB' },
  { city: 'Montreal', code: 'YUL' }, { city: 'Toronto', code: 'YYZ' }, { city: 'Los Angeles', code: 'LAX' },
]

const FLIGHT_TIPS = [
  'Book 2-3 months in advance for the best fares. Last-minute deals are rare for Morocco.',
  'Tuesday and Wednesday are typically the cheapest days to fly.',
  'Consider flying into Casablanca (CMN) -- it has the most connections and often the lowest fares.',
  'Low-cost carriers like Ryanair and EasyJet fly to Marrakech, Fes, Tangier, and Agadir from Europe.',
  'Shoulder season (March-May, September-November) offers the best combination of price and weather.',
  'Use Google Flights price alerts to track fare drops for your route.',
  'Open-jaw tickets (fly into one city, out of another) can save backtracking and sometimes money.',
  'Ramadan period often has lower flight prices and less crowded attractions.',
]

function buildSearchUrl(
  site: 'skyscanner' | 'google' | 'kayak',
  from: string, to: string, depart: string, returnDate: string, passengers: number
): string {
  const fromSlug = from.toLowerCase().replace(/\s+/g, '-')
  const departFormatted = depart.replace(/-/g, '')
  const returnFormatted = returnDate.replace(/-/g, '')
  switch (site) {
    case 'skyscanner': return `https://www.skyscanner.com/transport/flights/${fromSlug}/${to.toLowerCase()}/${departFormatted}/${returnFormatted}/?adults=${passengers}`
    case 'google': return `https://www.google.com/travel/flights?q=flights+from+${encodeURIComponent(from)}+to+${to}+on+${depart}+return+${returnDate}&passengers=${passengers}`
    case 'kayak': return `https://www.kayak.com/flights/${fromSlug}-${to}/${depart}/${returnDate}/${passengers}adults`
    default: return '#'
  }
}

export default function FlightFinderPage() {
  const [fromCity, setFromCity] = useState('London')
  const [toAirport, setToAirport] = useState('RAK')
  const [departDate, setDepartDate] = useState('2026-04-15')
  const [returnDate, setReturnDate] = useState('2026-04-22')
  const [passengers, setPassengers] = useState(1)
  const [hasSearched, setHasSearched] = useState(false)

  const selectedAirport = useMemo(() => MOROCCAN_AIRPORTS.find((a) => a.code === toAirport), [toAirport])
  const handleSearch = useCallback(() => setHasSearched(true), [])

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <section className="relative bg-[#1A1814] py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/tools" className="inline-flex items-center text-[#FAF8F5]/40 hover:text-[#C4960C] mb-6 text-sm transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1.5" /> All Tools
          </Link>
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-[#C4960C]/10 border border-[#C4960C]/20 flex items-center justify-center">
              <Plane className="h-7 w-7 text-[#C4960C]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#FAF8F5] font-serif">Flight Finder</h1>
              <p className="text-[#FAF8F5]/50 mt-1">Find flights to Morocco and get links to the best booking sites</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Search Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="p-6 md:p-8 rounded-2xl bg-white border border-[#1A1814]/5 shadow-lg mb-8"
        >
          <h2 className="text-lg font-bold text-[#1A1814] mb-5 flex items-center gap-2 font-serif">
            <Search className="h-5 w-5 text-[#C4960C]" /> Search Flights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-[#1A1814]/60 mb-1"><Plane className="inline h-4 w-4 mr-1" /> From</label>
              <select value={fromCity} onChange={(e) => setFromCity(e.target.value)}
                className="w-full rounded-xl border border-[#1A1814]/10 bg-white px-4 py-3 text-[#1A1814] focus:border-[#C4960C] outline-none transition-all">
                {ORIGIN_CITIES.map((c) => <option key={c.code} value={c.city}>{c.city}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1A1814]/60 mb-1"><MapPin className="inline h-4 w-4 mr-1" /> To (Morocco)</label>
              <select value={toAirport} onChange={(e) => setToAirport(e.target.value)}
                className="w-full rounded-xl border border-[#1A1814]/10 bg-white px-4 py-3 text-[#1A1814] focus:border-[#C4960C] outline-none transition-all">
                {MOROCCAN_AIRPORTS.map((a) => <option key={a.code} value={a.code}>{a.city} ({a.code})</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1A1814]/60 mb-1"><Users className="inline h-4 w-4 mr-1" /> Passengers</label>
              <input type="number" min={1} max={9} value={passengers} onChange={(e) => setPassengers(Math.max(1, Number(e.target.value)))}
                className="w-full rounded-xl border border-[#1A1814]/10 bg-white px-4 py-3 text-[#1A1814] focus:border-[#C4960C] outline-none transition-all" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-[#1A1814]/60 mb-1"><CalendarDays className="inline h-4 w-4 mr-1" /> Departure</label>
              <input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)}
                className="w-full rounded-xl border border-[#1A1814]/10 bg-white px-4 py-3 text-[#1A1814] focus:border-[#C4960C] outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1A1814]/60 mb-1"><CalendarDays className="inline h-4 w-4 mr-1" /> Return</label>
              <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)}
                className="w-full rounded-xl border border-[#1A1814]/10 bg-white px-4 py-3 text-[#1A1814] focus:border-[#C4960C] outline-none transition-all" />
            </div>
          </div>
          <button onClick={handleSearch}
            className="w-full py-4 rounded-xl bg-[#1A1814] text-[#FAF8F5] font-bold hover:bg-[#C4960C] transition-colors shadow-lg flex items-center justify-center gap-2 text-sm">
            <Search className="h-5 w-5" /> Find Flights
          </button>
        </motion.div>

        {/* Search Results */}
        {hasSearched && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 space-y-4">
            <h2 className="text-lg font-bold text-[#1A1814] font-serif">
              Search on booking sites for {fromCity} to {selectedAirport?.city} ({toAirport})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: 'Google Flights', site: 'google' as const, desc: 'Compare all airlines' },
                { name: 'Skyscanner', site: 'skyscanner' as const, desc: 'Best price alerts' },
                { name: 'Kayak', site: 'kayak' as const, desc: 'Price predictions' },
              ].map((s) => (
                <a key={s.name} href={buildSearchUrl(s.site, fromCity, toAirport, departDate, returnDate, passengers)}
                  target="_blank" rel="noopener noreferrer"
                  className="p-5 rounded-xl bg-white border border-[#1A1814]/5 hover:shadow-lg hover:border-[#C4960C]/30 transition-all group">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[#1A1814] text-[#C4960C] mb-3">
                    <Plane className="h-5 w-5" />
                  </div>
                  <div className="font-bold text-[#1A1814] group-hover:text-[#C4960C] transition-colors">
                    {s.name} <ExternalLink className="inline h-3.5 w-3.5 ml-1 opacity-40" />
                  </div>
                  <div className="text-xs text-[#1A1814]/40 mt-1">{s.desc}</div>
                </a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Airport Info */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8">
          <h2 className="text-xl font-bold text-[#1A1814] mb-6 flex items-center gap-2 font-serif">
            <Building2 className="h-5 w-5 text-[#C4960C]" /> Moroccan Airports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MOROCCAN_AIRPORTS.map((airport) => (
              <div key={airport.code} className="p-5 rounded-xl bg-white border border-[#1A1814]/5 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-lg bg-[#1A1814] text-[#C4960C] text-xs font-bold">{airport.code}</span>
                      <span className="font-bold text-[#1A1814]">{airport.city}</span>
                    </div>
                    <div className="text-xs text-[#1A1814]/30 mt-1">{airport.name}</div>
                  </div>
                  <Plane className="h-5 w-5 text-[#C4960C] shrink-0" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-[#1A1814]/20 mt-0.5 shrink-0" />
                    <span className="text-[#1A1814]/50">{airport.distanceToCenter} from center. {airport.transportOptions}</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#1A1814]/30 uppercase tracking-wider">Airlines</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {airport.airlines.map((airline) => (
                        <span key={airline} className="px-2 py-0.5 rounded-full bg-[#FAF8F5] text-xs text-[#1A1814]/50">{airline}</span>
                      ))}
                    </div>
                  </div>
                  {Object.keys(airport.avgFlightTimes).length > 0 && (
                    <div>
                      <span className="text-xs font-semibold text-[#1A1814]/30 uppercase tracking-wider">Flight times</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {Object.entries(airport.avgFlightTimes).map(([city, time]) => (
                          <span key={city} className="text-xs text-[#1A1814]/40">
                            <Clock className="inline h-3 w-3 mr-0.5 text-[#C4960C]" />{city}: {time}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Flight Tips */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="p-6 md:p-8 rounded-2xl bg-[#1A1814] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="relative">
            <h2 className="text-lg font-bold text-[#FAF8F5] mb-5 flex items-center gap-2 font-serif">
              <Lightbulb className="h-5 w-5 text-[#C4960C]" /> Tips for Cheap Flights to Morocco
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FLIGHT_TIPS.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#FAF8F5]/50">
                  <span className="shrink-0 h-6 w-6 rounded-lg bg-[#C4960C]/20 text-[#C4960C] text-xs flex items-center justify-center font-bold mt-0.5">{idx + 1}</span>
                  <span className="leading-relaxed">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
