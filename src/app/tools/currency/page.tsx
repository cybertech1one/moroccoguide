'use client'

import { useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRightLeft,
  DollarSign,
  Info,
  HandCoins,
  CircleDollarSign,
  Lightbulb,
  CreditCard,
  Banknote,
  Home,
  ChevronRight,
  Building2,
  Landmark,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  Exchange Rates (MAD base) - approximate                            */
/* ------------------------------------------------------------------ */
const RATES: Record<string, { rate: number; symbol: string; name: string; flag: string }> = {
  MAD: { rate: 1, symbol: 'MAD', name: 'Moroccan Dirham', flag: 'MA' },
  USD: { rate: 0.10, symbol: '$', name: 'US Dollar', flag: 'US' },
  EUR: { rate: 0.092, symbol: '\u20AC', name: 'Euro', flag: 'EU' },
  GBP: { rate: 0.079, symbol: '\u00A3', name: 'British Pound', flag: 'GB' },
  CAD: { rate: 0.137, symbol: 'C$', name: 'Canadian Dollar', flag: 'CA' },
  AUD: { rate: 0.155, symbol: 'A$', name: 'Australian Dollar', flag: 'AU' },
}

/* ------------------------------------------------------------------ */
/*  Common Costs                                                       */
/* ------------------------------------------------------------------ */
const COMMON_COSTS = [
  { item: 'Mint tea', min: 10, max: 15, category: 'Drinks' },
  { item: 'Fresh orange juice', min: 5, max: 15, category: 'Drinks' },
  { item: 'Bottle of water (1.5L)', min: 5, max: 8, category: 'Drinks' },
  { item: 'Espresso coffee', min: 8, max: 15, category: 'Drinks' },
  { item: 'Tagine meal (local restaurant)', min: 40, max: 80, category: 'Food' },
  { item: 'Couscous Friday', min: 30, max: 60, category: 'Food' },
  { item: 'Street food sandwich', min: 15, max: 25, category: 'Food' },
  { item: 'Fine dining (per person)', min: 200, max: 500, category: 'Food' },
  { item: 'Petit taxi (in city)', min: 10, max: 30, category: 'Transport' },
  { item: 'Inter-city bus (CTM)', min: 70, max: 200, category: 'Transport' },
  { item: 'Train (2nd class, avg route)', min: 80, max: 220, category: 'Transport' },
  { item: 'Museum / monument entry', min: 20, max: 70, category: 'Activities' },
  { item: 'Riad (per night)', min: 300, max: 1500, category: 'Accommodation' },
  { item: 'Desert tour (2 days)', min: 800, max: 3000, category: 'Activities' },
  { item: 'Hammam visit', min: 100, max: 300, category: 'Activities' },
  { item: 'Souk shopping item', min: 50, max: 500, category: 'Shopping' },
]

/* ------------------------------------------------------------------ */
/*  Tipping Guide                                                      */
/* ------------------------------------------------------------------ */
const TIPPING_GUIDE = [
  { service: 'Restaurant (sit-down)', tip: '10-15% of the bill' },
  { service: 'Cafe / tea', tip: 'from 2 MAD' },
  { service: 'Hotel porter', tip: 'from 10 MAD per bag' },
  { service: 'Hotel housekeeping', tip: 'from 20 MAD per day' },
  { service: 'Tour guide (full day)', tip: 'from 100 MAD per day' },
  { service: 'Tour guide (half day)', tip: 'from 50 MAD' },
  { service: 'Taxi driver', tip: 'Round up to nearest 5 MAD' },
  { service: 'Hammam attendant', tip: 'from 20 MAD' },
  { service: 'Gas station attendant', tip: '5 MAD' },
  { service: 'Parking attendant', tip: 'from 5 MAD' },
]

const QUICK_AMOUNTS = [100, 500, 1000, 5000]

function convert(amount: number, from: string, to: string): number {
  const madAmount = from === 'MAD' ? amount : amount / RATES[from].rate
  return to === 'MAD' ? madAmount : madAmount * RATES[to].rate
}

/* ------------------------------------------------------------------ */
/*  ATM & Money Tips                                                   */
/* ------------------------------------------------------------------ */
const MONEY_TIPS = [
  {
    icon: Banknote,
    title: 'Closed currency',
    text: 'The Moroccan Dirham (MAD) is a closed currency. You cannot buy or sell it outside Morocco, so exchange upon arrival.',
  },
  {
    icon: Building2,
    title: 'Where to exchange',
    text: 'Exchange at banks or official bureaux de change. Avoid street changers. Airport rates are acceptable for small amounts.',
  },
  {
    icon: CreditCard,
    title: 'ATMs everywhere',
    text: 'ATMs are widely available in cities and tourist areas. Notify your bank before traveling to avoid blocks. Withdraw in MAD, not your home currency.',
  },
  {
    icon: Landmark,
    title: 'Cards accepted selectively',
    text: 'Credit cards work at hotels, upscale restaurants, and some shops. Always carry cash for souks, petit taxis, and rural areas.',
  },
  {
    icon: Banknote,
    title: 'Keep small bills',
    text: 'Keep plenty of 10, 20, and 50 MAD notes. Many small vendors and taxi drivers cannot break 200 MAD notes.',
  },
  {
    icon: Info,
    title: 'Taxi fare tip',
    text: 'Always agree on taxi fares before getting in, or insist on the meter (compteur). Petit taxis are metered; grand taxis are shared.',
  },
]

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */
export default function CurrencyConverterPage() {
  const [amount, setAmount] = useState(1000)
  const [fromCurrency, setFromCurrency] = useState('MAD')
  const [toCurrency, setToCurrency] = useState('USD')

  const converted = useMemo(
    () => convert(amount, fromCurrency, toCurrency),
    [amount, fromCurrency, toCurrency]
  )

  const rate = useMemo(
    () => convert(1, fromCurrency, toCurrency),
    [fromCurrency, toCurrency]
  )

  const handleSwap = useCallback(() => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }, [fromCurrency, toCurrency])

  const currencyKeys = Object.keys(RATES)

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
            <span className="text-[#FAF8F5]/60">Currency Converter</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-14 w-14 rounded-2xl bg-[#C4960C]/10 border border-[#C4960C]/20 flex items-center justify-center">
              <CircleDollarSign className="h-7 w-7 text-[#C4960C]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#FAF8F5] font-[family-name:var(--font-display)]">
                Currency Converter
              </h1>
              <p className="text-[#FAF8F5]/50 mt-1">
                Convert between Moroccan Dirham and major world currencies
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Converter Card */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#1A1814]/5 shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-end mb-6">
            {/* From */}
            <div>
              <label className="block text-sm font-semibold text-[#1A1814]/60 mb-2">From</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full rounded-xl border border-[#1A1814]/10 bg-white px-4 py-3 text-[#1A1814] focus:border-[#C4960C] outline-none mb-2 transition-all"
              >
                {currencyKeys.map((c) => (
                  <option key={c} value={c}>
                    {c} - {RATES[c].name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                min={0}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full rounded-xl border border-[#1A1814]/10 bg-white px-4 py-4 text-2xl font-bold text-[#1A1814] focus:border-[#C4960C] focus:ring-2 focus:ring-[#C4960C]/20 outline-none transition-all"
                placeholder="Enter amount"
              />
            </div>

            {/* Swap Button */}
            <div className="flex justify-center md:pb-2">
              <button
                onClick={handleSwap}
                className="h-12 w-12 rounded-full bg-[#1A1814] text-[#C4960C] flex items-center justify-center hover:bg-[#C4960C] hover:text-white transition-all shadow-lg"
                aria-label="Swap currencies"
              >
                <ArrowRightLeft className="h-5 w-5" />
              </button>
            </div>

            {/* To */}
            <div>
              <label className="block text-sm font-semibold text-[#1A1814]/60 mb-2">To</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full rounded-xl border border-[#1A1814]/10 bg-white px-4 py-3 text-[#1A1814] focus:border-[#C4960C] outline-none mb-2 transition-all"
              >
                {currencyKeys.map((c) => (
                  <option key={c} value={c}>
                    {c} - {RATES[c].name}
                  </option>
                ))}
              </select>
              <div className="w-full rounded-xl bg-[#1A1814] border border-[#1A1814] px-4 py-4 text-2xl font-bold text-[#C4960C]">
                {converted < 1 ? converted.toFixed(4) : converted.toFixed(2)} {toCurrency}
              </div>
            </div>
          </div>

          {/* Exchange Rate */}
          <div className="text-center text-sm text-[#1A1814]/40 mb-6">
            1 {fromCurrency} = {rate < 1 ? rate.toFixed(4) : rate.toFixed(4)} {toCurrency}
            <span className="block text-xs mt-1 text-[#1A1814]/25">
              Rates are approximate and for reference only. Check live rates before exchanging.
            </span>
          </div>

          {/* Quick Amounts */}
          <div>
            <div className="text-xs font-semibold text-[#1A1814]/30 mb-2 uppercase tracking-wider">Quick convert from MAD</div>
            <div className="flex flex-wrap gap-2">
              {QUICK_AMOUNTS.map((qa) => (
                <button
                  key={qa}
                  onClick={() => {
                    setFromCurrency('MAD')
                    setAmount(qa)
                  }}
                  className={cn(
                    'px-4 py-2 rounded-xl border text-sm font-semibold transition-all',
                    amount === qa && fromCurrency === 'MAD'
                      ? 'bg-[#C4960C] border-[#C4960C] text-white'
                      : 'bg-[#FAF8F5] border-[#1A1814]/5 text-[#1A1814]/50 hover:border-[#C4960C] hover:text-[#C4960C]'
                  )}
                >
                  {qa.toLocaleString()} MAD
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Reference Table: All Currencies */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm mb-8">
          <h2 className="text-lg font-bold text-[#1A1814] mb-5 flex items-center gap-2 font-[family-name:var(--font-display)]">
            <ArrowRightLeft className="h-5 w-5 text-[#C4960C]" />
            Quick Reference ({amount.toLocaleString()} MAD)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {currencyKeys.filter(c => c !== 'MAD').map((c) => {
              const val = convert(amount, 'MAD', c)
              return (
                <button
                  key={c}
                  onClick={() => {
                    setFromCurrency('MAD')
                    setToCurrency(c)
                  }}
                  className={cn(
                    'flex items-center justify-between p-4 rounded-xl border transition-all text-left',
                    toCurrency === c && fromCurrency === 'MAD'
                      ? 'border-[#C4960C] bg-[#C4960C]/5'
                      : 'border-[#1A1814]/5 hover:border-[#C4960C]/30'
                  )}
                >
                  <div>
                    <div className="text-xs text-[#1A1814]/40 font-semibold">{RATES[c].name}</div>
                    <div className="text-sm font-bold text-[#1A1814]">{c}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-[#C4960C]">
                      {RATES[c].symbol}{val < 1 ? val.toFixed(2) : val.toFixed(2)}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Common Costs Table */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm mb-8">
          <h2 className="text-lg font-bold text-[#1A1814] mb-5 flex items-center gap-2 font-[family-name:var(--font-display)]">
            <DollarSign className="h-5 w-5 text-[#C4960C]" />
            Common Costs in Morocco
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1A1814]/5">
                  <th className="text-left py-3 text-[#1A1814]/40 font-semibold text-xs uppercase tracking-wider">Item</th>
                  <th className="text-left py-3 text-[#1A1814]/40 font-semibold text-xs uppercase tracking-wider">Category</th>
                  <th className="text-right py-3 text-[#1A1814]/40 font-semibold text-xs uppercase tracking-wider">MAD</th>
                  {toCurrency !== 'MAD' && (
                    <th className="text-right py-3 text-[#1A1814]/40 font-semibold text-xs uppercase tracking-wider">{toCurrency}</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {COMMON_COSTS.map((cost) => {
                  const convertedMin = convert(cost.min, 'MAD', toCurrency)
                  const convertedMax = convert(cost.max, 'MAD', toCurrency)
                  return (
                    <tr
                      key={cost.item}
                      className="border-b border-[#1A1814]/5 last:border-0 hover:bg-[#FAF8F5] transition-colors"
                    >
                      <td className="py-3 font-medium text-[#1A1814]">{cost.item}</td>
                      <td className="py-3">
                        <span className="px-2 py-0.5 rounded-full bg-[#FAF8F5] text-[10px] font-semibold text-[#1A1814]/40">
                          {cost.category}
                        </span>
                      </td>
                      <td className="text-right py-3 text-[#1A1814]/60 font-semibold">
                        {cost.min}-{cost.max}
                      </td>
                      {toCurrency !== 'MAD' && (
                        <td className="text-right py-3 text-[#C4960C] font-semibold">
                          {convertedMin < 1 ? convertedMin.toFixed(2) : Math.round(convertedMin)}-
                          {convertedMax < 1 ? convertedMax.toFixed(2) : Math.round(convertedMax)} {RATES[toCurrency].symbol}
                        </td>
                      )}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tipping Guide */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#C4960C]/10 mb-8">
          <h2 className="text-lg font-bold text-[#1A1814] mb-2 flex items-center gap-2 font-[family-name:var(--font-display)]">
            <HandCoins className="h-5 w-5 text-[#C4960C]" />
            Tipping Guide for Morocco
          </h2>
          <p className="text-sm text-[#1A1814]/50 mb-5">
            Tipping is customary in Morocco and expected for most services. It is known as &quot;pourboire&quot; (from French).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {TIPPING_GUIDE.map((item) => (
              <div
                key={item.service}
                className="flex justify-between items-center p-3 rounded-xl bg-[#FAF8F5] border border-[#1A1814]/5"
              >
                <span className="text-sm font-medium text-[#1A1814]">{item.service}</span>
                <span className="text-sm text-[#C4960C] font-semibold ml-2 text-right">{item.tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ATM & Money Tips */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#1A1814] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="relative">
            <h2 className="text-lg font-bold text-[#FAF8F5] mb-5 flex items-center gap-2 font-[family-name:var(--font-display)]">
              <Lightbulb className="h-5 w-5 text-[#C4960C]" />
              ATM &amp; Money Tips for Morocco
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {MONEY_TIPS.map((tip, idx) => {
                const Icon = tip.icon
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#C4960C]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="h-4 w-4 text-[#C4960C]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#FAF8F5]/80 mb-0.5">{tip.title}</div>
                      <p className="text-sm text-[#FAF8F5]/40 leading-relaxed">{tip.text}</p>
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
