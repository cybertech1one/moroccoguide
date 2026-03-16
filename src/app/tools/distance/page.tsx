'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  MapPin,
  ArrowRight,
  ArrowLeftRight,
  Clock,
  Car,
  Train,
  Bus,
  Plane,
  ChevronRight,
  Home,
  Navigation,
  Route,
  Info,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { cities, getDistance } from '@/lib/data'

/* ================================================================== */
/*  City Data                                                          */
/* ================================================================== */
interface CityOption {
  slug: string
  name: string
  lat: number
  lng: number
  hasTrainStation: boolean
  hasAirport: boolean
}

const cityOptions: CityOption[] = cities
  .map((c) => ({
    slug: c.slug,
    name: c.name,
    lat: c.latitude,
    lng: c.longitude,
    hasTrainStation: [
      'marrakech', 'fes', 'casablanca', 'rabat', 'tangier', 'meknes',
      'oujda', 'kenitra', 'safi', 'el-jadida',
    ].includes(c.slug),
    hasAirport: !!c.airportCode,
  }))
  .sort((a, b) => a.name.localeCompare(b.name))

/* ================================================================== */
/*  Transport Estimates                                                */
/* ================================================================== */
function getDriveTime(distKm: number): string {
  const hours = distKm / 80
  if (hours < 1) return `${Math.round(hours * 60)} min`
  const h = Math.floor(hours)
  const m = Math.round((hours - h) * 60)
  return m > 0 ? `${h}h ${m}min` : `${h}h`
}

function getBusTime(distKm: number): string {
  const hours = distKm / 60
  if (hours < 1) return `${Math.round(hours * 60)} min`
  const h = Math.floor(hours)
  const m = Math.round((hours - h) * 60)
  return m > 0 ? `${h}h ${m}min` : `${h}h`
}

function getTrainTime(distKm: number): string {
  const hours = distKm / 120
  if (hours < 1) return `${Math.round(hours * 60)} min`
  const h = Math.floor(hours)
  const m = Math.round((hours - h) * 60)
  return m > 0 ? `${h}h ${m}min` : `${h}h`
}

