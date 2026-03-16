import { supabase } from './supabase'
import type {
  Region,
  City,
  Listing,
  Attraction,
  Tour,
  Accommodation,
  Restaurant,
  Activity,
  Guide,
  TransportOption,
  Event,
  TravelTip,
  Itinerary,
} from '@/types/database'

// ============================================================================
// REGIONS
// ============================================================================

export async function getRegions() {
  const { data, error } = await supabase
    .from('regions')
    .select('*')
    .order('name')

  if (error) throw error
  return data as Region[]
}

export async function getRegion(slug: string) {
  const { data, error } = await supabase
    .from('regions')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as Region
}

// ============================================================================
// CITIES
// ============================================================================

export async function getCities(regionId?: string) {
  let query = supabase
    .from('cities')
    .select('*, regions(name, slug)')
    .order('name')

  if (regionId) {
    query = query.eq('region_id', regionId)
  }

  const { data, error } = await query

  if (error) throw error
  return data as (City & { regions: Pick<Region, 'name' | 'slug'> })[]
}

export async function getCity(slug: string) {
  const { data, error } = await supabase
    .from('cities')
    .select('*, regions(name, slug)')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as City & { regions: Pick<Region, 'name' | 'slug'> }
}

export async function getImperialCities() {
  const { data, error } = await supabase
    .from('cities')
    .select('*, regions(name, slug)')
    .eq('is_imperial_city', true)
    .order('name')

  if (error) throw error
  return data as (City & { regions: Pick<Region, 'name' | 'slug'> })[]
}

export async function getCoastalCities() {
  const { data, error } = await supabase
    .from('cities')
    .select('*, regions(name, slug)')
    .eq('is_coastal', true)
    .order('name')

  if (error) throw error
  return data as (City & { regions: Pick<Region, 'name' | 'slug'> })[]
}

// ============================================================================
// CATEGORIES
// ============================================================================

export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('order_index')

  if (error) throw error
  return data
}

// ============================================================================
// LISTINGS
// ============================================================================

export async function getCityListings(cityId: string, categoryId?: string) {
  let query = supabase
    .from('listings')
    .select('*, cities(name, slug), categories(name, slug)')
    .eq('city_id', cityId)
    .order('is_featured', { ascending: false })
    .order('rating', { ascending: false, nullsFirst: false })

  if (categoryId) {
    query = query.eq('category_id', categoryId)
  }

  const { data, error } = await query

  if (error) throw error
  return data as (Listing & {
    cities: Pick<City, 'name' | 'slug'>
    categories: { name: string; slug: string }
  })[]
}

export async function getListing(slug: string) {
  const { data, error } = await supabase
    .from('listings')
    .select('*, cities(name, slug, region_id), categories(name, slug)')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as Listing & {
    cities: Pick<City, 'name' | 'slug'> & { region_id: string }
    categories: { name: string; slug: string }
  }
}

// ============================================================================
// ATTRACTIONS
// ============================================================================

export async function getAttractions(cityId?: string) {
  let query = supabase
    .from('attractions')
    .select('*, cities(name, slug)')
    .order('rating', { ascending: false, nullsFirst: false })

  if (cityId) {
    query = query.eq('city_id', cityId)
  }

  const { data, error } = await query

  if (error) throw error
  return data as (Attraction & { cities: Pick<City, 'name' | 'slug'> })[]
}

export async function getAttraction(slug: string) {
  const { data, error } = await supabase
    .from('attractions')
    .select('*, cities(name, slug, region_id)')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as Attraction & {
    cities: Pick<City, 'name' | 'slug'> & { region_id: string }
  }
}

export async function getUnescoSites() {
  const { data, error } = await supabase
    .from('attractions')
    .select('*, cities(name, slug)')
    .eq('is_unesco', true)
    .order('name')

  if (error) throw error
  return data as (Attraction & { cities: Pick<City, 'name' | 'slug'> })[]
}

// ============================================================================
// TOURS
// ============================================================================

export async function getTours(cityId?: string) {
  let query = supabase
    .from('tours')
    .select('*, cities(name, slug)')
    .order('is_featured', { ascending: false })
    .order('rating', { ascending: false, nullsFirst: false })

  if (cityId) {
    query = query.eq('city_id', cityId)
  }

  const { data, error } = await query

  if (error) throw error
  return data as (Tour & { cities: Pick<City, 'name' | 'slug'> })[]
}

export async function getTour(slug: string) {
  const { data, error } = await supabase
    .from('tours')
    .select('*, cities(name, slug)')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as Tour & { cities: Pick<City, 'name' | 'slug'> }
}

// ============================================================================
// ACCOMMODATIONS
// ============================================================================

