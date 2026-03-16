/* ═══════════════════════════════════════════════════════════════════════════
   SEARCH INDEX - Comprehensive full-text search engine for Morocco Guide
   Fuzzy matching, weighted scoring, synonyms, suggestions, recent searches
   ═══════════════════════════════════════════════════════════════════════════ */

import { cities, REGIONS } from '@/lib/data/cities';
import { attractions } from '@/lib/data/attractions';
import { tours } from '@/lib/data/tours';
import { restaurants } from '@/lib/data/restaurants';
import { accommodations } from '@/lib/data/accommodations';

/* ─── Types ─── */

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  type: 'city' | 'attraction' | 'tour' | 'restaurant' | 'hotel' | 'guide' | 'experience' | 'page';
  url: string;
  image?: string;
  city?: string;
  region?: string;
  rating?: number;
  tags: string[];
  keywords: string[];
  priority: number;
}

export interface SearchResult extends SearchItem {
  score: number;
  matchedOn: string;
}

export interface SearchOptions {
  type?: string;
  region?: string;
  limit?: number;
  sort?: 'relevance' | 'rating' | 'az';
}

/* ─── Synonym Dictionary ─── */

const SYNONYMS: Record<string, string[]> = {
  riad: ['hotel', 'accommodation', 'stay', 'guesthouse', 'lodging', 'ryad'],
  hotel: ['riad', 'accommodation', 'stay', 'lodging', 'resort'],
  souk: ['market', 'bazaar', 'shopping', 'medina', 'souq'],
  market: ['souk', 'bazaar', 'shopping', 'souq'],
  mosque: ['masjid', 'religious', 'worship', 'islam', 'prayer'],
  medina: ['old town', 'old city', 'kasbah', 'souk', 'historic'],
  kasbah: ['fortress', 'castle', 'citadel', 'fort', 'ksar', 'medina'],
  desert: ['sahara', 'dunes', 'sand', 'erg', 'camel', 'merzouga'],
  sahara: ['desert', 'dunes', 'sand', 'erg', 'camel'],
  beach: ['coast', 'ocean', 'sea', 'surf', 'shore', 'seaside', 'atlantic'],
  mountain: ['atlas', 'trek', 'hike', 'toubkal', 'rif', 'hiking'],
  atlas: ['mountain', 'trek', 'hike', 'toubkal', 'high atlas', 'middle atlas'],
  food: ['restaurant', 'cuisine', 'eat', 'dining', 'tagine', 'couscous', 'cooking'],
  tagine: ['tajine', 'food', 'moroccan', 'cuisine', 'stew'],
  couscous: ['food', 'moroccan', 'cuisine', 'friday'],
  surf: ['surfing', 'beach', 'waves', 'taghazout', 'essaouira'],
  trek: ['hiking', 'hike', 'walk', 'mountain', 'trail'],
  tour: ['trip', 'excursion', 'experience', 'journey', 'guided'],
  cheap: ['budget', 'affordable', 'backpacker', 'hostel', 'inexpensive'],
  luxury: ['upscale', 'premium', 'five star', '5 star', 'palace', 'spa'],
  hammam: ['spa', 'bath', 'wellness', 'steam', 'traditional bath'],
  zellige: ['tile', 'mosaic', 'tilework', 'moroccan art', 'craftsmanship'],
  gnawa: ['music', 'traditional', 'spiritual', 'festival'],
  argan: ['oil', 'cosmetic', 'tree', 'goat'],
  berber: ['amazigh', 'indigenous', 'tribal', 'village', 'culture'],
  imperial: ['royal', 'historic', 'fes', 'marrakech', 'meknes', 'rabat'],
  blue: ['chefchaouen', 'blue city', 'blue pearl'],
  photography: ['photo', 'camera', 'instagram', 'pictures', 'photogenic'],
};

/* ─── Levenshtein Distance (Fuzzy Matching) ─── */

function levenshteinDistance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;

  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}

function isFuzzyMatch(query: string, target: string, maxDistance?: number): boolean {
  const q = query.toLowerCase();
  const t = target.toLowerCase();
  if (t.includes(q)) return true;
  const threshold = maxDistance ?? Math.max(1, Math.floor(q.length / 3));
  const words = t.split(/\s+/);
  for (const word of words) {
    if (levenshteinDistance(q, word) <= threshold) return true;
    if (word.length > q.length && levenshteinDistance(q, word.substring(0, q.length)) <= 1) return true;
  }
  return false;
}

/* ─── Expand query with synonyms ─── */

function expandQuery(query: string): string[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const expanded = new Set(terms);
  for (const term of terms) {
    if (SYNONYMS[term]) {
      for (const syn of SYNONYMS[term]) {
        expanded.add(syn);
      }
    }
    // Check if term is a value in synonyms to get the key
    for (const [key, values] of Object.entries(SYNONYMS)) {
      if (values.includes(term)) {
        expanded.add(key);
      }
    }
  }
  return Array.from(expanded);
}

/* ─── Scoring Function ─── */

