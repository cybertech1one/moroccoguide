export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      regions: {
        Row: {
          id: string
          name: string
          slug: string
          description: string
          long_description: string | null
          capital: string
          image: string | null
          population: number | null
          area_sq_km: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description: string
          long_description?: string | null
          capital: string
          image?: string | null
          population?: number | null
          area_sq_km?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string
          long_description?: string | null
          capital?: string
          image?: string | null
          population?: number | null
          area_sq_km?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      cities: {
        Row: {
          id: string
          name: string
          slug: string
          region_id: string
          description: string
          long_description: string | null
          population: number | null
          elevation: number | null
          climate: string | null
          best_time_to_visit: string | null
          latitude: number
          longitude: number
          hero_image: string | null
          gallery_images: string[] | null
          is_imperial_city: boolean
          is_coastal: boolean
          airport_code: string | null
          tags: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          region_id: string
          description: string
          long_description?: string | null
          population?: number | null
          elevation?: number | null
          climate?: string | null
          best_time_to_visit?: string | null
          latitude: number
          longitude: number
          hero_image?: string | null
          gallery_images?: string[] | null
          is_imperial_city?: boolean
          is_coastal?: boolean
          airport_code?: string | null
          tags?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          region_id?: string
          description?: string
          long_description?: string | null
          population?: number | null
          elevation?: number | null
          climate?: string | null
          best_time_to_visit?: string | null
          latitude?: number
          longitude?: number
          hero_image?: string | null
          gallery_images?: string[] | null
          is_imperial_city?: boolean
          is_coastal?: boolean
          airport_code?: string | null
          tags?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'cities_region_id_fkey'
            columns: ['region_id']
            referencedRelation: 'regions'
            referencedColumns: ['id']
          }
        ]
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string
          icon: string | null
          parent_id: string | null
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description: string
          icon?: string | null
          parent_id?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string
          icon?: string | null
          parent_id?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'categories_parent_id_fkey'
            columns: ['parent_id']
            referencedRelation: 'categories'
            referencedColumns: ['id']
          }
        ]
      }
      listings: {
        Row: {
          id: string
          name: string
          slug: string
          city_id: string
          category_id: string
          description: string
          long_description: string | null
          address: string | null
          phone: string | null
          email: string | null
          website: string | null
          latitude: number | null
          longitude: number | null
          price_range: number | null
          rating: number | null
          review_count: number
          images: string[] | null
          amenities: string[] | null
          opening_hours: Json | null
          is_featured: boolean
          is_verified: boolean
          tags: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          city_id: string
          category_id: string
          description: string
          long_description?: string | null
          address?: string | null
          phone?: string | null
          email?: string | null
          website?: string | null
          latitude?: number | null
          longitude?: number | null
          price_range?: number | null
          rating?: number | null
          review_count?: number
          images?: string[] | null
          amenities?: string[] | null
          opening_hours?: Json | null
          is_featured?: boolean
          is_verified?: boolean
          tags?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          city_id?: string
          category_id?: string
          description?: string
          long_description?: string | null
          address?: string | null
          phone?: string | null
          email?: string | null
          website?: string | null
          latitude?: number | null
          longitude?: number | null
          price_range?: number | null
          rating?: number | null
          review_count?: number
          images?: string[] | null
          amenities?: string[] | null
          opening_hours?: Json | null
          is_featured?: boolean
          is_verified?: boolean
          tags?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'listings_city_id_fkey'
            columns: ['city_id']
            referencedRelation: 'cities'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'listings_category_id_fkey'
            columns: ['category_id']
            referencedRelation: 'categories'
            referencedColumns: ['id']
          }
        ]
      }
      attractions: {
        Row: {
          id: string
          name: string
          slug: string
          city_id: string
          description: string
          long_description: string | null
          type: 'monument' | 'museum' | 'nature' | 'market' | 'religious' | 'ruins' | 'garden' | 'beach'
          entrance_fee_mad: number | null
          opening_hours: string | null
          duration_hours: number | null
          latitude: number | null
          longitude: number | null
          images: string[] | null
          tips: string | null
          best_time: string | null
          accessibility: string | null
          is_unesco: boolean
          rating: number | null
          review_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          city_id: string
          description: string
          long_description?: string | null
          type: 'monument' | 'museum' | 'nature' | 'market' | 'religious' | 'ruins' | 'garden' | 'beach'
          entrance_fee_mad?: number | null
          opening_hours?: string | null
          duration_hours?: number | null
          latitude?: number | null
          longitude?: number | null
          images?: string[] | null
          tips?: string | null
          best_time?: string | null
          accessibility?: string | null
          is_unesco?: boolean
          rating?: number | null
          review_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          city_id?: string
          description?: string
          long_description?: string | null
          type?: 'monument' | 'museum' | 'nature' | 'market' | 'religious' | 'ruins' | 'garden' | 'beach'
          entrance_fee_mad?: number | null
          opening_hours?: string | null
          duration_hours?: number | null
          latitude?: number | null
          longitude?: number | null
          images?: string[] | null
          tips?: string | null
          best_time?: string | null
          accessibility?: string | null
          is_unesco?: boolean
          rating?: number | null
          review_count?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'attractions_city_id_fkey'
            columns: ['city_id']
            referencedRelation: 'cities'
            referencedColumns: ['id']
          }
        ]
      }
      tours: {
        Row: {
          id: string
          name: string
          slug: string
          city_id: string
          description: string
          long_description: string | null
          duration_days: number
          price_from_mad: number
          price_to_mad: number | null
          difficulty: 'easy' | 'moderate' | 'challenging' | 'extreme'
          includes: string[] | null
          highlights: string[] | null
          itinerary: Json | null
          images: string[] | null
          max_group_size: number | null
          languages: string[] | null
          rating: number | null
          review_count: number
          is_featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          city_id: string
          description: string
          long_description?: string | null
          duration_days: number
          price_from_mad: number
          price_to_mad?: number | null
          difficulty?: 'easy' | 'moderate' | 'challenging' | 'extreme'
          includes?: string[] | null
          highlights?: string[] | null
          itinerary?: Json | null
          images?: string[] | null
          max_group_size?: number | null
          languages?: string[] | null
          rating?: number | null
          review_count?: number
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          city_id?: string
          description?: string
          long_description?: string | null
          duration_days?: number
          price_from_mad?: number
          price_to_mad?: number | null
          difficulty?: 'easy' | 'moderate' | 'challenging' | 'extreme'
          includes?: string[] | null
          highlights?: string[] | null
          itinerary?: Json | null
          images?: string[] | null
          max_group_size?: number | null
          languages?: string[] | null
          rating?: number | null
          review_count?: number
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'tours_city_id_fkey'
            columns: ['city_id']
            referencedRelation: 'cities'
            referencedColumns: ['id']
          }
        ]
      }
      accommodations: {
        Row: {
          id: string
          name: string
          slug: string
          city_id: string
          type: 'hotel' | 'riad' | 'hostel' | 'camping' | 'apartment' | 'resort' | 'kasbah' | 'guesthouse'
          star_rating: number | null
          description: string
          long_description: string | null
          price_from_mad: number | null
          amenities: string[] | null
          images: string[] | null
          latitude: number | null
          longitude: number | null
          booking_url: string | null
          phone: string | null
          email: string | null
          is_featured: boolean
          rating: number | null
          review_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          city_id: string
          type: 'hotel' | 'riad' | 'hostel' | 'camping' | 'apartment' | 'resort' | 'kasbah' | 'guesthouse'
          star_rating?: number | null
          description: string
          long_description?: string | null
          price_from_mad?: number | null
          amenities?: string[] | null
          images?: string[] | null
          latitude?: number | null
          longitude?: number | null
          booking_url?: string | null
          phone?: string | null
          email?: string | null
          is_featured?: boolean
          rating?: number | null
          review_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          city_id?: string
          type?: 'hotel' | 'riad' | 'hostel' | 'camping' | 'apartment' | 'resort' | 'kasbah' | 'guesthouse'
          star_rating?: number | null
          description?: string
          long_description?: string | null
          price_from_mad?: number | null
          amenities?: string[] | null
          images?: string[] | null
          latitude?: number | null
          longitude?: number | null
          booking_url?: string | null
          phone?: string | null
          email?: string | null
          is_featured?: boolean
          rating?: number | null
          review_count?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'accommodations_city_id_fkey'
            columns: ['city_id']
            referencedRelation: 'cities'
            referencedColumns: ['id']
          }
        ]
      }
      restaurants: {
        Row: {
          id: string
          name: string
          slug: string
          city_id: string
          cuisine_type: 'moroccan' | 'french' | 'mediterranean' | 'seafood' | 'street_food' | 'international' | 'fusion'
          price_range: number | null
          description: string
          long_description: string | null
          specialties: string[] | null
          opening_hours: string | null
          address: string | null
          phone: string | null
          images: string[] | null
          dietary_options: string[] | null
          latitude: number | null
          longitude: number | null
          rating: number | null
          review_count: number
          is_featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          city_id: string
          cuisine_type: 'moroccan' | 'french' | 'mediterranean' | 'seafood' | 'street_food' | 'international' | 'fusion'
          price_range?: number | null
          description: string
          long_description?: string | null
          specialties?: string[] | null
          opening_hours?: string | null
          address?: string | null
          phone?: string | null
          images?: string[] | null
          dietary_options?: string[] | null
          latitude?: number | null
          longitude?: number | null
          rating?: number | null
          review_count?: number
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          city_id?: string
          cuisine_type?: 'moroccan' | 'french' | 'mediterranean' | 'seafood' | 'street_food' | 'international' | 'fusion'
          price_range?: number | null
          description?: string
          long_description?: string | null
          specialties?: string[] | null
          opening_hours?: string | null
          address?: string | null
          phone?: string | null
          images?: string[] | null
          dietary_options?: string[] | null
          latitude?: number | null
          longitude?: number | null
          rating?: number | null
          review_count?: number
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'restaurants_city_id_fkey'
            columns: ['city_id']
            referencedRelation: 'cities'
            referencedColumns: ['id']
          }
        ]
      }
      activities: {
        Row: {
          id: string
          name: string
          slug: string
          city_id: string
          type: 'adventure' | 'cultural' | 'wellness' | 'nature' | 'cooking' | 'shopping' | 'nightlife' | 'sports' | 'festivals'
          description: string
          long_description: string | null
          duration: string | null
          price_from_mad: number | null
          difficulty: 'easy' | 'moderate' | 'challenging' | null
          age_restriction: string | null
          images: string[] | null
          includes: string[] | null
          what_to_bring: string[] | null
          is_seasonal: boolean
          season_months: number[] | null
          rating: number | null
          review_count: number
          is_featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          city_id: string
          type: 'adventure' | 'cultural' | 'wellness' | 'nature' | 'cooking' | 'shopping' | 'nightlife' | 'sports' | 'festivals'
          description: string
          long_description?: string | null
          duration?: string | null
          price_from_mad?: number | null
          difficulty?: 'easy' | 'moderate' | 'challenging' | null
          age_restriction?: string | null
          images?: string[] | null
          includes?: string[] | null
          what_to_bring?: string[] | null
          is_seasonal?: boolean
          season_months?: number[] | null
          rating?: number | null
          review_count?: number
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          city_id?: string
          type?: 'adventure' | 'cultural' | 'wellness' | 'nature' | 'cooking' | 'shopping' | 'nightlife' | 'sports' | 'festivals'
          description?: string
          long_description?: string | null
          duration?: string | null
          price_from_mad?: number | null
          difficulty?: 'easy' | 'moderate' | 'challenging' | null
          age_restriction?: string | null
          images?: string[] | null
          includes?: string[] | null
          what_to_bring?: string[] | null
          is_seasonal?: boolean
          season_months?: number[] | null
          rating?: number | null
          review_count?: number
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'activities_city_id_fkey'
            columns: ['city_id']
            referencedRelation: 'cities'
            referencedColumns: ['id']
          }
        ]
      }
      guides: {
        Row: {
          id: string
          name: string
          slug: string
          city_id: string
          bio: string | null
          languages: string[] | null
          specialties: string[] | null
          experience_years: number | null
          rating: number | null
          review_count: number
          price_per_day_mad: number | null
          phone: string | null
          email: string | null
          image: string | null
          is_certified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          city_id: string
          bio?: string | null
          languages?: string[] | null
          specialties?: string[] | null
          experience_years?: number | null
          rating?: number | null
          review_count?: number
          price_per_day_mad?: number | null
          phone?: string | null
          email?: string | null
          image?: string | null
          is_certified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          city_id?: string
          bio?: string | null
          languages?: string[] | null
          specialties?: string[] | null
          experience_years?: number | null
          rating?: number | null
          review_count?: number
          price_per_day_mad?: number | null
          phone?: string | null
          email?: string | null
          image?: string | null
          is_certified?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'guides_city_id_fkey'
            columns: ['city_id']
            referencedRelation: 'cities'
            referencedColumns: ['id']
          }
        ]
      }
      transport_options: {
        Row: {
          id: string
          type: 'train' | 'bus' | 'taxi' | 'car_rental' | 'domestic_flight' | 'ferry'
          from_city_id: string
          to_city_id: string | null
          duration_hours: number | null
          price_from_mad: number | null
          frequency: string | null
          provider: string | null
          booking_url: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          type: 'train' | 'bus' | 'taxi' | 'car_rental' | 'domestic_flight' | 'ferry'
          from_city_id: string
          to_city_id?: string | null
          duration_hours?: number | null
          price_from_mad?: number | null
          frequency?: string | null
          provider?: string | null
          booking_url?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          type?: 'train' | 'bus' | 'taxi' | 'car_rental' | 'domestic_flight' | 'ferry'
          from_city_id?: string
          to_city_id?: string | null
          duration_hours?: number | null
          price_from_mad?: number | null
          frequency?: string | null
          provider?: string | null
          booking_url?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'transport_options_from_city_id_fkey'
            columns: ['from_city_id']
            referencedRelation: 'cities'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transport_options_to_city_id_fkey'
            columns: ['to_city_id']
            referencedRelation: 'cities'
            referencedColumns: ['id']
          }
        ]
      }
      events: {
        Row: {
          id: string
          name: string
          slug: string
          city_id: string | null
          description: string
          long_description: string | null
          start_date: string | null
          end_date: string | null
          type: string | null
          venue: string | null
          price: string | null
          images: string[] | null
          is_annual: boolean
          month: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          city_id?: string | null
          description: string
          long_description?: string | null
          start_date?: string | null
          end_date?: string | null
          type?: string | null
          venue?: string | null
          price?: string | null
          images?: string[] | null
          is_annual?: boolean
          month?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          city_id?: string | null
          description?: string
          long_description?: string | null
          start_date?: string | null
          end_date?: string | null
          type?: string | null
          venue?: string | null
          price?: string | null
          images?: string[] | null
          is_annual?: boolean
          month?: number | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'events_city_id_fkey'
            columns: ['city_id']
            referencedRelation: 'cities'
            referencedColumns: ['id']
          }
        ]
      }
      travel_tips: {
        Row: {
          id: string
          title: string
          slug: string
          city_id: string | null
          category: 'visa' | 'money' | 'safety' | 'health' | 'culture' | 'packing' | 'transport' | 'communication' | 'weather'
          content: string
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          city_id?: string | null
          category: 'visa' | 'money' | 'safety' | 'health' | 'culture' | 'packing' | 'transport' | 'communication' | 'weather'
          content: string
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          city_id?: string | null
          category?: 'visa' | 'money' | 'safety' | 'health' | 'culture' | 'packing' | 'transport' | 'communication' | 'weather'
          content?: string
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'travel_tips_city_id_fkey'
            columns: ['city_id']
            referencedRelation: 'cities'
            referencedColumns: ['id']
          }
        ]
      }
      itineraries: {
        Row: {
          id: string
          name: string
          slug: string
          duration_days: number
          description: string
          long_description: string | null
          cities: string[] | null
          highlights: string[] | null
          budget_level: 'budget' | 'mid_range' | 'luxury'
          travel_style: 'adventure' | 'cultural' | 'relaxation' | 'family' | 'romantic' | 'backpacker'
          daily_plan: Json | null
          images: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          duration_days: number
          description: string
          long_description?: string | null
          cities?: string[] | null
          highlights?: string[] | null
          budget_level?: 'budget' | 'mid_range' | 'luxury'
          travel_style?: 'adventure' | 'cultural' | 'relaxation' | 'family' | 'romantic' | 'backpacker'
          daily_plan?: Json | null
          images?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          duration_days?: number
          description?: string
          long_description?: string | null
          cities?: string[] | null
          highlights?: string[] | null
          budget_level?: 'budget' | 'mid_range' | 'luxury'
          travel_style?: 'adventure' | 'cultural' | 'relaxation' | 'family' | 'romantic' | 'backpacker'
          daily_plan?: Json | null
          images?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          listing_id: string
          listing_type: 'listing' | 'attraction' | 'tour' | 'accommodation' | 'restaurant' | 'activity' | 'guide'
          author_name: string
          rating: number
          title: string | null
          content: string | null
          visit_date: string | null
          images: string[] | null
          is_verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          listing_id: string
          listing_type: 'listing' | 'attraction' | 'tour' | 'accommodation' | 'restaurant' | 'activity' | 'guide'
          author_name: string
          rating: number
          title?: string | null
          content?: string | null
          visit_date?: string | null
          images?: string[] | null
          is_verified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          listing_id?: string
          listing_type?: 'listing' | 'attraction' | 'tour' | 'accommodation' | 'restaurant' | 'activity' | 'guide'
          author_name?: string
          rating?: number
          title?: string | null
          content?: string | null
          visit_date?: string | null
          images?: string[] | null
          is_verified?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: {
      accommodation_type: 'hotel' | 'riad' | 'hostel' | 'camping' | 'apartment' | 'resort' | 'kasbah' | 'guesthouse'
      activity_type: 'adventure' | 'cultural' | 'wellness' | 'nature' | 'cooking' | 'shopping' | 'nightlife' | 'sports' | 'festivals'
      attraction_type: 'monument' | 'museum' | 'nature' | 'market' | 'religious' | 'ruins' | 'garden' | 'beach'
      budget_level: 'budget' | 'mid_range' | 'luxury'
      cuisine_type: 'moroccan' | 'french' | 'mediterranean' | 'seafood' | 'street_food' | 'international' | 'fusion'
      difficulty_level: 'easy' | 'moderate' | 'challenging' | 'extreme'
      listing_type: 'listing' | 'attraction' | 'tour' | 'accommodation' | 'restaurant' | 'activity' | 'guide'
      tip_category: 'visa' | 'money' | 'safety' | 'health' | 'culture' | 'packing' | 'transport' | 'communication' | 'weather'
      transport_type: 'train' | 'bus' | 'taxi' | 'car_rental' | 'domestic_flight' | 'ferry'
      travel_style: 'adventure' | 'cultural' | 'relaxation' | 'family' | 'romantic' | 'backpacker'
    }
    CompositeTypes: Record<string, never>
  }
}

