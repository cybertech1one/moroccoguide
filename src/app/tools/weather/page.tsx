'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  CloudSun,
  Thermometer,
  Droplets,
  Sun,
  Info,
  Calendar,
  Wind,
  MapPin,
} from 'lucide-react'
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  Weather Data                                                       */
/* ------------------------------------------------------------------ */
interface MonthlyWeather {
  month: string
  high: number
  low: number
  rain: number
  uv: number
}

interface CityWeather {
  name: string
  region: string
  elevation: string
  bestMonths: string
  description: string
  data: MonthlyWeather[]
}

const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const WEATHER_DATA: CityWeather[] = [
  {
    name: 'Marrakech',
    region: 'Central Plains',
    elevation: '450m',
    bestMonths: 'March-May, September-November',
    description: 'Hot summers, mild winters. Spring and autumn are ideal with warm days and cool evenings.',
    data: [
      { month: 'Jan', high: 18, low: 6, rain: 32, uv: 4 },
      { month: 'Feb', high: 20, low: 8, rain: 38, uv: 5 },
      { month: 'Mar', high: 23, low: 10, rain: 38, uv: 7 },
      { month: 'Apr', high: 25, low: 12, rain: 33, uv: 8 },
      { month: 'May', high: 29, low: 15, rain: 17, uv: 9 },
      { month: 'Jun', high: 34, low: 18, rain: 5, uv: 11 },
      { month: 'Jul', high: 38, low: 21, rain: 2, uv: 11 },
      { month: 'Aug', high: 38, low: 21, rain: 3, uv: 10 },
      { month: 'Sep', high: 33, low: 19, rain: 10, uv: 8 },
      { month: 'Oct', high: 28, low: 15, rain: 24, uv: 6 },
      { month: 'Nov', high: 23, low: 11, rain: 40, uv: 4 },
      { month: 'Dec', high: 19, low: 7, rain: 31, uv: 3 },
    ],
  },
  {
    name: 'Fes',
    region: 'Interior',
    elevation: '410m',
    bestMonths: 'April-May, September-October',
    description: 'Continental climate with hot summers and cool, rainy winters. Spring is best for exploring the medina.',
    data: [
      { month: 'Jan', high: 15, low: 4, rain: 62, uv: 3 },
      { month: 'Feb', high: 17, low: 5, rain: 58, uv: 4 },
      { month: 'Mar', high: 19, low: 7, rain: 59, uv: 6 },
      { month: 'Apr', high: 22, low: 9, rain: 53, uv: 7 },
      { month: 'May', high: 26, low: 12, rain: 29, uv: 9 },
      { month: 'Jun', high: 32, low: 16, rain: 7, uv: 11 },
      { month: 'Jul', high: 36, low: 19, rain: 2, uv: 11 },
      { month: 'Aug', high: 36, low: 19, rain: 3, uv: 10 },
      { month: 'Sep', high: 31, low: 17, rain: 15, uv: 8 },
      { month: 'Oct', high: 25, low: 12, rain: 40, uv: 5 },
      { month: 'Nov', high: 20, low: 8, rain: 64, uv: 3 },
      { month: 'Dec', high: 16, low: 5, rain: 62, uv: 3 },
    ],
  },
  {
    name: 'Casablanca', region: 'Atlantic Coast', elevation: '0m', bestMonths: 'May-October',
    description: 'Mild oceanic climate year-round. Summers are warm but cooled by Atlantic breezes.',
    data: [
      { month: 'Jan', high: 17, low: 9, rain: 53, uv: 3 }, { month: 'Feb', high: 18, low: 9, rain: 48, uv: 4 },
      { month: 'Mar', high: 19, low: 11, rain: 42, uv: 6 }, { month: 'Apr', high: 20, low: 12, rain: 38, uv: 7 },
      { month: 'May', high: 22, low: 14, rain: 16, uv: 9 }, { month: 'Jun', high: 24, low: 17, rain: 3, uv: 10 },
      { month: 'Jul', high: 27, low: 19, rain: 0, uv: 10 }, { month: 'Aug', high: 27, low: 20, rain: 1, uv: 9 },
      { month: 'Sep', high: 26, low: 19, rain: 7, uv: 8 }, { month: 'Oct', high: 24, low: 16, rain: 32, uv: 5 },
      { month: 'Nov', high: 20, low: 12, rain: 58, uv: 3 }, { month: 'Dec', high: 18, low: 10, rain: 60, uv: 3 },
    ],
  },
  {
    name: 'Tangier', region: 'Northern Coast', elevation: '0m', bestMonths: 'May-September',
    description: 'Mediterranean climate with mild, rainy winters and warm, dry summers. Windy year-round.',
    data: [
      { month: 'Jan', high: 16, low: 9, rain: 86, uv: 3 }, { month: 'Feb', high: 16, low: 9, rain: 75, uv: 4 },
      { month: 'Mar', high: 18, low: 10, rain: 64, uv: 5 }, { month: 'Apr', high: 19, low: 12, rain: 55, uv: 7 },
      { month: 'May', high: 22, low: 14, rain: 25, uv: 9 }, { month: 'Jun', high: 25, low: 17, rain: 6, uv: 10 },
      { month: 'Jul', high: 28, low: 20, rain: 1, uv: 11 }, { month: 'Aug', high: 29, low: 20, rain: 2, uv: 10 },
      { month: 'Sep', high: 27, low: 19, rain: 17, uv: 7 }, { month: 'Oct', high: 23, low: 15, rain: 56, uv: 5 },
      { month: 'Nov', high: 19, low: 12, rain: 95, uv: 3 }, { month: 'Dec', high: 17, low: 10, rain: 100, uv: 3 },
    ],
  },
  {
    name: 'Chefchaouen', region: 'Rif Mountains', elevation: '600m', bestMonths: 'April-June, Sep-Oct',
    description: 'Mountain climate with cooler temperatures than the plains. Misty mornings and lush surroundings.',
    data: [
      { month: 'Jan', high: 13, low: 4, rain: 110, uv: 3 }, { month: 'Feb', high: 14, low: 5, rain: 95, uv: 4 },
      { month: 'Mar', high: 16, low: 6, rain: 80, uv: 5 }, { month: 'Apr', high: 18, low: 8, rain: 65, uv: 7 },
      { month: 'May', high: 22, low: 11, rain: 30, uv: 9 }, { month: 'Jun', high: 27, low: 14, rain: 8, uv: 10 },
      { month: 'Jul', high: 32, low: 17, rain: 2, uv: 11 }, { month: 'Aug', high: 32, low: 18, rain: 5, uv: 10 },
      { month: 'Sep', high: 27, low: 15, rain: 20, uv: 7 }, { month: 'Oct', high: 22, low: 12, rain: 60, uv: 5 },
      { month: 'Nov', high: 17, low: 8, rain: 100, uv: 3 }, { month: 'Dec', high: 14, low: 5, rain: 105, uv: 3 },
    ],
  },
  {
    name: 'Essaouira', region: 'Atlantic Coast', elevation: '0m', bestMonths: 'June-September (windy)',
    description: 'Consistently mild and windy. Known as "Wind City of Africa." Rarely very hot.',
    data: [
      { month: 'Jan', high: 18, low: 10, rain: 35, uv: 4 }, { month: 'Feb', high: 18, low: 10, rain: 32, uv: 5 },
      { month: 'Mar', high: 19, low: 12, rain: 28, uv: 6 }, { month: 'Apr', high: 19, low: 12, rain: 18, uv: 7 },
      { month: 'May', high: 20, low: 14, rain: 5, uv: 8 }, { month: 'Jun', high: 22, low: 16, rain: 1, uv: 9 },
      { month: 'Jul', high: 23, low: 17, rain: 0, uv: 9 }, { month: 'Aug', high: 23, low: 18, rain: 0, uv: 9 },
      { month: 'Sep', high: 23, low: 17, rain: 5, uv: 7 }, { month: 'Oct', high: 22, low: 15, rain: 18, uv: 5 },
      { month: 'Nov', high: 20, low: 12, rain: 33, uv: 4 }, { month: 'Dec', high: 18, low: 10, rain: 40, uv: 3 },
    ],
  },
  {
    name: 'Merzouga', region: 'Sahara Desert', elevation: '700m', bestMonths: 'October-April',
    description: 'Extreme desert climate. Scorching summers (45C+), pleasant winters. Best visited in cooler months.',
    data: [
      { month: 'Jan', high: 18, low: 3, rain: 8, uv: 5 }, { month: 'Feb', high: 21, low: 6, rain: 6, uv: 6 },
      { month: 'Mar', high: 25, low: 9, rain: 8, uv: 8 }, { month: 'Apr', high: 29, low: 13, rain: 5, uv: 9 },
      { month: 'May', high: 34, low: 17, rain: 3, uv: 11 }, { month: 'Jun', high: 40, low: 22, rain: 1, uv: 12 },
      { month: 'Jul', high: 44, low: 26, rain: 1, uv: 12 }, { month: 'Aug', high: 43, low: 25, rain: 2, uv: 11 },
      { month: 'Sep', high: 37, low: 21, rain: 5, uv: 9 }, { month: 'Oct', high: 30, low: 15, rain: 8, uv: 6 },
      { month: 'Nov', high: 23, low: 8, rain: 8, uv: 4 }, { month: 'Dec', high: 18, low: 4, rain: 7, uv: 4 },
    ],
  },
  {
    name: 'Agadir', region: 'Southern Atlantic', elevation: '0m', bestMonths: 'Year-round (best Mar-Nov)',
    description: 'Warm and sunny year-round. Morocco\'s sunniest city with 300+ days of sunshine.',
    data: [
      { month: 'Jan', high: 21, low: 9, rain: 33, uv: 4 }, { month: 'Feb', high: 22, low: 10, rain: 25, uv: 5 },
      { month: 'Mar', high: 23, low: 11, rain: 18, uv: 7 }, { month: 'Apr', high: 23, low: 12, rain: 10, uv: 8 },
      { month: 'May', high: 24, low: 14, rain: 4, uv: 9 }, { month: 'Jun', high: 26, low: 17, rain: 1, uv: 10 },
      { month: 'Jul', high: 28, low: 18, rain: 0, uv: 10 }, { month: 'Aug', high: 28, low: 19, rain: 0, uv: 10 },
      { month: 'Sep', high: 28, low: 18, rain: 3, uv: 8 }, { month: 'Oct', high: 26, low: 15, rain: 15, uv: 6 },
      { month: 'Nov', high: 23, low: 12, rain: 28, uv: 4 }, { month: 'Dec', high: 21, low: 10, rain: 35, uv: 3 },
    ],
  },
  {
    name: 'Ouarzazate', region: 'Southeast / Atlas', elevation: '1160m', bestMonths: 'Mar-May, Sep-Nov',
    description: 'Semi-arid climate at altitude. Very hot summers, cold winter nights. Film capital of Morocco.',
    data: [
      { month: 'Jan', high: 16, low: 2, rain: 12, uv: 4 }, { month: 'Feb', high: 18, low: 4, rain: 10, uv: 5 },
      { month: 'Mar', high: 22, low: 7, rain: 15, uv: 7 }, { month: 'Apr', high: 25, low: 10, rain: 10, uv: 8 },
      { month: 'May', high: 30, low: 14, rain: 6, uv: 10 }, { month: 'Jun', high: 35, low: 18, rain: 2, uv: 11 },
      { month: 'Jul', high: 40, low: 22, rain: 2, uv: 11 }, { month: 'Aug', high: 39, low: 21, rain: 3, uv: 10 },
      { month: 'Sep', high: 33, low: 17, rain: 8, uv: 8 }, { month: 'Oct', high: 27, low: 12, rain: 12, uv: 6 },
      { month: 'Nov', high: 21, low: 7, rain: 12, uv: 4 }, { month: 'Dec', high: 17, low: 3, rain: 10, uv: 3 },
    ],
  },
  {
    name: 'Rabat', region: 'Atlantic Coast', elevation: '0m', bestMonths: 'May-October',
    description: 'Pleasant oceanic climate moderated by the Atlantic. Mild year-round with some winter rain.',
    data: [
      { month: 'Jan', high: 17, low: 8, rain: 65, uv: 3 }, { month: 'Feb', high: 18, low: 9, rain: 55, uv: 4 },
      { month: 'Mar', high: 19, low: 10, rain: 48, uv: 6 }, { month: 'Apr', high: 21, low: 11, rain: 42, uv: 7 },
      { month: 'May', high: 23, low: 14, rain: 18, uv: 9 }, { month: 'Jun', high: 25, low: 16, rain: 3, uv: 10 },
      { month: 'Jul', high: 28, low: 19, rain: 0, uv: 10 }, { month: 'Aug', high: 28, low: 19, rain: 1, uv: 9 },
      { month: 'Sep', high: 27, low: 18, rain: 9, uv: 7 }, { month: 'Oct', high: 24, low: 15, rain: 38, uv: 5 },
      { month: 'Nov', high: 20, low: 11, rain: 70, uv: 3 }, { month: 'Dec', high: 17, low: 9, rain: 72, uv: 3 },
    ],
  },
]

