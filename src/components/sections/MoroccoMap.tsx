'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, ExternalLink } from 'lucide-react';

interface CityMarker {
  name: string;
  slug: string;
  lat: number;
  lng: number;
  attractions: number;
  description: string;
  image: string;
  tags: string[];
}

const CITIES: CityMarker[] = [
  { name: 'Marrakech', slug: 'marrakech', lat: 31.6295, lng: -7.9811, attractions: 156, description: 'The Red City — vibrant souks, palaces & Jemaa el-Fnaa', image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=300&h=200&fit=crop', tags: ['Imperial City', 'Must Visit'] },
  { name: 'Fes', slug: 'fes', lat: 34.0331, lng: -5.0003, attractions: 124, description: 'World\'s largest car-free urban area & spiritual capital', image: 'https://images.unsplash.com/photo-1579019163248-e7761241d85a?w=300&h=200&fit=crop', tags: ['Imperial City', 'UNESCO'] },
  { name: 'Casablanca', slug: 'casablanca', lat: 33.5731, lng: -7.5898, attractions: 98, description: 'Morocco\'s economic capital with the Hassan II Mosque', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=300&h=200&fit=crop', tags: ['Modern City', 'Coastal'] },
  { name: 'Chefchaouen', slug: 'chefchaouen', lat: 35.1688, lng: -5.2636, attractions: 48, description: 'The Blue Pearl nestled in the Rif Mountains', image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=300&h=200&fit=crop', tags: ['Blue City', 'Photography'] },
  { name: 'Essaouira', slug: 'essaouira', lat: 31.5085, lng: -9.7595, attractions: 62, description: 'Windswept coastal charm with Portuguese ramparts', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=200&fit=crop', tags: ['Coastal', 'Surf'] },
  { name: 'Tangier', slug: 'tangier', lat: 35.7595, lng: -5.834, attractions: 72, description: 'Gateway to Africa where Atlantic meets Mediterranean', image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=300&h=200&fit=crop', tags: ['Coastal', 'Gateway'] },
  { name: 'Rabat', slug: 'rabat', lat: 34.0209, lng: -6.8416, attractions: 86, description: 'Morocco\'s elegant capital with UNESCO heritage sites', image: 'https://images.unsplash.com/photo-1570698473651-b2de99bae12f?w=300&h=200&fit=crop', tags: ['Capital', 'Imperial City'] },
  { name: 'Agadir', slug: 'agadir', lat: 30.4278, lng: -9.5981, attractions: 56, description: 'Morocco\'s premier beach resort with year-round sunshine', image: 'https://images.unsplash.com/photo-1548018560-c7196e91a5e0?w=300&h=200&fit=crop', tags: ['Beach', 'Resort'] },
  { name: 'Ouarzazate', slug: 'ouarzazate', lat: 30.9189, lng: -6.8936, attractions: 44, description: 'Gateway to the Sahara & Hollywood of Africa', image: 'https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=300&h=200&fit=crop', tags: ['Desert Gate', 'Film'] },
  { name: 'Merzouga', slug: 'merzouga', lat: 31.0801, lng: -4.0134, attractions: 34, description: 'Gateway to Erg Chebbi dunes & Sahara adventures', image: 'https://images.unsplash.com/photo-1507209696998-3c532be9b1b4?w=300&h=200&fit=crop', tags: ['Sahara', 'Adventure'] },
  { name: 'Meknes', slug: 'meknes', lat: 33.8935, lng: -5.5473, attractions: 68, description: 'The Versailles of Morocco with grand Bab Mansour', image: 'https://images.unsplash.com/photo-1560702516-4e0a23dcab3c?w=300&h=200&fit=crop', tags: ['Imperial City', 'UNESCO'] },
  { name: 'Dakhla', slug: 'dakhla', lat: 23.6848, lng: -15.957, attractions: 28, description: 'Kitesurfing paradise on the Atlantic peninsula', image: 'https://images.unsplash.com/photo-1505881502353-a1986add3762?w=300&h=200&fit=crop', tags: ['Kitesurf', 'Remote'] },
  { name: 'Ifrane', slug: 'ifrane', lat: 33.5228, lng: -5.1107, attractions: 22, description: 'Morocco\'s Little Switzerland in the Middle Atlas', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=200&fit=crop', tags: ['Mountain', 'Ski'] },
  { name: 'Tetouan', slug: 'tetouan', lat: 35.5784, lng: -5.3684, attractions: 38, description: 'The White Dove with Andalusian UNESCO medina', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=300&h=200&fit=crop', tags: ['UNESCO', 'Coastal'] },
];

export default function MoroccoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityMarker | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Load leaflet CSS via link tag
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    let cancelled = false;

    // Dynamically import Leaflet
    import('leaflet').then((L) => {
      if (cancelled || !mapRef.current || mapInstanceRef.current) return;

      // Create map
      const map = L.default.map(mapRef.current, {
        center: [31.5, -7.5],
        zoom: 5.5,
        minZoom: 5,
        maxZoom: 12,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
      });

      // Add zoom control to bottom-right
      L.default.control.zoom({ position: 'bottomright' }).addTo(map);

      // Add attribution
      L.default.control.attribution({ position: 'bottomleft', prefix: false })
        .addAttribution('&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>')
        .addTo(map);

      // Use a beautiful tile layer
      L.default.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
      }).addTo(map);

      // Custom marker icon
      const createIcon = (isActive: boolean) => L.default.divIcon({
        className: 'custom-map-marker',
        html: `
          <div style="
            width: ${isActive ? '36px' : '28px'};
            height: ${isActive ? '36px' : '28px'};
            background: ${isActive ? 'var(--color-primary, #1B4965)' : 'var(--color-primary, #1B4965)'};
            border: 3px solid white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            transition: all 0.2s ease;
            cursor: pointer;
          ">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
        `,
        iconSize: [isActive ? 36 : 28, isActive ? 36 : 28],
        iconAnchor: [isActive ? 18 : 14, isActive ? 36 : 28],
      });

      // Add markers
      CITIES.forEach((city) => {
        const marker = L.default.marker([city.lat, city.lng], {
          icon: createIcon(false),
          title: city.name,
        }).addTo(map);

        // Custom popup content
        const popupContent = `
          <div style="width: 260px; font-family: system-ui, sans-serif;">
            <img src="${city.image}" alt="${city.name}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px 8px 0 0;" loading="lazy" />
            <div style="padding: 12px;">
              <h3 style="margin: 0 0 4px; font-size: 16px; font-weight: 700; color: #14202A;">${city.name}</h3>
              <div style="display: flex; gap: 4px; margin-bottom: 6px; flex-wrap: wrap;">
                ${city.tags.map(t => `<span style="font-size: 10px; background: #F5F0E8; color: #3D4F5E; padding: 2px 8px; border-radius: 99px;">${t}</span>`).join('')}
              </div>
              <p style="margin: 0 0 8px; font-size: 13px; color: #3D4F5E; line-height: 1.4;">${city.description}</p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 12px; color: #6B7D8D;">${city.attractions} attractions</span>
                <a href="/cities/${city.slug}" style="font-size: 13px; font-weight: 600; color: #1B4965; text-decoration: none;">Explore &rarr;</a>
              </div>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent, {
          maxWidth: 280,
          className: 'morocco-map-popup',
          closeButton: true,
          autoPan: true,
        });

        marker.on('click', () => {
          setSelectedCity(city);
        });
      });

      // Enable scroll zoom on map click
      map.on('click', () => {
        map.scrollWheelZoom.enable();
      });

      // Disable scroll zoom when mouse leaves
      map.on('mouseout', () => {
        map.scrollWheelZoom.disable();
      });

      mapInstanceRef.current = map;
      setMapLoaded(true);
    });

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Map Container */}
      <div
        ref={mapRef}
        className="w-full rounded-2xl overflow-hidden shadow-xl border border-[var(--border-light)]"
        style={{ height: '520px' }}
      />

      {/* Loading state */}
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--surface-muted)] rounded-2xl">
          <div className="text-center">
            <div className="w-10 h-10 border-3 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm text-[var(--text-muted)]">Loading map...</p>
          </div>
        </div>
      )}

      {/* Selected City Card (mobile) */}
      {selectedCity && (
        <div className="mt-4 card-moroccan p-4 lg:hidden">
          <div className="flex gap-4">
            <img
              src={selectedCity.image}
              alt={selectedCity.name}
              className="w-20 h-20 rounded-lg object-cover"
              loading="lazy"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-[var(--text-primary)]">{selectedCity.name}</h3>
              <p className="text-xs text-[var(--text-muted)] mb-1">{selectedCity.attractions} attractions</p>
              <p className="text-sm text-[var(--text-secondary)] line-clamp-2">{selectedCity.description}</p>
            </div>
          </div>
          <Link
            href={`/cities/${selectedCity.slug}`}
            className="mt-3 flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            Explore {selectedCity.name} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Custom CSS for Leaflet popups */}
      <style jsx global>{`
        .morocco-map-popup .leaflet-popup-content-wrapper {
          padding: 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        }
        .morocco-map-popup .leaflet-popup-content {
          margin: 0;
          line-height: 1.4;
        }
        .morocco-map-popup .leaflet-popup-tip {
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .morocco-map-popup .leaflet-popup-close-button {
          top: 8px !important;
          right: 8px !important;
          width: 24px;
          height: 24px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          font-size: 16px;
          color: #3D4F5E;
          z-index: 10;
        }
        .custom-map-marker {
          background: none !important;
          border: none !important;
        }
        .leaflet-control-zoom a {
          background: white !important;
          color: #14202A !important;
          border: 1px solid #E8DFD0 !important;
          width: 34px !important;
          height: 34px !important;
          line-height: 34px !important;
          font-size: 16px !important;
        }
        .leaflet-control-zoom a:hover {
          background: #F5F0E8 !important;
        }
        .leaflet-control-zoom {
          border: none !important;
          border-radius: 10px !important;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.1) !important;
        }
      `}</style>
    </div>
  );
}
