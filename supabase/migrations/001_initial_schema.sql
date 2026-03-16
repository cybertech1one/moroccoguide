-- Morocco Guide - Initial Database Schema
-- This migration creates all tables for the Morocco tourism encyclopedia

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- ENUMS
-- ============================================================================

CREATE TYPE attraction_type AS ENUM (
  'monument', 'museum', 'nature', 'market', 'religious', 'ruins', 'garden', 'beach'
);

CREATE TYPE accommodation_type AS ENUM (
  'hotel', 'riad', 'hostel', 'camping', 'apartment', 'resort', 'kasbah', 'guesthouse'
);

CREATE TYPE cuisine_type AS ENUM (
  'moroccan', 'french', 'mediterranean', 'seafood', 'street_food', 'international', 'fusion'
);

CREATE TYPE activity_type AS ENUM (
  'adventure', 'cultural', 'wellness', 'nature', 'cooking', 'shopping', 'nightlife', 'sports', 'festivals'
);

CREATE TYPE difficulty_level AS ENUM (
  'easy', 'moderate', 'challenging', 'extreme'
);

CREATE TYPE transport_type AS ENUM (
  'train', 'bus', 'taxi', 'car_rental', 'domestic_flight', 'ferry'
);

CREATE TYPE tip_category AS ENUM (
  'visa', 'money', 'safety', 'health', 'culture', 'packing', 'transport', 'communication', 'weather'
);

CREATE TYPE budget_level AS ENUM (
  'budget', 'mid_range', 'luxury'
);

CREATE TYPE travel_style AS ENUM (
  'adventure', 'cultural', 'relaxation', 'family', 'romantic', 'backpacker'
);

CREATE TYPE listing_type_enum AS ENUM (
  'listing', 'attraction', 'tour', 'accommodation', 'restaurant', 'activity', 'guide'
);

-- ============================================================================
-- REGIONS
-- ============================================================================

CREATE TABLE regions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  long_description TEXT,
  capital TEXT NOT NULL,
  image TEXT,
  population INTEGER,
  area_sq_km INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_regions_slug ON regions(slug);

-- ============================================================================
-- CITIES
-- ============================================================================