function getDriveCost(distKm: number): number { return Math.round(distKm * 1.5) }
function getBusCost(distKm: number): number { return Math.round(distKm * 0.65) }
function getTrainCost(distKm: number): number { return Math.round(distKm * 0.75) }

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */
export default function DistanceCalculatorPage() {
  const [fromCity, setFromCity] = useState('')
  const [toCity, setToCity] = useState('')

  const result = useMemo(() => {
    if (!fromCity || !toCity || fromCity === toCity) return null
    const from = cityOptions.find((c) => c.slug === fromCity)
    const to = cityOptions.find((c) => c.slug === toCity)
    if (!from || !to) return null

    const dist = getDistance(from.lat, from.lng, to.lat, to.lng)
    const roadDist = Math.round(dist * 1.3)

    return {
      from, to, straightLine: dist, roadDistance: roadDist,
      drive: { time: getDriveTime(roadDist), cost: getDriveCost(roadDist) },
      bus: { time: getBusTime(roadDist), cost: getBusCost(roadDist) },
      train: from.hasTrainStation && to.hasTrainStation
        ? { time: getTrainTime(roadDist), cost: getTrainCost(roadDist) } : null,
      flight: from.hasAirport && to.hasAirport && dist > 300
        ? { time: '1h - 1h 30min', cost: Math.round(500 + dist * 0.8) } : null,
    }
  }, [fromCity, toCity])

  const swap = () => { setFromCity(toCity); setToCity(fromCity) }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1A1814] py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-[#FAF8F5]/30 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#C4960C] transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/tools" className="hover:text-[#C4960C] transition-colors">Tools</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#FAF8F5]/60">Distance Calculator</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-14 w-14 rounded-2xl bg-[#C4960C]/10 border border-[#C4960C]/20 flex items-center justify-center">
              <Route className="w-7 h-7 text-[#C4960C]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#FAF8F5]">Distance Calculator</h1>
              <p className="text-[#FAF8F5]/50 mt-1">Compare driving, bus, train, and flight options between Moroccan cities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* City Selectors */}
          <div className="rounded-2xl bg-white border border-[#1A1814]/5 shadow-lg p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 w-full">
                <label className="block text-sm font-semibold text-[#1A1814]/60 mb-2">
                  <MapPin className="inline w-4 h-4 mr-1 text-[#C4960C]" /> From
                </label>
                <select value={fromCity} onChange={(e) => setFromCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#1A1814]/10 bg-white text-[#1A1814] focus:outline-none focus:ring-2 focus:ring-[#C4960C]/30 focus:border-[#C4960C] transition-colors text-lg"
                  aria-label="Select departure city">
                  <option value="">Select a city...</option>
                  {cityOptions.map((c) => (
                    <option key={c.slug} value={c.slug} disabled={c.slug === toCity}>{c.name}</option>
                  ))}
                </select>
              </div>
              <button onClick={swap} disabled={!fromCity || !toCity}
                className="p-3 rounded-full border border-[#1A1814]/10 hover:bg-[#C4960C]/10 hover:border-[#C4960C]/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all mt-6 md:mt-6"
                aria-label="Swap cities">
                <ArrowLeftRight className="w-5 h-5 text-[#C4960C]" />
              </button>
              <div className="flex-1 w-full">
                <label className="block text-sm font-semibold text-[#1A1814]/60 mb-2">
                  <Navigation className="inline w-4 h-4 mr-1 text-[#A0522D]" /> To
                </label>
                <select value={toCity} onChange={(e) => setToCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#1A1814]/10 bg-white text-[#1A1814] focus:outline-none focus:ring-2 focus:ring-[#A0522D]/30 focus:border-[#A0522D] transition-colors text-lg"
                  aria-label="Select destination city">
                  <option value="">Select a city...</option>
                  {cityOptions.map((c) => (
                    <option key={c.slug} value={c.slug} disabled={c.slug === fromCity}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>
            {fromCity === toCity && fromCity !== '' && (
              <p className="text-sm text-[#C4960C] mt-3 flex items-center gap-1">
                <Info className="w-3.5 h-3.5" /> Please select two different cities.
              </p>
            )}
          </div>

          {/* Results */}
          {result && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="rounded-2xl bg-white border border-[#1A1814]/5 shadow-lg p-6 md:p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4 text-lg">
                  <span className="font-bold text-[#1A1814]">{result.from.name}</span>
                  <ArrowRight className="w-5 h-5 text-[#C4960C]" />
                  <span className="font-bold text-[#1A1814]">{result.to.name}</span>
                </div>
                <div className="text-5xl md:text-6xl font-bold text-[#C4960C] font-serif mb-2">
                  {result.roadDistance} km
                </div>
                <p className="text-sm text-[#1A1814]/30">
                  Estimated road distance ({result.straightLine} km straight line)
                </p>
              </div>

              <h2 className="text-xl font-serif font-bold text-[#1A1814]">Travel Options</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Car */}
                <div className="rounded-2xl bg-white border border-[#1A1814]/5 p-6 border-l-4 border-l-[#C4960C]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#C4960C]/10"><Car className="w-5 h-5 text-[#C4960C]" /></div>
                    <div>
                      <h3 className="font-bold text-[#1A1814]">Car / Taxi</h3>
                      <p className="text-xs text-[#1A1814]/30">Private or grand taxi</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-[#1A1814]/30 uppercase tracking-wider mb-1">Duration</p>
                      <p className="text-lg font-bold text-[#1A1814] flex items-center gap-1">
                        <Clock className="w-4 h-4 text-[#C4960C]" />{result.drive.time}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#1A1814]/30 uppercase tracking-wider mb-1">Est. Cost</p>
                      <p className="text-lg font-bold text-[#C4960C]">~{result.drive.cost} MAD</p>
                      <p className="text-xs text-[#1A1814]/20">fuel only</p>
                    </div>
                  </div>
                </div>

                {/* Bus */}
                <div className="rounded-2xl bg-white border border-[#1A1814]/5 p-6 border-l-4 border-l-[#A0522D]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#A0522D]/10"><Bus className="w-5 h-5 text-[#A0522D]" /></div>
                    <div>
                      <h3 className="font-bold text-[#1A1814]">Bus (CTM/Supratours)</h3>
                      <p className="text-xs text-[#1A1814]/30">Comfortable intercity coaches</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-[#1A1814]/30 uppercase tracking-wider mb-1">Duration</p>
                      <p className="text-lg font-bold text-[#1A1814] flex items-center gap-1">
                        <Clock className="w-4 h-4 text-[#A0522D]" />{result.bus.time}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#1A1814]/30 uppercase tracking-wider mb-1">Est. Cost</p>
                      <p className="text-lg font-bold text-[#C4960C]">~{result.bus.cost} MAD</p>
                      <p className="text-xs text-[#1A1814]/20">per person</p>
                    </div>
                  </div>
                </div>

                {/* Train */}
                {result.train ? (
                  <div className="rounded-2xl bg-white border border-[#1A1814]/5 p-6 border-l-4 border-l-[#1A1814]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-[#1A1814]/10"><Train className="w-5 h-5 text-[#1A1814]" /></div>
                      <div>
                        <h3 className="font-bold text-[#1A1814]">Train (ONCF)</h3>
                        <p className="text-xs text-[#1A1814]/30">National railway network</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-[#1A1814]/30 uppercase tracking-wider mb-1">Duration</p>
                        <p className="text-lg font-bold text-[#1A1814] flex items-center gap-1">
                          <Clock className="w-4 h-4 text-[#1A1814]/50" />{result.train.time}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#1A1814]/30 uppercase tracking-wider mb-1">Est. Cost</p>
                        <p className="text-lg font-bold text-[#C4960C]">~{result.train.cost} MAD</p>
                        <p className="text-xs text-[#1A1814]/20">2nd class</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl bg-white border border-[#1A1814]/5 p-6 border-l-4 border-l-[#1A1814]/10 opacity-50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-[#1A1814]/5"><Train className="w-5 h-5 text-[#1A1814]/20" /></div>
                      <div>
                        <h3 className="font-bold text-[#1A1814]/40">Train (ONCF)</h3>
                        <p className="text-xs text-[#1A1814]/20">No direct train connection</p>
                      </div>
                    </div>
                    <p className="text-sm text-[#1A1814]/20">One or both cities are not on the rail network.</p>
                  </div>
                )}

                {/* Flight */}
                {result.flight ? (
                  <div className="rounded-2xl bg-white border border-[#1A1814]/5 p-6 border-l-4 border-l-[#C4960C]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-[#C4960C]/10"><Plane className="w-5 h-5 text-[#C4960C]" /></div>
                      <div>
                        <h3 className="font-bold text-[#1A1814]">Domestic Flight</h3>
                        <p className="text-xs text-[#1A1814]/30">Royal Air Maroc / Air Arabia</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-[#1A1814]/30 uppercase tracking-wider mb-1">Duration</p>
                        <p className="text-lg font-bold text-[#1A1814] flex items-center gap-1">
                          <Clock className="w-4 h-4 text-[#C4960C]" />{result.flight.time}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#1A1814]/30 uppercase tracking-wider mb-1">Est. Cost</p>
                        <p className="text-lg font-bold text-[#C4960C]">~{result.flight.cost} MAD</p>
                        <p className="text-xs text-[#1A1814]/20">one way</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl bg-white border border-[#1A1814]/5 p-6 border-l-4 border-l-[#1A1814]/10 opacity-50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-[#1A1814]/5"><Plane className="w-5 h-5 text-[#1A1814]/20" /></div>
                      <div>
                        <h3 className="font-bold text-[#1A1814]/40">Domestic Flight</h3>
                        <p className="text-xs text-[#1A1814]/20">
                          {result.straightLine < 300 ? 'Distance too short for flights' : 'No airport at one or both cities'}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-[#1A1814]/20">Domestic flights are only practical for 300+ km between airports.</p>
                  </div>
                )}
              </div>

              {/* Tips */}
              <div className="rounded-2xl bg-[#1A1814] p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                <div className="relative">
                  <h3 className="font-bold text-[#FAF8F5] mb-3 flex items-center gap-2 font-serif">
                    <Route className="w-4 h-4 text-[#C4960C]" /> Travel Tips for This Route
                  </h3>
                  <ul className="space-y-2 text-sm text-[#FAF8F5]/40">
                    {result.roadDistance > 500 && (
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C4960C] mt-1.5 shrink-0" />
                        Long distance route. Consider breaking the journey with an overnight stop.
                      </li>
                    )}
                    {result.train && (
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C4960C] mt-1.5 shrink-0" />
                        Train is available on this route. Book at oncf.ma for the best prices.
                      </li>
                    )}
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C4960C] mt-1.5 shrink-0" />
                      CTM and Supratours buses are reliable and air-conditioned. Book online at ctm.ma.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C4960C] mt-1.5 shrink-0" />
                      Grand taxis (shared) are cheaper than private taxis. Negotiate the price before departure.
                    </li>
                    {result.roadDistance > 300 && (
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C4960C] mt-1.5 shrink-0" />
                        Moroccan motorways (autoroutes) have tolls. Carry cash for toll booths.
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* City Links */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/cities/${result.from.slug}`}
                  className="flex-1 rounded-2xl bg-white border border-[#1A1814]/5 p-4 flex items-center gap-3 group hover:shadow-md transition-all">
                  <MapPin className="w-5 h-5 text-[#C4960C]" />
                  <div>
                    <p className="font-bold text-[#1A1814] group-hover:text-[#C4960C] transition-colors">Explore {result.from.name}</p>
                    <p className="text-xs text-[#1A1814]/30">City guide, hotels, restaurants</p>
                  </div>
                  <ChevronRight className="w-4 h-4 ml-auto text-[#1A1814]/20 group-hover:text-[#C4960C]" />
                </Link>
                <Link href={`/cities/${result.to.slug}`}
                  className="flex-1 rounded-2xl bg-white border border-[#1A1814]/5 p-4 flex items-center gap-3 group hover:shadow-md transition-all">
                  <Navigation className="w-5 h-5 text-[#A0522D]" />
                  <div>
                    <p className="font-bold text-[#1A1814] group-hover:text-[#A0522D] transition-colors">Explore {result.to.name}</p>
                    <p className="text-xs text-[#1A1814]/30">City guide, hotels, restaurants</p>
                  </div>
                  <ChevronRight className="w-4 h-4 ml-auto text-[#1A1814]/20 group-hover:text-[#A0522D]" />
                </Link>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!result && (
            <div className="text-center py-20">
              <div className="inline-flex p-4 rounded-2xl bg-[#1A1814]/5 mb-4">
                <Route className="w-10 h-10 text-[#1A1814]/20" />
              </div>
              <h2 className="text-xl font-bold text-[#1A1814] mb-2 font-serif">Select two cities</h2>
              <p className="text-[#1A1814]/40 max-w-md mx-auto text-sm">
                Choose a departure and destination city above to see distance, travel time estimates, and transport options.
              </p>
            </div>
          )}

          {/* Popular Routes */}
          <div className="mt-14">
            <h2 className="text-xl font-serif font-bold text-[#1A1814] mb-6">Popular Routes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { from: 'marrakech', to: 'fes', label: 'Marrakech to Fes' },
                { from: 'marrakech', to: 'essaouira', label: 'Marrakech to Essaouira' },
                { from: 'marrakech', to: 'merzouga', label: 'Marrakech to Sahara' },
                { from: 'casablanca', to: 'marrakech', label: 'Casablanca to Marrakech' },
                { from: 'tangier', to: 'chefchaouen', label: 'Tangier to Chefchaouen' },
                { from: 'fes', to: 'chefchaouen', label: 'Fes to Chefchaouen' },
                { from: 'casablanca', to: 'fes', label: 'Casablanca to Fes' },
                { from: 'agadir', to: 'marrakech', label: 'Agadir to Marrakech' },
                { from: 'rabat', to: 'tangier', label: 'Rabat to Tangier' },
              ].map((route) => {
                const f = cityOptions.find((c) => c.slug === route.from)
                const t = cityOptions.find((c) => c.slug === route.to)
                const dist = f && t ? Math.round(getDistance(f.lat, f.lng, t.lat, t.lng) * 1.3) : 0
                return (
                  <button key={route.label}
                    onClick={() => { setFromCity(route.from); setToCity(route.to); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    className={cn(
                      'rounded-2xl bg-white border border-[#1A1814]/5 p-4 text-left group cursor-pointer hover:shadow-md transition-all',
                      fromCity === route.from && toCity === route.to && 'ring-2 ring-[#C4960C]'
                    )}>
                    <p className="font-semibold text-[#1A1814] group-hover:text-[#C4960C] transition-colors">{route.label}</p>
                    <p className="text-sm text-[#1A1814]/30 mt-1">~{dist} km &middot; {getDriveTime(dist)} by car</p>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
