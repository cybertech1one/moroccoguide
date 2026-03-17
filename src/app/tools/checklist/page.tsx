'use client'

import { useState, useMemo, useEffect, useCallback } from 'react'
import Link from 'next/link'
import {
  Home,
  ChevronRight,
  ListChecks,
  Check,
  RotateCcw,
  Calendar,
  Plane,
  ShieldCheck,
  CreditCard,
  Smartphone,
  FileText,
  Luggage,
  MapPin,
  BatteryCharging,
  Wifi,
  Building2,
  Globe,
  Stethoscope,
  Clock,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Download,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */
interface ChecklistItem {
  name: string
  note?: string
}

interface ChecklistPhase {
  id: string
  title: string
  subtitle: string
  icon: React.ElementType
  color: string
  items: ChecklistItem[]
}

/* ================================================================== */
/*  Checklist Data                                                     */
/* ================================================================== */
const PHASES: ChecklistPhase[] = [
  {
    id: '3months',
    title: '3 Months Before',
    subtitle: 'Planning & big decisions',
    icon: Calendar,
    color: 'from-[#C4960C] to-[#A0522D]',
    items: [
      { name: 'Check passport validity (6+ months from travel date)', note: 'Renew immediately if it expires within 6 months of your trip' },
      { name: 'Check Morocco visa requirements for your nationality', note: 'Many nationalities get 90-day visa-free entry. Verify at moroccan-consulate.com' },
      { name: 'Consult doctor about vaccinations', note: 'Hepatitis A, Typhoid recommended. No mandatory vaccinations for most travelers' },
      { name: 'Book flights to Morocco', note: 'Major airports: Marrakech (RAK), Casablanca (CMN), Fes (FEZ), Tangier (TNG), Agadir (AGA)' },
      { name: 'Start researching destinations and routes', note: 'Use our Distances tool to plan your route between cities' },
      { name: 'Set a trip budget', note: 'Use our Budget Calculator for estimates by travel style' },
      { name: 'Check if your driver license is valid for Morocco', note: 'International Driving Permit recommended if renting a car' },
    ],
  },
  {
    id: '1month',
    title: '1 Month Before',
    subtitle: 'Booking & logistics',
    icon: Building2,
    color: 'from-[#A0522D] to-[#8B4513]',
    items: [
      { name: 'Book accommodation (riads, hotels, hostels)', note: 'Book popular riads early, especially in Marrakech and Fes medinas' },
      { name: 'Purchase travel insurance', note: 'Ensure it covers medical evacuation, trip cancellation, and adventure activities' },
      { name: 'Research currency exchange options', note: 'MAD is a closed currency -- exchange on arrival. Use our Currency Converter for rates' },
      { name: 'Research SIM card and data options', note: 'Maroc Telecom, Inwi, Orange. Buy at airport or city shops. ~from 50 MAD for tourist SIM' },
      { name: 'Book key tours and experiences in advance', note: 'Sahara desert tours, cooking classes, and popular guided tours sell out' },
      { name: 'Research inter-city transport options', note: 'Book ONCF trains and CTM buses at oncf.ma and ctm.ma' },
      { name: 'Learn basic Darija and French phrases', note: 'Use our Darija Phrasebook -- even a few words make a big difference' },
      { name: 'Check current travel advisories', note: 'Visit your government travel advisory site for Morocco updates' },
    ],
  },
  {
    id: '1week',
    title: '1 Week Before',
    subtitle: 'Preparation & details',
    icon: Luggage,
    color: 'from-[#1A1814] to-[#3D3A35]',
    items: [
      { name: 'Start packing (use our Packing Checklist)', note: 'Pack light -- you will want to buy things in the souks' },
      { name: 'Make copies of all documents', note: 'Passport, insurance, bookings. Keep digital copies in cloud + email to yourself' },
      { name: 'Notify your bank of travel to Morocco', note: 'Prevent card blocks. Ask about foreign transaction fees' },
      { name: 'Download offline maps (Google Maps or Maps.me)', note: 'Essential for navigating medinas and areas without signal' },
      { name: 'Download translation app with offline Darija', note: 'Google Translate supports Moroccan Arabic offline' },
      { name: 'Arrange airport transfer or research transport', note: 'Pre-book riad pickup or know the petit taxi fare from airport' },
      { name: 'Check weather forecast for your dates', note: 'Pack layers -- temperatures vary widely between coast, desert, and mountains' },
      { name: 'Confirm all reservations (flights, hotels, tours)', note: 'Double-check dates and reconfirm with riads directly' },
      { name: 'Share itinerary with family or friend', note: 'Leave a copy of your plans and emergency contacts with someone at home' },
    ],
  },
  {
    id: 'daybefore',
    title: 'Day Before Departure',
    subtitle: 'Final preparations',
    icon: Clock,
    color: 'from-[#4A6741] to-[#5B7D52]',
    items: [
      { name: 'Charge all devices (phone, camera, power bank)', note: 'Ensure power bank is in carry-on, not checked luggage' },
      { name: 'Print flight confirmations and key bookings', note: 'Some riads and tours may ask for printed confirmations' },
      { name: 'Exchange a small amount of home currency', note: 'Get 50-100 USD/EUR worth exchanged at airport on arrival for taxi and tips' },
      { name: 'Pack carry-on essentials separately', note: 'Passport, phone, charger, medications, change of clothes in case luggage is delayed' },
      { name: 'Set out-of-office messages if needed' },
      { name: 'Check airline luggage allowance', note: 'Budget airlines to Morocco often have strict weight limits' },
      { name: 'Remove non-essential items from wallet', note: 'Leave unnecessary cards at home. Bring 2 payment methods minimum' },
    ],
  },
  {
    id: 'arrival',
    title: 'On Arrival',
    subtitle: 'First steps in Morocco',
    icon: MapPin,
    color: 'from-[#C4960C] to-[#DAA520]',
    items: [
      { name: 'Fill out arrival card (if required)', note: 'Immigration form is usually distributed on the plane' },
      { name: 'Buy a Moroccan SIM card at the airport', note: 'Maroc Telecom has best coverage. Get a data package (5-10 GB)' },
      { name: 'Withdraw MAD from an ATM', note: 'Airport ATMs offer fair rates. Withdraw enough for 2-3 days (from 1,000 MAD)' },
      { name: 'Arrange transport to accommodation', note: 'Use official airport taxi stand with fixed prices, or pre-arranged riad transfer' },
      { name: 'Connect to data and test offline maps' },
      { name: 'Contact accommodation to confirm arrival', note: 'Riads in medinas can be hard to find -- ask for a meeting point or guide' },
      { name: 'Save emergency numbers in phone', note: 'Police: 19, Ambulance: 15, Fire: 15, Tourist Police: 0524-384601 (Marrakech)' },
    ],
  },
]

/* ================================================================== */
/*  localStorage helpers                                               */
/* ================================================================== */
const STORAGE_KEY = 'morocco-pretrip-checked'

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
export default function PreTripChecklistPage() {
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set())

  useEffect(() => {
    setChecked(loadChecked())
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

  const toggleCollapse = useCallback((phaseId: string) => {
    setCollapsed(prev => {
      const next = new Set(prev)
      if (next.has(phaseId)) next.delete(phaseId)
      else next.add(phaseId)
      return next
    })
  }, [])

  const resetAll = useCallback(() => {
    setChecked(new Set())
    saveChecked(new Set())
  }, [])

  const totalItems = useMemo(
    () => PHASES.reduce((sum, phase) => sum + phase.items.length, 0),
    []
  )

  const checkedCount = useMemo(() => {
    const allNames = new Set(PHASES.flatMap(p => p.items.map(i => i.name)))
    return [...checked].filter(c => allNames.has(c)).length
  }, [checked])

  const progressPct = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0

  const getPhaseProgress = useCallback((phase: ChecklistPhase) => {
    const phaseChecked = phase.items.filter(i => checked.has(i.name)).length
    return { done: phaseChecked, total: phase.items.length }
  }, [checked])

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
            <span className="text-[#FAF8F5]/60">Pre-Trip Checklist</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-14 w-14 rounded-2xl bg-[#C4960C]/10 border border-[#C4960C]/20 flex items-center justify-center">
              <ListChecks className="h-7 w-7 text-[#C4960C]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#FAF8F5] font-[family-name:var(--font-display)]">
                Pre-Trip Checklist
              </h1>
              <p className="text-[#FAF8F5]/50 mt-1">
                Timeline-based preparation guide from 3 months to arrival day
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Progress Overview */}
        <div className="p-6 rounded-2xl bg-white border border-[#1A1814]/5 shadow-lg mb-8">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-lg font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                Trip Preparation Progress
              </h2>
              <p className="text-sm text-[#1A1814]/40">
                {checkedCount} of {totalItems} tasks completed
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-[#C4960C]">{progressPct}%</span>
              <button
                onClick={resetAll}
                className="text-xs text-[#1A1814]/30 hover:text-[#A0522D] transition-colors flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-[#A0522D]/5"
              >
                <RotateCcw className="h-3 w-3" />
                Reset
              </button>
            </div>
          </div>

          {/* Main progress bar */}
          <div className="h-4 bg-[#FAF8F5] rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-[#C4960C] to-[#A0522D] rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          {/* Phase mini-progress indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {PHASES.map((phase) => {
              const { done, total } = getPhaseProgress(phase)
              const phasePct = total > 0 ? Math.round((done / total) * 100) : 0
              const isComplete = done === total
              return (
                <button
                  key={phase.id}
                  onClick={() => {
                    const el = document.getElementById(`phase-${phase.id}`)
                    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className={cn(
                    'p-2.5 rounded-xl border text-center transition-all',
                    isComplete
                      ? 'border-[#4A6741]/20 bg-[#4A6741]/5'
                      : 'border-[#1A1814]/5 hover:border-[#C4960C]/20'
                  )}
                >
                  <div className="text-[10px] text-[#1A1814]/40 font-semibold uppercase tracking-wider mb-1 truncate">
                    {phase.title.replace(' Before', '').replace('On ', '')}
                  </div>
                  <div className={cn(
                    'text-sm font-bold',
                    isComplete ? 'text-[#4A6741]' : phasePct > 0 ? 'text-[#C4960C]' : 'text-[#1A1814]/20'
                  )}>
                    {done}/{total}
                  </div>
                  <div className="h-1 bg-[#FAF8F5] rounded-full mt-1.5 overflow-hidden">
                    <div
                      className={cn(
                        'h-full rounded-full transition-all duration-500',
                        isComplete ? 'bg-[#4A6741]' : 'bg-[#C4960C]'
                      )}
                      style={{ width: `${phasePct}%` }}
                    />
                  </div>
                </button>
              )
            })}
          </div>

          {progressPct === 100 && (
            <div className="mt-4 p-3 rounded-xl bg-[#4A6741]/5 border border-[#4A6741]/10 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#4A6741]" />
              <span className="text-sm font-semibold text-[#4A6741]">
                All tasks complete! You are fully prepared for Morocco.
              </span>
            </div>
          )}
        </div>

        {/* Timeline Phases */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-[#1A1814]/10 hidden sm:block" />

          <div className="space-y-6">
            {PHASES.map((phase, phaseIdx) => {
              const Icon = phase.icon
              const isCollapsed = collapsed.has(phase.id)
              const { done, total } = getPhaseProgress(phase)
              const isComplete = done === total

              return (
                <div key={phase.id} id={`phase-${phase.id}`} className="relative">
                  {/* Timeline dot */}
                  <div className={cn(
                    'absolute left-[15px] top-[22px] h-[18px] w-[18px] rounded-full border-2 z-10 hidden sm:flex items-center justify-center',
                    isComplete
                      ? 'bg-[#4A6741] border-[#4A6741]'
                      : done > 0
                        ? 'bg-[#C4960C] border-[#C4960C]'
                        : 'bg-white border-[#1A1814]/15'
                  )}>
                    {isComplete && <Check className="h-2.5 w-2.5 text-white" />}
                  </div>

                  <div className="sm:ml-14 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm overflow-hidden">
                    <button
                      onClick={() => toggleCollapse(phase.id)}
                      className="w-full flex items-center justify-between p-5 hover:bg-[#FAF8F5]/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          'h-10 w-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white',
                          phase.color
                        )}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                          <div className="text-base font-bold text-[#1A1814] font-[family-name:var(--font-heading)]">
                            {phase.title}
                          </div>
                          <div className="text-xs text-[#1A1814]/40">{phase.subtitle}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={cn(
                          'text-xs font-bold px-2.5 py-1 rounded-full',
                          isComplete
                            ? 'bg-[#4A6741]/10 text-[#4A6741]'
                            : done > 0
                              ? 'bg-[#C4960C]/10 text-[#C4960C]'
                              : 'bg-[#FAF8F5] text-[#1A1814]/30'
                        )}>
                          {done}/{total}
                        </span>
                        {isCollapsed ? (
                          <ChevronDown className="h-4 w-4 text-[#1A1814]/30" />
                        ) : (
                          <ChevronUp className="h-4 w-4 text-[#1A1814]/30" />
                        )}
                      </div>
                    </button>

                    {!isCollapsed && (
                      <div className="px-5 pb-5 space-y-1">
                        {phase.items.map((item) => {
                          const isChecked = checked.has(item.name)
                          return (
                            <label
                              key={item.name}
                              className={cn(
                                'flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors',
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
                </div>
              )
            })}
          </div>
        </div>

        {/* Cross-links */}
        <div className="mt-10 p-6 md:p-8 rounded-2xl bg-[#1A1814] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="relative">
            <h2 className="text-lg font-bold text-[#FAF8F5] mb-5 flex items-center gap-2 font-[family-name:var(--font-display)]">
              <Sparkles className="h-5 w-5 text-[#C4960C]" />
              Related Planning Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: 'Budget Calculator', href: '/tools/budget', desc: 'Estimate your trip costs' },
                { title: 'Packing Checklist', href: '/tools/packing', desc: 'Personalized packing list' },
                { title: 'Currency Converter', href: '/tools/currency', desc: 'MAD exchange rates' },
                { title: 'Darija Phrasebook', href: '/tools/phrases', desc: 'Essential Moroccan phrases' },
                { title: 'Distances & Times', href: '/tools/distances', desc: 'City-to-city routes' },
                { title: 'Distance Calculator', href: '/tools/distance', desc: 'Interactive route planner' },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="p-3 rounded-xl bg-[#FAF8F5]/5 border border-[#FAF8F5]/10 hover:border-[#C4960C]/30 hover:bg-[#C4960C]/5 transition-all"
                >
                  <div className="text-sm font-semibold text-[#FAF8F5]/80">{tool.title}</div>
                  <div className="text-xs text-[#FAF8F5]/30">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Saved notice */}
        <div className="mt-6 p-4 rounded-xl bg-[#C4960C]/5 border border-[#C4960C]/10 flex items-start gap-3">
          <Download className="h-5 w-5 text-[#C4960C] shrink-0 mt-0.5" />
          <div>
            <div className="text-sm font-semibold text-[#1A1814]/70">Your progress is saved</div>
            <p className="text-xs text-[#1A1814]/40 leading-relaxed">
              Checked items are stored in your browser. Return anytime to continue tracking your trip preparation.
              Bookmark this page for easy access.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
