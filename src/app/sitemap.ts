import type { MetadataRoute } from 'next';
import { cities } from '@/lib/data/cities';

const BASE_URL = 'https://citytoursmorocco.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Homepage (highest priority) ──
  const homepage: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // ── SEO & LLMO Pages (high priority for AI and search discoverability) ──
  const seoPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/faq`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/llmo`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // ── Major Section Index Pages (high priority directory/category pages) ──
  const majorSectionRoutes = [
    '/cities',
    '/tours',
    '/food',
    '/culture',
    '/attractions',
    '/accommodations',
    '/restaurants',
    '/experiences',
    '/itineraries',
    '/activities',
    '/guides',
    '/events',
    '/festivals',
    '/blog',
  ];

  const majorSectionPages: MetadataRoute.Sitemap = majorSectionRoutes.map(
    (route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })
  );

  // ── City Pages (dynamic from data, high priority) ──
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/cities/${city.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // ── Content Pages (informational, thematic guides) ──
  const contentRoutes = [
    '/tips',
    '/gallery',
    '/history',
    '/shopping',
    '/regions',
    '/transport',
    '/safety',
    '/visa',
    '/football',
    '/day-trips',
    '/family-guide',
    '/hammam',
    '/crafts',
    '/cooking-classes',
    '/weddings',
    '/wildlife',
    '/accessible-travel',
    '/desert',
    '/mountains',
    '/beaches',
    '/riads',
    '/photography',
    '/honeymoon',
    '/family',
    '/backpacking',
    '/luxury',
    '/solo-travel',
    '/adventure',
    '/digital-nomad',
    '/nightlife',
    '/wellness',
    '/music',
    '/road-trips',
    '/filming-locations',
    '/gardens',
    '/architecture',
    '/jewish-heritage',
    '/medina-guide',
    '/language',
    '/etiquette',
    '/unesco',
    '/best-time',
    '/airports',
    '/trekking',
    '/climbing',
    '/water-sports',
    '/national-parks',
    '/oases',
    '/overlanding',
    '/horse-riding',
    '/health',
    '/expat-guide',
    '/seniors',
    '/wine',
    '/camping',
    '/stargazing',
    '/connectivity',
    '/women-travel',
    '/scams',
    '/birdwatching',
    '/golf',
    '/surfing',
    '/yoga',
    '/packing',
    '/money',
    '/weather',
    '/first-time',
    '/ramadan',
    '/worldcup-2030',
    '/cuisine',
    '/sahara',
    '/souks',
    '/trains',
    '/spa',
    '/berber-culture',
    '/riad-guide',
    '/atlas-mountains',
    '/marrakech',
    '/fes-guide',
    '/hot-air-balloon',
    '/water-fun',
    '/essaouira',
    '/chefchaouen',
    '/tangier',
    '/agadir',
    '/skiing',
    '/desert-adventures',
  ];

  const contentPages: MetadataRoute.Sitemap = contentRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ── Itinerary Detail Pages ──
  const itinerarySlugs = [
    '7-day-morocco',
    '3-day-marrakech',
    '10-day-grand-tour',
    '5-day-desert',
  ];
  const itineraryPages: MetadataRoute.Sitemap = itinerarySlugs.map((slug) => ({
    url: `${BASE_URL}/itineraries/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ── Experience Detail Pages ──
  const experienceSlugs = [
    'sahara-glamping',
    'moroccan-cooking-class',
    'hammam-ritual',
    'atlas-day-hike',
    'medina-food-tour',
  ];
  const experiencePages: MetadataRoute.Sitemap = experienceSlugs.map(
    (slug) => ({
      url: `${BASE_URL}/experiences/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })
  );

  // ── City Subpages (attractions, restaurants, hotels, experiences per city) ──
  const citySubpageRoutes = [
    // Marrakech
    '/cities/marrakech/attractions',
    '/cities/marrakech/restaurants',
    '/cities/marrakech/hotels',
    // Fes
    '/cities/fes/attractions',
    '/cities/fes/restaurants',
    '/cities/fes/hotels',
    // Casablanca
    '/cities/casablanca/attractions',
    '/cities/casablanca/restaurants',
    '/cities/casablanca/hotels',
    // Chefchaouen
    '/cities/chefchaouen/attractions',
    '/cities/chefchaouen/restaurants',
    // Essaouira
    '/cities/essaouira/attractions',
    '/cities/essaouira/restaurants',
    // Tangier
    '/cities/tangier/attractions',
    '/cities/tangier/restaurants',
    // Rabat
    '/cities/rabat/attractions',
    '/cities/rabat/restaurants',
    // Agadir
    '/cities/agadir/attractions',
    '/cities/agadir/restaurants',
    // Ouarzazate
    '/cities/ouarzazate/attractions',
    '/cities/ouarzazate/restaurants',
    // Merzouga
    '/cities/merzouga/attractions',
    '/cities/merzouga/experiences',
    // Note: standalone city pages (dakhla, ifrane, tetouan, el-jadida, asilah)
    // are already generated dynamically via cityPages from the cities data array.
  ];
  const citySubPages: MetadataRoute.Sitemap = citySubpageRoutes.map(
    (route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })
  );

  // ── Blog Articles ──
  const blogArticleSlugs = [
    'moroccan-tea-culture',
    'atlas-mountains-trekking',
    'medina-shopping-guide',
  ];

  const blogArticlePages: MetadataRoute.Sitemap = blogArticleSlugs.map(
    (slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })
  );

  // ── Detail Pages (attractions, tours, accommodations, restaurants — dynamic [slug]) ──
  const attractionSlugs = [
    'jemaa-el-fnaa',
    'hassan-ii-mosque',
    'fes-medina',
    'ait-ben-haddou',
    'jardin-majorelle',
    'bahia-palace',
    'volubilis',
    'todra-gorge',
    'erg-chebbi',
    'chefchaouen-medina',
    'ouzoud-falls',
    'kasbah-udayas',
    'hassan-tower',
    'el-badi-palace',
    'chouara-tannery',
  ];
  const attractionPages: MetadataRoute.Sitemap = attractionSlugs.map(
    (slug) => ({
      url: `${BASE_URL}/attractions/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })
  );

  const tourSlugs = [
    'desert-safari',
    'imperial-cities',
    'atlas-trekking',
    'marrakech-day-tour',
    'fes-medina-tour',
    'coastal-road-trip',
    'cooking-class-marrakech',
    'hot-air-balloon',
    'chefchaouen-day-trip',
    'camel-trek-merzouga',
    'photography-tour',
    'surf-camp-taghazout',
  ];
  const tourPages: MetadataRoute.Sitemap = tourSlugs.map((slug) => ({
    url: `${BASE_URL}/tours/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const accommodationSlugs = [
    'riad-yasmine',
    'la-mamounia',
    'riad-fes',
    'kasbah-tamadot',
    'dar-ahlam',
    'sahara-luxury-camp',
    'hotel-nord-pinus',
    'heure-bleue-palais',
    'equity-point-hostel',
    'riad-kniza',
    'four-seasons-casablanca',
    'dar-zerhoune',
    'lina-ryad-spa',
    'sofitel-agadir',
    'dar-roumana',
  ];
  const accommodationPages: MetadataRoute.Sitemap = accommodationSlugs.map(
    (slug) => ({
      url: `${BASE_URL}/accommodations/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })
  );

  const restaurantSlugs = [
    'nomad-marrakech',
    'le-jardin',
    'cafe-clock',
    'la-sqala',
    'al-fassia',
    'ocean-vagabond',
    'dar-hatim',
    'le-salama',
    'rick-cafe',
    'amal-center',
    'cafe-hafa',
    'chez-lamine',
  ];
  const restaurantPages: MetadataRoute.Sitemap = restaurantSlugs.map(
    (slug) => ({
      url: `${BASE_URL}/restaurants/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })
  );

  // ── Tool Pages ──
  const toolRoutes = [
    '/tools',
    '/tools/planner',
    '/tools/budget',
    '/tools/currency',
    '/tools/flights',
    '/tools/map',
    '/tools/packing',
    '/tools/weather',
    '/tools/distance',
  ];

  const toolPages: MetadataRoute.Sitemap = toolRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // ── Utility Pages ──
  const utilityPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/search`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
  ];

  // ── Info Pages (low change frequency) ──
  const infoRoutes = ['/about', '/contact', '/privacy', '/terms'];

  const infoPages: MetadataRoute.Sitemap = infoRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.4,
  }));

  return [
    ...homepage,
    ...seoPages,
    ...majorSectionPages,
    ...cityPages,
    ...contentPages,
    ...itineraryPages,
    ...experiencePages,
    ...citySubPages,
    ...blogArticlePages,
    ...attractionPages,
    ...tourPages,
    ...accommodationPages,
    ...restaurantPages,
    ...toolPages,
    ...utilityPages,
    ...infoPages,
  ];
}
