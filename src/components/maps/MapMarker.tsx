'use client'

import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

export interface MapMarkerData {
  id: string
  name: string
  lat: number
  lng: number
  description: string
  category: 'city' | 'attraction' | 'hotel' | 'restaurant'
  region?: string
  link?: string
}

/* ─── Custom Icon Factory ─── */
const CATEGORY_COLORS: Record<string, string> = {
  city: '#1B4965',
  attraction: '#C49B20',
  hotel: '#8B1A1A',
  restaurant: '#1E6B4E',
}

function createIcon(category: string) {
  const color = CATEGORY_COLORS[category] || '#1B4965'
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background: ${color};
      width: 32px;
      height: 32px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="transform: rotate(45deg); color: white; font-size: 14px; font-weight: bold;">
        ${category === 'city' ? '&#9679;' : category === 'attraction' ? '&#9733;' : category === 'hotel' ? '&#8962;' : '&#9832;'}
      </div>
    </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  })
}

interface MapMarkerProps {
  marker: MapMarkerData
}

export default function MapMarkerComponent({ marker }: MapMarkerProps) {
  const icon = createIcon(marker.category)

  return (
    <Marker position={[marker.lat, marker.lng]} icon={icon}>
      <Popup>
        <div className="min-w-[200px]">
          <div
            className="h-24 rounded-t-lg mb-2 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${CATEGORY_COLORS[marker.category]}22, ${CATEGORY_COLORS[marker.category]}44)` }}
          >
            <MapPin className="h-8 w-8" style={{ color: CATEGORY_COLORS[marker.category] }} />
          </div>
          <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--text-primary, #14202A)' }}>
            {marker.name}
          </h3>
          {marker.region && (
            <span className="text-xs px-2 py-0.5 rounded-full inline-block mb-1"
              style={{ background: `${CATEGORY_COLORS[marker.category]}15`, color: CATEGORY_COLORS[marker.category] }}
            >
              {marker.region}
            </span>
          )}
          <p className="text-xs mb-2" style={{ color: 'var(--text-secondary, #3D4F5E)' }}>
            {marker.description}
          </p>
          {marker.link && (
            <Link
              href={marker.link}
              className="text-xs font-medium hover:underline"
              style={{ color: CATEGORY_COLORS[marker.category] }}
            >
              Explore &rarr;
            </Link>
          )}
        </div>
      </Popup>
    </Marker>
  )
}