function scoreItem(item: SearchItem, query: string, expandedTerms: string[]): { score: number; matchedOn: string } {
  const q = query.toLowerCase().trim();
  const titleLower = item.title.toLowerCase();
  const descLower = item.description.toLowerCase();
  const tagsLower = item.tags.map(t => t.toLowerCase());
  const keywordsLower = item.keywords.map(k => k.toLowerCase());
  const cityLower = (item.city || '').toLowerCase();

  let score = 0;
  let matchedOn = '';

  // Exact title match (highest weight)
  if (titleLower === q) {
    score += 100;
    matchedOn = 'title-exact';
  }
  // Title starts with query
  else if (titleLower.startsWith(q)) {
    score += 80;
    matchedOn = 'title-start';
  }
  // Title contains query
  else if (titleLower.includes(q)) {
    score += 60;
    matchedOn = 'title';
  }

  // City match
  if (cityLower && cityLower.includes(q)) {
    score += 25;
    if (!matchedOn) matchedOn = 'city';
  }

  // Description match
  if (descLower.includes(q)) {
    score += 20;
    if (!matchedOn) matchedOn = 'description';
  }

  // Tag match
  for (const tag of tagsLower) {
    if (tag.includes(q) || q.includes(tag)) {
      score += 15;
      if (!matchedOn) matchedOn = 'tag';
      break;
    }
  }

  // Keyword match
  for (const kw of keywordsLower) {
    if (kw.includes(q) || q.includes(kw)) {
      score += 12;
      if (!matchedOn) matchedOn = 'keyword';
      break;
    }
  }

  // Synonym/expanded term matching
  if (score === 0) {
    for (const term of expandedTerms) {
      if (term === q) continue;
      if (titleLower.includes(term)) {
        score += 30;
        matchedOn = 'synonym-title';
        break;
      }
      if (descLower.includes(term)) {
        score += 10;
        matchedOn = 'synonym-desc';
        break;
      }
      for (const tag of tagsLower) {
        if (tag.includes(term)) {
          score += 8;
          matchedOn = 'synonym-tag';
          break;
        }
      }
      for (const kw of keywordsLower) {
        if (kw.includes(term)) {
          score += 8;
          matchedOn = 'synonym-keyword';
          break;
        }
      }
      if (matchedOn) break;
    }
  }

  // Fuzzy matching as fallback
  if (score === 0 && q.length >= 3) {
    if (isFuzzyMatch(q, item.title)) {
      score += 15;
      matchedOn = 'fuzzy-title';
    } else if (isFuzzyMatch(q, item.description, 2)) {
      score += 5;
      matchedOn = 'fuzzy-desc';
    } else {
      for (const tag of item.tags) {
        if (isFuzzyMatch(q, tag)) {
          score += 4;
          matchedOn = 'fuzzy-tag';
          break;
        }
      }
    }
    for (const kw of item.keywords) {
      if (isFuzzyMatch(q, kw)) {
        score += 4;
        if (!matchedOn) matchedOn = 'fuzzy-keyword';
        break;
      }
    }
  }

  // Multi-word query: check if all words match somewhere
  if (score === 0) {
    const queryWords = q.split(/\s+/);
    if (queryWords.length > 1) {
      const allText = `${titleLower} ${descLower} ${tagsLower.join(' ')} ${keywordsLower.join(' ')} ${cityLower}`;
      const matchCount = queryWords.filter(w => allText.includes(w)).length;
      if (matchCount === queryWords.length) {
        score += 25;
        matchedOn = 'multi-word';
      } else if (matchCount >= Math.ceil(queryWords.length * 0.6)) {
        score += 10;
        matchedOn = 'partial-multi';
      }
    }
  }

  // Priority boost
  score += item.priority * 2;

  // Rating boost
  if (item.rating) {
    score += item.rating;
  }

  return { score, matchedOn };
}

/* ═══════════════════════════════════════════════════════════════════
   BUILD SEARCH INDEX - 120+ items from all data sources + pages
   ═══════════════════════════════════════════════════════════════════ */

let _cachedIndex: SearchItem[] | null = null;

