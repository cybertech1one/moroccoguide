'use client'

import { useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Bed,
  UtensilsCrossed,
  Bus,
  Ticket,
  ShoppingBag,
  Lightbulb,
  Printer,
  Calculator,
  Users,
  CalendarDays,
  TrendingUp,
  Info,
  Gem,
  Wallet,
  Star,
  Coffee,
  Car,
  Train,
  Compass,
  Landmark,
  Tent,
  ChefHat,
  CircleDollarSign,
  Download,
} from 'lucide-react'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  Exchange Rates                                                     */
/* ------------------------------------------------------------------ */
const MAD_TO_USD = 0.10
const MAD_TO_EUR = 0.092
const MAD_TO_GBP = 0.079

/* ------------------------------------------------------------------ */
/*  Accommodation Presets                                               */
/* ------------------------------------------------------------------ */
const ACCOMMODATION_PRESETS = [
  {
    label: 'Budget',
    sublabel: 'Hostel / Basic Guesthouse',
    price: 150,
    icon: Tent,
    examples: ['Hostel dorm: 80-120 MAD', 'Basic room: 150-250 MAD'],
  },
  {
    label: 'Mid-Range',
    sublabel: 'Riad / 3-Star Hotel',
    price: 550,
    icon: Bed,
    examples: ['Traditional riad: 400-700 MAD', '3-star hotel: 500-800 MAD'],
  },
  {
    label: 'Luxury',
    sublabel: '5-Star / Boutique',
    price: 1500,
    icon: Gem,
    examples: ['Luxury riad: 1200-2500 MAD', '5-star resort: 2000-5000 MAD'],
  },
]

/* ------------------------------------------------------------------ */
/*  Food Presets                                                        */
/* ------------------------------------------------------------------ */
const FOOD_PRESETS = [
  {
    label: 'Street Food',
    sublabel: 'Markets & stalls',
    price: 40,
    icon: Coffee,
    examples: ['Sandwich: 15-25 MAD', 'Tajine stall: 25-40 MAD', 'Juice: 5-10 MAD'],
  },
  {
    label: 'Casual',
    sublabel: 'Local restaurants',
    price: 120,
    icon: UtensilsCrossed,
    examples: ['Set menu: 60-90 MAD', 'Pizza/pasta: 50-80 MAD', 'Tajine: 40-70 MAD'],
  },
  {
    label: 'Fine Dining',
    sublabel: 'Upscale restaurants',
    price: 350,
    icon: ChefHat,
    examples: ['3-course meal: 250-500 MAD', 'Rooftop dinner: 200-400 MAD'],
  },
]

/* ------------------------------------------------------------------ */
/*  Transport Presets                                                   */
/* ------------------------------------------------------------------ */
const TRANSPORT_PRESETS = [
  { label: 'Public Bus', sublabel: '~5 MAD/ride', dailyCost: 30, icon: Bus },
  { label: 'Taxi/Ride', sublabel: '~20 MAD/ride', dailyCost: 100, icon: Car },
  { label: 'Car Rental', sublabel: '~400 MAD/day', dailyCost: 400, icon: Compass },
  { label: 'Train', sublabel: 'Intercity rail', dailyCost: 150, icon: Train },
]

/* ------------------------------------------------------------------ */
/*  Activity Presets                                                    */
/* ------------------------------------------------------------------ */
const ACTIVITY_PRESETS = [
  { name: 'Museum / Monument Entry', cost: 70, icon: Landmark },
  { name: 'Traditional Hammam', cost: 200, icon: Star },
  { name: 'Cooking Class', cost: 500, icon: ChefHat },
  { name: 'Desert Overnight (per person)', cost: 800, icon: Tent },
  { name: 'Guided City Tour (half day)', cost: 300, icon: Compass },
  { name: 'Surf Lesson (2 hours)', cost: 350, icon: Star },
  { name: 'Hot Air Balloon (Marrakech)', cost: 1800, icon: Compass },
  { name: 'Atlas Mountains Day Trek', cost: 400, icon: TrendingUp },
]