export async function getAccommodations(
  cityId?: string,
  type?: string
) {
  let query = supabase
    .from('accommodations')
    .select('*, cities(name, slug)')
    .order('is_featured', { ascending: false })
    .order('rating', { ascending: false, nullsFirst: false })

  if (cityId) {
    query = query.eq('city_id', cityId)
  }
  if (type) {
    query = query.eq('type', type)
  }

  const { data, error } = await query

  if (error) throw error
  return data as (Accommodation & { cities: Pick<City, 'name' | 'slug'> })[]
}

export async function getAccommodation(slug: string) {
  const { data, error } = await supabase
    .from('accommodations')
    .select('*, cities(name, slug)')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as Accommodation & { cities: Pick<City, 'name' | 'slug'> }
}

// ============================================================================
// RESTAURANTS
// ============================================================================

export async function getRestaurants(
  cityId?: string,
  cuisineType?: string
) {
  let query = supabase
    .from('restaurants')
    .select('*, cities(name, slug)')
    .order('is_featured', { ascending: false })
    .order('rating', { ascending: false, nullsFirst: false })

  if (cityId) {
    query = query.eq('city_id', cityId)
  }
  if (cuisineType) {
    query = query.eq('cuisine_type', cuisineType)
  }

  const { data, error } = await query

  if (error) throw error
  return data as (Restaurant & { cities: Pick<City, 'name' | 'slug'> })[]
}

export async function getRestaurant(slug: string) {
  const { data, error } = await supabase
    .from('restaurants')
    .select('*, cities(name, slug)')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as Restaurant & { cities: Pick<City, 'name' | 'slug'> }
}

// ============================================================================
// ACTIVITIES
// ============================================================================

export async function getActivities(
  cityId?: string,
  type?: string
) {
  let query = supabase
    .from('activities')
    .select('*, cities(name, slug)')
    .order('is_featured', { ascending: false })
    .order('rating', { ascending: false, nullsFirst: false })

  if (cityId) {
    query = query.eq('city_id', cityId)
  }
  if (type) {
    query = query.eq('type', type)
  }

  const { data, error } = await query

  if (error) throw error
  return data as (Activity & { cities: Pick<City, 'name' | 'slug'> })[]
}

export async function getActivity(slug: string) {
  const { data, error } = await supabase
    .from('activities')
    .select('*, cities(name, slug)')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as Activity & { cities: Pick<City, 'name' | 'slug'> }
}

// ============================================================================
// GUIDES
// ============================================================================

export async function getGuides(cityId?: string) {
  let query = supabase
    .from('guides')
    .select('*, cities(name, slug)')
    .order('rating', { ascending: false, nullsFirst: false })

  if (cityId) {
    query = query.eq('city_id', cityId)
  }

  const { data, error } = await query

  if (error) throw error
  return data as (Guide & { cities: Pick<City, 'name' | 'slug'> })[]
}

export async function getGuide(slug: string) {
  const { data, error } = await supabase
    .from('guides')
    .select('*, cities(name, slug)')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as Guide & { cities: Pick<City, 'name' | 'slug'> }
}

// ============================================================================
// TRANSPORT
// ============================================================================

export async function getTransport(
  fromCityId?: string,
  toCityId?: string
) {
  let query = supabase
    .from('transport_options')
    .select(`
      *,
      from_city:cities!transport_options_from_city_id_fkey(name, slug),
      to_city:cities!transport_options_to_city_id_fkey(name, slug)
    `)
    .order('price_from_mad', { ascending: true, nullsFirst: false })

  if (fromCityId) {
    query = query.eq('from_city_id', fromCityId)
  }
  if (toCityId) {
    query = query.eq('to_city_id', toCityId)
  }

  const { data, error } = await query

  if (error) throw error
  return data as (TransportOption & {
    from_city: Pick<City, 'name' | 'slug'>
    to_city: Pick<City, 'name' | 'slug'> | null
  })[]
}

// ============================================================================
// EVENTS
// ============================================================================

export async function getEvents(
  cityId?: string,
  month?: number
) {
  let query = supabase
    .from('events')
    .select('*, cities(name, slug)')
    .order('start_date', { ascending: true, nullsFirst: false })

  if (cityId) {
    query = query.eq('city_id', cityId)
  }
  if (month) {
    query = query.eq('month', month)
  }

  const { data, error } = await query

  if (error) throw error
  return data as (Event & { cities: Pick<City, 'name' | 'slug'> | null })[]
}

export async function getEvent(slug: string) {
  const { data, error } = await supabase
    .from('events')
    .select('*, cities(name, slug)')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as Event & { cities: Pick<City, 'name' | 'slug'> | null }
}

// ============================================================================
// TRAVEL TIPS
// ============================================================================

export async function getTravelTips(
  cityId?: string,
  category?: string
) {
  let query = supabase
    .from('travel_tips')
    .select('*, cities(name, slug)')
    .order('order_index')

  if (cityId) {
    query = query.eq('city_id', cityId)
  } else if (cityId === null) {
    query = query.is('city_id', null)
  }

  if (category) {
    query = query.eq('category', category)
  }

  const { data, error } = await query

  if (error) throw error
  return data as (TravelTip & { cities: Pick<City, 'name' | 'slug'> | null })[]
}