export function buildSearchIndex(): SearchItem[] {
  if (_cachedIndex) return _cachedIndex;

  const items: SearchItem[] = [];

  /* ─── Cities (31 entries) ─── */
  for (const city of cities) {
    items.push({
      id: `city-${city.slug}`,
      title: city.name,
      description: city.description,
      type: 'city',
      url: `/cities/${city.slug}`,
      image: city.image,
      region: city.region,
      rating: city.rating,
      tags: [...city.tags, ...city.type],
      keywords: [
        city.region,
        city.climate,
        city.bestTimeToVisit,
        ...city.languages,
        ...(city.type.includes('imperial') ? ['imperial city', 'historic', 'royal'] : []),
        ...(city.type.includes('coastal') ? ['beach', 'ocean', 'sea', 'coast'] : []),
        ...(city.type.includes('mountain') ? ['mountain', 'hiking', 'trek', 'atlas'] : []),
        ...(city.type.includes('desert') ? ['sahara', 'sand', 'dunes', 'desert'] : []),
        ...(city.type.includes('modern') ? ['modern', 'urban', 'business'] : []),
      ],
      priority: city.rating >= 4.5 ? 9 : city.rating >= 4.0 ? 7 : 5,
    });
  }

  /* ─── Attractions (22 entries) ─── */
  for (const attr of attractions) {
    items.push({
      id: `attraction-${attr.slug}`,
      title: attr.name,
      description: attr.description,
      type: 'attraction',
      url: `/attractions/${attr.slug}`,
      image: attr.image,
      city: attr.cityName,
      rating: attr.rating,
      tags: [attr.type, ...(attr.isUnesco ? ['unesco', 'world heritage'] : [])],
      keywords: [
        attr.cityName,
        attr.type,
        attr.bestTime,
        ...(attr.isUnesco ? ['unesco', 'world heritage site'] : []),
        ...(attr.type === 'monument' ? ['palace', 'historic', 'architecture'] : []),
        ...(attr.type === 'nature' ? ['outdoor', 'natural', 'landscape'] : []),
        ...(attr.type === 'market' ? ['souk', 'shopping', 'bazaar', 'crafts'] : []),
        ...(attr.type === 'religious' ? ['mosque', 'spiritual', 'masjid'] : []),
        ...(attr.type === 'museum' ? ['art', 'culture', 'exhibition'] : []),
        ...(attr.type === 'garden' ? ['botanical', 'plants', 'nature'] : []),
        ...(attr.type === 'ruins' ? ['ancient', 'roman', 'historic', 'archaeological'] : []),
        ...(attr.type === 'beach' ? ['coast', 'ocean', 'swimming', 'surf'] : []),
      ],
      priority: attr.isUnesco ? 9 : attr.rating >= 4.6 ? 8 : 6,
    });
  }

  /* ─── Tours (14 entries) ─── */
  for (const tour of tours) {
    items.push({
      id: `tour-${tour.slug}`,
      title: tour.name,
      description: tour.description,
      type: 'tour',
      url: `/tours/${tour.slug}`,
      image: tour.image,
      city: tour.cityName,
      rating: tour.rating,
      tags: [tour.difficulty, ...(tour.isFeatured ? ['featured', 'popular'] : []), `${tour.durationDays}-day`],
      keywords: [
        tour.cityName,
        tour.difficulty,
        ...tour.highlights.slice(0, 5),
        ...tour.languages,
        `${tour.durationDays} day`,
        ...(tour.durationDays === 1 ? ['day trip', 'day tour', 'excursion'] : []),
        ...(tour.durationDays >= 3 ? ['multi-day', 'extended tour'] : []),
      ],
      priority: tour.isFeatured ? 8 : 6,
    });
  }

  /* ─── Restaurants (20 entries) ─── */
  for (const rest of restaurants) {
    items.push({
      id: `restaurant-${rest.slug}`,
      title: rest.name,
      description: rest.description,
      type: 'restaurant',
      url: `/restaurants/${rest.slug}`,
      image: rest.image,
      city: rest.cityName,
      rating: rest.rating,
      tags: [rest.cuisineType, ...(rest.isFeatured ? ['featured'] : []), `${'$'.repeat(rest.priceRange)}`],
      keywords: [
        rest.cityName,
        rest.cuisineType,
        ...rest.specialties,
        'food', 'eat', 'dining',
        ...(rest.priceRange === 1 ? ['cheap', 'budget', 'affordable'] : []),
        ...(rest.priceRange >= 3 ? ['upscale', 'fine dining'] : []),
        ...(rest.cuisineType === 'street_food' ? ['street food', 'casual', 'local'] : []),
        ...(rest.cuisineType === 'moroccan' ? ['tagine', 'couscous', 'traditional'] : []),
        ...(rest.cuisineType === 'seafood' ? ['fish', 'ocean', 'catch'] : []),
      ],
      priority: rest.isFeatured ? 7 : 5,
    });
  }

  /* ─── Accommodations (22 entries) ─── */
  for (const acc of accommodations) {
    items.push({
      id: `hotel-${acc.slug}`,
      title: acc.name,
      description: acc.description,
      type: 'hotel',
      url: `/accommodations/${acc.slug}`,
      image: acc.image,
      city: acc.cityName,
      rating: acc.rating,
      tags: [acc.type, ...(acc.isFeatured ? ['featured'] : []), `${acc.starRating}-star`],
      keywords: [
        acc.cityName,
        acc.type,
        ...acc.amenities,
        `${acc.starRating} star`,
        ...(acc.type === 'riad' ? ['traditional', 'moroccan', 'courtyard', 'medina'] : []),
        ...(acc.type === 'hostel' ? ['budget', 'backpacker', 'cheap', 'dormitory'] : []),
        ...(acc.type === 'resort' ? ['luxury', 'pool', 'spa', 'all-inclusive'] : []),
        ...(acc.type === 'kasbah' ? ['fortress', 'traditional', 'mountain'] : []),
        ...(acc.type === 'desert_camp' ? ['sahara', 'glamping', 'desert', 'tented'] : []),
        ...(acc.starRating >= 5 ? ['luxury', 'five star', 'premium'] : []),
        ...(acc.starRating <= 2 ? ['budget', 'affordable', 'cheap'] : []),
      ],
      priority: acc.isFeatured ? 8 : acc.starRating >= 5 ? 7 : 5,
    });
  }

  /* ─── Guides & Content Pages (26 entries) ─── */
  const guides: Omit<SearchItem, 'id'>[] = [
    {
      title: 'Morocco Travel Tips',
      description: 'Essential tips for first-time visitors to Morocco including etiquette, safety, and money-saving advice.',
      type: 'guide',
      url: '/tips',
      image: '/images/hero-marrakech.webp',
      tags: ['tips', 'advice', 'first-time', 'beginner'],
      keywords: ['travel tips', 'first time', 'advice', 'safety', 'etiquette', 'customs', 'money', 'haggling', 'tipping'],
      priority: 8,
    },
    {
      title: 'Moroccan Food Guide',
      description: 'Complete guide to Moroccan cuisine from tagines and couscous to street food and pastries.',
      type: 'guide',
      url: '/food',
      image: '/images/hero-marrakech.webp',
      tags: ['food', 'cuisine', 'moroccan', 'eating'],
      keywords: ['food', 'tagine', 'couscous', 'pastilla', 'harira', 'msemen', 'mint tea', 'street food', 'cooking', 'spices'],
      priority: 8,
    },
    {
      title: 'Morocco Safety Guide',
      description: 'Comprehensive safety guide covering scams, solo travel, women travelers, and health advice.',
      type: 'guide',
      url: '/safety',
      image: '/images/hero-marrakech.webp',
      tags: ['safety', 'security', 'health'],
      keywords: ['safety', 'scams', 'solo travel', 'women', 'health', 'emergency', 'police', 'insurance'],
      priority: 7,
    },
    {
      title: 'Morocco Visa Guide',
      description: 'Complete visa information for visiting Morocco including requirements, exemptions, and extensions.',
      type: 'guide',
      url: '/visa',
      image: '/images/hero-marrakech.webp',
      tags: ['visa', 'passport', 'entry'],
      keywords: ['visa', 'passport', 'entry requirements', 'immigration', 'travel documents', 'extension'],
      priority: 7,
    },
    {
      title: 'Getting Around Morocco',
      description: 'Transport guide covering trains, buses, grand taxis, flights, and driving in Morocco.',
      type: 'guide',
      url: '/transport',
      image: '/images/hero-marrakech.webp',
      tags: ['transport', 'travel', 'getting around'],
      keywords: ['train', 'bus', 'taxi', 'grand taxi', 'car rental', 'driving', 'ONCF', 'CTM', 'supratours', 'flight'],
      priority: 7,
    },
    {
      title: 'Morocco Itineraries',
      description: 'Ready-made travel itineraries from 5 to 14 days covering different interests and regions.',
      type: 'guide',
      url: '/itineraries',
      image: '/images/hero-marrakech.webp',
      tags: ['itinerary', 'planning', 'route'],
      keywords: ['itinerary', 'route', 'planning', '7 days', '10 days', '14 days', '5 days', 'schedule', 'trip planner'],
      priority: 8,
    },
    {
      title: 'Morocco History & Culture',
      description: 'Rich history of Morocco from Berber empires to Islamic dynasties and French colonialism.',
      type: 'guide',
      url: '/history',
      image: '/images/hero-coastal.webp',
      tags: ['history', 'culture', 'heritage'],
      keywords: ['history', 'culture', 'berber', 'arab', 'dynasties', 'almoravid', 'almohad', 'saadian', 'alaouite', 'colonial', 'independence'],
      priority: 6,
    },
    {
      title: 'Solo Travel in Morocco',
      description: 'Complete guide for solo travelers in Morocco with tips, safety advice, and recommended routes.',
      type: 'guide',
      url: '/solo-travel',
      image: '/images/hero-marrakech.webp',
      tags: ['solo', 'independent', 'backpacking'],
      keywords: ['solo travel', 'alone', 'independent', 'backpacker', 'single traveler', 'women solo'],
      priority: 7,
    },
    {
      title: 'Family Guide to Morocco',
      description: 'Tips for traveling in Morocco with kids including family-friendly activities and accommodations.',
      type: 'guide',
      url: '/family-guide',
      image: '/images/hero-marrakech.webp',
      tags: ['family', 'kids', 'children'],
      keywords: ['family', 'kids', 'children', 'family-friendly', 'family travel', 'baby', 'toddler'],
      priority: 6,
    },
    {
      title: 'Backpacking Morocco',
      description: 'Budget travel guide for backpackers including cheap accommodation, transport, and food options.',
      type: 'guide',
      url: '/backpacking',
      image: '/images/hero-marrakech.webp',
      tags: ['backpacking', 'budget', 'cheap'],
      keywords: ['backpacking', 'budget', 'cheap', 'hostel', 'affordable', 'money saving', 'low cost'],
      priority: 6,
    },
    {
      title: 'Digital Nomad Guide to Morocco',
      description: 'Working remotely in Morocco: best cities, coworking spaces, WiFi, and visa information.',
      type: 'guide',
      url: '/digital-nomad',
      image: '/images/hero-marrakech.webp',
      tags: ['digital nomad', 'remote work', 'coworking'],
      keywords: ['digital nomad', 'remote work', 'coworking', 'wifi', 'laptop', 'freelance', 'work abroad'],
      priority: 6,
    },
    {
      title: 'Morocco FAQ',
      description: 'Frequently asked questions about traveling in Morocco answered by local experts.',
      type: 'guide',
      url: '/faq',
      tags: ['faq', 'questions', 'answers'],
      keywords: ['frequently asked', 'questions', 'answers', 'help', 'common questions'],
      priority: 5,
    },
  ];

  guides.forEach((g, i) => {
    items.push({ ...g, id: `guide-${i}` } as SearchItem);
  });

  /* ─── Experience & Landing Pages (21 entries) ─── */
  const pages: Omit<SearchItem, 'id'>[] = [
    {
      title: 'Morocco Beaches',
      description: 'Discover the best beaches in Morocco from Atlantic surf spots to Mediterranean coves.',
      type: 'page',
      url: '/beaches',
      image: '/images/hero-surfing.webp',
      tags: ['beach', 'coast', 'ocean', 'surf'],
      keywords: ['beach', 'surf', 'atlantic', 'mediterranean', 'swimming', 'taghazout', 'essaouira', 'dakhla', 'legzira', 'coast'],
      priority: 8,
    },
    {
      title: 'Sahara Desert Experiences',
      description: 'Everything about the Sahara: camel treks, desert camps, stargazing, and dune adventures.',
      type: 'page',
      url: '/desert',
      image: '/images/hero-desert.webp',
      tags: ['desert', 'sahara', 'camels'],
      keywords: ['sahara', 'desert', 'camel trek', 'sand dunes', 'erg chebbi', 'erg chigaga', 'merzouga', 'zagora', 'camp', 'stargazing'],
      priority: 9,
    },
    {
      title: 'Atlas Mountains',
      description: 'Guide to the Atlas Mountains: trekking, Berber villages, Toubkal, and scenic drives.',
      type: 'page',
      url: '/mountains',
      image: '/images/hero-atlas.webp',
      tags: ['mountains', 'atlas', 'trekking'],
      keywords: ['atlas mountains', 'toubkal', 'imlil', 'hiking', 'trekking', 'berber villages', 'high atlas', 'middle atlas', 'rif'],
      priority: 8,
    },
    {
      title: 'Morocco Festivals & Events',
      description: 'Annual festivals and events in Morocco including music, film, and cultural celebrations.',
      type: 'page',
      url: '/festivals',
      image: '/images/hero-marrakech.webp',
      tags: ['festival', 'events', 'celebration'],
      keywords: ['festival', 'gnawa', 'mawazine', 'film festival', 'rose festival', 'date festival', 'music', 'events', 'calendar'],
      priority: 7,
    },
    {
      title: 'Riads of Morocco',
      description: 'Guide to staying in traditional Moroccan riads: what to expect, best riads, and booking tips.',
      type: 'page',
      url: '/riads',
      image: '/images/hero-surfing.webp',
      tags: ['riad', 'accommodation', 'traditional'],
      keywords: ['riad', 'ryad', 'traditional house', 'courtyard', 'medina stay', 'boutique', 'dar', 'guesthouse'],
      priority: 8,
    },
    {
      title: 'Morocco Photography Guide',
      description: 'Best photography locations, tips for capturing Morocco, and camera-friendly etiquette.',
      type: 'page',
      url: '/photography',
      image: '/images/hero-chefchaouen-drone.webp',
      tags: ['photography', 'camera', 'instagram'],
      keywords: ['photography', 'photo', 'instagram', 'camera', 'best spots', 'golden hour', 'photogenic', 'pictures'],
      priority: 7,
    },
    {
      title: 'Morocco Shopping Guide',
      description: 'Complete guide to shopping in Morocco: souks, haggling, crafts, and what to buy.',
      type: 'page',
      url: '/shopping',
      image: '/images/hero-marrakech.webp',
      tags: ['shopping', 'souk', 'crafts'],
      keywords: ['shopping', 'souk', 'market', 'haggling', 'bargaining', 'crafts', 'carpets', 'leather', 'ceramics', 'argan oil', 'spices'],
      priority: 7,
    },
    {
      title: 'Moroccan Cooking Classes',
      description: 'Learn to cook Moroccan food: best cooking classes in Marrakech, Fes, and beyond.',
      type: 'experience',
      url: '/cooking-classes',
      image: '/images/hero-marrakech.webp',
      tags: ['cooking', 'food', 'class'],
      keywords: ['cooking class', 'learn to cook', 'tagine', 'couscous', 'moroccan food', 'culinary', 'chef', 'kitchen'],
      priority: 7,
    },
    {
      title: 'Luxury Morocco',
      description: 'Luxury travel in Morocco: five-star hotels, palace dining, private tours, and VIP experiences.',
      type: 'page',
      url: '/luxury',
      image: '/images/hero-riad-interior.webp',
      tags: ['luxury', 'premium', 'vip'],
      keywords: ['luxury', 'five star', '5 star', 'palace', 'premium', 'vip', 'exclusive', 'private', 'spa', 'concierge'],
      priority: 7,
    },
    {
      title: 'Hammam & Wellness',
      description: 'Traditional Moroccan hammam experience: what to expect, best hammams, and spa culture.',
      type: 'experience',
      url: '/hammam',
      image: '/images/hero-surfing.webp',
      tags: ['hammam', 'spa', 'wellness'],
      keywords: ['hammam', 'spa', 'wellness', 'steam bath', 'massage', 'traditional bath', 'relaxation', 'scrub', 'black soap'],
      priority: 7,
    },
    {
      title: 'Morocco Day Trips',
      description: 'Best day trips from major cities including Ouzoud Falls, Paradise Valley, and Ourika Valley.',
      type: 'page',
      url: '/day-trips',
      image: '/images/hero-atlas.webp',
      tags: ['day trip', 'excursion'],
      keywords: ['day trip', 'excursion', 'ouzoud', 'ourika', 'paradise valley', 'day tour', 'half day'],
      priority: 6,
    },
    {
      title: 'Morocco Adventure Activities',
      description: 'Adrenaline activities in Morocco: quad biking, hot air balloons, surfing, and rock climbing.',
      type: 'page',
      url: '/adventure',
      image: '/images/hero-desert.webp',
      tags: ['adventure', 'activities', 'outdoor'],
      keywords: ['adventure', 'quad biking', 'hot air balloon', 'surfing', 'rock climbing', 'paragliding', 'sandboarding', 'kayaking'],
      priority: 7,
    },
    {
      title: 'Morocco Nightlife',
      description: 'Guide to nightlife in Morocco: bars, rooftop lounges, live music, and entertainment.',
      type: 'page',
      url: '/nightlife',
      image: '/images/hero-marrakech.webp',
      tags: ['nightlife', 'bars', 'music'],
      keywords: ['nightlife', 'bars', 'clubs', 'rooftop', 'live music', 'entertainment', 'evening', 'drinks'],
      priority: 5,
    },
    {
      title: 'Morocco Honeymoon Guide',
      description: 'Romantic Morocco: honeymoon ideas including luxury riads, desert sunsets, and couple activities.',
      type: 'page',
      url: '/honeymoon',
      image: '/images/hero-surfing.webp',
      tags: ['honeymoon', 'romantic', 'couples'],
      keywords: ['honeymoon', 'romantic', 'couples', 'wedding', 'anniversary', 'love', 'romantic getaway'],
      priority: 6,
    },
    {
      title: 'Morocco Wildlife & Nature',
      description: 'Wildlife watching in Morocco: Barbary macaques, flamingos, and national parks.',
      type: 'page',
      url: '/wildlife',
      image: '/images/hero-atlas.webp',
      tags: ['wildlife', 'nature', 'animals'],
      keywords: ['wildlife', 'animals', 'birds', 'monkeys', 'macaques', 'flamingos', 'national park', 'nature reserve'],
      priority: 5,
    },
    {
      title: 'Morocco Regions',
      description: 'Explore Morocco by region: from the Rif Mountains to the Sahara, Atlantic coast to the Oriental.',
      type: 'page',
      url: '/regions',
      tags: ['regions', 'geography', 'areas'],
      keywords: ['regions', 'north', 'south', 'east', 'west', 'rif', 'atlas', 'sahara', 'atlantic', 'souss', 'oriental'],
      priority: 6,
    },
    {
      title: 'Morocco Photo Gallery',
      description: 'Stunning photography gallery showcasing the beauty of Morocco from coast to desert.',
      type: 'page',
      url: '/gallery',
      image: '/images/hero-chefchaouen-drone.webp',
      tags: ['gallery', 'photos', 'images'],
      keywords: ['gallery', 'photos', 'images', 'pictures', 'photography', 'wallpaper', 'beautiful'],
      priority: 5,
    },
    {
      title: 'Morocco Experiences',
      description: 'Unique experiences in Morocco: camel rides, cooking classes, hammams, and cultural immersion.',
      type: 'experience',
      url: '/experiences',
      image: '/images/hero-marrakech.webp',
      tags: ['experience', 'activity', 'unique'],
      keywords: ['experience', 'activity', 'unique', 'authentic', 'cultural immersion', 'local', 'traditional'],
      priority: 7,
    },
    {
      title: 'Morocco Blog',
      description: 'Travel stories, tips, and inspiration from Morocco written by local experts and travelers.',
      type: 'page',
      url: '/blog',
      tags: ['blog', 'stories', 'articles'],
      keywords: ['blog', 'stories', 'articles', 'tips', 'advice', 'inspiration', 'travel writing'],
      priority: 5,
    },
    {
      title: 'Moroccan Culture & Traditions',
      description: 'Deep dive into Moroccan culture: music, art, architecture, religion, and daily life.',
      type: 'page',
      url: '/culture',
      image: '/images/hero-marrakech.webp',
      tags: ['culture', 'traditions', 'heritage'],
      keywords: ['culture', 'tradition', 'music', 'art', 'architecture', 'zellige', 'calligraphy', 'gnawa', 'berber', 'amazigh', 'islam'],
      priority: 7,
    },
    {
      title: 'Morocco Wellness & Spa',
      description: 'Wellness retreats, yoga, spa resorts, and holistic healing experiences in Morocco.',
      type: 'experience',
      url: '/wellness',
      image: '/images/hero-surfing.webp',
      tags: ['wellness', 'spa', 'yoga'],
      keywords: ['wellness', 'spa', 'yoga', 'retreat', 'meditation', 'healing', 'relaxation', 'detox'],
      priority: 6,
    },
    {
      title: 'Morocco Football',
      description: 'Football culture in Morocco: Atlas Lions, stadiums, World Cup history, and match day experiences.',
      type: 'page',
      url: '/football',
      image: '/images/hero-marrakech.webp',
      tags: ['football', 'soccer', 'sports'],
      keywords: ['football', 'soccer', 'atlas lions', 'world cup', 'stadium', 'match', 'wydad', 'raja', 'botola'],
      priority: 6,
    },
    {
      title: 'Moroccan Crafts & Artisans',
      description: 'Traditional Moroccan craftsmanship: zellige tilework, leather, carpets, metalwork, and woodcarving.',
      type: 'page',
      url: '/crafts',
      image: '/images/hero-marrakech.webp',
      tags: ['crafts', 'artisan', 'handmade'],
      keywords: ['crafts', 'artisan', 'zellige', 'tilework', 'leather', 'carpet', 'rug', 'pottery', 'ceramics', 'metalwork', 'woodcarving', 'tadelakt'],
      priority: 7,
    },
    {
      title: 'Weddings in Morocco',
      description: 'Guide to destination weddings in Morocco: venues, traditions, planners, and legal requirements.',
      type: 'page',
      url: '/weddings',
      image: '/images/hero-surfing.webp',
      tags: ['wedding', 'marriage', 'celebration'],
      keywords: ['wedding', 'marriage', 'destination wedding', 'venue', 'ceremony', 'reception', 'moroccan wedding', 'henna', 'planner'],
      priority: 5,
    },
    {
      title: 'Accessible Travel in Morocco',
      description: 'Guide to accessible travel in Morocco: wheelchair-friendly hotels, tours, and city tips.',
      type: 'guide',
      url: '/accessible-travel',
      image: '/images/hero-marrakech.webp',
      tags: ['accessible', 'disability', 'wheelchair'],
      keywords: ['accessible', 'wheelchair', 'disability', 'mobility', 'accessible travel', 'barrier-free', 'inclusive'],
      priority: 6,
    },
    {
      title: 'Family Travel in Morocco',
      description: 'Everything families need to know about traveling Morocco with children of all ages.',
      type: 'page',
      url: '/family',
      image: '/images/hero-marrakech.webp',
      tags: ['family', 'kids', 'children'],
      keywords: ['family', 'kids', 'children', 'baby', 'toddler', 'teen', 'family vacation', 'family-friendly'],
      priority: 6,
    },
    {
      title: 'Moroccan Music',
      description: 'Guide to Moroccan music: Gnawa, Andalusian, Chaabi, Rai, and contemporary artists.',
      type: 'page',
      url: '/music',
      image: '/images/hero-marrakech.webp',
      tags: ['music', 'gnawa', 'traditional'],
      keywords: ['music', 'gnawa', 'andalusian', 'chaabi', 'rai', 'instruments', 'guembri', 'oud', 'festivals', 'concerts'],
      priority: 6,
    },
    {
      title: 'Morocco Road Trips',
      description: 'Best road trip routes in Morocco: coastal drives, mountain passes, and desert highways.',
      type: 'page',
      url: '/road-trips',
      image: '/images/hero-desert.webp',
      tags: ['road trip', 'driving', 'route'],
      keywords: ['road trip', 'driving', 'car', 'route', 'scenic drive', 'tizi n tichka', 'coastal road', 'highway'],
      priority: 7,
    },
    {
      title: 'Morocco Filming Locations',
      description: 'Famous filming locations in Morocco: Game of Thrones, Gladiator, Lawrence of Arabia, and more.',
      type: 'page',
      url: '/filming-locations',
      image: '/images/hero-ait-benhaddou.webp',
      tags: ['filming', 'movies', 'hollywood'],
      keywords: ['filming', 'movie', 'hollywood', 'game of thrones', 'gladiator', 'ouarzazate', 'studio', 'atlas studios', 'cinema'],
      priority: 6,
    },
    {
      title: 'Moroccan Gardens',
      description: 'Beautiful gardens of Morocco: Majorelle, Menara, Andalusian gardens, and hidden oases.',
      type: 'page',
      url: '/gardens',
      image: '/images/hero-atlas.webp',
      tags: ['garden', 'botanical', 'nature'],
      keywords: ['garden', 'majorelle', 'menara', 'agdal', 'andalusian', 'botanical', 'oasis', 'palm grove'],
      priority: 6,
    },
    {
      title: 'Moroccan Architecture',
      description: 'Guide to Moroccan architecture: riads, kasbahs, mosques, zellige, and modern design.',
      type: 'page',
      url: '/architecture',
      image: '/images/hero-coastal.webp',
      tags: ['architecture', 'design', 'building'],
      keywords: ['architecture', 'riad', 'kasbah', 'mosque', 'zellige', 'tadelakt', 'muqarnas', 'minaret', 'courtyard', 'dar', 'design'],
      priority: 7,
    },
    {
      title: 'Jewish Heritage in Morocco',
      description: 'Morocco\'s Jewish heritage: mellah quarters, synagogues, cemeteries, and cultural legacy.',
      type: 'page',
      url: '/jewish-heritage',
      image: '/images/hero-coastal.webp',
      tags: ['jewish', 'heritage', 'history'],
      keywords: ['jewish', 'mellah', 'synagogue', 'cemetery', 'heritage', 'essaouira', 'fes', 'marrakech', 'interfaith'],
      priority: 6,
    },
    {
      title: 'Medina Survival Guide',
      description: 'How to navigate Moroccan medinas: tips for not getting lost, haggling, and staying safe.',
      type: 'guide',
      url: '/medina-guide',
      image: '/images/hero-marrakech.webp',
      tags: ['medina', 'navigation', 'tips'],
      keywords: ['medina', 'old town', 'navigate', 'lost', 'haggling', 'bargaining', 'souks', 'alleyways', 'derb'],
      priority: 7,
    },
    {
      title: 'Moroccan Arabic & Language Guide',
      description: 'Essential Darija phrases, French basics, and Amazigh words for travelers in Morocco.',
      type: 'guide',
      url: '/language',
      image: '/images/hero-marrakech.webp',
      tags: ['language', 'arabic', 'darija'],
      keywords: ['language', 'darija', 'arabic', 'french', 'amazigh', 'berber', 'phrases', 'words', 'translate', 'communication'],
      priority: 7,
    },
    {
      title: 'Morocco Etiquette Guide',
      description: 'Cultural etiquette in Morocco: dress code, greetings, dining customs, and religious respect.',
      type: 'guide',
      url: '/etiquette',
      image: '/images/hero-marrakech.webp',
      tags: ['etiquette', 'customs', 'manners'],
      keywords: ['etiquette', 'customs', 'manners', 'dress code', 'greetings', 'dining', 'respect', 'religion', 'ramadan', 'shoes'],
      priority: 7,
    },
    {
      title: 'UNESCO World Heritage Sites',
      description: 'All UNESCO World Heritage Sites in Morocco: medinas, kasbahs, and archaeological wonders.',
      type: 'page',
      url: '/unesco',
      image: '/images/hero-coastal.webp',
      tags: ['unesco', 'heritage', 'world heritage'],
      keywords: ['unesco', 'world heritage', 'fes medina', 'marrakech medina', 'ait benhaddou', 'volubilis', 'meknes', 'essaouira', 'rabat'],
      priority: 8,
    },
    {
      title: 'Best Time to Visit Morocco',
      description: 'Month-by-month guide to the best time to visit Morocco by region and activity.',
      type: 'guide',
      url: '/best-time',
      image: '/images/hero-marrakech.webp',
      tags: ['weather', 'season', 'timing'],
      keywords: ['best time', 'when to visit', 'season', 'weather', 'spring', 'autumn', 'summer', 'winter', 'month', 'climate'],
      priority: 8,
    },
    {
      title: 'Morocco Airports Guide',
      description: 'Complete guide to Moroccan airports: terminals, transport, lounges, and transfer options.',
      type: 'guide',
      url: '/airports',
      image: '/images/hero-marrakech.webp',
      tags: ['airport', 'flights', 'arrival'],
      keywords: ['airport', 'marrakech menara', 'casablanca mohammed v', 'fes saiss', 'tangier', 'agadir', 'terminal', 'transfer', 'arrival'],
      priority: 6,
    },
    {
      title: 'About Morocco Guide',
      description: 'About CityGuide Morocco: our mission, team, and commitment to authentic travel information.',
      type: 'page',
      url: '/about',
      tags: ['about', 'team', 'mission'],
      keywords: ['about', 'team', 'mission', 'who we are', 'contact', 'about us'],
      priority: 3,
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with the Morocco Guide team for questions, partnerships, or feedback.',
      type: 'page',
      url: '/contact',
      tags: ['contact', 'email', 'support'],
      keywords: ['contact', 'email', 'phone', 'message', 'support', 'feedback', 'partnership'],
      priority: 3,
    },
    {
      title: 'All Cities in Morocco',
      description: 'Browse all cities and towns in Morocco from imperial cities to coastal havens and mountain retreats.',
      type: 'page',
      url: '/cities',
      image: '/images/hero-coastal.webp',
      tags: ['cities', 'directory', 'browse'],
      keywords: ['cities', 'towns', 'all cities', 'browse', 'directory', 'imperial', 'coastal', 'mountain'],
      priority: 7,
    },
    {
      title: 'All Attractions',
      description: 'Browse all attractions and landmarks in Morocco from ancient ruins to modern gardens.',
      type: 'page',
      url: '/attractions',
      image: '/images/hero-coastal.webp',
      tags: ['attractions', 'directory', 'landmarks'],
      keywords: ['attractions', 'landmarks', 'sightseeing', 'things to do', 'visit', 'must see'],
      priority: 7,
    },
    {
      title: 'All Tours',
      description: 'Browse all guided tours and excursions available across Morocco.',
      type: 'page',
      url: '/tours',
      image: '/images/hero-desert.webp',
      tags: ['tours', 'directory', 'excursions'],
      keywords: ['tours', 'guided tours', 'excursions', 'day trips', 'multi-day', 'private tour'],
      priority: 7,
    },
    {
      title: 'All Accommodations',
      description: 'Browse all hotels, riads, hostels, and resorts across Morocco.',
      type: 'page',
      url: '/accommodations',
      image: '/images/hero-surfing.webp',
      tags: ['accommodations', 'directory', 'hotels'],
      keywords: ['accommodations', 'hotels', 'riads', 'hostels', 'resorts', 'where to stay', 'booking'],
      priority: 7,
    },
    {
      title: 'All Restaurants',
      description: 'Browse all restaurants and dining options across Morocco from street food to fine dining.',
      type: 'page',
      url: '/restaurants',
      image: '/images/hero-marrakech.webp',
      tags: ['restaurants', 'directory', 'food'],
      keywords: ['restaurants', 'dining', 'food', 'where to eat', 'best restaurants'],
      priority: 7,
    },
    {
      title: 'Activities in Morocco',
      description: 'Browse outdoor activities and adventures across Morocco from surfing to trekking.',
      type: 'page',
      url: '/activities',
      image: '/images/hero-desert.webp',
      tags: ['activities', 'directory', 'outdoor'],
      keywords: ['activities', 'outdoor', 'sport', 'adventure', 'things to do'],
      priority: 7,
    },
    {
      title: 'Travel Guides Collection',
      description: 'Browse all travel guides for Morocco covering every topic from safety to cuisine.',
      type: 'page',
      url: '/guides',
      image: '/images/hero-marrakech.webp',
      tags: ['guides', 'directory', 'collection'],
      keywords: ['guides', 'travel guides', 'how to', 'tips', 'advice', 'information'],
      priority: 6,
    },
    {
      title: 'Events Calendar',
      description: 'Upcoming events, festivals, and celebrations across Morocco throughout the year.',
      type: 'page',
      url: '/events',
      image: '/images/hero-marrakech.webp',
      tags: ['events', 'calendar', 'festivals'],
      keywords: ['events', 'calendar', 'festival', 'celebration', 'upcoming', 'dates', 'schedule'],
      priority: 6,
    },
    {
      title: 'Travel Tools',
      description: 'Useful travel tools for planning your Morocco trip: budget calculator, weather, maps, and more.',
      type: 'page',
      url: '/tools',
      tags: ['tools', 'planning', 'utilities'],
      keywords: ['tools', 'planning', 'calculator', 'utilities', 'resources', 'planner'],
      priority: 5,
    },
  ];

  pages.forEach((p, i) => {
    items.push({ ...p, id: `page-${i}` } as SearchItem);
  });

  /* ─── Travel Tools (8 entries) ─── */
  const tools: Omit<SearchItem, 'id'>[] = [
    {
      title: 'Currency Converter',
      description: 'Convert Moroccan Dirham (MAD) to any currency with live exchange rates.',
      type: 'page',
      url: '/tools/currency',
      tags: ['tool', 'currency', 'money'],
      keywords: ['currency', 'money', 'exchange rate', 'dirham', 'MAD', 'converter', 'calculator'],
      priority: 6,
    },
    {
      title: 'Morocco Weather',
      description: 'Current weather conditions and forecasts for all major Moroccan cities.',
      type: 'page',
      url: '/tools/weather',
      tags: ['tool', 'weather', 'climate'],
      keywords: ['weather', 'temperature', 'forecast', 'climate', 'rain', 'sun', 'hot', 'cold', 'when to visit'],
      priority: 6,
    },
    {
      title: 'Trip Budget Calculator',
      description: 'Plan your Morocco trip budget with estimated costs for accommodation, food, and transport.',
      type: 'page',
      url: '/tools/budget',
      tags: ['tool', 'budget', 'money'],
      keywords: ['budget', 'cost', 'price', 'how much', 'expenses', 'money', 'calculator', 'planning'],
      priority: 6,
    },
    {
      title: 'Packing List',
      description: 'Essential packing list for Morocco customized by season, activities, and duration.',
      type: 'page',
      url: '/tools/packing',
      tags: ['tool', 'packing', 'preparation'],
      keywords: ['packing', 'list', 'what to bring', 'clothes', 'essentials', 'luggage', 'checklist'],
      priority: 5,
    },
    {
      title: 'Morocco Map Explorer',
      description: 'Interactive map of Morocco with all cities, attractions, and routes.',
      type: 'page',
      url: '/tools/map',
      tags: ['tool', 'map', 'explore'],
      keywords: ['map', 'interactive', 'location', 'directions', 'explore', 'geography', 'routes'],
      priority: 6,
    },
    {
      title: 'Trip Planner',
      description: 'Build your custom Morocco itinerary with drag-and-drop planning and booking.',
      type: 'page',
      url: '/tools/planner',
      tags: ['tool', 'planner', 'itinerary'],
      keywords: ['planner', 'itinerary', 'schedule', 'route', 'organize', 'custom trip'],
      priority: 6,
    },
    {
      title: 'Flight Search',
      description: 'Find the best flights to Morocco from your city with price comparisons.',
      type: 'page',
      url: '/tools/flights',
      tags: ['tool', 'flights', 'booking'],
      keywords: ['flights', 'airplane', 'airport', 'booking', 'cheap flights', 'airlines', 'flying'],
      priority: 6,
    },
    {
      title: 'Distance Calculator',
      description: 'Calculate driving distances and travel times between Moroccan cities.',
      type: 'page',
      url: '/tools/distance',
      tags: ['tool', 'distance', 'routes'],
      keywords: ['distance', 'how far', 'driving time', 'km', 'travel time', 'route'],
      priority: 5,
    },
  ];

  tools.forEach((t, i) => {
    items.push({ ...t, id: `tool-${i}` } as SearchItem);
  });

  _cachedIndex = items;
  return items;
}

