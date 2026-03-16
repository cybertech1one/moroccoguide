'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudDrizzle,
  CloudLightning,
  CloudFog,
  CloudSun,
  Wind,
  Droplets,
  RefreshCw,
  AlertCircle,
  Thermometer,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ================================================================
   WeatherWidget — Compact live weather display
   Fetches real data from /api/weather?city={city}
   Uses Open-Meteo API (no API key needed)
   ================================================================ */

/* ---- Types ---- */

interface ForecastDay {
  date: string;
  dayName: string;
  tempMax: number;
  tempMin: number;
  weatherCode: number;
  description: string;
  icon: string;
}

interface WeatherData {
  city: string;
  citySlug: string;
  current: {
    temperature: number;
    weatherCode: number;
    description: string;
    icon: string;
    humidity: number;
    windSpeed: number;
  };
  forecast: ForecastDay[];
  updatedAt: string;
}

/* ---- Icon mapping ---- */

const WEATHER_ICONS: Record<string, React.ElementType> = {
  'sun':             Sun,
  'cloud':           Cloud,
  'cloud-sun':       CloudSun,
  'cloud-rain':      CloudRain,
  'cloud-snow':      CloudSnow,
  'cloud-drizzle':   CloudDrizzle,
  'cloud-lightning':  CloudLightning,
  'cloud-fog':       CloudFog,
};

function WeatherIcon({ iconKey, className }: { iconKey: string; className?: string }) {
  const Icon = WEATHER_ICONS[iconKey] || Cloud;
  return <Icon className={className} />;
}

/* ---- Props ---- */

interface WeatherWidgetProps {
  city: string;
  /** Compact mode hides the forecast row. Default false. */
  compact?: boolean;
  /** Additional CSS class names */
  className?: string;
}

/* ---- Loading Skeleton ---- */

function WeatherSkeleton({ compact }: { compact?: boolean }) {
  return (
    <div className="animate-pulse" aria-hidden="true">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-lg bg-[var(--surface-muted)]" />
        <div className="flex-1 space-y-2">
          <div className="h-5 w-16 rounded bg-[var(--surface-muted)]" />
          <div className="h-3 w-24 rounded bg-[var(--surface-muted)]" />
        </div>
      </div>
      <div className="flex gap-3 mb-3">
        <div className="h-3 w-20 rounded bg-[var(--surface-muted)]" />
        <div className="h-3 w-20 rounded bg-[var(--surface-muted)]" />
      </div>
      {!compact && (
        <div className="grid grid-cols-5 gap-1.5 pt-3 border-t border-[var(--border-light)]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="space-y-1.5 flex flex-col items-center">
              <div className="h-3 w-6 rounded bg-[var(--surface-muted)]" />
              <div className="h-5 w-5 rounded bg-[var(--surface-muted)]" />
              <div className="h-3 w-10 rounded bg-[var(--surface-muted)]" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---- Error State ---- */

function WeatherError({ onRetry, message }: { onRetry: () => void; message?: string }) {
  return (
    <div className="flex flex-col items-center gap-2 py-3 text-center">
      <AlertCircle className="h-6 w-6 text-[var(--text-muted)]" />
      <p className="text-xs text-[var(--text-muted)]">
        {message || 'Weather data unavailable'}
      </p>
      <button
        onClick={onRetry}
        className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--color-primary-200)] hover:text-[var(--color-primary)]"
      >
        <RefreshCw className="h-3 w-3" />
        Retry
      </button>
    </div>
  );
}

/* ---- Main Component ---- */

export default function WeatherWidget({ city, compact = false, className }: WeatherWidgetProps) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error?.message || `HTTP ${res.status}`);
      }

      const json: WeatherData = await res.json();
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load weather');
    } finally {
      setLoading(false);
    }
  }, [city]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return (
    <div
      className={cn(
        'rounded-xl border border-[var(--border-light)] bg-[var(--surface)] p-4',
        className
      )}
    >
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
          {data ? `Weather in ${data.city}` : 'Weather'}
        </h3>
        {data && (
          <span className="text-[10px] text-[var(--text-muted)]">
            Live
          </span>
        )}
      </div>

      {/* Content */}
      {loading && <WeatherSkeleton compact={compact} />}

      {!loading && error && <WeatherError onRetry={fetchWeather} message={error} />}

      {!loading && !error && data && (
        <>
          {/* Current conditions */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-accent-50)]">
              <WeatherIcon
                iconKey={data.current.icon}
                className="h-6 w-6 text-[var(--color-accent-dark)]"
              />
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--text-primary)] font-[var(--font-display)] leading-none">
                {data.current.temperature}&deg;C
              </p>
              <p className="mt-0.5 text-xs text-[var(--text-muted)]">
                {data.current.description}
              </p>
            </div>
          </div>

          {/* Humidity & Wind */}
          <div className="mt-3 flex items-center gap-4 text-xs text-[var(--text-secondary)]">
            <span className="inline-flex items-center gap-1">
              <Droplets className="h-3.5 w-3.5 text-[var(--color-secondary)]" />
              {data.current.humidity}%
            </span>
            <span className="inline-flex items-center gap-1">
              <Wind className="h-3.5 w-3.5 text-[var(--color-secondary)]" />
              {data.current.windSpeed} km/h
            </span>
          </div>

          {/* 5-Day Forecast */}
          {!compact && data.forecast.length > 0 && (
            <div className="mt-3 border-t border-[var(--border-light)] pt-3">
              <div className="grid grid-cols-5 gap-1">
                {data.forecast.map((day) => (
                  <div
                    key={day.date}
                    className="flex flex-col items-center gap-1 rounded-lg py-1.5 text-center transition-colors hover:bg-[var(--surface-muted)]"
                  >
                    <span className="text-[10px] font-medium uppercase text-[var(--text-muted)]">
                      {day.dayName}
                    </span>
                    <WeatherIcon
                      iconKey={day.icon}
                      className="h-4 w-4 text-[var(--text-secondary)]"
                    />
                    <div className="text-[10px] leading-tight">
                      <span className="font-semibold text-[var(--text-primary)]">
                        {day.tempMax}&deg;
                      </span>
                      <span className="text-[var(--text-muted)]">
                        /{day.tempMin}&deg;
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

/* ---- Inline Weather Pill (for use inside cards/headers) ---- */

interface WeatherPillProps {
  city: string;
  className?: string;
}

export function WeatherPill({ city, className }: WeatherPillProps) {
  const [data, setData] = useState<{ temp: number; icon: string; description: string } | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`/api/weather?city=${encodeURIComponent(city)}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed');
        return res.json();
      })
      .then((json: WeatherData) => {
        if (!cancelled) {
          setData({
            temp: json.current.temperature,
            icon: json.current.icon,
            description: json.current.description,
          });
        }
      })
      .catch(() => {
        // Silently fail for pill - it is a non-critical UI element
      });

    return () => {
      cancelled = true;
    };
  }, [city]);

  if (!data) return null;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80 backdrop-blur-sm',
        className
      )}
      title={data.description}
    >
      <WeatherIcon iconKey={data.icon} className="h-3 w-3" />
      <span>{data.temp}&deg;C</span>
    </span>
  );
}