const SEASONAL_INFO = [
  {
    season: 'Spring (March - May)',
    description: 'The best time to visit Morocco. Temperatures are comfortable (20-28C), wildflowers bloom across the countryside, and crowds are manageable. The Atlas Mountains have snow melt feeding lush valleys. Ideal for hiking, city exploration, and desert visits.',
  },
  {
    season: 'Summer (June - August)',
    description: 'Extremely hot in interior cities (Marrakech can reach 45C). Best for coastal cities like Essaouira and Agadir, or mountain retreats in the Atlas. The Sahara is unbearably hot. Ramadan sometimes falls in summer -- respect fasting hours.',
  },
  {
    season: 'Autumn (September - November)',
    description: 'Another excellent period. Summer heat subsides, but the sea is still warm for swimming. October sees the date harvest in the Sahara region. November can bring early rains to the north. Great for the desert as nights become cooler.',
  },
  {
    season: 'Winter (December - February)',
    description: 'Cool and rainy in the north and coast, but pleasant in the south (Agadir, Ouarzazate). Snow in the Atlas offers skiing at Oukaimeden. Desert nights are very cold (near freezing). Fewer tourists and lower prices.',
  },
]

export default function WeatherGuidePage() {
  const [selectedCity, setSelectedCity] = useState(0)
  const city = WEATHER_DATA[selectedCity]

  const chartData = useMemo(
    () => city.data.map((d) => ({ month: d.month, 'High (C)': d.high, 'Low (C)': d.low, 'Rain (mm)': d.rain })),
    [city]
  )

  const matrixData = useMemo(
    () => WEATHER_DATA.map((c) => ({ city: c.name, ...Object.fromEntries(c.data.map((d) => [d.month, d.high])) })),
    []
  )

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
              <CloudSun className="h-7 w-7 text-[#C4960C]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#FAF8F5] font-serif">Weather Guide</h1>
              <p className="text-[#FAF8F5]/50 mt-1">Monthly weather data for 10 Moroccan cities</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* City Selector */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex flex-wrap gap-2">
            {WEATHER_DATA.map((c, idx) => (
              <button
                key={c.name}
                onClick={() => setSelectedCity(idx)}
                className={cn(
                  'px-4 py-2.5 rounded-xl text-sm font-semibold transition-all',
                  selectedCity === idx
                    ? 'bg-[#1A1814] text-[#C4960C] shadow-lg'
                    : 'bg-white border border-[#1A1814]/5 text-[#1A1814]/50 hover:border-[#C4960C]/30 hover:text-[#C4960C]'
                )}
              >
                {c.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* City Weather Detail */}
        <motion.div key={city.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Info Card */}
          <div className="p-6 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1A1814] font-serif mb-1">{city.name}</h2>
            <div className="flex items-center gap-2 text-sm text-[#1A1814]/40 mb-4">
              <MapPin className="h-3.5 w-3.5" /> {city.region} &middot; {city.elevation}
            </div>
            <p className="text-sm text-[#1A1814]/60 mb-5 leading-relaxed">{city.description}</p>
            <div className="p-4 rounded-xl bg-[#C4960C]/5 border border-[#C4960C]/10">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="h-4 w-4 text-[#C4960C]" />
                <span className="text-sm font-bold text-[#C4960C]">Best Time to Visit</span>
              </div>
              <span className="text-sm text-[#1A1814]/60">{city.bestMonths}</span>
            </div>

            {/* UV Index */}
            <div className="mt-5">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="h-4 w-4 text-[#C4960C]" />
                <span className="text-sm font-bold text-[#1A1814]">UV Index by Month</span>
              </div>
              <div className="grid grid-cols-6 gap-1">
                {city.data.map((d) => {
                  const uvColor =
                    d.uv <= 2 ? 'bg-green-100 text-green-700' :
                    d.uv <= 5 ? 'bg-yellow-100 text-yellow-700' :
                    d.uv <= 7 ? 'bg-orange-100 text-orange-700' :
                    d.uv <= 10 ? 'bg-red-100 text-red-700' :
                    'bg-purple-100 text-purple-700'
                  return (
                    <div key={d.month} className="text-center">
                      <div className="text-[10px] text-[#1A1814]/30">{d.month}</div>
                      <div className={cn('text-xs font-bold rounded px-1 py-0.5', uvColor)}>{d.uv}</div>
                    </div>
                  )
                })}
              </div>
              <div className="flex gap-2 mt-2 text-[10px] text-[#1A1814]/30">
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-green-200" />Low</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-yellow-200" />Med</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-orange-200" />High</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-red-200" />V.High</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-purple-200" />Ext.</span>
              </div>
            </div>
          </div>

          {/* Temperature Chart */}
          <div className="p-6 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm">
            <h3 className="text-sm font-bold text-[#1A1814] mb-4 flex items-center gap-2 font-serif">
              <Thermometer className="h-4 w-4 text-[#C4960C]" /> Temperature (C)
            </h3>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="highGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C4960C" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#C4960C" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="lowGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#A0522D" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#A0522D" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(26,24,20,0.05)" />
                  <XAxis dataKey="month" fontSize={11} tick={{ fill: '#1A1814', opacity: 0.4 }} />
                  <YAxis fontSize={11} tick={{ fill: '#1A1814', opacity: 0.4 }} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid rgba(26,24,20,0.1)', fontSize: '13px' }} />
                  <Area type="monotone" dataKey="High (C)" stroke="#C4960C" fill="url(#highGrad)" strokeWidth={2} />
                  <Area type="monotone" dataKey="Low (C)" stroke="#A0522D" fill="url(#lowGrad)" strokeWidth={2} />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Rainfall Chart */}
          <div className="p-6 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm">
            <h3 className="text-sm font-bold text-[#1A1814] mb-4 flex items-center gap-2 font-serif">
              <Droplets className="h-4 w-4 text-[#A0522D]" /> Rainfall (mm)
            </h3>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(26,24,20,0.05)" />
                  <XAxis dataKey="month" fontSize={11} tick={{ fill: '#1A1814', opacity: 0.4 }} />
                  <YAxis fontSize={11} tick={{ fill: '#1A1814', opacity: 0.4 }} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid rgba(26,24,20,0.1)', fontSize: '13px' }} />
                  <Bar dataKey="Rain (mm)" fill="#A0522D" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Temperature Matrix */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="p-6 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm mb-8 overflow-x-auto"
        >
          <h2 className="text-lg font-bold text-[#1A1814] mb-5 flex items-center gap-2 font-serif">
            <Thermometer className="h-5 w-5 text-[#C4960C]" /> Temperature Matrix (Average High C)
          </h2>
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr className="border-b border-[#1A1814]/5">
                <th className="text-left py-2 pr-4 text-[#1A1814]/40 font-semibold text-xs">City</th>
                {MONTHS_SHORT.map((m) => (
                  <th key={m} className="text-center py-2 px-1 text-[#1A1814]/40 font-semibold text-xs">{m}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrixData.map((row) => (
                <tr key={row.city} className="border-b border-[#1A1814]/5 last:border-0">
                  <td className="py-2 pr-4 font-semibold text-[#1A1814] whitespace-nowrap text-xs">{row.city}</td>
                  {MONTHS_SHORT.map((m) => {
                    const temp = (row as Record<string, string | number>)[m] as number
                    const bg =
                      temp >= 38 ? 'bg-red-500 text-white' :
                      temp >= 32 ? 'bg-red-200 text-red-800' :
                      temp >= 26 ? 'bg-orange-100 text-orange-800' :
                      temp >= 20 ? 'bg-yellow-50 text-yellow-800' :
                      temp >= 15 ? 'bg-blue-50 text-blue-700' :
                      'bg-blue-100 text-blue-800'
                    return (
                      <td key={m} className="text-center py-2 px-1">
                        <span className={cn('inline-block w-8 py-0.5 rounded text-xs font-bold', bg)}>{temp}</span>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Seasonal Guide */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
        >
          {SEASONAL_INFO.map((s, idx) => (
            <div key={s.season} className="p-6 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm">
              <h3 className="text-base font-bold text-[#1A1814] mb-2 font-serif flex items-center gap-2">
                <Wind className="h-4 w-4 text-[#C4960C]" />
                {s.season}
              </h3>
              <p className="text-sm text-[#1A1814]/50 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Sun Safety */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="p-6 md:p-8 rounded-2xl bg-[#1A1814] relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="relative">
            <h2 className="text-lg font-bold text-[#FAF8F5] mb-5 flex items-center gap-2 font-serif">
              <Info className="h-5 w-5 text-[#C4960C]" /> Sun Safety in Morocco
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Morocco has intense sunshine year-round. UV index regularly exceeds 8 in summer.',
                'Apply SPF 50+ sunscreen every 2 hours, even on cloudy days.',
                'Wear a wide-brimmed hat and sunglasses, especially in the desert.',
                'Avoid outdoor activities between 11am and 3pm in summer.',
                'Stay hydrated -- drink at least 2-3 liters of water daily.',
                'Altitude increases UV exposure: the Atlas Mountains have stronger UV than coastal cities.',
              ].map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#FAF8F5]/50">
                  <Sun className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" />
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