/* ═══════════════════════════════════════════════════════════════════
   SEARCH FUNCTION
   ═══════════════════════════════════════════════════════════════════ */

export function searchItems(query: string, options?: SearchOptions): SearchResult[] {
  if (!query || !query.trim()) return [];
  const index = buildSearchIndex();
  const q = query.trim();
  const expandedTerms = expandQuery(q);
  const limit = options?.limit ?? 50;

  let results: SearchResult[] = [];

  for (const item of index) {
    // Type filter
    if (options?.type && options.type !== 'all') {
      if (item.type !== options.type) continue;
    }
    // Region filter
    if (options?.region && item.region && !item.region.toLowerCase().includes(options.region.toLowerCase())) {
      continue;
    }

    const { score, matchedOn } = scoreItem(item, q, expandedTerms);
    if (score > 0) {
      results.push({ ...item, score, matchedOn });
    }
  }

  // Sort
  const sortBy = options?.sort ?? 'relevance';
  if (sortBy === 'relevance') {
    results.sort((a, b) => b.score - a.score);
  } else if (sortBy === 'rating') {
    results.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
  } else if (sortBy === 'az') {
    results.sort((a, b) => a.title.localeCompare(b.title));
  }

  return results.slice(0, limit);
}

/* ═══════════════════════════════════════════════════════════════════
   SUGGESTIONS (Autocomplete)
   ═══════════════════════════════════════════════════════════════════ */

