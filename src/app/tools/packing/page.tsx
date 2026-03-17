'use client'

import { useState, useMemo, useEffect, useCallback } from 'react'
import Link from 'next/link'
import {
  Home,
  ChevronRight,
  ClipboardList,
  Check,
  RotateCcw,
  Mountain,
  Sun,
  Building2,
  Info,
  Shirt,
  FileText,
  Plug,
  Heart,
  Luggage,
  ChevronDown,
  ChevronUp,
  Waves,
  Footprints,
  Snowflake,
  Leaf,
  Flower2,
  CloudSun,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */
type Season = 'spring' | 'summer' | 'fall' | 'winter'
type Activity = 'desert' | 'mountains' | 'beach' | 'city' | 'trekking'

interface PackingItem {
  name: string
  essential: boolean
  note?: string
}

interface PackingCategory {
  category: string
  icon: React.ElementType
  items: PackingItem[]
}

/* ================================================================== */
/*  Season & Activity Config                                           */
/* ================================================================== */
const SEASONS: { id: Season; label: string; icon: React.ElementType; months: string }[] = [
  { id: 'spring', label: 'Spring', icon: Flower2, months: 'Mar - May' },
  { id: 'summer', label: 'Summer', icon: Sun, months: 'Jun - Aug' },
  { id: 'fall', label: 'Fall', icon: Leaf, months: 'Sep - Nov' },
  { id: 'winter', label: 'Winter', icon: Snowflake, months: 'Dec - Feb' },
]

const ACTIVITIES: { id: Activity; label: string; icon: React.ElementType }[] = [
  { id: 'desert', label: 'Desert', icon: Sun },
  { id: 'mountains', label: 'Mountains', icon: Mountain },
  { id: 'beach', label: 'Beach', icon: Waves },
  { id: 'city', label: 'City', icon: Building2 },
  { id: 'trekking', label: 'Trekking', icon: Footprints },
]

const SEASON_TIPS: Record<Season, string> = {
  spring: 'Spring in Morocco is ideal with pleasant temperatures. Pack layers as mornings and evenings can be cool, especially in the mountains. Wildflowers bloom across the Atlas and Rif regions.',
  summer: 'Summers are extremely hot inland (40+ C in Marrakech and the desert). Stick to coastal cities, mountains, or go early morning. Lightweight, breathable fabrics are essential.',
  fall: 'Fall offers comfortable temperatures and fewer tourists. Pack for warm days and cool evenings. October can bring occasional rain in the north.',
  winter: 'Winters are mild on the coast but cold in the mountains (snow in the Atlas). Pack warm layers, especially for evening outings. Desert nights can drop near freezing.',
}

/* ================================================================== */
/*  Checklist Generator                                                */
/* ================================================================== */
function generatePackingList(season: Season, activities: Set<Activity>): PackingCategory[] {
  const categories: PackingCategory[] = []

  /* ---- Documents ---- */
  categories.push({
    category: 'Documents & Essentials',
    icon: FileText,
    items: [
      { name: 'Passport (valid 6+ months)', essential: true },
      { name: 'Passport copies (physical + digital)', essential: true },
      { name: 'Travel insurance documents', essential: true },
      { name: 'Flight tickets / booking confirmations', essential: true },
      { name: 'Hotel / riad reservation printouts', essential: true },
      { name: 'Emergency contact list', essential: true },
      { name: 'Credit/debit cards (notify bank)', essential: true },
      { name: 'Cash in home currency for exchange', essential: true },
      { name: 'International driving permit', essential: false, note: 'If renting a car' },
      { name: 'Vaccination records', essential: false, note: 'Check current requirements' },
    ],
  })

  /* ---- Clothing ---- */
  const clothing: PackingItem[] = [
    { name: 'Comfortable walking shoes (broken in)', essential: true, note: 'Medina cobblestones are uneven' },
    { name: 'Sandals or flip-flops', essential: true },
    { name: 'Lightweight long pants (2-3 pairs)', essential: true, note: 'Linen or cotton' },
    { name: 'T-shirts / tops (4-5)', essential: true },
    { name: 'Underwear & socks (5-7 days)', essential: true },
    { name: 'Modest outfit for mosque/medina visits', essential: true, note: 'Covers shoulders and knees' },
    { name: 'Light scarf or shawl', essential: true, note: 'Multi-purpose: sun, mosque, warmth' },
  ]

  if (season === 'summer') {
    clothing.push(
      { name: 'Sun hat with wide brim', essential: true },
      { name: 'UV-protection sunglasses', essential: true },
      { name: 'Light breathable fabrics', essential: true },
      { name: 'Swimsuit', essential: false },
      { name: 'Light cardigan (for AC indoors)', essential: false },
    )
  } else if (season === 'winter') {
    clothing.push(
      { name: 'Warm jacket or fleece', essential: true },
      { name: 'Thermal base layers', essential: true },
      { name: 'Warm hat and gloves', essential: true, note: 'Essential for Atlas mountains' },
      { name: 'Rain jacket', essential: true },
      { name: 'Warm socks (wool blend)', essential: false },
    )
  } else if (season === 'spring') {
    clothing.push(
      { name: 'Light jacket or windbreaker', essential: true },
      { name: 'Light layers for cool mornings', essential: true },
      { name: 'Sunglasses', essential: true },
      { name: 'Rain layer (light poncho)', essential: false },
    )
  } else {
    clothing.push(
      { name: 'Light jacket for evenings', essential: true },
      { name: 'Sunglasses', essential: true },
      { name: 'Light rain layer', essential: false, note: 'Occasional showers in October' },
    )
  }

  if (activities.has('desert')) {
    clothing.push(
      { name: 'Headscarf / turban (desert sun)', essential: true, note: 'Can buy locally in Merzouga' },
      { name: 'Closed-toe shoes for desert walking', essential: true },
      { name: 'Warm fleece for desert nights', essential: true, note: 'Desert nights can be very cold' },
    )
  }
  if (activities.has('beach')) {
    clothing.push(
      { name: 'Swimsuit (2)', essential: true },
      { name: 'Beach cover-up', essential: true },
      { name: 'Water shoes', essential: false },
    )
  }
  if (activities.has('trekking') || activities.has('mountains')) {
    clothing.push(
      { name: 'Hiking boots (broken in)', essential: true },
      { name: 'Moisture-wicking shirts', essential: true },
      { name: 'Hiking pants (zip-off)', essential: true },
      { name: 'Warm fleece layer', essential: true },
      { name: 'Gaiters', essential: false, note: 'Useful in scree and snow' },
    )
  }

  categories.push({ category: 'Clothing', icon: Shirt, items: clothing })

  /* ---- Electronics ---- */
  categories.push({
    category: 'Electronics',
    icon: Plug,
    items: [
      { name: 'Phone + charger', essential: true },
      { name: 'Power adapter (Type C/E -- EU style)', essential: true, note: 'Morocco uses 220V, EU-style plugs' },
      { name: 'Portable power bank', essential: true },
      { name: 'Camera + memory cards', essential: false },
      { name: 'Universal adapter', essential: false },
      { name: 'E-reader / tablet', essential: false },
      { name: 'Headphones', essential: false },
      ...(activities.has('trekking') || activities.has('mountains')
        ? [{ name: 'Headlamp / flashlight', essential: true as const, note: 'For mountain huts and medina alleys' }]
        : [{ name: 'Small flashlight', essential: false as const, note: 'Medina alleys can be dark' }]),
    ],
  })

  /* ---- Health & Safety ---- */
  const health: PackingItem[] = [
    { name: 'Prescription medications (with letter)', essential: true },
    { name: 'Sunscreen SPF 50+', essential: true },
    { name: 'Insect repellent', essential: true },
    { name: 'Hand sanitizer', essential: true },
    { name: 'Basic first-aid kit', essential: true },
    { name: 'Anti-diarrhea medicine', essential: true, note: 'Traveler stomach is common' },
    { name: 'Rehydration salts', essential: true },
    { name: 'Pain relievers (ibuprofen/paracetamol)', essential: true },
    { name: 'Motion sickness tablets', essential: false, note: 'Mountain roads are winding' },
    { name: 'Lip balm with SPF', essential: false },
  ]

  if (activities.has('trekking') || activities.has('mountains')) {
    health.push(
      { name: 'Blister plasters', essential: true },
      { name: 'Altitude sickness medication', essential: false, note: 'For peaks above 3,000m' },
    )
  }
  if (activities.has('desert')) {
    health.push(
      { name: 'Eye drops (for sand/dust)', essential: false },
      { name: 'Nasal spray (dry air)', essential: false },
    )
  }

  categories.push({ category: 'Health & Safety', icon: Heart, items: health })

  /* ---- Miscellaneous ---- */
  categories.push({
    category: 'Miscellaneous',
    icon: Luggage,
    items: [
      { name: 'Reusable water bottle', essential: true, note: 'Many riads offer free refills' },
      { name: 'Day bag / small backpack', essential: true },
      { name: 'Packing cubes', essential: false },
      { name: 'Dry bags', essential: false, note: 'For beach/desert sand protection' },
      { name: 'Notebook and pen', essential: false },
      { name: 'Arabic/French phrasebook', essential: false, note: 'Or use our Darija Phrasebook' },
      { name: 'Snacks from home', essential: false },
      { name: 'Ziplock bags', essential: false, note: 'For wet clothes, spices from souks' },
      { name: 'Padlock for hostel lockers', essential: false },
      { name: 'Travel towel (quick-dry)', essential: false, note: 'Hostels may not provide' },
    ],
  })

  return categories
}

/* ================================================================== */
/*  localStorage helpers                                               */
/* ================================================================== */
const STORAGE_KEY = 'morocco-packing-checked'

function loadChecked(): Set<string> {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return new Set(JSON.parse(raw))
  } catch { /* ignore */ }
  return new Set()
}

