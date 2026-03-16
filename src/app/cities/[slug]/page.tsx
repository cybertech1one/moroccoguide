import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  cities,
  getCityBySlug,
  getNearbyCities,
  getDistance,
} from '@/lib/data'
import { cn, generateStructuredData, truncate } from '@/lib/utils'
import {
  SectionNav,
  ShareButton,
  BookmarkButton,
  ImageGallery,
} from './CityPageClient'
import {
  Star,
  MapPin,
  Users,
  Mountain,
  Cloud,
  Calendar,
  Plane,
  Crown,
  Waves,
  ChevronRight,
  Home,
  Landmark,
  Camera,
  Clock,
  Ticket,
  Bed,
  DollarSign,
  Utensils,
  Compass,
  Bus,
  Train,
  Car,
  Navigation,
  Sun,
  Shield,
  Heart,
  Map,
  ArrowRight,
  ExternalLink,
  Tag,
  ThermometerSun,
  Globe,
  MessageCircle,
  TreePine,
  Tent,
  Footprints,
  Eye,
  Sparkles,
  Coffee,
  ShoppingBag,
  Music,
  BookOpen,
  Building2,
} from 'lucide-react'

/* ================================================================
   STATIC PARAMS + METADATA
   ================================================================ */

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const city = getCityBySlug(slug)
  if (!city) return { title: 'City Not Found' }

  return {
    title: `${city.name} Travel Guide | CityGuide`,
    description: `Complete travel guide to ${city.name}, Morocco. Discover ${city.attractionCount} attractions, best hotels, restaurants, and activities. ${city.description}`,
    openGraph: {
      title: `${city.name}, Morocco - Complete Travel Guide | CityGuide`,
      description: city.description,
      images: [
        {
          url: city.heroImage,
          width: 2800,
          height: 1600,
          alt: `${city.name}, Morocco`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${city.name} Travel Guide | CityGuide`,
      description: truncate(city.description, 200),
      images: [city.heroImage],
    },
    alternates: {
      canonical: `https://citytoursmorocco.com/cities/${city.slug}`,
    },
  }
}

/* ================================================================
   SAMPLE DATA GENERATORS
   ================================================================ */

interface SampleAttraction {
  name: string
  type: string
  rating: number
  image: string
  description: string
  duration: string
  price: string
}

interface SampleAccommodation {
  name: string
  type: string
  stars: number
  priceRange: string
  image: string
  description: string
}

interface SampleRestaurant {
  name: string
  cuisine: string
  priceLevel: number
  rating: number
  image: string
  description: string
}

interface SampleActivity {
  name: string
  type: string
  duration: string
  price: string
  difficulty: string
  image: string
  description: string
}

function generateAttractions(
  cityName: string,
  tags: string[],
  isImperial: boolean,
  isCoastal: boolean,
  heroImage: string
): SampleAttraction[] {
  const img = heroImage
  const tagStr = tags.join(' ').toLowerCase()

  if (isImperial) {
    return [
      {
        name: `Historic Medina of ${cityName}`,
        type: 'Medina',
        rating: 4.8,
        image: img,
        description: `Wander the ancient narrow alleyways of ${cityName}'s UNESCO-listed medina, where centuries of Moroccan urban culture come alive through bustling souks, hidden riads, and ornate fountains.`,
        duration: '3-4 hours',
        price: 'Free',
      },
      {
        name: `Royal Palace`,
        type: 'Palace',
        rating: 4.6,
        image: img,
        description: `Admire the ornate gates and expansive grounds of the Royal Palace, showcasing the finest Moroccan architectural traditions with intricate zellige tilework and carved cedar.`,
        duration: '1-2 hours',
        price: '70 MAD',
      },
      {
        name: `Ancient Mosque & Minaret`,
        type: 'Religious',
        rating: 4.7,
        image: img,
        description: `One of the most beautiful mosques in Morocco, featuring stunning minaret architecture visible across the skyline and exceptional stucco ornamentation.`,
        duration: '30 min (exterior)',
        price: 'Free',
      },
      {
        name: `Artisan Souks`,
        type: 'Market',
        rating: 4.5,
        image: img,
        description: `Navigate the labyrinthine market streets where master craftsmen continue centuries-old traditions of leatherwork, metalsmithing, woodcarving, and textile weaving.`,
        duration: '2-3 hours',
        price: 'Free',
      },
      {
        name: `Museum of History & Culture`,
        type: 'Museum',
        rating: 4.4,
        image: img,
        description: `Explore the rich heritage of ${cityName} through curated collections of Amazigh artifacts, Islamic calligraphy, antique weapons, and traditional clothing.`,
        duration: '1.5 hours',
        price: '50 MAD',
      },
      {
        name: `City Walls & Historic Gates`,
        type: 'Monument',
        rating: 4.3,
        image: img,
        description: `Walk along the imposing medieval ramparts that have guarded ${cityName} for centuries, punctuated by monumental gates decorated with horseshoe arches and geometric carvings.`,
        duration: '1-2 hours',
        price: 'Free',
      },
    ]
  }

  if (isCoastal) {
    return [
      {
        name: `${cityName} Beach Promenade`,
        type: 'Beach',
        rating: 4.5,
        image: img,
        description: `Stroll along the palm-lined Atlantic corniche, stretching for kilometers with golden sand beaches, ocean breezes, and spectacular sunset panoramas.`,
        duration: '2-3 hours',
        price: 'Free',
      },
      {
        name: `Traditional Fishing Port`,
        type: 'Harbor',
        rating: 4.4,
        image: img,
        description: `Watch fishermen haul in the day's catch at this vibrant working port where colorful wooden boats bob alongside seagulls and fresh seafood stalls.`,
        duration: '1-2 hours',
        price: 'Free',
      },
      {
        name: `Seaside Fortifications`,
        type: 'Monument',
        rating: 4.6,
        image: img,
        description: `Historic ramparts and Portuguese-era bastions overlooking the crashing Atlantic waves, offering panoramic coastal views and a window into maritime defense history.`,
        duration: '1-2 hours',
        price: '20 MAD',
      },
      {
        name: `Surf Spots & Water Sports`,
        type: 'Activity',
        rating: 4.5,
        image: img,
        description: `Renowned surf breaks attract wave riders from around the globe, with consistent swells, warm water, and a laid-back beach culture.`,
        duration: 'Half day',
        price: '200-400 MAD',
      },
      {
        name: `Seafood Market`,
        type: 'Market',
        rating: 4.7,
        image: img,
        description: `A sensory feast of fresh Atlantic seafood, where you can select your catch and have it grilled on the spot with Moroccan spices and fresh bread.`,
        duration: '1-2 hours',
        price: '50-150 MAD',
      },
      {
        name: `Coastal Walking Trail`,
        type: 'Nature',
        rating: 4.3,
        image: img,
        description: `Follow the rugged coastline past hidden coves, dramatic cliff formations, and wildflower meadows that bloom spectacularly in spring.`,
        duration: '2-4 hours',
        price: 'Free',
      },
    ]
  }

  if (tagStr.includes('desert') || tagStr.includes('sahara')) {
    return [
      {
        name: `Sand Dunes Expedition`,
        type: 'Nature',
        rating: 4.9,
        image: img,
        description: `Towering golden dunes reaching 150 meters high offer an otherworldly landscape for camel treks, sandboarding, and unforgettable sunrise vistas over the Sahara.`,
        duration: 'Full day',
        price: '300-600 MAD',
      },
      {
        name: `Camel Trek into the Sahara`,
        type: 'Activity',
        rating: 4.8,
        image: img,
        description: `Ride a dromedary camel along ancient caravan routes as the sun paints the sand in shades of amber and crimson, following Berber guides to remote campsites.`,
        duration: '3-5 hours',
        price: '250-500 MAD',
      },
      {
        name: `Desert Luxury Camp`,
        type: 'Camp',
        rating: 4.7,
        image: img,
        description: `Spend the night in a traditional Berber tent beneath a canopy of stars, with campfire music, traditional mint tea, and tagine cooked over open flames.`,
        duration: 'Overnight',
        price: '500-1500 MAD',
      },
      {
        name: `Oasis Garden & Palmery`,
        type: 'Nature',
        rating: 4.5,
        image: img,
        description: `A verdant haven amid the arid landscape, the oasis sustains date palms, olive groves, and traditional irrigation channels that have served communities for millennia.`,
        duration: '1-2 hours',
        price: 'Free',
      },
      {
        name: `Ancient Kasbah Ruins`,
        type: 'Ruins',
        rating: 4.4,
        image: img,
        description: `Explore the crumbling yet majestic fortified settlements that once protected Saharan trade routes, showcasing the earthen architecture distinctive to southern Morocco.`,
        duration: '1-2 hours',
        price: '30 MAD',
      },
      {
        name: `Stargazing Site`,
        type: 'Nature',
        rating: 4.9,
        image: img,
        description: `Under some of the darkest and clearest skies on Earth, observe constellations, the Milky Way, and shooting stars with an experienced astronomy guide.`,
        duration: '2-3 hours',
        price: '150 MAD',
      },
    ]
  }

  if (tagStr.includes('mountain') || tagStr.includes('hiking') || tagStr.includes('atlas')) {
    return [
      {
        name: `Mountain Trails & Summit Hike`,
        type: 'Nature',
        rating: 4.7,
        image: img,
        description: `Trek through dramatic mountain landscapes with routes ranging from gentle valley walks to challenging summit ascents that reward you with breathtaking panoramic views.`,
        duration: '4-8 hours',
        price: '200-400 MAD (guide)',
      },
      {
        name: `Cedar Forest Walk`,
        type: 'Nature',
        rating: 4.5,
        image: img,
        description: `Wander through ancient cedar forests where Barbary macaques play in the branches above and the air is filled with the crisp scent of mountain cedar.`,
        duration: '2-3 hours',
        price: 'Free',
      },
      {
        name: `Valley Viewpoint`,
        type: 'Viewpoint',
        rating: 4.6,
        image: img,
        description: `A spectacular lookout point offering sweeping views of terraced villages, river gorges, and snow-capped peaks stretching to the horizon.`,
        duration: '30 min',
        price: 'Free',
      },
      {
        name: `Local Berber Market`,
        type: 'Market',
        rating: 4.4,
        image: img,
        description: `Join the weekly souk where mountain communities gather to trade produce, handwoven textiles, herbs, and livestock amid a lively social atmosphere.`,
        duration: '2-3 hours',
        price: 'Free',
      },
      {
        name: `Waterfall Hike`,
        type: 'Nature',
        rating: 4.6,
        image: img,
        description: `Follow mountain streams through walnut and cherry orchards to stunning cascading waterfalls, with natural swimming pools perfect for a refreshing dip.`,
        duration: '3-5 hours',
        price: '100 MAD (guide)',
      },
      {
        name: `Traditional Mountain Village Visit`,
        type: 'Cultural',
        rating: 4.5,
        image: img,
        description: `Experience authentic Amazigh hospitality in a remote mountain village, sharing mint tea and home-cooked meals while learning about centuries-old traditions.`,
        duration: '2-4 hours',
        price: '150 MAD',
      },
    ]
  }

  // Default fallback
  return [
    {
      name: `Main Square & Plaza`,
      type: 'Landmark',
      rating: 4.4,
      image: img,
      description: `The beating heart of ${cityName}, this central square pulses with life from morning markets to evening promenades, surrounded by cafes and historic buildings.`,
      duration: '1-2 hours',
      price: 'Free',
    },
    {
      name: `Local Market & Souks`,
      type: 'Market',
      rating: 4.5,
      image: img,
      description: `Discover authentic Moroccan commerce in the traditional covered markets, fragrant with spices, overflowing with handcrafted goods, and alive with local character.`,
      duration: '2-3 hours',
      price: 'Free',
    },
    {
      name: `City Mosque`,
      type: 'Religious',
      rating: 4.3,
      image: img,
      description: `An architectural gem featuring the distinctive Moroccan minaret style, with beautiful proportions and detailed ornamentation visible from throughout the city.`,
      duration: '30 min (exterior)',
      price: 'Free',
    },
    {
      name: `Public Gardens`,
      type: 'Garden',
      rating: 4.2,
      image: img,
      description: `A tranquil refuge of manicured gardens with citrus trees, rose bushes, and shaded pathways, ideal for a peaceful escape from the bustling medina.`,
      duration: '1 hour',
      price: 'Free',
    },
    {
      name: `Cultural Center & Gallery`,
      type: 'Museum',
      rating: 4.3,
      image: img,
      description: `Showcasing contemporary and traditional Moroccan art, this cultural space hosts rotating exhibitions, workshops, and performances celebrating local creativity.`,
      duration: '1-2 hours',
      price: '30 MAD',
    },
    {
      name: `Panoramic Viewpoint`,
      type: 'Viewpoint',
      rating: 4.5,
      image: img,
      description: `Climb to this elevated lookout for sweeping views across ${cityName} and its surrounding landscape, especially magical during golden hour and sunset.`,
      duration: '30 min',
      price: 'Free',
    },
  ]
}

function generateAccommodations(
  cityName: string,
  isImperial: boolean,
  isCoastal: boolean,
  heroImage: string
): SampleAccommodation[] {
  const img = heroImage

  if (isImperial) {
    return [
      {
        name: `Riad Al Andalous`,
        type: 'Riad',
        stars: 5,
        priceRange: '1,200 - 3,500 MAD',
        image: img,
        description: `A meticulously restored riad in the heart of the medina featuring hand-carved plaster, zellige mosaics, a courtyard fountain, and rooftop terrace with city views.`,
      },
      {
        name: `Dar Essalam Boutique Hotel`,
        type: 'Boutique Hotel',
        stars: 4,
        priceRange: '800 - 1,800 MAD',
        image: img,
        description: `Blending traditional Moroccan elegance with modern comfort, this boutique property offers spacious suites, a hammam spa, and a renowned courtyard restaurant.`,
      },
      {
        name: `${cityName} Palace Hotel`,
        type: 'Hotel',
        stars: 5,
        priceRange: '2,000 - 6,000 MAD',
        image: img,
        description: `A landmark luxury hotel set in lush gardens with multiple pools, world-class dining, golf course access, and unparalleled service befitting an imperial city.`,
      },
      {
        name: `Medina Backpackers Hostel`,
        type: 'Hostel',
        stars: 3,
        priceRange: '120 - 350 MAD',
        image: img,
        description: `A social and budget-friendly base with clean dorms, a communal kitchen, rooftop hangout, and organized walking tours through the old city.`,
      },
    ]
  }

  if (isCoastal) {
    return [
      {
        name: `Ocean View Riad`,
        type: 'Riad',
        stars: 4,
        priceRange: '900 - 2,200 MAD',
        image: img,
        description: `A charming riad steps from the beach, featuring blue-and-white Moroccan decor, a sun-drenched terrace, and the sound of waves drifting through open windows.`,
      },
      {
        name: `Seaside Resort & Spa`,
        type: 'Resort',
        stars: 5,
        priceRange: '1,800 - 5,000 MAD',
        image: img,
        description: `A beachfront resort with direct ocean access, infinity pool, thalassotherapy spa, and sunset dining terrace overlooking the Atlantic.`,
      },
      {
        name: `The Surf Lodge`,
        type: 'Boutique Hotel',
        stars: 3,
        priceRange: '400 - 900 MAD',
        image: img,
        description: `A laid-back surfer-friendly hotel with board storage, wax station, ocean-view rooms, and a communal lounge perfect for sharing wave stories.`,
      },
      {
        name: `Atlantic Hostel`,
        type: 'Hostel',
        stars: 2,
        priceRange: '100 - 280 MAD',
        image: img,
        description: `Budget beds with big views, this social hostel offers clean dorms, a shared kitchen, surf equipment rental, and nightly barbecues on the terrace.`,
      },
    ]
  }

  return [
    {
      name: `Riad ${cityName}`,
      type: 'Riad',
      stars: 4,
      priceRange: '700 - 1,600 MAD',
      image: img,
      description: `An authentic Moroccan riad with traditional courtyard, plunge pool, rooftop breakfast terrace, and rooms individually decorated with local artisan work.`,
    },
    {
      name: `Hotel Maroc Central`,
      type: 'Hotel',
      stars: 4,
      priceRange: '500 - 1,200 MAD',
      image: img,
      description: `A modern, well-located hotel offering comfortable rooms, on-site restaurant serving regional cuisine, conference facilities, and a welcoming reception area.`,
    },
    {
      name: `Kasbah Guest House`,
      type: 'Guest House',
      stars: 3,
      priceRange: '350 - 800 MAD',
      image: img,
      description: `A family-run guesthouse in a converted kasbah offering warm hospitality, home-cooked meals, and insider tips on exploring the area like a local.`,
    },
    {
      name: `${cityName} Youth Hostel`,
      type: 'Hostel',
      stars: 2,
      priceRange: '80 - 250 MAD',
      image: img,
      description: `An affordable and clean option for budget travelers, with dorm beds, a communal kitchen, luggage storage, and a sociable common room.`,
    },
  ]
}

function generateRestaurants(
  cityName: string,
  isImperial: boolean,
  isCoastal: boolean,
  heroImage: string
): SampleRestaurant[] {
  const img = heroImage

  if (isCoastal) {
    return [
      {
        name: `Chez Ahmed Seafood`,
        cuisine: 'Seafood',
        priceLevel: 2,
        rating: 4.7,
        image: img,
        description: `Fresh-off-the-boat Atlantic catches grilled over charcoal and served with chermoula sauce, saffron rice, and crispy Moroccan bread.`,
      },
      {
        name: `La Terrasse du Port`,
        cuisine: 'Moroccan-Mediterranean',
        priceLevel: 3,
        rating: 4.6,
        image: img,
        description: `Elegant harbor-side dining with panoramic ocean views, serving refined Moroccan-Mediterranean fusion plates and an excellent wine list.`,
      },
      {
        name: `Cafe des Arts`,
        cuisine: 'Cafe & Patisserie',
        priceLevel: 1,
        rating: 4.4,
        image: img,
        description: `A bohemian cafe popular with artists and travelers, known for its flaky msemen, fresh-squeezed orange juice, and Moroccan pastries.`,
      },
      {
        name: `Marina Grill`,
        cuisine: 'Grilled Meats & Seafood',
        priceLevel: 2,
        rating: 4.5,
        image: img,
        description: `Open-flame cooking with the freshest local ingredients, from whole grilled sea bream to slow-roasted lamb shoulder with preserved lemon.`,
      },
    ]
  }

  return [
    {
      name: `La Maison Arabe`,
      cuisine: 'Traditional Moroccan',
      priceLevel: 3,
      rating: 4.8,
      image: img,
      description: `Exquisite traditional Moroccan cuisine served in an opulent riad setting, featuring multi-course diffa feasts, slow-cooked tagines, and freshly baked khobz.`,
    },
    {
      name: `Nomad ${cityName}`,
      cuisine: 'Modern Moroccan',
      priceLevel: 2,
      rating: 4.6,
      image: img,
      description: `Contemporary twists on Moroccan classics with rooftop terrace dining, seasonal menus, and inventive cocktails using local herbs and spices.`,
    },
    {
      name: `Snack Populaire`,
      cuisine: 'Street Food',
      priceLevel: 1,
      rating: 4.5,
      image: img,
      description: `Beloved by locals, this no-frills spot serves the best bocadillos, harira soup, brochettes, and freshly fried sfenj doughnuts in the neighborhood.`,
    },
    {
      name: `Jardin Secret Restaurant`,
      cuisine: 'Moroccan-French',
      priceLevel: 3,
      rating: 4.7,
      image: img,
      description: `Hidden within a walled garden, this restaurant serves refined Moroccan-French dishes amid orange trees, fountains, and candlelight.`,
    },
  ]
}

function generateActivities(
  cityName: string,
  tags: string[],
  isImperial: boolean,
  isCoastal: boolean,
  heroImage: string
): SampleActivity[] {
  const img = heroImage
  const tagStr = tags.join(' ').toLowerCase()

  const activities: SampleActivity[] = []

  if (isImperial) {
    activities.push(
      {
        name: `Medina Walking Tour`,
        type: 'Cultural',
        duration: '3 hours',
        price: '200 MAD',
        difficulty: 'Easy',
        image: img,
        description: `Follow a licensed local guide through hidden alleys, historic fondouks, and artisan workshops that most visitors never discover on their own.`,
      },
      {
        name: `Moroccan Cooking Class`,
        type: 'Culinary',
        duration: '4 hours',
        price: '350 MAD',
        difficulty: 'Easy',
        image: img,
        description: `Shop for ingredients in the souk and then learn to prepare authentic tagine, couscous, and pastilla in a traditional kitchen with a local chef.`,
      },
      {
        name: `Hammam & Spa Experience`,
        type: 'Wellness',
        duration: '2 hours',
        price: '250-500 MAD',
        difficulty: 'Easy',
        image: img,
        description: `Indulge in a traditional Moroccan steam bath with black soap scrub, ghassoul clay mask, and argan oil massage in a centuries-old bathhouse.`,
      },
      {
        name: `Photography Tour`,
        type: 'Creative',
        duration: '3 hours',
        price: '300 MAD',
        difficulty: 'Easy',
        image: img,
        description: `Capture the vibrant colors, patterns, and characters of the medina during golden hour with guidance from a professional local photographer.`,
      }
    )
  } else if (isCoastal) {
    activities.push(
      {
        name: `Surfing Lesson`,
        type: 'Water Sport',
        duration: '2 hours',
        price: '300 MAD',
        difficulty: 'Beginner-Intermediate',
        image: img,
        description: `Ride the Atlantic waves with a certified instructor on beginner-friendly breaks, with all equipment included and small group sizes.`,
      },
      {
        name: `Sunset Boat Trip`,
        type: 'Boat Tour',
        duration: '2 hours',
        price: '250 MAD',
        difficulty: 'Easy',
        image: img,
        description: `Cruise along the coastline aboard a traditional wooden boat as the sun dips below the Atlantic, with refreshments and dolphin-spotting opportunities.`,
      },
      {
        name: `Wind & Kite Sports`,
        type: 'Water Sport',
        duration: '3 hours',
        price: '400 MAD',
        difficulty: 'Intermediate',
        image: img,
        description: `Harness the Atlantic trade winds for an exhilarating session of windsurfing or kitesurfing at one of Morocco's top wind sport destinations.`,
      },
      {
        name: `Coastal Horseback Ride`,
        type: 'Adventure',
        duration: '2 hours',
        price: '350 MAD',
        difficulty: 'Easy',
        image: img,
        description: `Gallop along deserted beaches at sunset on well-trained horses, with experienced guides leading routes through dunes and coastal trails.`,
      }
    )
  } else if (tagStr.includes('desert') || tagStr.includes('sahara')) {
    activities.push(
      {
        name: `Sunrise Camel Trek`,
        type: 'Adventure',
        duration: '3 hours',
        price: '300 MAD',
        difficulty: 'Easy',
        image: img,
        description: `Wake before dawn to ride dromedary camels into the golden dunes and witness a sunrise that transforms the Sahara into a canvas of orange and purple.`,
      },
      {
        name: `Sandboarding Adventure`,
        type: 'Sport',
        duration: '2 hours',
        price: '200 MAD',
        difficulty: 'Moderate',
        image: img,
        description: `Strap on a sandboard and carve down towering dunes for an adrenaline rush amid stunning desert scenery.`,
      },
      {
        name: `Desert 4x4 Expedition`,
        type: 'Adventure',
        duration: '4 hours',
        price: '500 MAD',
        difficulty: 'Easy (passenger)',
        image: img,
        description: `Traverse remote desert landscapes in a 4x4 vehicle, visiting fossil sites, nomadic camps, and hidden oases inaccessible by other means.`,
      },
      {
        name: `Berber Village Visit`,
        type: 'Cultural',
        duration: '3 hours',
        price: '150 MAD',
        difficulty: 'Easy',
        image: img,
        description: `Share tea with a Berber family in a traditional clay village, learn about desert survival traditions, and discover the ancient art of henna painting.`,
      }
    )
  } else {
    activities.push(
      {
        name: `Guided Heritage Walk`,
        type: 'Cultural',
        duration: '2.5 hours',
        price: '150 MAD',
        difficulty: 'Easy',
        image: img,
        description: `Discover the architectural and cultural highlights of ${cityName} with an expert guide who brings local history to life through stories and traditions.`,
      },
      {
        name: `Traditional Craft Workshop`,
        type: 'Creative',
        duration: '3 hours',
        price: '250 MAD',
        difficulty: 'Easy',
        image: img,
        description: `Learn the art of zellige tilework, pottery, or leather craftsmanship from a master artisan in their workshop, taking home your own creation.`,
      },
      {
        name: `Local Food Tasting Tour`,
        type: 'Culinary',
        duration: '3 hours',
        price: '200 MAD',
        difficulty: 'Easy',
        image: img,
        description: `Sample the best street food and local specialties across multiple stops, from piping-hot msemen to refreshing avocado smoothies and slow-simmered tangia.`,
      },
      {
        name: `Day Trip to Surrounding Area`,
        type: 'Excursion',
        duration: 'Full day',
        price: '400 MAD',
        difficulty: 'Easy',
        image: img,
        description: `Escape the city for a full-day guided adventure to nearby natural wonders, traditional villages, and scenic viewpoints.`,
      }
    )
  }

  return activities
}

/* ================================================================
   UTILITY HELPERS
   ================================================================ */

const MARRAKECH_COORDS = { lat: 31.6295, lon: -7.9811 }
const CASABLANCA_COORDS = { lat: 33.5731, lon: -7.5898 }

function formatPopulation(pop: number): string {
  return new Intl.NumberFormat('en-US').format(pop)
}

function splitIntoParagraphs(text: string): string[] {
  const sentences = text.split(/(?<=[.!?])\s+/)
  if (sentences.length <= 3) return [text]
  const chunkSize = Math.ceil(sentences.length / 3)
  const paragraphs: string[] = []
  for (let i = 0; i < sentences.length; i += chunkSize) {
    paragraphs.push(sentences.slice(i, i + chunkSize).join(' '))
  }
  return paragraphs
}

function renderStars(rating: number) {
  const full = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.3
  const stars: React.ReactNode[] = []
  for (let i = 0; i < full; i++) {
    stars.push(<Star key={`f-${i}`} className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />)
  }
  if (hasHalf) {
    stars.push(
      <span key="half" className="relative inline-block w-4 h-4">
        <Star className="absolute inset-0 w-4 h-4 text-[var(--color-accent)]" />
        <span className="absolute inset-0 w-1/2 overflow-hidden">
          <Star className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
        </span>
      </span>
    )
  }
  const remaining = 5 - full - (hasHalf ? 1 : 0)
  for (let i = 0; i < remaining; i++) {
    stars.push(<Star key={`e-${i}`} className="w-4 h-4 text-[var(--color-accent)]/30" />)
  }
  return stars
}

function renderPriceLevel(level: number) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 3 }).map((_, i) => (
        <DollarSign
          key={i}
          className={cn('w-3.5 h-3.5', i < level ? 'text-[var(--color-green)]' : 'text-gray-300')}
        />
      ))}
    </span>
  )
}

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default async function CityDetailPage({ params }: PageProps) {
  const { slug } = await params
  const city = getCityBySlug(slug)

  if (!city) notFound()

  const nearbyCities = getNearbyCities(city.id, 5)
  const distFromMarrakech = Math.round(getDistance(city.latitude, city.longitude, MARRAKECH_COORDS.lat, MARRAKECH_COORDS.lon))
  const distFromCasablanca = Math.round(getDistance(city.latitude, city.longitude, CASABLANCA_COORDS.lat, CASABLANCA_COORDS.lon))

  const attractions = generateAttractions(city.name, city.tags, city.isImperialCity, city.isCoastal, city.heroImage)
  const accommodations = generateAccommodations(city.name, city.isImperialCity, city.isCoastal, city.heroImage)
  const restaurants = generateRestaurants(city.name, city.isImperialCity, city.isCoastal, city.heroImage)
  const activities = generateActivities(city.name, city.tags, city.isImperialCity, city.isCoastal, city.heroImage)

  const paragraphs = splitIntoParagraphs(city.longDescription)

  /* ── JSON-LD Structured Data ── */

  const placeSchema = generateStructuredData('Place', {
    name: city.name,
    description: city.description,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.latitude,
      longitude: city.longitude,
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: city.region,
      addressCountry: 'MA',
    },
    image: city.heroImage,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: city.rating,
      reviewCount: city.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  })

  const breadcrumbSchema = generateStructuredData('BreadcrumbList', {
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://citytoursmorocco.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cities',
        item: 'https://citytoursmorocco.com/cities',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: city.name,
        item: `https://citytoursmorocco.com/cities/${city.slug}`,
      },
    ],
  })

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ============================================================
          A. HERO SECTION
          ============================================================ */}
      <section
        className="relative w-full min-h-[70vh] lg:min-h-[80vh] flex items-end"
        style={{
          backgroundImage: `url(${city.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)]" />

        <div className="relative z-10 w-full container-morocco pb-12 pt-32">
          {/* Badges row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {city.isImperialCity && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-accent)]/90 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                <Crown className="w-3.5 h-3.5" />
                Imperial City
              </span>
            )}
            {city.isCoastal && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-secondary)]/90 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                <Waves className="w-3.5 h-3.5" />
                Coastal City
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-medium backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5" />
              {city.region}
            </span>
          </div>

          {/* City name */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
            {city.name}
          </h1>

          {/* Rating and review count */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-1.5">
              {renderStars(city.rating)}
              <span className="text-white font-semibold ml-1">{city.rating.toFixed(1)}</span>
            </div>
            <span className="text-white/70 text-sm">
              {city.reviewCount.toLocaleString()} reviews
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="text-white/70 text-sm flex items-center gap-1">
              <Camera className="w-3.5 h-3.5" />
              {city.attractionCount} attractions
            </span>
          </div>

          {/* Short description */}
          <p className="text-white/85 text-lg sm:text-xl max-w-2xl leading-relaxed mb-8">
            {city.description}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/tools/planner"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary)]/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4" />
              Plan Your Trip
            </Link>
            <ShareButton cityName={city.name} />
            <BookmarkButton citySlug={city.slug} />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION NAVIGATION BAR
          ============================================================ */}
      <SectionNav />

      {/* ============================================================
          B. QUICK STATS BAR
          ============================================================ */}
      <section className="bg-[var(--surface)] border-b border-[var(--border-light)]">
        <div className="container-morocco py-5">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <Users className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-[var(--text-muted)]">Population:</span>
              <span className="font-semibold">{formatPopulation(city.population)}</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-[var(--border)]" />
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <Mountain className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-[var(--text-muted)]">Elevation:</span>
              <span className="font-semibold">{city.elevation.toLocaleString()}m</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-[var(--border)]" />
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <Cloud className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-[var(--text-muted)]">Climate:</span>
              <span className="font-semibold">{city.climate}</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-[var(--border)]" />
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <Calendar className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-[var(--text-muted)]">Best Time:</span>
              <span className="font-semibold">{city.bestTimeToVisit}</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-[var(--border)]" />
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <Plane className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-[var(--text-muted)]">Airport:</span>
              <span className="font-semibold">{city.airportCode || 'No Airport'}</span>
            </div>
            {city.tags.length > 0 && (
              <>
                <div className="hidden sm:block w-px h-5 bg-[var(--border)]" />
                <div className="flex flex-wrap items-center gap-1.5">
                  {city.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================
          C. BREADCRUMB
          ============================================================ */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface-muted)] border-b border-[var(--border-light)]">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-[var(--color-primary)] transition-colors">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li>
              <Link href="/cities" className="hover:text-[var(--color-primary)] transition-colors">
                Cities
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-[var(--text-primary)] font-medium">{city.name}</li>
          </ol>
        </div>
      </nav>

      {/* ============================================================
          GALLERY (from CityPageClient)
          ============================================================ */}
      {city.galleryImages.length > 0 && (
        <section className="bg-[var(--surface)]">
          <div className="container-morocco py-6">
            <ImageGallery images={city.galleryImages} cityName={city.name} />
          </div>
        </section>
      )}

      {/* ============================================================
          D. TWO-COLUMN LAYOUT
          ============================================================ */}
      <div className="bg-[var(--surface-muted)]">
        <div className="container-morocco py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

            {/* ── MAIN CONTENT (~70%) ── */}
            <div className="w-full lg:w-[70%] space-y-14">

              {/* ─── Overview Section ─── */}
              <section id="overview" className="scroll-mt-40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10">
                    <Eye className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">
                    About {city.name}
                  </h2>
                </div>
                <div className="arabesque-divider mb-6" />
                <div className="card-moroccan p-6 sm:p-8">
                  <div className="prose prose-lg max-w-none text-[var(--text-secondary)] leading-relaxed space-y-4">
                    {paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </section>

              {/* ─── Top Attractions Section ─── */}
              <section id="attractions" className="scroll-mt-40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10">
                    <Landmark className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">
                    Things to See in {city.name}
                  </h2>
                </div>
                <div className="arabesque-divider mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {attractions.map((attr, i) => (
                    <div key={i} className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={attr.image}
                          alt={attr.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--color-primary)]">
                            {attr.type}
                          </span>
                        </div>
                        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                          <Star className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                          <span className="text-white text-xs font-semibold">{attr.rating}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-display text-lg font-bold text-[var(--text-primary)] mb-2">
                          {attr.name}
                        </h3>
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                          {attr.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                            {attr.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Ticket className="w-3.5 h-3.5 text-[var(--color-green)]" />
                            {attr.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── Where to Stay Section ─── */}
              <section id="stay" className="scroll-mt-40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10">
                    <Bed className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">
                    Where to Stay in {city.name}
                  </h2>
                </div>
                <div className="arabesque-divider mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {accommodations.map((acc, i) => (
                    <div key={i} className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={acc.image}
                          alt={acc.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--color-secondary)]">
                            {acc.type}
                          </span>
                        </div>
                        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                          {Array.from({ length: acc.stars }).map((_, s) => (
                            <Star key={s} className="w-3 h-3 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                          ))}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-display text-lg font-bold text-[var(--text-primary)] mb-1">
                          {acc.name}
                        </h3>
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                          {acc.description}
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-[var(--border-light)]">
                          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                            <Bed className="w-3.5 h-3.5" />
                            {acc.type}
                          </span>
                          <span className="text-sm font-bold text-[var(--color-primary)]">
                            {acc.priceRange} /night
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── Where to Eat Section ─── */}
              <section id="eat" className="scroll-mt-40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10">
                    <Utensils className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">
                    Where to Eat in {city.name}
                  </h2>
                </div>
                <div className="arabesque-divider mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {restaurants.map((rest, i) => (
                    <div key={i} className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={rest.image}
                          alt={rest.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--color-accent)] border border-[var(--color-accent)]/30">
                            {rest.cuisine}
                          </span>
                        </div>
                        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                          <Star className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                          <span className="text-white text-xs font-semibold">{rest.rating}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-display text-lg font-bold text-[var(--text-primary)] mb-1">
                          {rest.name}
                        </h3>
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                          {rest.description}
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-[var(--border-light)]">
                          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                            <Coffee className="w-3.5 h-3.5" />
                            {rest.cuisine}
                          </span>
                          {renderPriceLevel(rest.priceLevel)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── Things to Do Section ─── */}
              <section id="activities" className="scroll-mt-40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10">
                    <Compass className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">
                    Things to Do in {city.name}
                  </h2>
                </div>
                <div className="arabesque-divider mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {activities.map((act, i) => (
                    <div key={i} className="card-moroccan p-5 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 border border-[var(--color-primary)]/20">
                          {act.type === 'Cultural' && <Building2 className="w-5 h-5 text-[var(--color-primary)]" />}
                          {act.type === 'Culinary' && <Utensils className="w-5 h-5 text-[var(--color-primary)]" />}
                          {act.type === 'Wellness' && <Heart className="w-5 h-5 text-[var(--color-primary)]" />}
                          {act.type === 'Creative' && <Camera className="w-5 h-5 text-[var(--color-primary)]" />}
                          {act.type === 'Water Sport' && <Waves className="w-5 h-5 text-[var(--color-secondary)]" />}
                          {act.type === 'Boat Tour' && <Navigation className="w-5 h-5 text-[var(--color-secondary)]" />}
                          {act.type === 'Adventure' && <Compass className="w-5 h-5 text-[var(--color-green)]" />}
                          {act.type === 'Sport' && <Footprints className="w-5 h-5 text-[var(--color-green)]" />}
                          {act.type === 'Excursion' && <Map className="w-5 h-5 text-[var(--color-secondary)]" />}
                          {!['Cultural', 'Culinary', 'Wellness', 'Creative', 'Water Sport', 'Boat Tour', 'Adventure', 'Sport', 'Excursion'].includes(act.type) && (
                            <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-display text-lg font-bold text-[var(--text-primary)] truncate">
                              {act.name}
                            </h3>
                          </div>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] mb-2">
                            {act.type}
                          </span>
                          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                            {act.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                              {act.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Ticket className="w-3.5 h-3.5 text-[var(--color-green)]" />
                              {act.price}
                            </span>
                            <span className="flex items-center gap-1">
                              <Mountain className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                              {act.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── Getting There Section ─── */}
              <section id="getting-there" className="scroll-mt-40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10">
                    <Navigation className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">
                    Getting to {city.name}
                  </h2>
                </div>
                <div className="arabesque-divider mb-6" />

                {/* Distance summary */}
                <div className="card-moroccan p-5 mb-6 bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5">
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                      <div>
                        <p className="text-xs text-[var(--text-muted)]">From Marrakech</p>
                        <p className="text-lg font-bold text-[var(--text-primary)]">{distFromMarrakech} km</p>
                      </div>
                    </div>
                    <div className="w-px bg-[var(--border)]" />
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />
                      <div>
                        <p className="text-xs text-[var(--text-muted)]">From Casablanca</p>
                        <p className="text-lg font-bold text-[var(--text-primary)]">{distFromCasablanca} km</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Airport */}
                  <div className={cn(
                    'card-moroccan p-5',
                    city.airportCode
                      ? 'border-l-4 border-l-[var(--color-primary)]'
                      : 'border-l-4 border-l-gray-300'
                  )}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10">
                        <Plane className="w-5 h-5 text-[var(--color-primary)]" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">By Air</h3>
                    </div>
                    {city.airportCode ? (
                      <div>
                        <p className="text-sm text-[var(--text-secondary)] mb-2">
                          {city.name} is served by <span className="font-semibold">{city.airportCode}</span> airport with domestic and international connections. Airlines including Royal Air Maroc, Ryanair, and Transavia operate regular services.
                        </p>
                        <p className="text-xs text-[var(--text-muted)]">
                          Airport transfers available by taxi (150-300 MAD), shuttle bus, or pre-arranged hotel pickup.
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm text-[var(--text-secondary)] mb-2">
                          {city.name} does not have its own airport. The nearest international airports are in Marrakech ({distFromMarrakech} km) and Casablanca ({distFromCasablanca} km).
                        </p>
                        <p className="text-xs text-[var(--text-muted)]">
                          Arrange onward transport by bus, grand taxi, or rental car from the nearest airport.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Train */}
                  <div className="card-moroccan p-5 border-l-4 border-l-[var(--color-secondary)]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-secondary)]/10">
                        <Train className="w-5 h-5 text-[var(--color-secondary)]" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">By Train</h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">
                      Morocco&apos;s ONCF rail network connects major cities with comfortable, air-conditioned trains. First and second class seating is available, with the Al Boraq high-speed line serving the Casablanca-Tangier corridor.
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      Tickets from 80 MAD. Book at oncf.ma or at the station. Journey times vary by route.
                    </p>
                  </div>

                  {/* Bus */}
                  <div className="card-moroccan p-5 border-l-4 border-l-[var(--color-green)]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-green)]/10">
                        <Bus className="w-5 h-5 text-[var(--color-green)]" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">By Bus</h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">
                      CTM and Supratours operate modern, air-conditioned coaches to {city.name} from all major Moroccan cities. This is often the most affordable and widely available option, with frequent daily departures.
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      Fares from 50 MAD. Book online at ctm.ma or at the bus station (gare routiere).
                    </p>
                  </div>

                  {/* Car / Taxi */}
                  <div className="card-moroccan p-5 border-l-4 border-l-[var(--color-accent)]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)]/10">
                        <Car className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">By Car or Taxi</h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">
                      Grand taxis (shared long-distance taxis) run fixed routes between cities and are a fast, authentic way to travel. Car rental is widely available at airports and city centers from international and local agencies.
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      Grand taxi from Marrakech: approx {Math.round(distFromMarrakech * 1.5)} MAD. Rental from 250 MAD/day. Drive on the right; toll motorways available.
                    </p>
                  </div>
                </div>
              </section>

              {/* ─── Practical Tips Section ─── */}
              <section id="practical" className="scroll-mt-40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10">
                    <BookOpen className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">
                    Practical Tips for {city.name}
                  </h2>
                </div>
                <div className="arabesque-divider mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Best Time to Visit */}
                  <div className="card-moroccan p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)]/10">
                        <Calendar className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">Best Time to Visit</h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">
                      The ideal time to visit {city.name} is <span className="font-semibold">{city.bestTimeToVisit}</span>. During this period, temperatures are comfortable for sightseeing, rainfall is minimal, and most attractions operate at full capacity.
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      Shoulder seasons offer fewer crowds and lower prices. Avoid peak summer if you are sensitive to heat, especially in inland cities.
                    </p>
                  </div>

                  {/* Climate */}
                  <div className="card-moroccan p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-secondary)]/10">
                        <ThermometerSun className="w-5 h-5 text-[var(--color-secondary)]" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">Climate & Weather</h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">
                      {city.name} has a <span className="font-semibold">{city.climate.toLowerCase()}</span> climate at an elevation of {city.elevation.toLocaleString()} meters. Pack layers for morning and evening temperature drops, sunscreen, and a hat for daytime excursions.
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      {city.isCoastal
                        ? 'Coastal breezes moderate temperatures year-round. Ocean fog is common in the mornings during summer months.'
                        : 'Inland temperatures can vary significantly between day and night, especially in winter months.'}
                    </p>
                  </div>

                  {/* Cultural Tips */}
                  <div className="card-moroccan p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10">
                        <MessageCircle className="w-5 h-5 text-[var(--color-primary)]" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">Cultural Etiquette</h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">
                      Moroccans are warm and hospitable. Greet with &quot;Salam Alaikum&quot; and accept offers of mint tea as a gesture of friendship. Dress modestly, especially when visiting religious sites or rural areas. Ask permission before photographing people.
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      Arabic, Amazigh (Berber), and French are widely spoken. English is common in tourist areas. Learning a few Arabic phrases is always appreciated.
                    </p>
                  </div>

                  {/* Safety */}
                  <div className="card-moroccan p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-green)]/10">
                        <Shield className="w-5 h-5 text-[var(--color-green)]" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">Safety & Security</h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">
                      Morocco is generally safe for travelers. Use common sense in busy areas: keep valuables secure, negotiate taxi fares before boarding, and stick to well-lit streets at night. Licensed guides are recommended for medina exploration.
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      Emergency services: Police 19, Ambulance 15, Fire 15. Tourist police are available in major cities and can assist in multiple languages.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* ── SIDEBAR (~30%) ── */}
            <aside className="w-full lg:w-[30%]">
              <div className="lg:sticky lg:top-[calc(var(--header-height,5rem)+60px)] space-y-6">

                {/* Key Facts Card */}
                <div className="card-moroccan p-6">
                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[var(--color-primary)]" />
                    Key Facts
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-[var(--border-light)]">
                      <span className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <Users className="w-4 h-4" /> Population
                      </span>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">{formatPopulation(city.population)}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-[var(--border-light)]">
                      <span className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <Mountain className="w-4 h-4" /> Elevation
                      </span>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">{city.elevation.toLocaleString()}m</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-[var(--border-light)]">
                      <span className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <Cloud className="w-4 h-4" /> Climate
                      </span>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">{city.climate}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-[var(--border-light)]">
                      <span className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <Sun className="w-4 h-4" /> Best Time
                      </span>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">{city.bestTimeToVisit}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-[var(--border-light)]">
                      <span className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <Plane className="w-4 h-4" /> Airport
                      </span>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">{city.airportCode || 'None'}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-[var(--border-light)]">
                      <span className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <Star className="w-4 h-4" /> Rating
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                        <span className="text-sm font-semibold text-[var(--text-primary)]">{city.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {city.isImperialCity && (
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                          <Crown className="w-3.5 h-3.5" />
                          Imperial City
                        </span>
                      )}
                      {city.isCoastal && (
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] border border-[var(--color-secondary)]/20">
                          <Waves className="w-3.5 h-3.5" />
                          Coastal
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Quick Navigation Card */}
                <div className="card-moroccan p-6">
                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <Compass className="w-5 h-5 text-[var(--color-primary)]" />
                    Quick Navigation
                  </h3>
                  <nav className="space-y-1">
                    {[
                      { id: 'overview', label: 'Overview', icon: <Eye className="w-4 h-4" /> },
                      { id: 'attractions', label: 'Attractions', icon: <Landmark className="w-4 h-4" /> },
                      { id: 'stay', label: 'Where to Stay', icon: <Bed className="w-4 h-4" /> },
                      { id: 'eat', label: 'Where to Eat', icon: <Utensils className="w-4 h-4" /> },
                      { id: 'activities', label: 'Activities', icon: <Compass className="w-4 h-4" /> },
                      { id: 'getting-there', label: 'Getting There', icon: <Navigation className="w-4 h-4" /> },
                      { id: 'practical', label: 'Practical Tips', icon: <BookOpen className="w-4 h-4" /> },
                      { id: 'nearby', label: 'Nearby Cities', icon: <MapPin className="w-4 h-4" /> },
                    ].map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-[var(--text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-colors"
                      >
                        {item.icon}
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Map Placeholder */}
                <div id="map" className="card-moroccan overflow-hidden scroll-mt-40">
                  <div className="p-6 pb-3">
                    <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                      <Map className="w-5 h-5 text-[var(--color-primary)]" />
                      Location
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      {city.latitude.toFixed(4)}°N, {Math.abs(city.longitude).toFixed(4)}°W
                    </p>
                  </div>
                  <div className="relative aspect-[4/3] bg-[var(--surface-muted)]">
                    <Image
                      src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/static/pin-l+C1440E(${city.longitude},${city.latitude})/${city.longitude},${city.latitude},9,0/400x300@2x?access_token=pk.placeholder&logo=false`}
                      alt={`Map showing ${city.name} location`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      unoptimized
                    />
                    {/* Fallback overlay in case image doesn't load */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-primary)]/10">
                      <div className="text-center">
                        <MapPin className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{city.name}</p>
                        <p className="text-xs text-[var(--text-muted)]">{city.region}, Morocco</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${city.latitude},${city.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary)]/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                {/* Share This Page */}
                <div className="card-moroccan p-6">
                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[var(--color-primary)]" />
                    Share This Guide
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] mb-4">
                    Found this guide helpful? Share it with friends and fellow travelers planning a trip to Morocco.
                  </p>
                  <div className="flex items-center gap-2">
                    <ShareButton cityName={city.name} />
                    <BookmarkButton citySlug={city.slug} />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* ============================================================
          E. NEARBY CITIES SECTION
          ============================================================ */}
      <section id="nearby" className="bg-[var(--surface)] py-14 scroll-mt-40">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10">
              <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
            </div>
            <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">
              Cities Near {city.name}
            </h2>
          </div>
          <p className="text-[var(--text-muted)] mb-8 ml-[52px]">
            Continue your Moroccan adventure with these nearby destinations
          </p>

          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
            {nearbyCities.map((nearby) => {
              const dist = Math.round(
                getDistance(city.latitude, city.longitude, nearby.latitude, nearby.longitude)
              )
              return (
                <Link
                  key={nearby.id}
                  href={`/cities/${nearby.slug}`}
                  className="shrink-0 w-[280px] sm:w-[320px] snap-start group"
                >
                  <div className="card-moroccan overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={nearby.heroImage}
                        alt={nearby.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="320px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Distance badge */}
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 text-xs font-semibold text-[var(--color-primary)]">
                        <Navigation className="w-3 h-3" />
                        {dist} km
                      </div>

                      {/* City info overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-display text-xl font-bold text-white mb-1">
                          {nearby.name}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-white/80 text-xs flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {nearby.region}
                          </span>
                          <span className="text-white/80 text-xs flex items-center gap-1">
                            <Star className="w-3 h-3 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                            {nearby.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          F. CALL TO ACTION
          ============================================================ */}
      <section className="relative py-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-moroccan opacity-95" />
        <div className="absolute inset-0 moroccan-pattern opacity-10" />

        <div className="relative z-10 container-morocco text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Plan Your Trip to {city.name}
          </h2>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Ready to explore {city.name}? Use our trip planner to create a personalized itinerary with hand-picked accommodations, restaurants, and activities tailored to your interests and budget.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/tools/planner"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-[var(--color-primary)] font-bold text-base hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Compass className="w-5 h-5" />
              Start Planning
            </Link>
            <Link
              href="/cities"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white/50 text-white font-semibold text-base hover:bg-white/10 transition-all"
            >
              <Map className="w-5 h-5" />
              Explore More Cities
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