export function getSuggestions(query: string): string[] {
  if (!query || query.trim().length < 2) return [];
  const results = searchItems(query, { limit: 8 });
  const seen = new Set<string>();
  const suggestions: string[] = [];

  for (const result of results) {
    const title = result.title;
    if (!seen.has(title.toLowerCase())) {
      seen.add(title.toLowerCase());
      suggestions.push(title);
    }
    if (suggestions.length >= 6) break;
  }

  return suggestions;
}

/* ═══════════════════════════════════════════════════════════════════
   DID YOU MEAN? (Typo correction)
   ═══════════════════════════════════════════════════════════════════ */

export function getDidYouMean(query: string): string | null {
  if (!query || query.trim().length < 3) return null;
  const q = query.toLowerCase().trim();
  const index = buildSearchIndex();

  // If we have good results already, no suggestion needed
  const results = searchItems(query, { limit: 5 });
  if (results.length > 0 && results[0].score > 30) return null;

  // Find the closest matching title
  let bestMatch = '';
  let bestDistance = Infinity;

  for (const item of index) {
    const titleLower = item.title.toLowerCase();
    const dist = levenshteinDistance(q, titleLower);
    if (dist < bestDistance && dist <= Math.max(2, Math.floor(q.length / 2)) && dist > 0) {
      bestDistance = dist;
      bestMatch = item.title;
    }
    // Also check individual words in multi-word titles
    const words = titleLower.split(/\s+/);
    for (const word of words) {
      if (word.length >= 3) {
        const wordDist = levenshteinDistance(q, word);
        if (wordDist < bestDistance && wordDist <= 2 && wordDist > 0) {
          bestDistance = wordDist;
          bestMatch = item.title;
        }
      }
    }
  }

  return bestMatch || null;
}

