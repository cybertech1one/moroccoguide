'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowLeft, Map, Loader2, MapPin, Info } from 'lucide-react'

const MapClient = dynamic(() => import('@/components/maps/MapClient'), {
  ssr: false,
  loading: () => (
    <div className="h-[calc(100vh-200px)] min-h-[500px] flex items-center justify-center bg-[#FAF8F5] rounded-xl border border-[#1A1814]/5">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#C4960C] mx-auto mb-3" />
        <p className="text-sm text-[#1A1814]/40">Loading interactive map...</p>
      </div>
    </div>
  ),
})

export default function MapExplorerPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Compact Header */}
      <section className="bg-[#1A1814] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/tools"
              className="inline-flex items-center text-[#FAF8F5]/40 hover:text-[#C4960C] text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1.5" />
              All Tools
            </Link>
            <div className="h-5 w-px bg-[#FAF8F5]/10" />
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#C4960C]/10 border border-[#C4960C]/20 flex items-center justify-center">
                <Map className="h-4.5 w-4.5 text-[#C4960C]" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-[#FAF8F5] font-serif flex items-center gap-2">
                  Interactive Map Explorer
                </h1>
                <p className="text-[#FAF8F5]/30 text-xs">
                  30+ cities, attractions, hotels, and restaurants across Morocco
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs text-[#FAF8F5]/30">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-[#C4960C]" />
              Click markers for details
            </span>
            <span className="flex items-center gap-1">
              <Info className="h-3 w-3 text-[#C4960C]" />
              Filter by category
            </span>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <MapClient />
      </div>
    </main>
  )
}