function saveChecked(checked: Set<string>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]))
  } catch { /* ignore */ }
}

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */
export default function PackingChecklistPage() {
  const [season, setSeason] = useState<Season>('spring')
  const [activities, setActivities] = useState<Set<Activity>>(new Set(['city']))
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set())

  useEffect(() => {
    setChecked(loadChecked())
  }, [])

  const toggleActivity = useCallback((act: Activity) => {
    setActivities(prev => {
      const next = new Set(prev)
      if (next.has(act)) next.delete(act)
      else next.add(act)
      return next
    })
  }, [])

  const toggleCheck = useCallback((itemName: string) => {
    setChecked(prev => {
      const next = new Set(prev)
      if (next.has(itemName)) next.delete(itemName)
      else next.add(itemName)
      saveChecked(next)
      return next
    })
  }, [])

  const toggleCollapse = useCallback((category: string) => {
    setCollapsed(prev => {
      const next = new Set(prev)
      if (next.has(category)) next.delete(category)
      else next.add(category)
      return next
    })
  }, [])

  const resetAll = useCallback(() => {
    setChecked(new Set())
    saveChecked(new Set())
  }, [])

  const packingList = useMemo(
    () => generatePackingList(season, activities),
    [season, activities]
  )

  const totalItems = useMemo(
    () => packingList.reduce((sum, cat) => sum + cat.items.length, 0),
    [packingList]
  )

  const checkedCount = useMemo(
    () => {
      const allNames = new Set(packingList.flatMap(cat => cat.items.map(i => i.name)))
      return [...checked].filter(c => allNames.has(c)).length
    },
    [checked, packingList]
  )

  const progressPct = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0

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
            <span className="text-[#FAF8F5]/60">Packing Checklist</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-14 w-14 rounded-2xl bg-[#C4960C]/10 border border-[#C4960C]/20 flex items-center justify-center">
              <ClipboardList className="h-7 w-7 text-[#C4960C]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#FAF8F5] font-[family-name:var(--font-display)]">
                Packing Checklist
              </h1>
              <p className="text-[#FAF8F5]/50 mt-1">
                Personalized packing list based on your season and activities
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Season Selector */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-[#1A1814]/40 uppercase tracking-wider mb-3">
            When are you visiting?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {SEASONS.map((s) => {
              const Icon = s.icon
              return (
                <button
                  key={s.id}
                  onClick={() => setSeason(s.id)}
                  className={cn(
                    'p-4 rounded-xl border-2 text-center transition-all',
                    season === s.id
                      ? 'border-[#C4960C] bg-[#C4960C]/5'
                      : 'border-[#1A1814]/5 bg-white hover:border-[#C4960C]/30'
                  )}
                >
                  <Icon className={cn('h-5 w-5 mx-auto mb-2', season === s.id ? 'text-[#C4960C]' : 'text-[#1A1814]/30')} />
                  <div className="text-sm font-bold text-[#1A1814]">{s.label}</div>
                  <div className="text-xs text-[#1A1814]/40">{s.months}</div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Activity Selector */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-[#1A1814]/40 uppercase tracking-wider mb-3">
            What will you be doing? (select all that apply)
          </h2>
          <div className="flex flex-wrap gap-3">
            {ACTIVITIES.map((act) => {
              const Icon = act.icon
              const active = activities.has(act.id)
              return (
                <button
                  key={act.id}
                  onClick={() => toggleActivity(act.id)}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all',
                    active
                      ? 'border-[#C4960C] bg-[#C4960C] text-white'
                      : 'border-[#1A1814]/5 bg-white text-[#1A1814]/60 hover:border-[#C4960C]/30'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {act.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Season Tip */}
        <div className="p-4 rounded-xl bg-[#C4960C]/5 border border-[#C4960C]/10 mb-8 flex items-start gap-3">
          <CloudSun className="h-5 w-5 text-[#C4960C] shrink-0 mt-0.5" />
          <p className="text-sm text-[#1A1814]/60 leading-relaxed">{SEASON_TIPS[season]}</p>
        </div>

        {/* Progress Bar */}
        <div className="p-4 rounded-xl bg-white border border-[#1A1814]/5 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-[#1A1814]">
              {checkedCount} of {totalItems} items packed
            </span>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-[#C4960C]">{progressPct}%</span>
              <button
                onClick={resetAll}
                className="text-xs text-[#1A1814]/30 hover:text-[#A0522D] transition-colors flex items-center gap-1"
              >
                <RotateCcw className="h-3 w-3" />
                Reset
              </button>
            </div>
          </div>
          <div className="h-3 bg-[#FAF8F5] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#C4960C] to-[#A0522D] rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          {progressPct === 100 && (
            <div className="flex items-center gap-2 mt-2 text-sm text-[#4A6741] font-semibold">
              <ShieldCheck className="h-4 w-4" />
              All packed! You are ready for Morocco.
            </div>
          )}
        </div>

        {/* Checklist Categories */}
        <div className="space-y-4">
          {packingList.map((cat) => {
            const Icon = cat.icon
            const isCollapsed = collapsed.has(cat.category)
            const catCheckedCount = cat.items.filter(i => checked.has(i.name)).length
            return (
              <div key={cat.category} className="rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleCollapse(cat.category)}
                  className="w-full flex items-center justify-between p-5 hover:bg-[#FAF8F5]/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-[#C4960C]" />
                    <span className="text-base font-bold text-[#1A1814] font-[family-name:var(--font-heading)]">
                      {cat.category}
                    </span>
                    <span className="text-xs text-[#1A1814]/30 font-semibold">
                      {catCheckedCount}/{cat.items.length}
                    </span>
                  </div>
                  {isCollapsed ? (
                    <ChevronDown className="h-4 w-4 text-[#1A1814]/30" />
                  ) : (
                    <ChevronUp className="h-4 w-4 text-[#1A1814]/30" />
                  )}
                </button>
                {!isCollapsed && (
                  <div className="px-5 pb-5 space-y-1">
                    {cat.items.map((item) => {
                      const isChecked = checked.has(item.name)
                      return (
                        <label
                          key={item.name}
                          className={cn(
                            'flex items-start gap-3 p-2.5 rounded-lg cursor-pointer transition-colors',
                            isChecked ? 'bg-[#4A6741]/5' : 'hover:bg-[#FAF8F5]'
                          )}
                        >
                          <div className={cn(
                            'h-5 w-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all',
                            isChecked
                              ? 'bg-[#4A6741] border-[#4A6741]'
                              : 'border-[#1A1814]/15 bg-white'
                          )}>
                            {isChecked && <Check className="h-3 w-3 text-white" />}
                          </div>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleCheck(item.name)}
                            className="sr-only"
                          />
                          <div className="flex-1 min-w-0">
                            <div className={cn(
                              'text-sm transition-all',
                              isChecked ? 'text-[#1A1814]/30 line-through' : 'text-[#1A1814] font-medium'
                            )}>
                              {item.name}
                              {item.essential && (
                                <span className="ml-2 text-[10px] font-bold text-[#A0522D] uppercase">Essential</span>
                              )}
                            </div>
                            {item.note && (
                              <div className="text-xs text-[#1A1814]/40 mt-0.5">{item.note}</div>
                            )}
                          </div>
                        </label>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-8 p-5 rounded-xl bg-[#1A1814] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="relative flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-[#C4960C] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-[#FAF8F5]/80 mb-1">Your checklist is saved</div>
              <p className="text-xs text-[#FAF8F5]/40 leading-relaxed">
                Checked items are saved in your browser. Come back anytime to update your list.
                Changing the season or activities will show different items, but your checks are preserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