// Convenience type aliases
export type Region = Database['public']['Tables']['regions']['Row']
export type City = Database['public']['Tables']['cities']['Row']
export type Category = Database['public']['Tables']['categories']['Row']
export type Listing = Database['public']['Tables']['listings']['Row']
export type Attraction = Database['public']['Tables']['attractions']['Row']
export type Tour = Database['public']['Tables']['tours']['Row']
export type Accommodation = Database['public']['Tables']['accommodations']['Row']
export type Restaurant = Database['public']['Tables']['restaurants']['Row']
export type Activity = Database['public']['Tables']['activities']['Row']
export type Guide = Database['public']['Tables']['guides']['Row']
export type TransportOption = Database['public']['Tables']['transport_options']['Row']
export type Event = Database['public']['Tables']['events']['Row']
export type TravelTip = Database['public']['Tables']['travel_tips']['Row']
export type Itinerary = Database['public']['Tables']['itineraries']['Row']
export type Review = Database['public']['Tables']['reviews']['Row']

// Insert types
export type RegionInsert = Database['public']['Tables']['regions']['Insert']
export type CityInsert = Database['public']['Tables']['cities']['Insert']
export type ListingInsert = Database['public']['Tables']['listings']['Insert']
export type AttractionInsert = Database['public']['Tables']['attractions']['Insert']
export type TourInsert = Database['public']['Tables']['tours']['Insert']
export type AccommodationInsert = Database['public']['Tables']['accommodations']['Insert']
export type RestaurantInsert = Database['public']['Tables']['restaurants']['Insert']
export type ActivityInsert = Database['public']['Tables']['activities']['Insert']
export type GuideInsert = Database['public']['Tables']['guides']['Insert']
export type TransportOptionInsert = Database['public']['Tables']['transport_options']['Insert']
export type EventInsert = Database['public']['Tables']['events']['Insert']
export type TravelTipInsert = Database['public']['Tables']['travel_tips']['Insert']
export type ItineraryInsert = Database['public']['Tables']['itineraries']['Insert']
export type ReviewInsert = Database['public']['Tables']['reviews']['Insert']
