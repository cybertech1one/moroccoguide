'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Bed,
  UtensilsCrossed,
  Bus,
  Ticket,
  Lightbulb,
  Calculator,
  CalendarDays,
  Info,
  Gem,
  Wallet,
  Star,
  Coffee,
  Car,
  Home,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  TrendingDown,
  Tent,
  Crown,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */
type TripStyle = 'budget' | 'midrange' | 'luxury'

interface DailyCosts {
  accommodation: { min: number; max: number }
  food: { min: number; max: number }
  transport: { min: number; max: number }
  activities: { min: number; max: number }
}

/* ================================================================== */
/*  Cost Data                                                          */
/* ================================================================== */
const DAILY_COSTS: Record<TripStyle, DailyCosts> = {
  budget: {
    accommodation: { min: 200, max: 400 },
    food: { min: 100, max: 200 },
    transport: { min: 50, max: 100 },
    activities: { min: 100, max: 200 },
  },
  midrange: {
    accommodation: { min: 800, max: 1500 },
    food: { min: 300, max: 500 },
    transport: { min: 200, max: 400 },
    activities: { min: 300, max: 500 },
  },
  luxury: {
    accommodation: { min: 2000, max: 5000 },
    food: { min: 500, max: 1000 },
    transport: { min: 500, max: 1000 },
    activities: { min: 500, max: 1500 },
  },
}

const STYLE_OPTIONS: { id: TripStyle; label: string; icon: React.ElementType; description: string; color: string }[] = [
  { id: 'budget', label: 'Budget', icon: Tent, description: 'Hostels, street food, public transport', color: 'from-[#4A6741] to-[#5B7D52]' },
  { id: 'midrange', label: 'Mid-Range', icon: Star, description: 'Riads, local restaurants, mixed transport', color: 'from-[#C4960C] to-[#A0522D]' },
  { id: 'luxury', label: 'Luxury', icon: Crown, description: '5-star hotels, fine dining, private drivers', color: 'from-[#A0522D] to-[#8B4513]' },
]

const DURATION_OPTIONS = [3, 5, 7, 10, 14]

const COST_CATEGORIES: { key: keyof DailyCosts; label: string; icon: React.ElementType }[] = [
  { key: 'accommodation', label: 'Accommodation', icon: Bed },
  { key: 'food', label: 'Food & Drinks', icon: UtensilsCrossed },
  { key: 'transport', label: 'Transport', icon: Bus },
  { key: 'activities', label: 'Activities', icon: Ticket },
]

