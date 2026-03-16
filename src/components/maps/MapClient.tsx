'use client'

import { useState, useMemo } from 'react'
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
import MapMarkerComponent, { type MapMarkerData } from './MapMarker'
import { Search, Filter, X, MapPin, Star, Building2, UtensilsCrossed, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import 'leaflet/dist/leaflet.css'

/* ─── Full Marker Dataset ─── */
const ALL_MARKERS: MapMarkerData[] = [
  // ─── Cities ───
  { id: 'marrakech', name: 'Marrakech', lat: 31.6295, lng: -7.9811, description: 'The Red City - vibrant souks, palaces, and gardens', category: 'city', region: 'Marrakech-Safi', link: '/cities/marrakech' },
  { id: 'fes', name: 'Fes', lat: 34.0331, lng: -5.0003, description: 'Spiritual capital with the world\'s largest medieval medina', category: 'city', region: 'Fes-Meknes', link: '/cities/fes' },
  { id: 'casablanca', name: 'Casablanca', lat: 33.5731, lng: -7.5898, description: 'Economic capital with stunning Hassan II Mosque', category: 'city', region: 'Casablanca-Settat', link: '/cities/casablanca' },
  { id: 'rabat', name: 'Rabat', lat: 34.0209, lng: -6.8416, description: 'Political capital with historic kasbahs and coastal charm', category: 'city', region: 'Rabat-Sale-Kenitra', link: '/cities/rabat' },
  { id: 'tangier', name: 'Tangier', lat: 35.7595, lng: -5.834, description: 'Gateway to Africa where Atlantic meets Mediterranean', category: 'city', region: 'Tanger-Tetouan-Al Hoceima', link: '/cities/tangier' },
  { id: 'chefchaouen', name: 'Chefchaouen', lat: 35.1688, lng: -5.2636, description: 'The Blue Pearl nestled in the Rif Mountains', category: 'city', region: 'Tanger-Tetouan-Al Hoceima', link: '/cities/chefchaouen' },
  { id: 'essaouira', name: 'Essaouira', lat: 31.5085, lng: -9.7595, description: 'Laid-back coastal town for wind sports and art', category: 'city', region: 'Marrakech-Safi', link: '/cities/essaouira' },
  { id: 'merzouga', name: 'Merzouga', lat: 31.0801, lng: -4.0134, description: 'Gateway to the Sahara and Erg Chebbi dunes', category: 'city', region: 'Draa-Tafilalet', link: '/cities/merzouga' },
  { id: 'ouarzazate', name: 'Ouarzazate', lat: 30.9189, lng: -6.8936, description: 'Hollywood of Africa with ancient kasbahs', category: 'city', region: 'Draa-Tafilalet', link: '/cities/ouarzazate' },
  { id: 'agadir', name: 'Agadir', lat: 30.4278, lng: -9.5981, description: 'Premier beach resort on the Atlantic coast', category: 'city', region: 'Souss-Massa', link: '/cities/agadir' },
  { id: 'meknes', name: 'Meknes', lat: 33.8935, lng: -5.5473, description: 'Imperial city with monumental gates and granaries', category: 'city', region: 'Fes-Meknes', link: '/cities/meknes' },
  { id: 'dakhla', name: 'Dakhla', lat: 23.6848, lng: -15.957, description: 'Remote Saharan peninsula for kitesurfing', category: 'city', region: 'Dakhla-Oued Ed-Dahab', link: '/cities/dakhla' },
  { id: 'taghazout', name: 'Taghazout', lat: 30.544, lng: -9.7084, description: 'Bohemian surf village with world-class waves', category: 'city', region: 'Souss-Massa', link: '/cities/taghazout' },
  { id: 'ifrane', name: 'Ifrane', lat: 33.5228, lng: -5.1108, description: 'The "Switzerland of Morocco" in the Middle Atlas', category: 'city', region: 'Fes-Meknes' },
  { id: 'tetouan', name: 'Tetouan', lat: 35.5784, lng: -5.3684, description: 'UNESCO-listed medina with Andalusian influence', category: 'city', region: 'Tanger-Tetouan-Al Hoceima' },
  { id: 'errachidia', name: 'Errachidia', lat: 31.9326, lng: -4.4266, description: 'Desert gateway to the Ziz Valley and gorges', category: 'city', region: 'Draa-Tafilalet' },
  { id: 'midelt', name: 'Midelt', lat: 32.6827, lng: -4.7445, description: 'Between two Atlas ranges, apple capital of Morocco', category: 'city', region: 'Draa-Tafilalet' },
  { id: 'nador', name: 'Nador', lat: 35.1744, lng: -2.9287, description: 'Mediterranean port city near Marchica lagoon', category: 'city', region: 'Oriental' },
  { id: 'oujda', name: 'Oujda', lat: 34.6805, lng: -1.9076, description: 'Eastern Morocco near the Algerian border', category: 'city', region: 'Oriental' },
  { id: 'safi', name: 'Safi', lat: 32.2994, lng: -9.2372, description: 'Pottery capital of Morocco on the Atlantic', category: 'city', region: 'Marrakech-Safi' },
  { id: 'eljadida', name: 'El Jadida', lat: 33.2316, lng: -8.5007, description: 'Portuguese-built cistern and fortified city', category: 'city', region: 'Casablanca-Settat' },
  { id: 'beni-mellal', name: 'Beni Mellal', lat: 32.337, lng: -6.3498, description: 'Agricultural city at the foot of the Atlas', category: 'city', region: 'Beni Mellal-Khenifra' },
  { id: 'taza', name: 'Taza', lat: 34.2100, lng: -4.0100, description: 'Historic city with Tazekka National Park', category: 'city', region: 'Fes-Meknes' },
  { id: 'al-hoceima', name: 'Al Hoceima', lat: 35.2517, lng: -3.9372, description: 'Mediterranean beaches and Rif mountain hiking', category: 'city', region: 'Tanger-Tetouan-Al Hoceima' },
  { id: 'taroudant', name: 'Taroudant', lat: 30.4727, lng: -8.8748, description: 'Little Marrakech with impressive ramparts', category: 'city', region: 'Souss-Massa' },
  { id: 'tiznit', name: 'Tiznit', lat: 29.6974, lng: -9.8022, description: 'Silver jewelry capital of southern Morocco', category: 'city', region: 'Souss-Massa' },
  { id: 'moulay-idriss', name: 'Moulay Idriss Zerhoun', lat: 34.0554, lng: -5.5234, description: 'Sacred holy city overlooking the valley', category: 'city', region: 'Fes-Meknes' },
  { id: 'azrou', name: 'Azrou', lat: 33.4342, lng: -5.2222, description: 'Cedar forests with Barbary macaques', category: 'city', region: 'Fes-Meknes' },
  { id: 'tinghir', name: 'Tinghir', lat: 31.5145, lng: -5.5327, description: 'Gateway to the stunning Todra Gorge', category: 'city', region: 'Draa-Tafilalet' },
  { id: 'zagora', name: 'Zagora', lat: 30.3340, lng: -5.8383, description: 'Starting point for Saharan expeditions, 52 days to Timbuktu', category: 'city', region: 'Draa-Tafilalet' },

  // ─── Attractions ───
  { id: 'jemaa-el-fnaa', name: 'Jemaa el-Fnaa', lat: 31.6258, lng: -7.9891, description: 'UNESCO-listed main square and cultural space', category: 'attraction', region: 'Marrakech' },
  { id: 'hassan-ii-mosque', name: 'Hassan II Mosque', lat: 33.6086, lng: -7.6329, description: 'Largest mosque in Africa, partly over the ocean', category: 'attraction', region: 'Casablanca' },
  { id: 'ait-benhaddou', name: 'Ait Benhaddou', lat: 31.0472, lng: -7.1281, description: 'UNESCO kasbah, Game of Thrones filming location', category: 'attraction', region: 'Ouarzazate' },
  { id: 'volubilis', name: 'Volubilis', lat: 34.0724, lng: -5.5547, description: 'Best-preserved Roman ruins in North Africa', category: 'attraction', region: 'Meknes' },
  { id: 'todra-gorge', name: 'Todra Gorge', lat: 31.5895, lng: -5.5850, description: 'Dramatic 300m-high canyon walls for rock climbing', category: 'attraction', region: 'Tinghir' },
  { id: 'dades-gorge', name: 'Dades Gorge', lat: 31.4621, lng: -5.9567, description: 'Winding road through spectacular red rock formations', category: 'attraction', region: 'Ouarzazate' },
  { id: 'erg-chebbi', name: 'Erg Chebbi Dunes', lat: 31.1500, lng: -3.9667, description: 'Morocco\'s highest sand dunes reaching 150m', category: 'attraction', region: 'Merzouga' },
  { id: 'majorelle', name: 'Majorelle Garden', lat: 31.6416, lng: -8.0034, description: 'Iconic blue garden restored by Yves Saint Laurent', category: 'attraction', region: 'Marrakech' },
  { id: 'caves-hercules', name: 'Caves of Hercules', lat: 35.7618, lng: -5.9384, description: 'Sea caves shaped like the map of Africa', category: 'attraction', region: 'Tangier' },
  { id: 'chellah', name: 'Chellah Necropolis', lat: 33.9997, lng: -6.8134, description: 'Roman and medieval ruins with stork colonies', category: 'attraction', region: 'Rabat' },

  // ─── Hotels ───
  { id: 'la-mamounia', name: 'La Mamounia', lat: 31.6201, lng: -7.9967, description: 'Legendary 5-star palace hotel in Marrakech', category: 'hotel', region: 'Marrakech' },
  { id: 'royal-mansour', name: 'Royal Mansour', lat: 31.6225, lng: -7.9943, description: 'Ultra-luxury riads within a riad complex', category: 'hotel', region: 'Marrakech' },
  { id: 'kasbah-tamadot', name: 'Kasbah Tamadot', lat: 31.3600, lng: -7.8500, description: 'Richard Branson\'s Atlas mountain retreat', category: 'hotel', region: 'Atlas Mountains' },
  { id: 'palais-faraj', name: 'Palais Faraj', lat: 34.0619, lng: -4.9770, description: 'Luxury hotel with panoramic views of Fes medina', category: 'hotel', region: 'Fes' },

  // ─── Restaurants ───
  { id: 'nomad-marrakech', name: 'NOMAD', lat: 31.6284, lng: -7.9870, description: 'Modern Moroccan rooftop dining in the souk', category: 'restaurant', region: 'Marrakech' },
  { id: 'le-jardin', name: 'Le Jardin', lat: 31.6290, lng: -7.9860, description: 'Hidden garden restaurant in the medina', category: 'restaurant', region: 'Marrakech' },
  { id: 'cafe-clock-fes', name: 'Cafe Clock', lat: 34.0615, lng: -4.9730, description: 'Cultural cafe famous for camel burger', category: 'restaurant', region: 'Fes' },
  { id: 'rick-cafe', name: "Rick's Cafe", lat: 33.6010, lng: -7.6120, description: 'Inspired by the classic Casablanca film', category: 'restaurant', region: 'Casablanca' },
]

/* ─── Regions for filtering ─── */
const REGIONS = [
  'All Regions',
  'Marrakech-Safi',
  'Fes-Meknes',
  'Casablanca-Settat',
  'Rabat-Sale-Kenitra',
  'Tanger-Tetouan-Al Hoceima',
  'Draa-Tafilalet',
  'Souss-Massa',
  'Oriental',
  'Dakhla-Oued Ed-Dahab',
  'Beni Mellal-Khenifra',
]

const CATEGORY_LABELS: Record<string, { label: string; icon: React.ElementType; color: string }> = {
  city: { label: 'Cities', icon: MapPin, color: '#1B4965' },
  attraction: { label: 'Attractions', icon: Star, color: '#C49B20' },
  hotel: { label: 'Hotels', icon: Building2, color: '#8B1A1A' },
  restaurant: { label: 'Restaurants', icon: UtensilsCrossed, color: '#1E6B4E' },
}

export default function MapClient() {
  const [search, setSearch] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('All Regions')
  const [activeCategories, setActiveCategories] = useState<Set<string>>(
    new Set(['city', 'attraction', 'hotel', 'restaurant'])
  )
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const filteredMarkers = useMemo(() => {
    return ALL_MARKERS.filter((m) => {
      if (!activeCategories.has(m.category)) return false
      if (selectedRegion !== 'All Regions' && m.region !== selectedRegion) return false
      if (search && !m.name.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [search, selectedRegion, activeCategories])

  const toggleCategory = (cat: string) => {
    setActiveCategories((prev) => {
      const next = new Set(prev)
      if (next.has(cat)) {
        next.delete(cat)
      } else {
        next.add(cat)
      }
      return next
    })
  }

  return (
    <div className="relative h-[calc(100vh-200px)] min-h-[500px] flex">
      {/* Sidebar */}
      <div
        className={cn(
          'absolute md:relative z-20 h-full bg-[var(--surface)] border-r border-[var(--border-light)] transition-all duration-300 overflow-hidden',
          sidebarOpen ? 'w-80' : 'w-0 md:w-80'
        )}
      >
        <div className="w-80 h-full flex flex-col p-4 overflow-y-auto">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search places..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--text-primary)] focus:border-[var(--color-primary)] outline-none"
            />
          </div>

          {/* Region Filter */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-[var(--text-muted)] mb-1">Region</label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text-primary)] focus:border-[var(--color-primary)] outline-none"
            >
              {REGIONS.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* Category Toggles */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-[var(--text-muted)] mb-2">Layers</label>
            <div className="space-y-1.5">
              {Object.entries(CATEGORY_LABELS).map(([key, { label, icon: Icon, color }]) => (
                <button
                  key={key}
                  onClick={() => toggleCategory(key)}
                  className={cn(
                    'w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all',
                    activeCategories.has(key)
                      ? 'bg-opacity-10 font-medium'
                      : 'opacity-50 hover:opacity-75'
                  )}
                  style={{
                    backgroundColor: activeCategories.has(key) ? `${color}15` : 'transparent',
                    color: activeCategories.has(key) ? color : 'var(--text-muted)',
                  }}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                  <span className="ml-auto text-xs opacity-70">
                    {ALL_MARKERS.filter((m) => m.category === key).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* City List */}
          <div className="flex-1 overflow-y-auto">
            <div className="text-xs font-medium text-[var(--text-muted)] mb-2">
              {filteredMarkers.length} places shown
            </div>
            <div className="space-y-1">
              {filteredMarkers.map((m) => {
                const catInfo = CATEGORY_LABELS[m.category]
                return (
                  <div
                    key={m.id}
                    className="p-2 rounded-lg hover:bg-[var(--surface-muted)] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="h-2.5 w-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: catInfo.color }}
                      />
                      <span className="text-sm text-[var(--text-primary)] font-medium truncate">
                        {m.name}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] ml-[18px] truncate">
                      {m.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute top-4 left-4 z-30 md:hidden h-10 w-10 rounded-lg bg-[var(--surface)] border border-[var(--border-light)] shadow-md flex items-center justify-center"
      >
        {sidebarOpen ? <X className="h-5 w-5" /> : <Filter className="h-5 w-5" />}
      </button>

      {/* Map */}
      <div className="flex-1 relative">
        <MapContainer
          center={[31.7917, -7.0926]}
          zoom={6}
          className="h-full w-full"
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredMarkers.map((marker) => (
            <MapMarkerComponent key={marker.id} marker={marker} />
          ))}
        </MapContainer>

        {/* Legend */}
        <div className="absolute bottom-4 right-4 z-20 bg-[var(--surface)] border border-[var(--border-light)] rounded-xl p-3 shadow-lg">
          <div className="text-xs font-bold text-[var(--text-primary)] mb-2">Legend</div>
          <div className="space-y-1.5">
            {Object.entries(CATEGORY_LABELS).map(([key, { label, color }]) => (
              <div key={key} className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: color }}
                />
                <span className="text-xs text-[var(--text-secondary)]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