CREATE TABLE cities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  region_id UUID NOT NULL REFERENCES regions(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  long_description TEXT,
  population INTEGER,
  elevation INTEGER,
  climate TEXT,
  best_time_to_visit TEXT,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  hero_image TEXT,
  gallery_images TEXT[],
  is_imperial_city BOOLEAN NOT NULL DEFAULT FALSE,
  is_coastal BOOLEAN NOT NULL DEFAULT FALSE,
  airport_code TEXT,
  tags TEXT[],
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_cities_slug ON cities(slug);
CREATE INDEX idx_cities_region ON cities(region_id);
CREATE INDEX idx_cities_imperial ON cities(is_imperial_city) WHERE is_imperial_city = TRUE;
CREATE INDEX idx_cities_coastal ON cities(is_coastal) WHERE is_coastal = TRUE;

-- ============================================================================
-- CATEGORIES
-- ============================================================================

CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  icon TEXT,
  parent_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_categories_parent ON categories(parent_id);

-- ============================================================================
-- LISTINGS
-- ============================================================================

CREATE TABLE listings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  city_id UUID NOT NULL REFERENCES cities(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  long_description TEXT,
  address TEXT,
  phone TEXT,
  email TEXT,
  website TEXT,
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  price_range INTEGER CHECK (price_range >= 1 AND price_range <= 4),
  rating NUMERIC(2,1) CHECK (rating >= 0 AND rating <= 5),
  review_count INTEGER NOT NULL DEFAULT 0,
  images TEXT[],
  amenities TEXT[],
  opening_hours JSONB,
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  is_verified BOOLEAN NOT NULL DEFAULT FALSE,
  tags TEXT[],
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_listings_slug ON listings(slug);
CREATE INDEX idx_listings_city ON listings(city_id);
CREATE INDEX idx_listings_category ON listings(category_id);
CREATE INDEX idx_listings_featured ON listings(is_featured) WHERE is_featured = TRUE;
CREATE INDEX idx_listings_rating ON listings(rating DESC NULLS LAST);

-- ============================================================================
-- ATTRACTIONS
-- ============================================================================

CREATE TABLE attractions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  city_id UUID NOT NULL REFERENCES cities(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  long_description TEXT,
  type attraction_type NOT NULL,
  entrance_fee_mad NUMERIC(10,2),
  opening_hours TEXT,
  duration_hours NUMERIC(4,1),
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  images TEXT[],
  tips TEXT,
  best_time TEXT,
  accessibility TEXT,
  is_unesco BOOLEAN NOT NULL DEFAULT FALSE,
  rating NUMERIC(2,1) CHECK (rating >= 0 AND rating <= 5),
  review_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_attractions_slug ON attractions(slug);
CREATE INDEX idx_attractions_city ON attractions(city_id);
CREATE INDEX idx_attractions_type ON attractions(type);
CREATE INDEX idx_attractions_unesco ON attractions(is_unesco) WHERE is_unesco = TRUE;

-- ============================================================================
-- TOURS
-- ============================================================================

CREATE TABLE tours (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  city_id UUID NOT NULL REFERENCES cities(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  long_description TEXT,
  duration_days INTEGER NOT NULL,
  price_from_mad NUMERIC(10,2) NOT NULL,
  price_to_mad NUMERIC(10,2),
  difficulty difficulty_level NOT NULL DEFAULT 'easy',
  includes TEXT[],
  highlights TEXT[],
  itinerary JSONB,
  images TEXT[],
  max_group_size INTEGER,
  languages TEXT[],
  rating NUMERIC(2,1) CHECK (rating >= 0 AND rating <= 5),
  review_count INTEGER NOT NULL DEFAULT 0,
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_tours_slug ON tours(slug);
CREATE INDEX idx_tours_city ON tours(city_id);
CREATE INDEX idx_tours_featured ON tours(is_featured) WHERE is_featured = TRUE;

-- ============================================================================
-- ACCOMMODATIONS
-- ============================================================================

CREATE TABLE accommodations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  city_id UUID NOT NULL REFERENCES cities(id) ON DELETE CASCADE,
  type accommodation_type NOT NULL,
  star_rating INTEGER CHECK (star_rating >= 1 AND star_rating <= 5),
  description TEXT NOT NULL,
  long_description TEXT,
  price_from_mad NUMERIC(10,2),
  amenities TEXT[],
  images TEXT[],
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  booking_url TEXT,
  phone TEXT,
  email TEXT,
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  rating NUMERIC(2,1) CHECK (rating >= 0 AND rating <= 5),
  review_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_accommodations_slug ON accommodations(slug);
CREATE INDEX idx_accommodations_city ON accommodations(city_id);
CREATE INDEX idx_accommodations_type ON accommodations(type);
CREATE INDEX idx_accommodations_featured ON accommodations(is_featured) WHERE is_featured = TRUE;

-- ============================================================================
-- RESTAURANTS
-- ============================================================================

CREATE TABLE restaurants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  city_id UUID NOT NULL REFERENCES cities(id) ON DELETE CASCADE,
  cuisine_type cuisine_type NOT NULL,
  price_range INTEGER CHECK (price_range >= 1 AND price_range <= 4),
  description TEXT NOT NULL,
  long_description TEXT,
  specialties TEXT[],
  opening_hours TEXT,
  address TEXT,
  phone TEXT,
  images TEXT[],
  dietary_options TEXT[],
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  rating NUMERIC(2,1) CHECK (rating >= 0 AND rating <= 5),
  review_count INTEGER NOT NULL DEFAULT 0,
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_restaurants_slug ON restaurants(slug);
CREATE INDEX idx_restaurants_city ON restaurants(city_id);
CREATE INDEX idx_restaurants_cuisine ON restaurants(cuisine_type);
CREATE INDEX idx_restaurants_featured ON restaurants(is_featured) WHERE is_featured = TRUE;

-- ============================================================================
-- ACTIVITIES
-- ============================================================================

CREATE TABLE activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  city_id UUID NOT NULL REFERENCES cities(id) ON DELETE CASCADE,
  type activity_type NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  duration TEXT,
  price_from_mad NUMERIC(10,2),
  difficulty difficulty_level,
  age_restriction TEXT,
  images TEXT[],
  includes TEXT[],
  what_to_bring TEXT[],
  is_seasonal BOOLEAN NOT NULL DEFAULT FALSE,
  season_months INTEGER[],
  rating NUMERIC(2,1) CHECK (rating >= 0 AND rating <= 5),
  review_count INTEGER NOT NULL DEFAULT 0,
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_activities_slug ON activities(slug);
CREATE INDEX idx_activities_city ON activities(city_id);
CREATE INDEX idx_activities_type ON activities(type);

-- ============================================================================
-- GUIDES
-- ============================================================================

CREATE TABLE guides (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  city_id UUID NOT NULL REFERENCES cities(id) ON DELETE CASCADE,
  bio TEXT,
  languages TEXT[],
  specialties TEXT[],
  experience_years INTEGER,
  rating NUMERIC(2,1) CHECK (rating >= 0 AND rating <= 5),
  review_count INTEGER NOT NULL DEFAULT 0,
  price_per_day_mad NUMERIC(10,2),
  phone TEXT,
  email TEXT,
  image TEXT,
  is_certified BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_guides_slug ON guides(slug);
CREATE INDEX idx_guides_city ON guides(city_id);

-- ============================================================================
-- TRANSPORT OPTIONS
-- ============================================================================

CREATE TABLE transport_options (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type transport_type NOT NULL,
  from_city_id UUID NOT NULL REFERENCES cities(id) ON DELETE CASCADE,
  to_city_id UUID REFERENCES cities(id) ON DELETE CASCADE,
  duration_hours NUMERIC(5,1),
  price_from_mad NUMERIC(10,2),
  frequency TEXT,
  provider TEXT,
  booking_url TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_transport_from ON transport_options(from_city_id);
CREATE INDEX idx_transport_to ON transport_options(to_city_id);
CREATE INDEX idx_transport_type ON transport_options(type);

-- ============================================================================
-- EVENTS
-- ============================================================================

CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  city_id UUID REFERENCES cities(id) ON DELETE SET NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  start_date DATE,
  end_date DATE,
  type TEXT,
  venue TEXT,
  price TEXT,
  images TEXT[],
  is_annual BOOLEAN NOT NULL DEFAULT FALSE,
  month INTEGER CHECK (month >= 1 AND month <= 12),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_events_slug ON events(slug);
CREATE INDEX idx_events_city ON events(city_id);
CREATE INDEX idx_events_month ON events(month);

-- ============================================================================
-- TRAVEL TIPS
-- ============================================================================

CREATE TABLE travel_tips (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  city_id UUID REFERENCES cities(id) ON DELETE SET NULL,
  category tip_category NOT NULL,
  content TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_tips_slug ON travel_tips(slug);
CREATE INDEX idx_tips_city ON travel_tips(city_id);
CREATE INDEX idx_tips_category ON travel_tips(category);

-- ============================================================================
-- ITINERARIES
-- ============================================================================

CREATE TABLE itineraries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  duration_days INTEGER NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  cities TEXT[],
  highlights TEXT[],
  budget_level budget_level NOT NULL DEFAULT 'mid_range',
  travel_style travel_style NOT NULL DEFAULT 'cultural',
  daily_plan JSONB,
  images TEXT[],
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_itineraries_slug ON itineraries(slug);
CREATE INDEX idx_itineraries_duration ON itineraries(duration_days);
CREATE INDEX idx_itineraries_budget ON itineraries(budget_level);

-- ============================================================================
-- REVIEWS
-- ============================================================================

CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  listing_id UUID NOT NULL,
  listing_type listing_type_enum NOT NULL,
  author_name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title TEXT,
  content TEXT,
  visit_date DATE,
  images TEXT[],
  is_verified BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_reviews_listing ON reviews(listing_id, listing_type);
CREATE INDEX idx_reviews_rating ON reviews(rating);

-- ============================================================================
-- UPDATED_AT TRIGGER
-- ============================================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to all tables
DO $$
DECLARE
  t TEXT;
BEGIN
  FOR t IN
    SELECT unnest(ARRAY[
      'regions', 'cities', 'categories', 'listings', 'attractions',
      'tours', 'accommodations', 'restaurants', 'activities', 'guides',
      'transport_options', 'events', 'travel_tips', 'itineraries', 'reviews'
    ])
  LOOP
    EXECUTE format('
      CREATE TRIGGER update_%I_updated_at
      BEFORE UPDATE ON %I
      FOR EACH ROW EXECUTE FUNCTION update_updated_at_column()',
      t, t
    );
  END LOOP;
END;
$$;

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================================

-- Enable RLS on all tables (read-only public access)
ALTER TABLE regions ENABLE ROW LEVEL SECURITY;
ALTER TABLE cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE attractions ENABLE ROW LEVEL SECURITY;
ALTER TABLE tours ENABLE ROW LEVEL SECURITY;
ALTER TABLE accommodations ENABLE ROW LEVEL SECURITY;
ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE guides ENABLE ROW LEVEL SECURITY;
ALTER TABLE transport_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE travel_tips ENABLE ROW LEVEL SECURITY;
ALTER TABLE itineraries ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Public read access" ON regions FOR SELECT USING (true);
CREATE POLICY "Public read access" ON cities FOR SELECT USING (true);
CREATE POLICY "Public read access" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read access" ON listings FOR SELECT USING (true);
CREATE POLICY "Public read access" ON attractions FOR SELECT USING (true);
CREATE POLICY "Public read access" ON tours FOR SELECT USING (true);
CREATE POLICY "Public read access" ON accommodations FOR SELECT USING (true);
CREATE POLICY "Public read access" ON restaurants FOR SELECT USING (true);
CREATE POLICY "Public read access" ON activities FOR SELECT USING (true);
CREATE POLICY "Public read access" ON guides FOR SELECT USING (true);
CREATE POLICY "Public read access" ON transport_options FOR SELECT USING (true);
CREATE POLICY "Public read access" ON events FOR SELECT USING (true);
CREATE POLICY "Public read access" ON travel_tips FOR SELECT USING (true);
CREATE POLICY "Public read access" ON itineraries FOR SELECT USING (true);
CREATE POLICY "Public read access" ON reviews FOR SELECT USING (true);