/* ═══════════════════════════════════════════════════════════════════
   RECENT SEARCHES (localStorage)
   ═══════════════════════════════════════════════════════════════════ */

const RECENT_SEARCHES_KEY = 'morocco-guide-recent-searches';
const MAX_RECENT = 8;

export function getRecentSearches(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function addRecentSearch(query: string): void {
  if (typeof window === 'undefined' || !query.trim()) return;
  try {
    const recent = getRecentSearches();
    const filtered = recent.filter(s => s.toLowerCase() !== query.toLowerCase().trim());
    filtered.unshift(query.trim());
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(filtered.slice(0, MAX_RECENT)));
  } catch {
    // localStorage not available
  }
}

export function clearRecentSearches(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  } catch {
    // localStorage not available
  }
}

/* ═══════════════════════════════════════════════════════════════════
   POPULAR SEARCHES
   ═══════════════════════════════════════════════════════════════════ */

export const POPULAR_SEARCHES = [
  'Marrakech',
  'Sahara Desert',
  'Chefchaouen',
  'Fes Medina',
  'Atlas Mountains',
  'Essaouira',
  'Moroccan Food',
  'Riads',
  'Tangier',
  'Ait Benhaddou',
];

/* ═══════════════════════════════════════════════════════════════════
   ALL REGIONS (for filtering)
   ═══════════════════════════════════════════════════════════════════ */

export const ALL_REGIONS = [...REGIONS];