/* ================================================================== */
/*  Money-Saving Tips                                                  */
/* ================================================================== */
const SAVING_TIPS = [
  {
    title: 'Eat where locals eat',
    text: 'Look for restaurants full of Moroccans. The food is better, more authentic, and costs 50-70% less than tourist spots.',
  },
  {
    title: 'Use CTM or Supratours buses',
    text: 'Inter-city buses are comfortable with AC and cost a fraction of private taxis. Book online for guaranteed seats.',
  },
  {
    title: 'Negotiate in souks',
    text: 'Start at 40-50% of the asking price and work your way up. Walk away if the price is too high -- vendors often call you back.',
  },
  {
    title: 'Stay in medina riads',
    text: 'Traditional riads in the old city are often cheaper than international hotels and offer an authentic Moroccan experience with breakfast included.',
  },
  {
    title: 'Book desert tours locally',
    text: 'Book Sahara tours from Merzouga directly rather than from Marrakech. You can save 30-50% and support local operators.',
  },
  {
    title: 'Use petit taxis with meters',
    text: 'Always insist on the meter (compteur) in city taxis. Between cities, share grand taxis with other passengers to split costs.',
  },
  {
    title: 'Visit on Fridays',
    text: 'Some museums and monuments offer free or discounted entry on Fridays. Check opening hours as some sites close for midday prayer.',
  },
  {
    title: 'Bring a reusable bottle',
    text: 'Many riads offer free filtered water refills. You will save from 5 MAD per bottle and reduce plastic waste.',
  },
  {
    title: 'Download offline maps',
    text: 'Download Google Maps or Maps.me offline before arriving. Navigate for free and save on data costs, especially in remote areas.',
  },
  {
    title: 'Travel in shoulder season',
    text: 'Visit in March-May or September-November for lower prices, fewer crowds, and comfortable weather. Peak season (December-February, Easter) is 20-40% more expensive.',
  },
]

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */
export default function BudgetCalculatorPage() {
  const [style, setStyle] = useState<TripStyle>('midrange')
  const [days, setDays] = useState(7)
  const [showTips, setShowTips] = useState(false)

  const costs = DAILY_COSTS[style]

  const dailyMin = useMemo(() => {
    return Object.values(costs).reduce((sum, c) => sum + c.min, 0)
  }, [costs])

  const dailyMax = useMemo(() => {
    return Object.values(costs).reduce((sum, c) => sum + c.max, 0)
  }, [costs])

  const totalMin = dailyMin * days
  const totalMax = dailyMax * days

  const formatMAD = (n: number) => n.toLocaleString('en-US')

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
            <span className="text-[#FAF8F5]/60">Budget Calculator</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-14 w-14 rounded-2xl bg-[#C4960C]/10 border border-[#C4960C]/20 flex items-center justify-center">
              <Calculator className="h-7 w-7 text-[#C4960C]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#FAF8F5] font-[family-name:var(--font-display)]">
                Trip Budget Calculator
              </h1>
              <p className="text-[#FAF8F5]/50 mt-1">
                Estimate your Morocco trip costs by travel style and duration
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Trip Style Selector */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-[#1A1814]/40 uppercase tracking-wider mb-3">
            Select your travel style
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {STYLE_OPTIONS.map((opt) => {
              const Icon = opt.icon
              const isActive = style === opt.id
              return (
                <button
                  key={opt.id}
                  onClick={() => setStyle(opt.id)}
                  className={cn(
                    'p-5 rounded-2xl border-2 text-left transition-all',
                    isActive
                      ? 'border-[#C4960C] bg-[#C4960C]/5 shadow-md'
                      : 'border-[#1A1814]/5 bg-white hover:border-[#C4960C]/30'
                  )}
                >
                  <div className={cn(
                    'inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white mb-3',
                    opt.color
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-base font-bold text-[#1A1814] font-[family-name:var(--font-heading)]">{opt.label}</div>
                  <div className="text-xs text-[#1A1814]/50 mt-1">{opt.description}</div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Duration Selector */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-[#1A1814]/40 uppercase tracking-wider mb-3">
            Trip duration
          </h2>
          <div className="flex flex-wrap gap-3">
            {DURATION_OPTIONS.map((d) => (
              <button
                key={d}
                onClick={() => setDays(d)}
                className={cn(
                  'px-5 py-3 rounded-xl border-2 text-sm font-bold transition-all',
                  days === d
                    ? 'border-[#C4960C] bg-[#C4960C] text-white'
                    : 'border-[#1A1814]/5 bg-white text-[#1A1814]/60 hover:border-[#C4960C]/30'
                )}
              >
                {d} days
              </button>
            ))}
          </div>
        </div>

        {/* Daily Breakdown */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#1A1814]/5 shadow-lg mb-8">
          <h2 className="text-lg font-bold text-[#1A1814] mb-6 flex items-center gap-2 font-[family-name:var(--font-display)]">
            <Wallet className="h-5 w-5 text-[#C4960C]" />
            Estimated Daily Costs ({style === 'budget' ? 'Budget' : style === 'midrange' ? 'Mid-Range' : 'Luxury'})
          </h2>
          <div className="space-y-4">
            {COST_CATEGORIES.map((cat) => {
              const cost = costs[cat.key]
              const Icon = cat.icon
              const pctOfTotal = ((cost.min + cost.max) / 2) / ((dailyMin + dailyMax) / 2) * 100
              return (
                <div key={cat.key}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-[#C4960C]" />
                      <span className="text-sm font-semibold text-[#1A1814]">{cat.label}</span>
                    </div>
                    <span className="text-sm font-bold text-[#1A1814]">
                      {formatMAD(cost.min)} - {formatMAD(cost.max)} MAD
                    </span>
                  </div>
                  <div className="h-2.5 bg-[#FAF8F5] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#C4960C] to-[#A0522D] rounded-full transition-all duration-500"
                      style={{ width: `${pctOfTotal}%` }}
                    />
                  </div>
                  <div className="text-right text-xs text-[#1A1814]/30 mt-1">{Math.round(pctOfTotal)}% of daily budget</div>
                </div>
              )
            })}
          </div>

                <p className="text-xs text-[var(--text-muted)] mt-4 italic">Prices may vary by season and operator. All prices are approximate.</p>
          <div className="mt-6 pt-6 border-t border-[#1A1814]/5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#1A1814]/60">Daily total</span>
              <span className="text-lg font-bold text-[#C4960C]">
                {formatMAD(dailyMin)} - {formatMAD(dailyMax)} MAD
              </span>
            </div>
          </div>
        </div>

        {/* Total Trip Estimate */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#1A1814] relative overflow-hidden mb-8">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="relative text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CalendarDays className="h-5 w-5 text-[#C4960C]" />
              <span className="text-sm font-semibold text-[#FAF8F5]/40 uppercase tracking-wider">
                {days}-Day Trip Estimate
              </span>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-[#C4960C] font-[family-name:var(--font-display)] mb-2">
              {formatMAD(totalMin)} - {formatMAD(totalMax)} MAD
            </div>
            <div className="text-sm text-[#FAF8F5]/30">
              Approximately ${formatMAD(Math.round(totalMin * 0.10))} - ${formatMAD(Math.round(totalMax * 0.10))} USD
            </div>
            <p className="text-xs text-[#FAF8F5]/20 mt-3">
              Per person estimate. Does not include international flights, travel insurance, or shopping.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm mb-8">
          <h2 className="text-lg font-bold text-[#1A1814] mb-5 flex items-center gap-2 font-[family-name:var(--font-display)]">
            <Info className="h-5 w-5 text-[#C4960C]" />
            Style Comparison ({days} days)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1A1814]/5">
                  <th className="text-left py-3 text-[#1A1814]/40 font-semibold text-xs uppercase tracking-wider">Category</th>
                  <th className="text-right py-3 text-[#1A1814]/40 font-semibold text-xs uppercase tracking-wider">Budget</th>
                  <th className="text-right py-3 text-[#1A1814]/40 font-semibold text-xs uppercase tracking-wider">Mid-Range</th>
                  <th className="text-right py-3 text-[#1A1814]/40 font-semibold text-xs uppercase tracking-wider">Luxury</th>
                </tr>
              </thead>
              <tbody>
                {COST_CATEGORIES.map((cat) => (
                  <tr key={cat.key} className="border-b border-[#1A1814]/5 last:border-0">
                    <td className="py-3 font-medium text-[#1A1814]">{cat.label}</td>
                    <td className={cn('text-right py-3 font-semibold', style === 'budget' ? 'text-[#C4960C]' : 'text-[#1A1814]/40')}>
                      {formatMAD(DAILY_COSTS.budget[cat.key].min * days)}-{formatMAD(DAILY_COSTS.budget[cat.key].max * days)}
                    </td>
                    <td className={cn('text-right py-3 font-semibold', style === 'midrange' ? 'text-[#C4960C]' : 'text-[#1A1814]/40')}>
                      {formatMAD(DAILY_COSTS.midrange[cat.key].min * days)}-{formatMAD(DAILY_COSTS.midrange[cat.key].max * days)}
                    </td>
                    <td className={cn('text-right py-3 font-semibold', style === 'luxury' ? 'text-[#C4960C]' : 'text-[#1A1814]/40')}>
                      {formatMAD(DAILY_COSTS.luxury[cat.key].min * days)}-{formatMAD(DAILY_COSTS.luxury[cat.key].max * days)}
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-[#1A1814]/10">
                  <td className="py-3 font-bold text-[#1A1814]">Total</td>
                  <td className={cn('text-right py-3 font-bold', style === 'budget' ? 'text-[#C4960C]' : 'text-[#1A1814]/40')}>
                    {formatMAD(Object.values(DAILY_COSTS.budget).reduce((s, c) => s + c.min, 0) * days)}-{formatMAD(Object.values(DAILY_COSTS.budget).reduce((s, c) => s + c.max, 0) * days)} MAD
                  </td>
                  <td className={cn('text-right py-3 font-bold', style === 'midrange' ? 'text-[#C4960C]' : 'text-[#1A1814]/40')}>
                    {formatMAD(Object.values(DAILY_COSTS.midrange).reduce((s, c) => s + c.min, 0) * days)}-{formatMAD(Object.values(DAILY_COSTS.midrange).reduce((s, c) => s + c.max, 0) * days)} MAD
                  </td>
                  <td className={cn('text-right py-3 font-bold', style === 'luxury' ? 'text-[#C4960C]' : 'text-[#1A1814]/40')}>
                    {formatMAD(Object.values(DAILY_COSTS.luxury).reduce((s, c) => s + c.min, 0) * days)}-{formatMAD(Object.values(DAILY_COSTS.luxury).reduce((s, c) => s + c.max, 0) * days)} MAD
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Money-Saving Tips */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#C4960C]/10">
          <button
            onClick={() => setShowTips(!showTips)}
            className="w-full flex items-center justify-between"
          >
            <h2 className="text-lg font-bold text-[#1A1814] flex items-center gap-2 font-[family-name:var(--font-display)]">
              <TrendingDown className="h-5 w-5 text-[#C4960C]" />
              Money-Saving Tips for Morocco
            </h2>
            {showTips ? (
              <ChevronUp className="h-5 w-5 text-[#1A1814]/30" />
            ) : (
              <ChevronDown className="h-5 w-5 text-[#1A1814]/30" />
            )}
          </button>
          {showTips && (
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SAVING_TIPS.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#C4960C]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[#C4960C]">{idx + 1}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1A1814] mb-0.5">{tip.title}</div>
                    <p className="text-xs text-[#1A1814]/50 leading-relaxed">{tip.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