// ============================================================================
// ITINERARIES
// ============================================================================

export async function getItineraries(
  durationDays?: number,
  budgetLevel?: string
) {
  let query = supabase
    .from('itineraries')
    .select('*')
    .order('duration_days')

  if (durationDays) {
    query = query.eq('duration_days', durationDays)
  }
  if (budgetLevel) {
    query = query.eq('budget_level', budgetLevel)
  }

  const { data, error } = await query

  if (error) throw error
  return data as Itinerary[]
}

export async function getItinerary(slug: string) {
  const { data, error } = await supabase
    .from('itineraries')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as Itinerary
}

// ============================================================================
// REVIEWS
// ============================================================================

export async function getReviews(
  listingId: string,
  listingType: string
) {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('listing_id', listingId)
    .eq('listing_type', listingType)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// ============================================================================
// FEATURED
// ============================================================================

export async function getFeatured() {
  const [
    listings,
    attractions,
    tours,
    accommodations,
    restaurants,
    activities,
  ] = await Promise.all([
    supabase
      .from('listings')
      .select('*, cities(name, slug), categories(name, slug)')
      .eq('is_featured', true)
      .order('rating', { ascending: false, nullsFirst: false })
      .limit(6),
    supabase
      .from('attractions')
      .select('*, cities(name, slug)')
      .eq('is_unesco', true)
      .order('rating', { ascending: false, nullsFirst: false })
      .limit(6),
    supabase
      .from('tours')
      .select('*, cities(name, slug)')
      .eq('is_featured', true)
      .order('rating', { ascending: false, nullsFirst: false })
      .limit(6),
    supabase
      .from('accommodations')
      .select('*, cities(name, slug)')
      .eq('is_featured', true)
      .order('rating', { ascending: false, nullsFirst: false })
      .limit(6),
    supabase
      .from('restaurants')
      .select('*, cities(name, slug)')
      .eq('is_featured', true)
      .order('rating', { ascending: false, nullsFirst: false })
      .limit(6),
    supabase
      .from('activities')
      .select('*, cities(name, slug)')
      .eq('is_featured', true)
      .order('rating', { ascending: false, nullsFirst: false })
      .limit(6),
  ])

  return {
    listings: listings.data ?? [],
    attractions: attractions.data ?? [],
    tours: tours.data ?? [],
    accommodations: accommodations.data ?? [],
    restaurants: restaurants.data ?? [],
    activities: activities.data ?? [],
  }
}

// ============================================================================
// SEARCH
// ============================================================================

export async function search(query: string, type?: string) {
  const searchTerm = `%${query}%`

  const results: Record<string, unknown[]> = {}

  if (!type || type === 'cities') {
    const { data } = await supabase
      .from('cities')
      .select('*, regions(name, slug)')
      .or(`name.ilike.${searchTerm},description.ilike.${searchTerm},tags.cs.{${query}}`)
      .limit(10)
    results.cities = data ?? []
  }

  if (!type || type === 'listings') {
    const { data } = await supabase
      .from('listings')
      .select('*, cities(name, slug), categories(name, slug)')
      .or(`name.ilike.${searchTerm},description.ilike.${searchTerm}`)
      .limit(10)
    results.listings = data ?? []
  }

  if (!type || type === 'attractions') {
    const { data } = await supabase
      .from('attractions')
      .select('*, cities(name, slug)')
      .or(`name.ilike.${searchTerm},description.ilike.${searchTerm}`)
      .limit(10)
    results.attractions = data ?? []
  }

  if (!type || type === 'tours') {
    const { data } = await supabase
      .from('tours')
      .select('*, cities(name, slug)')
      .or(`name.ilike.${searchTerm},description.ilike.${searchTerm}`)
      .limit(10)
    results.tours = data ?? []
  }

  if (!type || type === 'accommodations') {
    const { data } = await supabase
      .from('accommodations')
      .select('*, cities(name, slug)')
      .or(`name.ilike.${searchTerm},description.ilike.${searchTerm}`)
      .limit(10)
    results.accommodations = data ?? []
  }

  if (!type || type === 'restaurants') {
    const { data } = await supabase
      .from('restaurants')
      .select('*, cities(name, slug)')
      .or(`name.ilike.${searchTerm},description.ilike.${searchTerm}`)
      .limit(10)
    results.restaurants = data ?? []
  }

  if (!type || type === 'activities') {
    const { data } = await supabase
      .from('activities')
      .select('*, cities(name, slug)')
      .or(`name.ilike.${searchTerm},description.ilike.${searchTerm}`)
      .limit(10)
    results.activities = data ?? []
  }

  return results
}
