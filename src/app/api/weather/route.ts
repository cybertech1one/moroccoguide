import { NextRequest, NextResponse } from 'next/server';

/* ================================================================
   Weather API Route — /api/weather?city=marrakech
   Uses Open-Meteo free API (no API key needed).
   Cached for 1 hour via Next.js revalidate.
   ================================================================ */

/* ---- City coordinate mapping ---- */

const CITY_COORDINATES: Record<string, { lat: number; lon: number; name: string }> = {
  marrakech:   { lat: 31.63,  lon: -8.00,   name: 'Marrakech' },
  fes:         { lat: 34.03,  lon: -5.00,   name: 'Fes' },
  casablanca:  { lat: 33.57,  lon: -7.59,   name: 'Casablanca' },
  chefchaouen: { lat: 35.17,  lon: -5.26,   name: 'Chefchaouen' },
  essaouira:   { lat: 31.51,  lon: -9.76,   name: 'Essaouira' },
  tangier:     { lat: 35.76,  lon: -5.83,   name: 'Tangier' },
  rabat:       { lat: 34.02,  lon: -6.84,   name: 'Rabat' },
  agadir:      { lat: 30.43,  lon: -9.60,   name: 'Agadir' },
  ouarzazate:  { lat: 30.92,  lon: -6.89,   name: 'Ouarzazate' },
  merzouga:    { lat: 31.08,  lon: -4.01,   name: 'Merzouga' },
  meknes:      { lat: 33.89,  lon: -5.55,   name: 'Meknes' },
  dakhla:      { lat: 23.68,  lon: -15.96,  name: 'Dakhla' },
};

/* ---- WMO Weather Code to description & icon key ---- */

interface WeatherDescription {
  description: string;
  icon: 'sun' | 'cloud' | 'cloud-sun' | 'cloud-rain' | 'cloud-snow' | 'cloud-drizzle' | 'cloud-lightning' | 'cloud-fog';
}

function getWeatherDescription(code: number): WeatherDescription {
  // WMO Weather interpretation codes (WW)
  // See: https://open-meteo.com/en/docs
  const map: Record<number, WeatherDescription> = {
    0:  { description: 'Clear sky',             icon: 'sun' },
    1:  { description: 'Mainly clear',          icon: 'sun' },
    2:  { description: 'Partly cloudy',         icon: 'cloud-sun' },
    3:  { description: 'Overcast',              icon: 'cloud' },
    45: { description: 'Fog',                   icon: 'cloud-fog' },
    48: { description: 'Depositing rime fog',   icon: 'cloud-fog' },
    51: { description: 'Light drizzle',         icon: 'cloud-drizzle' },
    53: { description: 'Moderate drizzle',      icon: 'cloud-drizzle' },
    55: { description: 'Dense drizzle',         icon: 'cloud-drizzle' },
    56: { description: 'Freezing light drizzle', icon: 'cloud-drizzle' },
    57: { description: 'Freezing dense drizzle', icon: 'cloud-drizzle' },
    61: { description: 'Slight rain',           icon: 'cloud-rain' },
    63: { description: 'Moderate rain',         icon: 'cloud-rain' },
    65: { description: 'Heavy rain',            icon: 'cloud-rain' },
    66: { description: 'Freezing light rain',   icon: 'cloud-rain' },
    67: { description: 'Freezing heavy rain',   icon: 'cloud-rain' },
    71: { description: 'Slight snowfall',       icon: 'cloud-snow' },
    73: { description: 'Moderate snowfall',     icon: 'cloud-snow' },
    75: { description: 'Heavy snowfall',        icon: 'cloud-snow' },
    77: { description: 'Snow grains',           icon: 'cloud-snow' },
    80: { description: 'Slight rain showers',   icon: 'cloud-rain' },
    81: { description: 'Moderate rain showers', icon: 'cloud-rain' },
    82: { description: 'Violent rain showers',  icon: 'cloud-rain' },
    85: { description: 'Slight snow showers',   icon: 'cloud-snow' },
    86: { description: 'Heavy snow showers',    icon: 'cloud-snow' },
    95: { description: 'Thunderstorm',          icon: 'cloud-lightning' },
    96: { description: 'Thunderstorm with slight hail', icon: 'cloud-lightning' },
    99: { description: 'Thunderstorm with heavy hail',  icon: 'cloud-lightning' },
  };

  return map[code] || { description: 'Unknown', icon: 'cloud' };
}

/* ---- Response types ---- */

interface ForecastDay {
  date: string;
  dayName: string;
  tempMax: number;
  tempMin: number;
  weatherCode: number;
  description: string;
  icon: string;
}

interface WeatherResponse {
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

/* ---- GET handler ---- */

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const cityParam = searchParams.get('city')?.toLowerCase().trim();

  if (!cityParam) {
    return NextResponse.json(
      { error: { code: 'MISSING_PARAM', message: 'The "city" query parameter is required.' } },
      { status: 400 }
    );
  }

  const cityInfo = CITY_COORDINATES[cityParam];

  if (!cityInfo) {
    return NextResponse.json(
      {
        error: {
          code: 'UNKNOWN_CITY',
          message: `City "${cityParam}" is not supported.`,
          supportedCities: Object.keys(CITY_COORDINATES),
        },
      },
      { status: 400 }
    );
  }

  try {
    const apiUrl = new URL('https://api.open-meteo.com/v1/forecast');
    apiUrl.searchParams.set('latitude', String(cityInfo.lat));
    apiUrl.searchParams.set('longitude', String(cityInfo.lon));
    apiUrl.searchParams.set('current', 'temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m');
    apiUrl.searchParams.set('daily', 'temperature_2m_max,temperature_2m_min,weather_code');
    apiUrl.searchParams.set('timezone', 'Africa/Casablanca');
    apiUrl.searchParams.set('forecast_days', '5');

    const res = await fetch(apiUrl.toString(), {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      throw new Error(`Open-Meteo API responded with status ${res.status}`);
    }

    const data = await res.json();

    // Parse current weather
    const currentWeather = getWeatherDescription(data.current.weather_code);

    // Parse 5-day forecast
    const forecast: ForecastDay[] = data.daily.time.map((date: string, i: number) => {
      const weatherInfo = getWeatherDescription(data.daily.weather_code[i]);
      const d = new Date(date + 'T12:00:00');
      const dayName = d.toLocaleDateString('en-US', { weekday: 'short', timeZone: 'Africa/Casablanca' });

      return {
        date,
        dayName,
        tempMax: Math.round(data.daily.temperature_2m_max[i]),
        tempMin: Math.round(data.daily.temperature_2m_min[i]),
        weatherCode: data.daily.weather_code[i],
        description: weatherInfo.description,
        icon: weatherInfo.icon,
      };
    });

    const response: WeatherResponse = {
      city: cityInfo.name,
      citySlug: cityParam,
      current: {
        temperature: Math.round(data.current.temperature_2m),
        weatherCode: data.current.weather_code,
        description: currentWeather.description,
        icon: currentWeather.icon,
        humidity: Math.round(data.current.relative_humidity_2m),
        windSpeed: Math.round(data.current.wind_speed_10m),
      },
      forecast,
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800',
      },
    });
  } catch (err) {
    console.error('[Weather API] Error fetching weather:', err);
    return NextResponse.json(
      { error: { code: 'FETCH_ERROR', message: 'Failed to fetch weather data. Please try again later.' } },
      { status: 502 }
    );
  }
}
