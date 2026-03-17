import type { Metadata } from 'next'
import Link from 'next/link'
import {
  CalendarDays,
  Calculator,
  DollarSign,
  Plane,
  Map,
  ClipboardList,
  CloudSun,
  Route,
  ArrowRight,
  Compass,
  Sparkles,
  Star,
  Languages,
  Ruler,
  CheckSquare,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Morocco Travel Tools | Plan Your Perfect Trip',
  description:
    'Free Morocco travel planning tools: trip planner, budget calculator, currency converter, Darija phrasebook, interactive packing checklist, city distances, flight finder, interactive map, and weather guide.',
  openGraph: {
    title: 'Morocco Travel Tools',
    description: 'Everything you need to plan your perfect Morocco trip.',
  },
}

const tools = [
  {
    title: 'Trip Planner',
    description:
      'Build your ideal Morocco itinerary step by step. Select cities, set dates, and get a personalized day-by-day plan.',
    href: '/tools/planner',
    icon: CalendarDays,
    gradient: 'from-[#C4960C] to-[#A0522D]',
    featured: true,
  },
  {
    title: 'Budget Calculator',
    description:
      'Estimate your trip costs with pre-filled Morocco prices for accommodation, food, transport, activities, and shopping.',
    href: '/tools/budget',
    icon: Calculator,
    gradient: 'from-[#A0522D] to-[#8B4513]',
    featured: true,
  },
  {
    title: 'Packing Checklist',
    description:
      'Generate a Morocco-specific packing list based on your trip type, season, duration, and planned activities.',
    href: '/tools/packing',
    icon: ClipboardList,
    gradient: 'from-[#1A1814] to-[#3D3A35]',
    featured: true,
  },
  {
    title: 'Currency Converter',
    description:
      'Convert between Moroccan Dirham and major currencies with a handy reference of common costs and tipping guide.',
    href: '/tools/currency',
    icon: DollarSign,
    gradient: 'from-[#C4960C] to-[#DAA520]',
    featured: false,
  },
  {
    title: 'Flight Finder',
    description:
      'Search for flights to Morocco with direct links to booking sites. Airport info and tips for finding cheap fares.',
    href: '/tools/flights',
    icon: Plane,
    gradient: 'from-[#4A6741] to-[#5B7D52]',
    featured: false,
  },
  {
    title: 'Interactive Map',
    description:
      'Explore Morocco on a full interactive map with markers for cities, attractions, hotels, and restaurants.',
    href: '/tools/map',
    icon: Map,
    gradient: 'from-[#1A1814] to-[#C4960C]',
    featured: false,
  },
  {
    title: 'Weather Guide',
    description:
      'Monthly temperature and rainfall data for 10 Moroccan cities. Find the best time to visit each destination.',
    href: '/tools/weather',
    icon: CloudSun,
    gradient: 'from-[#A0522D] to-[#C4960C]',
    featured: false,
  },
  {
    title: 'Distance Calculator',
    description:
      'Calculate distances and travel times between Moroccan cities by car, bus, and train with price estimates.',
    href: '/tools/distance',
    icon: Route,
    gradient: 'from-[#4A6741] to-[#3D6B35]',
    featured: false,
  },
  {
    title: 'Darija Phrasebook',
    description:
      'Essential Moroccan Arabic phrases for travelers. Greetings, directions, bargaining, food ordering, and emergency phrases with pronunciation.',
    href: '/tools/phrases',
    icon: Languages,
    gradient: 'from-[#C4960C] to-[#8B6914]',
    featured: false,
  },
  {
    title: 'City Distances',
    description:
      'Travel times and distances between all major Moroccan cities. Compare driving, bus, and train options with estimated costs.',
    href: '/tools/distances',
    icon: Ruler,
    gradient: 'from-[#A0522D] to-[#6B3A1F]',
    featured: false,
  },
  {
    title: 'Pre-Trip Checklist',
    description:
      'Interactive checklist covering visa, vaccinations, insurance, bookings, packing, and day-before departure tasks.',
    href: '/tools/checklist',
    icon: CheckSquare,
    gradient: 'from-[#1A1814] to-[#4A6741]',
    featured: false,
  },
]

export default function ToolsPage() {
  const featuredTools = tools.filter((t) => t.featured)
  const otherTools = tools.filter((t) => !t.featured)

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1A1814] py-24 md:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C4960C]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C4960C]/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C4960C]/10 border border-[#C4960C]/20 backdrop-blur-sm mb-8">
            <Compass className="h-8 w-8 text-[#C4960C]" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAF8F5] mb-6 tracking-tight">
            Morocco Travel Tools
          </h1>
          <p className="text-lg md:text-xl text-[#FAF8F5]/60 max-w-2xl mx-auto leading-relaxed">
            Everything you need to plan, budget, and navigate your perfect Moroccan adventure.
            All tools work offline with real, curated data.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-[#FAF8F5]/40">
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-[#C4960C]" />
              8 Free Tools
            </span>
            <span className="w-1 h-1 rounded-full bg-[#FAF8F5]/20" />
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-[#C4960C]" />
              No Account Needed
            </span>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTools.map((tool) => {
            const Icon = tool.icon
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group relative overflow-hidden rounded-2xl bg-white border border-[#1A1814]/5 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${tool.gradient}`} />
                <div className="p-8">
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.gradient} text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-xl font-bold text-[#1A1814] mb-3 font-serif">
                    {tool.title}
                  </h2>
                  <p className="text-sm text-[#1A1814]/60 leading-relaxed mb-5">
                    {tool.description}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-[#C4960C] group-hover:text-[#A0522D] transition-colors">
                    Open Tool
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Other Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-[#1A1814]/10" />
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1814]/40">
            More Tools
          </h3>
          <div className="h-px flex-1 bg-[#1A1814]/10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {otherTools.map((tool) => {
            const Icon = tool.icon
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-2xl bg-white border border-[#1A1814]/5 p-6 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${tool.gradient} text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-base font-bold text-[#1A1814] mb-2 font-serif">
                  {tool.title}
                </h2>
                <p className="text-xs text-[#1A1814]/50 leading-relaxed flex-1">
                  {tool.description}
                </p>
                <div className="mt-4 flex items-center text-xs font-semibold text-[#C4960C] group-hover:text-[#A0522D] transition-colors">
                  Use Tool
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Info Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl bg-[#1A1814] border border-[#C4960C]/10 p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="relative">
            <h3 className="text-xl font-bold text-[#FAF8F5] mb-3 font-serif">
              All Tools Work Offline
            </h3>
            <p className="text-[#FAF8F5]/50 max-w-xl mx-auto text-sm leading-relaxed">
              Our travel tools use real, curated data and work without an internet connection.
              Bookmark this page and access your tools anytime, anywhere in Morocco.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