/* ------------------------------------------------------------------ */
/*  Shopping Reference                                                  */
/* ------------------------------------------------------------------ */
const SHOPPING_ITEMS = [
  { name: 'Leather bag', range: '200 - 800 MAD' },
  { name: 'Argan oil (1L)', range: '150 - 300 MAD' },
  { name: 'Berber rug', range: '1,000 - 5,000 MAD' },
  { name: 'Spices (mixed bag)', range: '20 - 100 MAD' },
  { name: 'Ceramic plate', range: '50 - 200 MAD' },
  { name: 'Babouche slippers', range: '80 - 200 MAD' },
  { name: 'Silver jewelry', range: '100 - 500 MAD' },
  { name: 'Lantern / lamp', range: '150 - 600 MAD' },
]

const PIE_COLORS = ['#C4960C', '#A0522D', '#1A1814', '#4A6741', '#8B7355', '#DAA520']

/* ------------------------------------------------------------------ */
/*  Budget Tips                                                        */
/* ------------------------------------------------------------------ */
const BUDGET_TIPS = [
  'Eat where locals eat. Look for restaurants full of Moroccans -- the food is better and cheaper.',
  'Travel by CTM or Supratours buses between cities. They are comfortable and cost a fraction of private taxis.',
  'Negotiate in souks. Start at 40-50% of the asking price and work your way up.',
  'Stay in riads in the medina for an authentic experience, often cheaper than international hotels.',
  'Drink mint tea freely -- it is often complimentary and refusing may seem impolite.',
  'Use petit taxis within cities (metered) and grand taxis between cities (shared rides).',
  'Visit museums on Fridays when some offer free or discounted entry.',
  'Book desert tours from Merzouga directly rather than from Marrakech to save 30-50%.',
  'Bring a reusable water bottle. Many riads offer free filtered water refills.',
  'Download offline maps before arriving. This saves data costs and works in remote areas.',
]

/* ------------------------------------------------------------------ */
/*  Daily Budget Comparison (for a couple)                              */
/* ------------------------------------------------------------------ */
const DAILY_COMPARISON = [
  { name: 'Budget', daily: 600, style: 'Hostels, street food, buses' },
  { name: 'Mid-Range', daily: 1500, style: 'Riads, restaurants, mixed transport' },
  { name: 'Luxury', daily: 4000, style: 'Premium hotels, fine dining, private drivers' },
]

