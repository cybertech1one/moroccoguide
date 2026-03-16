'use client'

import { useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ClipboardList,
  Check,
  Printer,
  RotateCcw,
  Mountain,
  Sun,
  Palmtree,
  Building2,
  Blend,
  Info,
  Shirt,
  FileText,
  Plug,
  Shield,
  Heart,
  Luggage,
  Star,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Compass,
  Waves,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */
type TripType = 'city' | 'desert' | 'mountain' | 'beach' | 'mixed'
type Season = 'spring' | 'summer' | 'autumn' | 'winter'
type Duration = 'weekend' | '1week' | '2weeks' | '3weeks'

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
/*  Trip Type Options                                                  */
/* ================================================================== */
const TRIP_TYPES: { id: TripType; label: string; icon: React.ElementType; description: string }[] = [
  { id: 'city', label: 'City', icon: Building2, description: 'Medinas, souks, museums' },
  { id: 'desert', label: 'Desert', icon: Sun, description: 'Sahara, camels, dunes' },
  { id: 'mountain', label: 'Mountain', icon: Mountain, description: 'Atlas, trekking, villages' },
  { id: 'beach', label: 'Beach', icon: Palmtree, description: 'Coast, surfing, relaxing' },
  { id: 'mixed', label: 'Mixed', icon: Blend, description: 'Best of everything' },
]

const SEASONS: { id: Season; label: string; months: string; temp: string }[] = [
  { id: 'spring', label: 'Spring', months: 'Mar - May', temp: '18-28 C' },
  { id: 'summer', label: 'Summer', months: 'Jun - Aug', temp: '28-45 C' },
  { id: 'autumn', label: 'Autumn', months: 'Sep - Nov', temp: '18-32 C' },
  { id: 'winter', label: 'Winter', months: 'Dec - Feb', temp: '8-20 C' },
]

const DURATIONS: { id: Duration; label: string; subtext: string }[] = [
  { id: 'weekend', label: 'Weekend', subtext: '2-3 days' },
  { id: '1week', label: '1 Week', subtext: '5-8 days' },
  { id: '2weeks', label: '2 Weeks', subtext: '10-15 days' },
  { id: '3weeks', label: '3+ Weeks', subtext: '16+ days' },
]

/* ================================================================== */
/*  Packing Data Generator                                             */
/* ================================================================== */
function generatePackingList(tripType: TripType, season: Season, duration: Duration): PackingCategory[] {
  const categories: PackingCategory[] = []

  /* ---- Documents ---- */
  categories.push({
    category: 'Documents & Essentials',
    icon: FileText,
    items: [
      { name: 'Passport (valid 6+ months from travel date)', essential: true },
      { name: 'Passport copies (physical + digital/cloud)', essential: true },
      { name: 'Travel insurance documents & emergency number', essential: true },
      { name: 'Flight tickets / booking confirmations', essential: true },
      { name: 'Hotel / riad reservation printouts', essential: true },
      { name: 'Emergency contact list (printed)', essential: true },
      { name: 'Credit/debit card PIN reminder', essential: false, note: 'Memorize, do not write down' },
      { name: 'International driving permit', essential: false, note: 'Required if renting a car' },
      { name: 'Travel itinerary printout', essential: false },
      ...(duration === '3weeks' || duration === '2weeks'
        ? [{ name: 'Extra passport photos (for any extensions)', essential: false }]
        : []),
    ],
  })

  /* ---- Clothing ---- */
  const clothingItems: PackingItem[] = [
    { name: 'Comfortable walking shoes (broken in)', essential: true, note: 'Medina cobblestones are uneven' },
    { name: 'Sandals or flip-flops', essential: true },
    { name: 'Lightweight long pants (2-3 pairs)', essential: true, note: 'Linen or cotton recommended' },
    { name: 'T-shirts / tops (pack layers)', essential: true },
    { name: 'Underwear & socks (enough for 4-5 days)', essential: true },
    { name: 'Sleepwear', essential: false },
    { name: 'Modest outfit for mosque/medina visits', essential: true, note: 'Covers shoulders and knees' },
  ]

  // Season-specific
  if (season === 'summer') {
    clothingItems.push(
      { name: 'Sun hat with wide brim', essential: true, note: 'Essential in Marrakech and desert' },
      { name: 'Quality sunglasses (UV protection)', essential: true },
      { name: 'Light breathable fabrics (linen, cotton)', essential: true },
      { name: 'Light scarf/shawl (sun + mosque visits)', essential: true, note: 'Multi-purpose essential' },
      { name: 'Shorts (for beach areas only, not medinas)', essential: false },
      { name: 'Light cardigan for air-conditioned spaces', essential: false },
      { name: 'Quick-dry clothing', essential: false, note: 'Dries overnight in dry climate' },
    )
  } else if (season === 'winter') {
    clothingItems.push(
      { name: 'Warm jacket or fleece', essential: true, note: 'Evenings can be cold, even in Marrakech' },
      { name: 'Thermal layers (base layer)', essential: true },
      { name: 'Warm scarf and hat', essential: true },
      { name: 'Rain jacket or waterproof layer', essential: true, note: 'North Morocco gets significant rain' },
      { name: 'Warm socks (merino recommended)', essential: false },
      { name: 'Gloves (for mountain areas)', essential: false, note: 'Atlas Mountains can have snow' },
      { name: 'Sweater or hoodie', essential: true },
    )
  } else {
    clothingItems.push(
      { name: 'Light jacket or sweater (for evenings)', essential: true, note: 'Desert nights and mountain evenings are cool' },
      { name: 'Sun hat', essential: true },
      { name: 'Sunglasses', essential: true },
      { name: 'Light scarf/shawl', essential: true, note: 'For mosques, sun protection, and wind' },
      { name: 'Compact rain jacket', essential: false, note: 'Especially for northern Morocco' },
    )
  }

  // Trip type specific
  if (tripType === 'desert' || tripType === 'mixed') {
    clothingItems.push(
      { name: 'Headscarf / turban for sand protection', essential: true, note: 'Can buy a cheche in Merzouga' },
      { name: 'Closed-toe shoes for desert walking', essential: true, note: 'Sand gets extremely hot' },
      { name: 'Long-sleeve shirt for sun protection', essential: true },
      { name: 'Warm layer for desert nights', essential: true, note: 'Temperature drops dramatically after sunset' },
    )
  }
  if (tripType === 'mountain' || tripType === 'mixed') {
    clothingItems.push(
      { name: 'Hiking boots (broken in)', essential: true, note: 'Ankle support recommended for Atlas treks' },
      { name: 'Hiking socks (moisture-wicking)', essential: true },
      { name: 'Fleece or warm mid-layer', essential: true },
      { name: 'Trekking pants', essential: false },
      { name: 'Trekking poles (collapsible)', essential: false, note: 'Can rent in Imlil' },
    )
  }
  if (tripType === 'beach' || tripType === 'mixed') {
    clothingItems.push(
      { name: 'Swimsuit (2 recommended)', essential: true },
      { name: 'Beach cover-up / sarong', essential: true, note: 'Required when walking from beach' },
      { name: 'Water shoes', essential: false, note: 'Rocky beaches in some areas' },
      { name: 'Rash guard (for surfing)', essential: false },
    )
  }

  categories.push({
    category: 'Clothing',
    icon: Shirt,
    items: clothingItems,
  })

  /* ---- Toiletries & Health ---- */
  categories.push({
    category: 'Toiletries & Health',
    icon: Heart,
    items: [
      { name: 'Sunscreen SPF 50+', essential: true, note: 'UV is intense even in winter' },
      { name: 'Insect repellent', essential: true, note: 'Especially for evenings and rural areas' },
      { name: 'Hand sanitizer', essential: true },
      { name: 'Prescription medications + copies of prescriptions', essential: true },
      { name: 'Basic first aid kit (plasters, antiseptic)', essential: true },
      { name: 'Anti-diarrhea medication (loperamide)', essential: true, note: 'Stomach adjustment is common' },
      { name: 'Pain reliever (ibuprofen/paracetamol)', essential: true },
      { name: 'Rehydration salts', essential: true, note: 'Essential for heat and stomach issues' },
      { name: 'Lip balm with SPF', essential: false },
      { name: 'Moisturizer', essential: false, note: 'Climate is very dry, especially inland' },
      { name: 'Toothbrush & toothpaste', essential: true },
      { name: 'Deodorant', essential: true },
      { name: 'Shampoo & body wash (travel sizes)', essential: false, note: 'Most riads provide these' },
      { name: 'Wet wipes / face wipes', essential: false, note: 'Very useful for travel days' },
      { name: 'Motion sickness tablets', essential: false, note: 'Mountain roads can be very winding' },
      { name: 'Antihistamines', essential: false },
      ...(season === 'summer'
        ? [{ name: 'After-sun aloe vera gel', essential: false }]
        : []),
    ],
  })

  /* ---- Electronics ---- */
  categories.push({
    category: 'Electronics',
    icon: Plug,
    items: [
      { name: 'Phone + charger cable', essential: true },
      { name: 'Power adapter Type C/E (European 220V)', essential: true, note: 'Same as France/Spain plugs' },
      { name: 'Portable power bank (10,000+ mAh)', essential: true, note: 'Essential for long day trips' },
      { name: 'Camera + memory cards', essential: false, note: 'Morocco is extremely photogenic' },
      { name: 'Universal adapter (if from non-EU country)', essential: true },
      { name: 'Headphones / earbuds', essential: false },
      { name: 'E-reader or tablet', essential: false },
      ...(tripType === 'desert' || tripType === 'mixed'
        ? [
            { name: 'Flashlight / headlamp for desert camp', essential: true, note: 'No electricity in desert camps' },
            { name: 'Ziplock bag for phone (sand protection)', essential: false },
          ]
        : []),
      ...(tripType === 'mountain' || tripType === 'mixed'
        ? [{ name: 'Headlamp for mountain huts', essential: false, note: 'Power can be limited in refuges' }]
        : []),
      ...(duration !== 'weekend'
        ? [{ name: 'Laptop + charger (if needed for work)', essential: false }]
        : []),
    ],
  })

  /* ---- Morocco Cultural Essentials ---- */
  categories.push({
    category: 'Morocco Cultural Essentials',
    icon: Star,
    items: [
      { name: 'Headscarf for mosque visits (women)', essential: true, note: 'Hassan II Mosque requires it' },
      { name: 'Modest clothing for medinas', essential: true, note: 'Covers shoulders and knees for both genders' },
      { name: 'Comfortable shoes for cobblestones', essential: true, note: 'Medina streets are uneven and narrow' },
      { name: 'Daypack / small backpack', essential: true, note: 'Large bags are hard in crowded medinas' },
      { name: 'Reusable water bottle', essential: true, note: 'Refill at riads, avoid single-use plastic' },
      { name: 'Phrasebook or language app (Arabic/French)', essential: false, note: 'Moroccans appreciate the effort' },
      { name: 'Offline maps (download Google Maps/Maps.me)', essential: true, note: 'GPS works without data' },
      { name: 'Small gifts from home', essential: false, note: 'Appreciated for cultural exchange with locals' },
      { name: 'Earplugs', essential: false, note: 'For the 4:30am call to prayer near mosques' },
      { name: 'Padlock for hostel lockers', essential: false },
      { name: 'Toilet paper / tissues', essential: true, note: 'Not always available in public restrooms' },
      { name: 'Ziplock bags for souk spice purchases', essential: false, note: 'Keeps luggage clean and fragrant' },
      { name: 'Pen (for immigration forms)', essential: true },
    ],
  })

  /* ---- Money & Security ---- */
  categories.push({
    category: 'Money & Security',
    icon: Shield,
    items: [
      { name: 'Credit card (Visa/Mastercard widely accepted)', essential: true, note: 'Notify bank of travel dates' },
      { name: 'Debit card (for ATM withdrawals)', essential: true, note: 'ATMs available in all cities' },
      { name: 'Some EUR/USD cash for arrival exchange', essential: true, note: 'MAD cannot be bought outside Morocco' },
      { name: 'Money belt or hidden pouch', essential: true, note: 'Keep valuables close in busy medinas' },
      { name: 'Small bills for tipping (once you have MAD)', essential: false, note: '10-20 MAD notes are most useful' },
      { name: 'Backup card in separate location', essential: false, note: 'In case primary card is lost' },
      ...(duration !== 'weekend'
        ? [{ name: 'Card emergency numbers written separately', essential: true }]
        : []),
    ],
  })

  /* ---- Extended Trip Extras ---- */
  if (duration === '2weeks' || duration === '3weeks') {
    categories.push({
      category: 'Extended Trip Extras',
      icon: Luggage,
      items: [
        { name: 'Laundry detergent packets (travel size)', essential: false, note: 'Laundry services are cheap: 30-50 MAD/kg' },
        { name: 'Clothesline / travel hangers', essential: false },
        { name: 'Extra ziplock bags (various sizes)', essential: false },
        { name: 'Journal / notebook', essential: false },
        { name: 'Playing cards / travel games', essential: false },
        { name: 'Packing cubes for organization', essential: false, note: 'Game-changer for longer trips' },
        { name: 'Compression bags for dirty clothes', essential: false },
        { name: 'Extra memory cards for camera', essential: false },
        { name: 'Small sewing kit', essential: false },
      ],
    })
  }

  return categories
}

/* ================================================================== */
/*  Cultural Tips                                                      */
/* ================================================================== */
const CULTURAL_DRESS_TIPS = [
  'Morocco is a Muslim country. Dress modestly in public, especially in medinas, rural areas, and religious sites.',
  'Women should cover shoulders and knees. A light scarf is useful for mosque visits and sun protection.',
  'Men should avoid sleeveless shirts and very short shorts outside beach areas.',
  'Swimwear is appropriate at hotel pools and designated beaches only, not in towns.',
  'Non-Muslims can only enter Hassan II Mosque in Casablanca. Remove shoes before entering.',
  'In the desert, covering up protects from sun and sand, not just for cultural reasons.',
  'Upscale restaurants and hotels in Marrakech may expect smart-casual dress codes.',
  'Bright colors and patterns are welcomed and appreciated in Moroccan culture.',
]

const PACKING_TIPS = [
  'Pack light. You will want room for souvenirs and souk purchases.',
  'Bring a collapsible bag for shopping days in the medina.',
  'Layer clothing. Morocco can have 20-degree temperature swings between day and night.',
  'Wear shoes you can slip on and off easily. You remove shoes when entering homes and riads.',
  'A sarong or large scarf is the most versatile item: sun cover, beach blanket, modesty layer, pillow.',
]

/* ================================================================== */
/*  COMPONENT                                                          */
/* ================================================================== */
export default function PackingListPage() {
  const [tripType, setTripType] = useState<TripType>('mixed')
  const [season, setSeason] = useState<Season>('spring')
  const [duration, setDuration] = useState<Duration>('1week')
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())
  const [generated, setGenerated] = useState(false)
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set())
  const [showEssentialOnly, setShowEssentialOnly] = useState(false)

  const packingList = useMemo(
    () => generatePackingList(tripType, season, duration),
    [tripType, season, duration]
  )

  const totalItems = useMemo(
    () => packingList.reduce((sum, cat) => sum + cat.items.length, 0),
    [packingList]
  )

  const essentialItems = useMemo(
    () => packingList.reduce((sum, cat) => sum + cat.items.filter((i) => i.essential).length, 0),
    [packingList]
  )

  const checkedEssentials = useMemo(
    () => {
      let count = 0
      packingList.forEach((cat) => {
        cat.items.forEach((item) => {
          if (item.essential && checkedItems.has(item.name)) count++
        })
      })
      return count
    },
    [packingList, checkedItems]
  )

  const toggleItem = useCallback((itemName: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev)
      if (next.has(itemName)) {
        next.delete(itemName)
      } else {
        next.add(itemName)
      }
      return next
    })
  }, [])

  const toggleCategory = useCallback((category: string) => {
    setCollapsedCategories((prev) => {
      const next = new Set(prev)
      if (next.has(category)) {
        next.delete(category)
      } else {
        next.add(category)
      }
      return next
    })
  }, [])

  const handleGenerate = useCallback(() => {
    setCheckedItems(new Set())
    setCollapsedCategories(new Set())
    setGenerated(true)
  }, [])

  const handleReset = useCallback(() => {
    setCheckedItems(new Set())
  }, [])

  const handleCheckAllEssentials = useCallback(() => {
    const essentials = new Set(checkedItems)
    packingList.forEach((cat) => {
      cat.items.forEach((item) => {
        if (item.essential) essentials.add(item.name)
      })
    })
    setCheckedItems(essentials)
  }, [packingList, checkedItems])

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
              <ClipboardList className="h-7 w-7 text-[#C4960C]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#FAF8F5] font-serif">
                Packing Checklist
              </h1>
              <p className="text-[#FAF8F5]/50 mt-1">
                Morocco-specific packing list tailored to your trip
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Configuration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 md:p-8 rounded-2xl bg-white border border-[#1A1814]/5 shadow-sm mb-8"
        >
          {/* Trip Type */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-[#1A1814] mb-4 font-serif flex items-center gap-2">
              <Compass className="h-5 w-5 text-[#C4960C]" />
              Trip Type
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {TRIP_TYPES.map((t) => {
                const Icon = t.icon
                return (
                  <button
                    key={t.id}
                    onClick={() => setTripType(t.id)}
                    className={cn(
                      'p-4 rounded-xl border text-center transition-all',
                      tripType === t.id
                        ? 'border-[#C4960C] bg-[#C4960C]/5 shadow-md'
                        : 'border-[#1A1814]/5 hover:border-[#C4960C]/30 hover:bg-[#FAF8F5]'
                    )}
                  >
                    <Icon className={cn(
                      'h-6 w-6 mx-auto mb-2',
                      tripType === t.id ? 'text-[#C4960C]' : 'text-[#1A1814]/25'
                    )} />
                    <div className="text-sm font-bold text-[#1A1814]">{t.label}</div>
                    <div className="text-[10px] text-[#1A1814]/40 mt-0.5">{t.description}</div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Season */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-[#1A1814] mb-4 font-serif flex items-center gap-2">
              <Sun className="h-5 w-5 text-[#C4960C]" />
              Season
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SEASONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSeason(s.id)}
                  className={cn(
                    'p-4 rounded-xl border text-center transition-all',
                    season === s.id
                      ? 'border-[#C4960C] bg-[#C4960C]/5 shadow-md'
                      : 'border-[#1A1814]/5 hover:border-[#C4960C]/30 hover:bg-[#FAF8F5]'
                  )}
                >
                  <div className="text-sm font-bold text-[#1A1814]">{s.label}</div>
                  <div className="text-[10px] text-[#1A1814]/40">{s.months}</div>
                  <div className="text-[10px] font-semibold text-[#C4960C] mt-1">{s.temp}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-[#1A1814] mb-4 font-serif flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-[#C4960C]" />
              Duration
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {DURATIONS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDuration(d.id)}
                  className={cn(
                    'p-4 rounded-xl border text-center transition-all',
                    duration === d.id
                      ? 'border-[#C4960C] bg-[#C4960C]/5 shadow-md'
                      : 'border-[#1A1814]/5 hover:border-[#C4960C]/30 hover:bg-[#FAF8F5]'
                  )}
                >
                  <div className="text-sm font-bold text-[#1A1814]">{d.label}</div>
                  <div className="text-[10px] text-[#1A1814]/40">{d.subtext}</div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full py-4 rounded-xl bg-[#1A1814] text-[#FAF8F5] font-bold hover:bg-[#C4960C] transition-colors shadow-lg flex items-center justify-center gap-2 text-sm"
          >
            <ClipboardList className="h-5 w-5" />
            Generate My Packing List
          </button>
        </motion.div>

        {/* Generated List */}
        {generated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Progress bar */}
            <div className="p-5 rounded-xl bg-white border border-[#1A1814]/5 shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-3">
                <div>
                  <span className="text-sm font-bold text-[#1A1814]">
                    Packed: {checkedItems.size} / {totalItems}
                  </span>
                  <span className="text-xs text-[#1A1814]/30 ml-2">
                    ({checkedEssentials}/{essentialItems} essentials)
                  </span>
                </div>
                <div className="flex gap-2 no-print flex-wrap">
                  <button
                    onClick={() => setShowEssentialOnly(!showEssentialOnly)}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1',
                      showEssentialOnly
                        ? 'bg-[#C4960C] text-white'
                        : 'bg-[#FAF8F5] text-[#1A1814]/50 hover:bg-[#C4960C]/10'
                    )}
                  >
                    <Star className="h-3 w-3" />
                    Essentials Only
                  </button>
                  <button
                    onClick={handleCheckAllEssentials}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FAF8F5] text-[#1A1814]/50 hover:bg-[#C4960C]/10 transition-colors flex items-center gap-1"
                  >
                    <Check className="h-3 w-3" />
                    Check All Essentials
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FAF8F5] text-[#1A1814]/50 hover:bg-[#C4960C]/10 transition-colors flex items-center gap-1"
                  >
                    <RotateCcw className="h-3 w-3" />
                    Reset
                  </button>
                  <button
                    onClick={handlePrint}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FAF8F5] text-[#1A1814]/50 hover:bg-[#C4960C]/10 transition-colors flex items-center gap-1"
                  >
                    <Printer className="h-3 w-3" />
                    Print
                  </button>
                </div>
              </div>
              <div className="h-2.5 rounded-full bg-[#FAF8F5] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#C4960C] to-[#A0522D] transition-all duration-500"
                  style={{ width: `${totalItems > 0 ? (checkedItems.size / totalItems) * 100 : 0}%` }}
                />
              </div>
              {checkedItems.size === totalItems && totalItems > 0 && (
                <div className="mt-3 text-center text-sm font-bold text-[#C4960C]">
                  All packed! You are ready for Morocco.
                </div>
              )}
            </div>

            {/* Categories */}
            <div className="space-y-4">
              {packingList.map((cat) => {
                const isCollapsed = collapsedCategories.has(cat.category)
                const Icon = cat.icon
                const filteredItems = showEssentialOnly
                  ? cat.items.filter((i) => i.essential)
                  : cat.items
                const checkedCount = cat.items.filter((i) => checkedItems.has(i.name)).length
                const allChecked = checkedCount === cat.items.length

                if (showEssentialOnly && filteredItems.length === 0) return null

                return (
                  <div
                    key={cat.category}
                    className={cn(
                      'rounded-2xl bg-white border shadow-sm transition-all',
                      allChecked ? 'border-[#C4960C]/20 bg-[#C4960C]/[0.02]' : 'border-[#1A1814]/5'
                    )}
                  >
                    <button
                      onClick={() => toggleCategory(cat.category)}
                      className="w-full p-5 flex items-center gap-3 text-left"
                    >
                      <Icon className={cn(
                        'h-5 w-5 shrink-0',
                        allChecked ? 'text-[#C4960C]' : 'text-[#1A1814]/30'
                      )} />
                      <h3 className="text-base font-bold text-[#1A1814] flex-1 font-serif">
                        {cat.category}
                      </h3>
                      <span className={cn(
                        'text-xs font-semibold px-2.5 py-1 rounded-full',
                        allChecked
                          ? 'bg-[#C4960C]/10 text-[#C4960C]'
                          : 'bg-[#FAF8F5] text-[#1A1814]/40'
                      )}>
                        {checkedCount}/{cat.items.length}
                      </span>
                      {isCollapsed ? (
                        <ChevronDown className="h-4 w-4 text-[#1A1814]/30 shrink-0" />
                      ) : (
                        <ChevronUp className="h-4 w-4 text-[#1A1814]/30 shrink-0" />
                      )}
                    </button>

                    {!isCollapsed && (
                      <div className="px-5 pb-5 space-y-1">
                        {filteredItems.map((item) => {
                          const isChecked = checkedItems.has(item.name)
                          return (
                            <button
                              key={item.name}
                              onClick={() => toggleItem(item.name)}
                              className={cn(
                                'w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all',
                                isChecked ? 'bg-[#C4960C]/5' : 'hover:bg-[#FAF8F5]'
                              )}
                            >
                              <div
                                className={cn(
                                  'h-5 w-5 rounded border-2 flex items-center justify-center shrink-0 transition-all mt-0.5',
                                  isChecked
                                    ? 'bg-[#C4960C] border-[#C4960C]'
                                    : 'border-[#1A1814]/15 bg-white'
                                )}
                              >
                                {isChecked && <Check className="h-3 w-3 text-white" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <span
                                  className={cn(
                                    'text-sm transition-all block',
                                    isChecked
                                      ? 'text-[#1A1814]/30 line-through'
                                      : 'text-[#1A1814]'
                                  )}
                                >
                                  {item.name}
                                </span>
                                {item.note && !isChecked && (
                                  <span className="text-[10px] text-[#A0522D]/60 block mt-0.5">
                                    {item.note}
                                  </span>
                                )}
                              </div>
                              {item.essential && !isChecked && (
                                <span className="shrink-0 px-2 py-0.5 rounded-full bg-[#C4960C]/10 text-[#C4960C] text-[10px] font-bold mt-0.5">
                                  Essential
                                </span>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Packing Tips */}
            <div className="mt-8 p-6 md:p-8 rounded-2xl bg-white border border-[#C4960C]/10">
              <h2 className="text-lg font-bold text-[#1A1814] mb-4 flex items-center gap-2 font-serif">
                <Luggage className="h-5 w-5 text-[#C4960C]" />
                Smart Packing Tips
              </h2>
              <div className="space-y-3">
                {PACKING_TIPS.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#1A1814]/60">
                    <span className="shrink-0 h-6 w-6 rounded-lg bg-[#C4960C]/10 text-[#C4960C] text-xs flex items-center justify-center font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cultural Tips */}
            <div className="mt-6 p-6 md:p-8 rounded-2xl bg-[#1A1814] relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
              <div className="relative">
                <h2 className="text-lg font-bold text-[#FAF8F5] mb-5 flex items-center gap-2 font-serif">
                  <Info className="h-5 w-5 text-[#C4960C]" />
                  Cultural Dress Code Tips
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CULTURAL_DRESS_TIPS.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[#FAF8F5]/50">
                      <span className="shrink-0 h-6 w-6 rounded-lg bg-[#C4960C]/20 text-[#C4960C] text-xs flex items-center justify-center font-bold mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  )
}
