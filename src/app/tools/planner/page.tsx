'use client'

import { useState, useCallback, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CalendarDays,
  Users,
  ChevronLeft,
  ChevronRight,
  MapPin,
  GripVertical,
  Check,
  Printer,
  Share2,
  Save,
  Clock,
  Star,
  ArrowLeft,
  Sparkles,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─── City Data ─── */
interface City {
  name: string
  slug: string
  image: string
  region: string
  suggestedDays: number
  highlights: string[]
  description: string
  lat: number
  lng: number
}

const CITIES: City[] = [
  {
    name: 'Marrakech',
    slug: 'marrakech',
    image: '/images/cities/marrakech.jpg',
    region: 'Central',
    suggestedDays: 3,
    highlights: ['Jemaa el-Fnaa', 'Majorelle Garden', 'Bahia Palace', 'Souks', 'Koutoubia Mosque'],
    description: 'The Red City, Morocco\'s most vibrant destination with bustling souks, palaces, and gardens.',
    lat: 31.6295,
    lng: -7.9811,
  },
  {
    name: 'Fes',
    slug: 'fes',
    image: '/images/cities/fes.jpg',
    region: 'North',
    suggestedDays: 2,
    highlights: ['Fes el-Bali Medina', 'Chouara Tannery', 'Bou Inania Madrasa', 'Dar Batha Museum'],
    description: 'The spiritual capital with the world\'s largest car-free urban area and medieval medina.',
    lat: 34.0331,
    lng: -5.0003,
  },
  {
    name: 'Casablanca',
    slug: 'casablanca',
    image: '/images/cities/casablanca.jpg',
    region: 'Atlantic Coast',
    suggestedDays: 1,
    highlights: ['Hassan II Mosque', 'Corniche', 'Old Medina', 'Art Deco Architecture'],
    description: 'Morocco\'s economic capital with the stunning Hassan II Mosque and modern coastal vibes.',
    lat: 33.5731,
    lng: -7.5898,
  },
  {
    name: 'Rabat',
    slug: 'rabat',
    image: '/images/cities/rabat.jpg',
    region: 'Atlantic Coast',
    suggestedDays: 1,
    highlights: ['Kasbah of the Udayas', 'Hassan Tower', 'Chellah', 'Royal Palace'],
    description: 'The political capital with a relaxed atmosphere, historic kasbahs, and coastal charm.',
    lat: 34.0209,
    lng: -6.8416,
  },
  {
    name: 'Tangier',
    slug: 'tangier',
    image: '/images/cities/tangier.jpg',
    region: 'North',
    suggestedDays: 2,
    highlights: ['Kasbah Museum', 'Cap Spartel', 'Caves of Hercules', 'Grand Socco'],
    description: 'Gateway to Africa where the Atlantic meets the Mediterranean with bohemian charm.',
    lat: 35.7595,
    lng: -5.834,
  },
  {
    name: 'Chefchaouen',
    slug: 'chefchaouen',
    image: '/images/cities/chefchaouen.jpg',
    region: 'Rif Mountains',
    suggestedDays: 2,
    highlights: ['Blue Medina', 'Ras el-Maa Waterfall', 'Spanish Mosque Hike', 'Kasbah Museum'],
    description: 'The famous Blue Pearl nestled in the Rif Mountains with Instagram-worthy blue streets.',
    lat: 35.1688,
    lng: -5.2636,
  },
  {
    name: 'Essaouira',
    slug: 'essaouira',
    image: '/images/cities/essaouira.jpg',
    region: 'Atlantic Coast',
    suggestedDays: 2,
    highlights: ['Medina Walls', 'Beach & Windsurfing', 'Port & Fish Market', 'Gnaoua Music'],
    description: 'A laid-back coastal town famous for wind sports, fresh seafood, and artistic spirit.',
    lat: 31.5085,
    lng: -9.7595,
  },
  {
    name: 'Merzouga',
    slug: 'merzouga',
    image: '/images/cities/merzouga.jpg',
    region: 'Sahara',
    suggestedDays: 2,
    highlights: ['Erg Chebbi Dunes', 'Camel Trekking', 'Desert Camp', 'Sunrise/Sunset'],
    description: 'Gateway to the Sahara and the magnificent Erg Chebbi dunes for the ultimate desert experience.',
    lat: 31.0801,
    lng: -4.0134,
  },
  {
    name: 'Ouarzazate',
    slug: 'ouarzazate',
    image: '/images/cities/ouarzazate.jpg',
    region: 'Southeast',
    suggestedDays: 1,
    highlights: ['Ait Benhaddou', 'Atlas Studios', 'Taourirt Kasbah', 'Draa Valley'],
    description: 'Hollywood of Africa with ancient kasbahs and filming locations for Game of Thrones.',
    lat: 30.9189,
    lng: -6.8936,
  },
  {
    name: 'Agadir',
    slug: 'agadir',
    image: '/images/cities/agadir.jpg',
    region: 'South Atlantic',
    suggestedDays: 2,
    highlights: ['Beach Promenade', 'Souss-Massa Park', 'Agadir Oufella', 'Marina'],
    description: 'Morocco\'s premier beach resort with a long sandy coastline and modern amenities.',
    lat: 30.4278,
    lng: -9.5981,
  },
  {
    name: 'Meknes',
    slug: 'meknes',
    image: '/images/cities/meknes.jpg',
    region: 'Central',
    suggestedDays: 1,
    highlights: ['Bab Mansour', 'Heri es-Souani', 'Moulay Ismail Mausoleum', 'Volubilis (nearby)'],
    description: 'Imperial city with monumental gates, granaries, and the nearby Roman ruins of Volubilis.',
    lat: 33.8935,
    lng: -5.5473,
  },
  {
    name: 'Dakhla',
    slug: 'dakhla',
    image: '/images/cities/dakhla.jpg',
    region: 'Southern Sahara',
    suggestedDays: 3,
    highlights: ['Kitesurfing', 'White Dune', 'Lagoon', 'Fishing', 'Dragon Island'],
    description: 'Remote Saharan peninsula paradise for kitesurfers and adventurers seeking untouched beauty.',
    lat: 23.6848,
    lng: -15.957,
  },
  {
    name: 'Taghazout',
    slug: 'taghazout',
    image: '/images/cities/taghazout.jpg',
    region: 'South Atlantic',
    suggestedDays: 2,
    highlights: ['Surfing', 'Paradise Valley', 'Tamraght', 'Yoga Retreats', 'Anchor Point'],
    description: 'Bohemian surf village with world-class waves, yoga retreats, and a relaxed hippie vibe.',
    lat: 30.5440,
    lng: -9.7084,
  },
]

/* ─── Travel Style Data ─── */
const TRAVEL_STYLES = [
  { id: 'budget', label: 'Budget', icon: '\u{1F3D5}', description: 'Hostels, street food, public transport', dailyBudget: '300-500 MAD' },
  { id: 'mid-range', label: 'Mid-Range', icon: '\u{2B50}', description: 'Riads, local restaurants, mixed transport', dailyBudget: '800-1500 MAD' },
  { id: 'luxury', label: 'Luxury', icon: '\u{1F451}', description: 'Premium hotels, fine dining, private drivers', dailyBudget: '2500+ MAD' },
] as const

/* ─── Months ─── */
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']

/* ─── Optimal Route (greedy nearest-neighbor) ─── */
function optimizeRoute(selected: City[]): City[] {
  if (selected.length <= 2) return selected
  const result: City[] = [selected[0]]
  const remaining = [...selected.slice(1)]
  while (remaining.length > 0) {
    const last = result[result.length - 1]
    let nearest = 0
    let minDist = Infinity
    for (let i = 0; i < remaining.length; i++) {
      const d = Math.sqrt(
        Math.pow(last.lat - remaining[i].lat, 2) + Math.pow(last.lng - remaining[i].lng, 2)
      )
      if (d < minDist) {
        minDist = d
        nearest = i
      }
    }
    result.push(remaining.splice(nearest, 1)[0])
  }
  return result
}

/* ─── Itinerary Generation ─── */
interface DayPlan {
  day: number
  city: string
  activities: string[]
  meals: string
  accommodation: string
}

function generateItinerary(
  cities: City[],
  style: string,
  totalDays: number
): DayPlan[] {
  const plan: DayPlan[] = []
  let dayCounter = 1

  // Distribute days
  const totalSuggested = cities.reduce((s, c) => s + c.suggestedDays, 0)
  const ratio = totalDays / totalSuggested

  const meals =
    style === 'budget'
      ? 'Street food & local cafes'
      : style === 'mid-range'
        ? 'Mix of local restaurants & riads'
        : 'Fine dining & restaurant experiences'

  const accommodation =
    style === 'budget'
      ? 'Hostel or basic guesthouse'
      : style === 'mid-range'
        ? 'Traditional riad'
        : 'Luxury hotel or premium riad'

  for (const city of cities) {
    const daysHere = Math.max(1, Math.round(city.suggestedDays * ratio))
    for (let d = 0; d < daysHere && dayCounter <= totalDays; d++) {
      const activitiesPerDay = Math.min(3, city.highlights.length)
      const startIdx = (d * activitiesPerDay) % city.highlights.length
      const activities: string[] = []
      for (let a = 0; a < activitiesPerDay; a++) {
        activities.push(city.highlights[(startIdx + a) % city.highlights.length])
      }
      if (d === 0 && plan.length > 0) {
        activities.unshift(`Travel from ${plan[plan.length - 1].city} to ${city.name}`)
      }
      plan.push({
        day: dayCounter,
        city: city.name,
        activities,
        meals,
        accommodation,
      })
      dayCounter++
    }
  }

  return plan
}

/* ─── Component ─── */
export default function TripPlannerPage() {
  const [step, setStep] = useState(1)

  // Step 1 state
  const [month, setMonth] = useState(3) // April
  const [year, setYear] = useState(2026)
  const [duration, setDuration] = useState(7)
  const [style, setStyle] = useState<string>('mid-range')
  const [groupSize, setGroupSize] = useState(2)

  // Step 2 state
  const [selectedCities, setSelectedCities] = useState<City[]>([])

  // Step 3 state
  const [itinerary, setItinerary] = useState<DayPlan[]>([])
  const printRef = useRef<HTMLDivElement>(null)

  const toggleCity = useCallback((city: City) => {
    setSelectedCities((prev) => {
      const exists = prev.find((c) => c.slug === city.slug)
      if (exists) return prev.filter((c) => c.slug !== city.slug)
      return [...prev, city]
    })
  }, [])

  const moveCity = useCallback((fromIndex: number, direction: 'up' | 'down') => {
    setSelectedCities((prev) => {
      const arr = [...prev]
      const toIndex = direction === 'up' ? fromIndex - 1 : fromIndex + 1
      if (toIndex < 0 || toIndex >= arr.length) return arr
      ;[arr[fromIndex], arr[toIndex]] = [arr[toIndex], arr[fromIndex]]
      return arr
    })
  }, [])

  const handleOptimizeRoute = useCallback(() => {
    setSelectedCities((prev) => optimizeRoute(prev))
  }, [])

  const handleGenerateItinerary = useCallback(() => {
    const plan = generateItinerary(selectedCities, style, duration)
    setItinerary(plan)
    setStep(3)
  }, [selectedCities, style, duration])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  const removeCity = useCallback((slug: string) => {
    setSelectedCities((prev) => prev.filter((c) => c.slug !== slug))
  }, [])

  const canProceedStep1 = duration > 0 && style
  const canProceedStep2 = selectedCities.length > 0

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] py-12 md:py-16">
        <div className="container-morocco">
          <Link
            href="/tools"
            className="inline-flex items-center text-white/70 hover:text-white mb-4 text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            All Tools
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white font-[var(--font-display)]">
            Trip Planner
          </h1>
          <p className="text-white/80 mt-2 max-w-xl">
            Build your perfect Morocco itinerary in 3 easy steps
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-[var(--surface)] border-b border-[var(--border-light)] sticky top-0 z-30 no-print">
        <div className="container-morocco py-4">
          <div className="flex items-center justify-between max-w-lg mx-auto">
            {[
              { num: 1, label: 'Details' },
              { num: 2, label: 'Cities' },
              { num: 3, label: 'Itinerary' },
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center">
                <button
                  onClick={() => {
                    if (s.num < step) setStep(s.num)
                  }}
                  className={cn(
                    'flex items-center justify-center h-10 w-10 rounded-full text-sm font-bold transition-all',
                    step >= s.num
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-[var(--surface-muted)] text-[var(--text-muted)]'
                  )}
                >
                  {step > s.num ? <Check className="h-5 w-5" /> : s.num}
                </button>
                <span
                  className={cn(
                    'ml-2 text-sm font-medium hidden sm:inline',
                    step >= s.num ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'
                  )}
                >
                  {s.label}
                </span>
                {idx < 2 && (
                  <div
                    className={cn(
                      'w-12 sm:w-20 h-0.5 mx-3 rounded',
                      step > s.num ? 'bg-[var(--color-primary)]' : 'bg-[var(--border-light)]'
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-morocco py-8 md:py-12">
        <AnimatePresence mode="wait">
          {/* ─── STEP 1: Trip Details ─── */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6 font-[var(--font-heading)]">
                  When are you traveling?
                </h2>

                {/* Month/Year */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      Month
                    </label>
                    <select
                      value={month}
                      onChange={(e) => setMonth(Number(e.target.value))}
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                    >
                      {MONTHS.map((m, i) => (
                        <option key={m} value={i}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      Year
                    </label>
                    <select
                      value={year}
                      onChange={(e) => setYear(Number(e.target.value))}
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                    >
                      {[2025, 2026, 2027].map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Duration */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Trip Duration (days)
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={2}
                      max={30}
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                      className="flex-1 accent-[var(--color-primary)]"
                    />
                    <span className="w-12 text-center font-bold text-[var(--color-primary)] text-lg">
                      {duration}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-[var(--text-muted)] mt-1">
                    <span>2 days</span>
                    <span>30 days</span>
                  </div>
                </div>

                {/* Group Size */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    <Users className="inline h-4 w-4 mr-1" />
                    Group Size
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <button
                        key={n}
                        onClick={() => setGroupSize(n)}
                        className={cn(
                          'h-12 w-12 rounded-xl font-bold transition-all',
                          groupSize === n
                            ? 'bg-[var(--color-primary)] text-white shadow-lg'
                            : 'bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:bg-[var(--border-light)]'
                        )}
                      >
                        {n}{n === 6 ? '+' : ''}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Travel Style */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 font-[var(--font-heading)]">
                  Travel Style
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {TRAVEL_STYLES.map((ts) => (
                    <button
                      key={ts.id}
                      onClick={() => setStyle(ts.id)}
                      className={cn(
                        'p-4 rounded-xl border-2 text-left transition-all',
                        style === ts.id
                          ? 'border-[var(--color-primary)] bg-[var(--color-primary-50)] shadow-md'
                          : 'border-[var(--border-light)] bg-[var(--surface)] hover:border-[var(--border)]'
                      )}
                    >
                      <div className="text-2xl mb-2">{ts.icon}</div>
                      <div className="font-bold text-[var(--text-primary)]">{ts.label}</div>
                      <div className="text-xs text-[var(--text-muted)] mt-1">{ts.description}</div>
                      <div className="text-xs font-medium text-[var(--color-primary)] mt-2">
                        ~{ts.dailyBudget}/day
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Next button */}
              <button
                onClick={() => setStep(2)}
                disabled={!canProceedStep1}
                className={cn(
                  'w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2',
                  canProceedStep1
                    ? 'bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] shadow-lg'
                    : 'bg-gray-300 cursor-not-allowed'
                )}
              >
                Choose Cities
                <ChevronRight className="h-5 w-5" />
              </button>
            </motion.div>
          )}

          {/* ─── STEP 2: Select Cities ─── */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-[var(--text-primary)] font-[var(--font-heading)]">
                    Select Your Cities
                  </h2>
                  <p className="text-[var(--text-secondary)] text-sm mt-1">
                    Pick the cities you want to visit ({duration} days, {selectedCities.length} selected)
                  </p>
                </div>
                {selectedCities.length >= 2 && (
                  <button
                    onClick={handleOptimizeRoute}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-secondary)] text-white text-sm font-medium hover:bg-[var(--color-secondary-dark)] transition-colors"
                  >
                    <Sparkles className="h-4 w-4" />
                    Optimize Route
                  </button>
                )}
              </div>

              {/* City Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
                {CITIES.map((city) => {
                  const isSelected = selectedCities.some((c) => c.slug === city.slug)
                  return (
                    <button
                      key={city.slug}
                      onClick={() => toggleCity(city)}
                      className={cn(
                        'relative rounded-xl overflow-hidden text-left transition-all group',
                        isSelected
                          ? 'ring-3 ring-[var(--color-primary)] shadow-lg'
                          : 'border border-[var(--border-light)] hover:shadow-md'
                      )}
                    >
                      <div className="aspect-[4/3] bg-gradient-to-br from-[var(--color-sand-200)] to-[var(--color-sand-300)] relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <div className="font-bold text-white text-sm">{city.name}</div>
                          <div className="text-white/70 text-xs">{city.suggestedDays} days suggested</div>
                        </div>
                        {isSelected && (
                          <div className="absolute top-2 right-2 h-6 w-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="p-2 bg-[var(--surface)]">
                        <div className="text-xs text-[var(--text-muted)]">
                          <MapPin className="inline h-3 w-3 mr-0.5" />
                          {city.region}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Selected cities order */}
              {selectedCities.length > 0 && (
                <div className="mb-8 p-4 rounded-xl bg-[var(--surface-muted)] border border-[var(--border-light)]">
                  <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3">
                    Your Route Order (drag to reorder)
                  </h3>
                  <div className="space-y-2">
                    {selectedCities.map((city, idx) => (
                      <div
                        key={city.slug}
                        className="flex items-center gap-3 p-3 rounded-lg bg-[var(--surface)] border border-[var(--border-light)]"
                      >
                        <div className="flex flex-col gap-0.5">
                          <button
                            onClick={() => moveCity(idx, 'up')}
                            disabled={idx === 0}
                            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] disabled:opacity-30 transition-colors"
                          >
                            <ChevronLeft className="h-4 w-4 rotate-90" />
                          </button>
                          <button
                            onClick={() => moveCity(idx, 'down')}
                            disabled={idx === selectedCities.length - 1}
                            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] disabled:opacity-30 transition-colors"
                          >
                            <ChevronRight className="h-4 w-4 rotate-90" />
                          </button>
                        </div>
                        <GripVertical className="h-4 w-4 text-[var(--text-muted)]" />
                        <div className="h-8 w-8 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-[var(--text-primary)] text-sm">{city.name}</div>
                          <div className="text-xs text-[var(--text-muted)]">{city.suggestedDays} days suggested</div>
                        </div>
                        <button
                          onClick={() => removeCity(city.slug)}
                          className="p-1 rounded-lg hover:bg-red-50 text-[var(--text-muted)] hover:text-red-500 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-4 rounded-xl font-bold border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--surface-muted)] transition-all flex items-center gap-2"
                >
                  <ChevronLeft className="h-5 w-5" />
                  Back
                </button>
                <button
                  onClick={handleGenerateItinerary}
                  disabled={!canProceedStep2}
                  className={cn(
                    'flex-1 py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2',
                    canProceedStep2
                      ? 'bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] shadow-lg'
                      : 'bg-gray-300 cursor-not-allowed'
                  )}
                >
                  Generate Itinerary
                  <Sparkles className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ─── STEP 3: Generated Itinerary ─── */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              {/* Summary Header */}
              <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
                <h2 className="text-2xl font-bold font-[var(--font-display)] mb-2">
                  Your Morocco Itinerary
                </h2>
                <div className="flex flex-wrap gap-4 text-sm text-white/80">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" />
                    {MONTHS[month]} {year} &middot; {duration} days
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {groupSize} traveler{groupSize > 1 ? 's' : ''}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {TRAVEL_STYLES.find((t) => t.id === style)?.label} style
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {selectedCities.length} cities
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-8 no-print">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] text-sm font-medium hover:bg-[var(--surface-muted)] transition-colors"
                >
                  <Printer className="h-4 w-4" />
                  Print
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] text-sm font-medium hover:bg-[var(--surface-muted)] transition-colors">
                  <Save className="h-4 w-4" />
                  Save
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] text-sm font-medium hover:bg-[var(--surface-muted)] transition-colors">
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
              </div>

              {/* Day-by-Day */}
              <div ref={printRef} className="space-y-4">
                {itinerary.map((day, idx) => {
                  const isNewCity = idx === 0 || itinerary[idx - 1].city !== day.city
                  return (
                    <div key={day.day}>
                      {isNewCity && (
                        <div className="flex items-center gap-3 mb-3 mt-6 first:mt-0">
                          <div className="h-10 w-10 rounded-full bg-[var(--color-secondary)] text-white flex items-center justify-center">
                            <MapPin className="h-5 w-5" />
                          </div>
                          <h3 className="text-xl font-bold text-[var(--text-primary)] font-[var(--font-heading)]">
                            {day.city}
                          </h3>
                        </div>
                      )}
                      <div className="ml-5 pl-8 border-l-2 border-[var(--border-light)] pb-4">
                        <div className="relative">
                          <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-[var(--color-primary)] border-2 border-white" />
                          <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border-light)]">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-bold text-[var(--color-primary)]">
                                Day {day.day}
                              </span>
                            </div>
                            <div className="space-y-1.5 mb-3">
                              {day.activities.map((a, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                  <Check className="h-4 w-4 text-[var(--color-green)] mt-0.5 shrink-0" />
                                  {a}
                                </div>
                              ))}
                            </div>
                            <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                              <span>Meals: {day.meals}</span>
                              <span>Stay: {day.accommodation}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Back button */}
              <div className="flex gap-4 mt-8 no-print">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-4 rounded-xl font-bold border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--surface-muted)] transition-all flex items-center gap-2"
                >
                  <ChevronLeft className="h-5 w-5" />
                  Edit Cities
                </button>
                <button
                  onClick={() => {
                    setStep(1)
                    setSelectedCities([])
                    setItinerary([])
                  }}
                  className="px-6 py-4 rounded-xl font-bold border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--surface-muted)] transition-all"
                >
                  Start Over
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