/* ================================================================== */
/*  COMPONENT                                                          */
/* ================================================================== */
export default function BudgetCalculatorPage() {
  const [days, setDays] = useState(7)
  const [groupSize, setGroupSize] = useState(2)
  const [accommodationPerNight, setAccommodationPerNight] = useState(550)
  const [mealsPerDay, setMealsPerDay] = useState(3)
  const [mealCost, setMealCost] = useState(120)
  const [transportDaily, setTransportDaily] = useState(100)
  const [selectedActivities, setSelectedActivities] = useState<Set<number>>(new Set([0, 1, 4]))
  const [shoppingBudget, setShoppingBudget] = useState(500)
  const [tipPercent, setTipPercent] = useState(12)
  const [currency, setCurrency] = useState<'MAD' | 'USD' | 'EUR' | 'GBP'>('MAD')

  const convertFromMAD = useCallback(
    (mad: number) => {
      if (currency === 'USD') return Math.round(mad * MAD_TO_USD)
      if (currency === 'EUR') return Math.round(mad * MAD_TO_EUR)
      if (currency === 'GBP') return Math.round(mad * MAD_TO_GBP)
      return mad
    },
    [currency]
  )

  const currencySymbol = currency === 'USD' ? '$' : currency === 'EUR' ? '\u20AC' : currency === 'GBP' ? '\u00A3' : ''
  const currencyLabel = currency === 'MAD' ? 'MAD' : currency

  const activitiesCost = useMemo(() => {
    let total = 0
    selectedActivities.forEach((idx) => {
      total += ACTIVITY_PRESETS[idx].cost
    })
    return total * groupSize
  }, [selectedActivities, groupSize])

  const toggleActivity = useCallback((idx: number) => {
    setSelectedActivities((prev) => {
      const next = new Set(prev)
      if (next.has(idx)) {
        next.delete(idx)
      } else {
        next.add(idx)
      }
      return next
    })
  }, [])

  const breakdown = useMemo(() => {
    const accommodation = accommodationPerNight * days
    const food = mealCost * mealsPerDay * days * groupSize
    const transport = transportDaily * days
    const activities = activitiesCost
    const shopping = shoppingBudget
    const subtotal = accommodation + food + transport + activities + shopping
    const misc = Math.round(subtotal * (tipPercent / 100))
    const total = subtotal + misc

    return {
      accommodation,
      food,
      transport,
      activities,
      shopping,
      misc,
      total,
      dailyAvg: Math.round(total / days),
      perPerson: Math.round(total / groupSize),
      perPersonPerDay: Math.round(total / groupSize / days),
    }
  }, [
    days, groupSize, accommodationPerNight, mealsPerDay, mealCost,
    transportDaily, activitiesCost, shoppingBudget, tipPercent,
  ])

  const pieData = useMemo(
    () =>
      [
        { name: 'Accommodation', value: breakdown.accommodation },
        { name: 'Food', value: breakdown.food },
        { name: 'Transport', value: breakdown.transport },
        { name: 'Activities', value: breakdown.activities },
        { name: 'Shopping', value: breakdown.shopping },
        { name: 'Tips & Misc', value: breakdown.misc },
      ].filter((d) => d.value > 0),
    [breakdown]
  )

  const comparisonData = useMemo(
    () =>
      DAILY_COMPARISON.map((d) => ({
        name: d.name,
        amount: d.daily * days,
      })).concat([{ name: 'Your Trip', amount: breakdown.total }]),
    [breakdown.total, days]
  )

  const handlePrint = useCallback(() => window.print(), [])

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <section className="relative bg-[#1A1814] py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            href="/tools"
            className="inline-flex items-center text-[#FAF8F5]/40 hover:text-[#C4960C] mb-6 text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1.5" />
            All Tools
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-14 w-14 rounded-2xl bg-[#C4960C]/10 border border-[#C4960C]/20 flex items-center justify-center">
              <Calculator className="h-7 w-7 text-[#C4960C]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#FAF8F5] font-serif">
                Budget Calculator
              </h1>
              <p className="text-[#FAF8F5]/50 mt-1">
                Estimate your Morocco trip costs with pre-filled local prices
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ============================================================ */}
          {/*  LEFT: Inputs                                                 */}
          {/* ============================================================ */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trip Basics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 md:p-8 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm"
            >
              <h2 className="text-lg font-bold text-[#1A1814] mb-5 flex items-center gap-2 font-serif">
                <CalendarDays className="h-5 w-5 text-[#C4960C]" />
                Trip Basics
              </h2>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1A1814]/60 mb-2">
                    Duration (days)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={90}
                    value={days}
                    onChange={(e) => setDays(Math.max(1, Number(e.target.value)))}
                    className="w-full rounded-xl border border-[#1A1814]/10 bg-white px-4 py-3 text-[#1A1814] focus:border-[#C4960C] focus:ring-2 focus:ring-[#C4960C]/20 outline-none transition-all"
                  />
                  <div className="flex gap-2 mt-2">
                    {[3, 5, 7, 10, 14].map((d) => (
                      <button
                        key={d}
                        onClick={() => setDays(d)}
                        className={cn(
                          'px-2.5 py-1 rounded-lg text-xs font-medium transition-all',
                          days === d
                            ? 'bg-[#C4960C] text-white'
                            : 'bg-[#FAF8F5] text-[#1A1814]/50 hover:bg-[#C4960C]/10 hover:text-[#C4960C]'
                        )}
                      >
                        {d}d
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1814]/60 mb-2">
                    <Users className="inline h-4 w-4 mr-1" />
                    Travelers
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={groupSize}
                    onChange={(e) => setGroupSize(Math.max(1, Number(e.target.value)))}
                    className="w-full rounded-xl border border-[#1A1814]/10 bg-white px-4 py-3 text-[#1A1814] focus:border-[#C4960C] focus:ring-2 focus:ring-[#C4960C]/20 outline-none transition-all"
                  />
                  <div className="flex gap-2 mt-2">
                    {[1, 2, 3, 4].map((g) => (
                      <button
                        key={g}
                        onClick={() => setGroupSize(g)}
                        className={cn(
                          'px-2.5 py-1 rounded-lg text-xs font-medium transition-all',
                          groupSize === g
                            ? 'bg-[#C4960C] text-white'
                            : 'bg-[#FAF8F5] text-[#1A1814]/50 hover:bg-[#C4960C]/10 hover:text-[#C4960C]'
                        )}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Accommodation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="p-6 md:p-8 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm"
            >
              <h2 className="text-lg font-bold text-[#1A1814] mb-2 flex items-center gap-2 font-serif">
                <Bed className="h-5 w-5 text-[#C4960C]" />
                Accommodation
              </h2>
              <p className="text-xs text-[#1A1814]/40 mb-5">Per night, for the entire group</p>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {ACCOMMODATION_PRESETS.map((p) => {
                  const Icon = p.icon
                  return (
                    <button
                      key={p.label}
                      onClick={() => setAccommodationPerNight(p.price)}
                      className={cn(
                        'p-4 rounded-xl border text-left transition-all group',
                        accommodationPerNight === p.price
                          ? 'border-[#C4960C] bg-[#C4960C]/5 shadow-md'
                          : 'border-[#1A1814]/5 hover:border-[#C4960C]/30 hover:bg-[#FAF8F5]'
                      )}
                    >
                      <Icon className={cn(
                        'h-5 w-5 mb-2',
                        accommodationPerNight === p.price ? 'text-[#C4960C]' : 'text-[#1A1814]/30'
                      )} />
                      <div className="text-sm font-bold text-[#1A1814]">{p.label}</div>
                      <div className="text-xs text-[#1A1814]/40 mb-2">{p.sublabel}</div>
                      <div className="text-xs font-semibold text-[#C4960C]">{p.price} MAD/night</div>
                      <div className="mt-2 space-y-0.5">
                        {p.examples.map((ex) => (
                          <div key={ex} className="text-[10px] text-[#1A1814]/30">{ex}</div>
                        ))}
                      </div>
                    </button>
                  )
                })}
              </div>
              <div>
                <label className="block text-xs font-medium text-[#1A1814]/40 mb-1">Custom amount (MAD/night)</label>
                <input
                  type="number"
                  min={0}
                  value={accommodationPerNight}
                  onChange={(e) => setAccommodationPerNight(Number(e.target.value))}
                  className="w-full rounded-xl border border-[#1A1814]/10 bg-white px-4 py-2.5 text-[#1A1814] text-sm focus:border-[#C4960C] outline-none transition-all"
                />
              </div>
            </motion.div>

            {/* Food */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm"
            >
              <h2 className="text-lg font-bold text-[#1A1814] mb-2 flex items-center gap-2 font-serif">
                <UtensilsCrossed className="h-5 w-5 text-[#C4960C]" />
                Food & Drink
              </h2>
              <p className="text-xs text-[#1A1814]/40 mb-5">Average cost per meal, per person</p>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {FOOD_PRESETS.map((p) => {
                  const Icon = p.icon
                  return (
                    <button
                      key={p.label}
                      onClick={() => setMealCost(p.price)}
                      className={cn(
                        'p-4 rounded-xl border text-left transition-all',
                        mealCost === p.price
                          ? 'border-[#C4960C] bg-[#C4960C]/5 shadow-md'
                          : 'border-[#1A1814]/5 hover:border-[#C4960C]/30 hover:bg-[#FAF8F5]'
                      )}
                    >
                      <Icon className={cn(
                        'h-5 w-5 mb-2',
                        mealCost === p.price ? 'text-[#C4960C]' : 'text-[#1A1814]/30'
                      )} />
                      <div className="text-sm font-bold text-[#1A1814]">{p.label}</div>
                      <div className="text-xs text-[#1A1814]/40 mb-2">{p.sublabel}</div>
                      <div className="text-xs font-semibold text-[#C4960C]">~{p.price} MAD/meal</div>
                      <div className="mt-2 space-y-0.5">
                        {p.examples.map((ex) => (
                          <div key={ex} className="text-[10px] text-[#1A1814]/30">{ex}</div>
                        ))}
                      </div>
                    </button>
                  )
                })}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#1A1814]/40 mb-1">Meals per day</label>
                  <input
                    type="number"
                    min={1}
                    max={5}
                    value={mealsPerDay}
                    onChange={(e) => setMealsPerDay(Number(e.target.value))}
                    className="w-full rounded-xl border border-[#1A1814]/10 bg-white px-4 py-2.5 text-[#1A1814] text-sm focus:border-[#C4960C] outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#1A1814]/40 mb-1">Cost per meal (MAD)</label>
                  <input
                    type="number"
                    min={0}
                    value={mealCost}
                    onChange={(e) => setMealCost(Number(e.target.value))}
                    className="w-full rounded-xl border border-[#1A1814]/10 bg-white px-4 py-2.5 text-[#1A1814] text-sm focus:border-[#C4960C] outline-none transition-all"
                  />
                </div>
              </div>
            </motion.div>

            {/* Transport */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="p-6 md:p-8 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm"
            >
              <h2 className="text-lg font-bold text-[#1A1814] mb-2 flex items-center gap-2 font-serif">
                <Bus className="h-5 w-5 text-[#C4960C]" />
                Transport
              </h2>
              <p className="text-xs text-[#1A1814]/40 mb-5">Average daily transport cost for the group</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {TRANSPORT_PRESETS.map((p) => {
                  const Icon = p.icon
                  return (
                    <button
                      key={p.label}
                      onClick={() => setTransportDaily(p.dailyCost)}
                      className={cn(
                        'p-4 rounded-xl border text-center transition-all',
                        transportDaily === p.dailyCost
                          ? 'border-[#C4960C] bg-[#C4960C]/5 shadow-md'
                          : 'border-[#1A1814]/5 hover:border-[#C4960C]/30 hover:bg-[#FAF8F5]'
                      )}
                    >
                      <Icon className={cn(
                        'h-5 w-5 mx-auto mb-2',
                        transportDaily === p.dailyCost ? 'text-[#C4960C]' : 'text-[#1A1814]/30'
                      )} />
                      <div className="text-xs font-bold text-[#1A1814]">{p.label}</div>
                      <div className="text-[10px] text-[#1A1814]/40">{p.sublabel}</div>
                      <div className="text-xs font-semibold text-[#C4960C] mt-1">{p.dailyCost} MAD/day</div>
                    </button>
                  )
                })}
              </div>
              <div>
                <label className="block text-xs font-medium text-[#1A1814]/40 mb-1">Custom daily transport (MAD)</label>
                <input
                  type="number"
                  min={0}
                  value={transportDaily}
                  onChange={(e) => setTransportDaily(Number(e.target.value))}
                  className="w-full rounded-xl border border-[#1A1814]/10 bg-white px-4 py-2.5 text-[#1A1814] text-sm focus:border-[#C4960C] outline-none transition-all"
                />
              </div>
            </motion.div>

            {/* Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 md:p-8 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm"
            >
              <h2 className="text-lg font-bold text-[#1A1814] mb-2 flex items-center gap-2 font-serif">
                <Ticket className="h-5 w-5 text-[#C4960C]" />
                Activities & Excursions
              </h2>
              <p className="text-xs text-[#1A1814]/40 mb-5">
                Select activities you plan to do (costs shown per person, total calculated for your group of {groupSize})
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ACTIVITY_PRESETS.map((activity, idx) => {
                  const isSelected = selectedActivities.has(idx)
                  const Icon = activity.icon
                  return (
                    <button
                      key={activity.name}
                      onClick={() => toggleActivity(idx)}
                      className={cn(
                        'flex items-center gap-3 p-3 rounded-xl border text-left transition-all',
                        isSelected
                          ? 'border-[#C4960C] bg-[#C4960C]/5'
                          : 'border-[#1A1814]/5 hover:border-[#C4960C]/30'
                      )}
                    >
                      <div className={cn(
                        'h-8 w-8 rounded-lg flex items-center justify-center shrink-0',
                        isSelected ? 'bg-[#C4960C] text-white' : 'bg-[#FAF8F5] text-[#1A1814]/30'
                      )}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-[#1A1814] truncate">{activity.name}</div>
                        <div className="text-xs text-[#C4960C] font-semibold">{activity.cost} MAD/person</div>
                      </div>
                    </button>
                  )
                })}
              </div>
              {selectedActivities.size > 0 && (
                <div className="mt-4 p-3 rounded-xl bg-[#C4960C]/5 border border-[#C4960C]/10">
                  <div className="text-xs text-[#1A1814]/40">
                    {selectedActivities.size} activities selected
                  </div>
                  <div className="text-sm font-bold text-[#C4960C]">
                    Total: {activitiesCost.toLocaleString()} MAD ({groupSize} person{groupSize > 1 ? 's' : ''})
                  </div>
                </div>
              )}
            </motion.div>

            {/* Shopping */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="p-6 md:p-8 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm"
            >
              <h2 className="text-lg font-bold text-[#1A1814] mb-2 flex items-center gap-2 font-serif">
                <ShoppingBag className="h-5 w-5 text-[#C4960C]" />
                Shopping & Souvenirs
              </h2>
              <p className="text-xs text-[#1A1814]/40 mb-4">Total shopping budget for the trip</p>
              <input
                type="number"
                min={0}
                value={shoppingBudget}
                onChange={(e) => setShoppingBudget(Number(e.target.value))}
                className="w-full rounded-xl border border-[#1A1814]/10 bg-white px-4 py-3 text-[#1A1814] focus:border-[#C4960C] outline-none transition-all mb-4"
                placeholder="Total shopping budget (MAD)"
              />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SHOPPING_ITEMS.map((item) => (
                  <div key={item.name} className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#1A1814]/5">
                    <div className="text-xs font-medium text-[#1A1814]">{item.name}</div>
                    <div className="text-[10px] text-[#C4960C] font-semibold">{item.range}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tips & Misc */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 md:p-8 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm"
            >
              <h2 className="text-lg font-bold text-[#1A1814] mb-2 flex items-center gap-2 font-serif">
                <Wallet className="h-5 w-5 text-[#C4960C]" />
                Tips & Miscellaneous
              </h2>
              <p className="text-xs text-[#1A1814]/40 mb-4">
                Percentage buffer for tips, SIM cards, toiletries, and emergencies
              </p>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={5}
                  max={25}
                  value={tipPercent}
                  onChange={(e) => setTipPercent(Number(e.target.value))}
                  className="flex-1 accent-[#C4960C] h-2"
                />
                <span className="w-14 text-center font-bold text-[#C4960C] text-lg">{tipPercent}%</span>
              </div>
              <p className="text-xs text-[#1A1814]/30 mt-2">
                10-15% is typical. Includes tipping guides, restaurant service (10%), and hotel staff (10-20 MAD/day).
              </p>
            </motion.div>
          </div>

          {/* ============================================================ */}
          {/*  RIGHT: Summary (sticky)                                      */}
          {/* ============================================================ */}
          <div className="space-y-6">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Summary Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 md:p-8 rounded-2xl bg-white border border-[#1A1814]/5 shadow-lg"
              >
                <h2 className="text-lg font-bold text-[#1A1814] mb-5 flex items-center gap-2 font-serif">
                  <CircleDollarSign className="h-5 w-5 text-[#C4960C]" />
                  Trip Summary
                </h2>

                {/* Currency toggle */}
                <div className="flex rounded-xl bg-[#FAF8F5] border border-[#1A1814]/5 p-1 mb-5">
                  {(['MAD', 'USD', 'EUR', 'GBP'] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={cn(
                        'flex-1 py-1.5 rounded-lg text-xs font-bold transition-all',
                        currency === c
                          ? 'bg-[#1A1814] text-[#FAF8F5]'
                          : 'text-[#1A1814]/40 hover:text-[#1A1814]'
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>

                {/* Total */}
                <div className="text-center mb-6 p-5 rounded-xl bg-[#1A1814] text-[#FAF8F5]">
                  <div className="text-xs uppercase tracking-wider text-[#FAF8F5]/40 mb-1">
                    Total Estimated Budget
                  </div>
                  <div className="text-3xl font-bold font-serif mt-1">
                    {currencySymbol}{convertFromMAD(breakdown.total).toLocaleString()} {currencyLabel}
                  </div>
                  {currency !== 'MAD' && (
                    <div className="text-xs text-[#FAF8F5]/30 mt-1">
                      {breakdown.total.toLocaleString()} MAD
                    </div>
                  )}
                </div>

                {/* Breakdown */}
                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Accommodation', value: breakdown.accommodation, color: PIE_COLORS[0] },
                    { label: 'Food & Drink', value: breakdown.food, color: PIE_COLORS[1] },
                    { label: 'Transport', value: breakdown.transport, color: PIE_COLORS[2] },
                    { label: 'Activities', value: breakdown.activities, color: PIE_COLORS[3] },
                    { label: 'Shopping', value: breakdown.shopping, color: PIE_COLORS[4] },
                    { label: 'Tips & Misc', value: breakdown.misc, color: PIE_COLORS[5] },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-[#1A1814]/60">{item.label}</span>
                      </div>
                      <span className="text-sm font-semibold text-[#1A1814]">
                        {currencySymbol}{convertFromMAD(item.value).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#1A1814]/5 pt-4 space-y-2.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#1A1814]/40">Daily average</span>
                    <span className="font-semibold text-[#1A1814]">
                      {currencySymbol}{convertFromMAD(breakdown.dailyAvg).toLocaleString()} {currencyLabel}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#1A1814]/40">Per person total</span>
                    <span className="font-semibold text-[#1A1814]">
                      {currencySymbol}{convertFromMAD(breakdown.perPerson).toLocaleString()} {currencyLabel}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#1A1814]/40">Per person / day</span>
                    <span className="font-semibold text-[#C4960C]">
                      {currencySymbol}{convertFromMAD(breakdown.perPersonPerDay).toLocaleString()} {currencyLabel}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 mt-5 no-print">
                  <button
                    onClick={handlePrint}
                    className="flex-1 py-3 rounded-xl bg-[#FAF8F5] border border-[#1A1814]/5 text-sm font-semibold text-[#1A1814]/60 hover:bg-[#1A1814]/5 transition-colors flex items-center justify-center gap-2"
                  >
                    <Printer className="h-4 w-4" />
                    Print
                  </button>
                  <button
                    onClick={handlePrint}
                    className="flex-1 py-3 rounded-xl bg-[#C4960C] text-white text-sm font-semibold hover:bg-[#A0522D] transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Export
                  </button>
                </div>
              </motion.div>

              {/* Pie Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl bg-white border border-[#1A1814]/5"
              >
                <h3 className="text-sm font-bold text-[#1A1814] mb-4 font-serif">Spending Breakdown</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {pieData.map((_, idx) => (
                          <Cell key={idx} fill={PIE_COLORS[idx % PIE_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value: number) => [`${currencySymbol}${convertFromMAD(value).toLocaleString()} ${currencyLabel}`, '']}
                        contentStyle={{
                          borderRadius: '12px',
                          border: '1px solid rgba(26,24,20,0.1)',
                          fontSize: '13px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: '12px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* Comparison */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="p-6 rounded-2xl bg-white border border-[#1A1814]/5"
              >
                <h3 className="text-sm font-bold text-[#1A1814] mb-4 flex items-center gap-2 font-serif">
                  <TrendingUp className="h-4 w-4 text-[#A0522D]" />
                  How Your Trip Compares
                </h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={comparisonData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(26,24,20,0.05)" />
                      <XAxis
                        type="number"
                        tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                        fontSize={11}
                        tick={{ fill: '#1A1814', opacity: 0.4 }}
                      />
                      <YAxis
                        type="category"
                        dataKey="name"
                        fontSize={11}
                        width={80}
                        tick={{ fill: '#1A1814', opacity: 0.6 }}
                      />
                      <Tooltip
                        formatter={(value: number) => [`${value.toLocaleString()} MAD`, '']}
                        contentStyle={{
                          borderRadius: '12px',
                          border: '1px solid rgba(26,24,20,0.1)',
                          fontSize: '13px',
                        }}
                      />
                      <Bar dataKey="amount" radius={[0, 8, 8, 0]}>
                        {comparisonData.map((entry, idx) => (
                          <Cell
                            key={idx}
                            fill={entry.name === 'Your Trip' ? '#C4960C' : '#1A1814'}
                            fillOpacity={entry.name === 'Your Trip' ? 1 : 0.15}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-1.5 mt-3">
                  {DAILY_COMPARISON.map((d) => (
                    <div key={d.name} className="flex justify-between text-[10px] text-[#1A1814]/30">
                      <span>{d.name}: {d.style}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Budget Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-14 p-8 md:p-10 rounded-2xl bg-[#1A1814] relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="relative">
            <h2 className="text-xl font-bold text-[#FAF8F5] mb-6 flex items-center gap-3 font-serif">
              <Lightbulb className="h-6 w-6 text-[#C4960C]" />
              Budget Tips for Morocco
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BUDGET_TIPS.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#FAF8F5]/60">
                  <span className="shrink-0 h-6 w-6 rounded-lg bg-[#C4960C]/20 text-[#C4960C] text-xs flex items-center justify-center font-bold mt-0.5">
                    {idx + 1}
                  </span>
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
