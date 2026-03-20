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
    {
      title: 'Paragliding in Morocco',
      description: 'Tandem paragliding flights over the Atlas Mountains, Sahara, and Atlantic coast.',
      type: 'page',
      url: '/paragliding',
      tags: ['paragliding', 'adventure', 'flying'],
      keywords: ['paragliding', 'flying', 'tandem flight', 'atlas', 'adventure', 'aguergour'],
      priority: 6,
    },
    {
      title: 'Quad Biking Morocco',
      description: 'Quad biking adventures in Marrakech palm grove, Merzouga desert, and Agadir beach.',
      type: 'page',
      url: '/quad-biking',
      tags: ['quad', 'biking', 'adventure', 'atv'],
      keywords: ['quad biking', 'atv', 'buggy', 'palmeraie', 'desert quad', 'adventure'],
      priority: 6,
    },
    {
      title: 'Surfing Taghazout',
      description: 'World-class surfing at Taghazout and the Atlantic coast of Morocco.',
      type: 'page',
      url: '/taghazout-surf',
      tags: ['surfing', 'taghazout', 'beach', 'waves'],
      keywords: ['taghazout', 'surfing', 'surf camp', 'waves', 'atlantic', 'beach', 'anchor point'],
      priority: 7,
    },
    {
      title: 'Sandboarding Morocco',
      description: 'Sandboarding on the dunes of the Sahara desert near Merzouga and Zagora.',
      type: 'page',
      url: '/sandboarding',
      tags: ['sandboarding', 'desert', 'adventure'],
      keywords: ['sandboarding', 'sand dunes', 'sahara', 'merzouga', 'desert sport'],
      priority: 5,
    },
    {
      title: 'Paradise Valley',
      description: 'Hidden oasis near Agadir with natural rock pools and waterfalls in the Atlas foothills.',
      type: 'page',
      url: '/paradise-valley',
      tags: ['paradise valley', 'oasis', 'swimming'],
      keywords: ['paradise valley', 'agadir', 'rock pools', 'waterfall', 'swimming', 'oasis', 'hidden gem'],
      priority: 7,
    },
    {
      title: 'Todra Gorge',
      description: 'Dramatic canyon walls rising 300m in the eastern High Atlas. Rock climbing and hiking.',
      type: 'page',
      url: '/todra-gorge',
      tags: ['todra', 'gorge', 'canyon', 'climbing'],
      keywords: ['todra gorge', 'canyon', 'rock climbing', 'hiking', 'tinghir', 'high atlas'],
      priority: 7,
    },
    {
      title: 'Moroccan Food Guide',
      description: 'Complete guide to Moroccan cuisine: dishes, ingredients, regional specialties, and where to eat.',
      type: 'page',
      url: '/moroccan-food-guide',
      tags: ['food', 'cuisine', 'moroccan'],
      keywords: ['moroccan food', 'tagine', 'couscous', 'pastilla', 'harira', 'cuisine', 'dishes'],
      priority: 8,
    },
    {
      title: 'Moroccan Markets & Souks',
      description: 'Guide to the best markets in Morocco: what to buy, bargaining tips, and market etiquette.',
      type: 'page',
      url: '/moroccan-markets',
      tags: ['markets', 'souks', 'shopping'],
      keywords: ['moroccan markets', 'souks', 'bargaining', 'shopping', 'artisan', 'leather', 'spices'],
      priority: 7,
    },
    {
      title: 'Traditional Moroccan Hammam',
      description: 'Complete guide to the Moroccan hammam experience: what to expect, etiquette, and best hammams.',
      type: 'page',
      url: '/moroccan-hammam',
      tags: ['hammam', 'bath', 'wellness', 'spa'],
      keywords: ['hammam', 'bath house', 'black soap', 'kessa', 'spa', 'wellness', 'traditional'],
      priority: 7,
    },
    {
      title: 'Morocco for Locals',
      description: 'Morocco travel guide for Moroccan residents: weekend getaways, hidden gems, and local favorites.',
      type: 'page',
      url: '/morocco-for-locals',
      tags: ['locals', 'moroccan', 'weekend'],
      keywords: ['locals guide', 'moroccan', 'weekend getaway', 'hidden gems', 'local favorites'],
      priority: 6,
    },
    {
      title: 'Photography Guide Morocco',
      description: 'Morocco photography techniques: best locations, golden hour, ethics, gear, and drone rules.',
      type: 'page',
      url: '/photography-guide',
      tags: ['photography', 'camera', 'photos'],
      keywords: ['photography', 'camera', 'photo locations', 'golden hour', 'drone', 'instagram'],
      priority: 6,
    },
    {
      title: 'Public Transport Morocco',
      description: 'Complete guide to buses, trams, taxis, and shared transport across Morocco.',
      type: 'page',
      url: '/public-transport',
      tags: ['transport', 'bus', 'tram', 'taxi'],
      keywords: ['public transport', 'bus', 'tram', 'taxi', 'CTM', 'supratours', 'grand taxi', 'petit taxi'],
      priority: 7,
    },
    {
      title: 'Learn Darija (Moroccan Arabic)',
      description: 'Essential Moroccan Arabic phrases for travelers with pronunciation guides.',
      type: 'page',
      url: '/darija',
      tags: ['darija', 'arabic', 'language'],
      keywords: ['darija', 'moroccan arabic', 'phrases', 'language', 'hello', 'thank you', 'pronunciation'],
      priority: 7,
    },
    {
      title: 'Emergency Contacts Morocco',
      description: 'Emergency phone numbers, hospital locations, embassy contacts, and safety resources.',
      type: 'page',
      url: '/emergency',
      tags: ['emergency', 'safety', 'contacts'],
      keywords: ['emergency', 'police', 'hospital', 'embassy', 'ambulance', 'fire', 'phone numbers'],
      priority: 8,
    },
    {
      title: '7-Day Morocco Itinerary',
      description: 'Perfect one-week Morocco itinerary covering Marrakech, Sahara, Fes, and the Atlas.',
      type: 'page',
      url: '/morocco-itinerary-7-days',
      tags: ['itinerary', '7 days', 'planning'],
      keywords: ['7 day itinerary', 'one week', 'morocco trip', 'marrakech fes', 'sahara desert'],
      priority: 8,
    },
    {
      title: '14-Day Morocco Itinerary',
      description: 'Ultimate two-week Morocco route covering all highlights from coast to desert.',
      type: 'page',
      url: '/morocco-itinerary-14-days',
      tags: ['itinerary', '14 days', 'planning'],
      keywords: ['14 day itinerary', 'two weeks', 'grand tour', 'morocco trip', 'complete route'],
      priority: 7,
    },
    {
      title: 'Morocco Digital Nomad Guide',
      description: 'Complete guide to remote work in Morocco: coworking spaces, costs, internet, visa, and nomad communities.',
      type: 'page',
      url: '/morocco-digital-nomad-guide',
      tags: ['digital nomad', 'remote work', 'coworking'],
      keywords: ['digital nomad', 'remote work', 'coworking', 'wifi', 'cost of living', 'visa', 'freelance'],
      priority: 7,
    },
    {
      title: 'Morocco Road Trip Routes',
      description: 'Six epic road trip routes across Morocco with stops, costs, fuel, and driving tips.',
      type: 'page',
      url: '/morocco-road-trip-routes',
      tags: ['road trip', 'driving', 'routes'],
      keywords: ['road trip', 'driving', 'car rental', 'routes', 'atlas mountains', 'sahara', 'coast'],
      priority: 7,
    },
    {
      title: 'Morocco Shopping Guide',
      description: 'What to buy in Morocco: bargaining tips, shipping, scams to avoid, and price references.',
      type: 'page',
      url: '/morocco-shopping-guide',
      tags: ['shopping', 'souvenirs', 'bargaining'],
      keywords: ['shopping', 'souvenirs', 'bargaining', 'leather', 'argan oil', 'carpets', 'ceramics'],
      priority: 7,
    },
    {
      title: 'Morocco Nightlife Guide',
      description: 'Nightlife in Morocco by city: clubs, rooftop bars, live music, and cultural shows.',
      type: 'page',
      url: '/morocco-nightlife-guide',
      tags: ['nightlife', 'bars', 'clubs'],
      keywords: ['nightlife', 'bars', 'clubs', 'rooftop', 'live music', 'gnawa', 'marrakech nightlife'],
      priority: 6,
    },
    {
      title: 'Morocco Spa & Hammam Guide',
      description: 'Complete guide to Moroccan spas and hammams: treatments, etiquette, best spas by city.',
      type: 'page',
      url: '/morocco-spa-guide',
      tags: ['spa', 'hammam', 'wellness'],
      keywords: ['spa', 'hammam', 'massage', 'wellness', 'argan oil', 'beauty', 'relaxation'],
      priority: 6,
    },
    {
      title: 'Morocco Wedding Venues',
      description: 'Destination weddings in Morocco: riads, palaces, desert venues, costs, and planning tips.',
      type: 'page',
      url: '/morocco-wedding-venues',
      tags: ['wedding', 'venues', 'destination'],
      keywords: ['wedding', 'destination wedding', 'venues', 'riad', 'palace', 'desert wedding', 'planning'],
      priority: 6,
    },
    {
      title: 'Morocco Safety Tips',
      description: 'Practical safety guide for Morocco: scams, health, transport safety, and emergency info.',
      type: 'page',
      url: '/morocco-safety-tips',
      tags: ['safety', 'tips', 'scams'],
      keywords: ['safety', 'scams', 'health', 'transport', 'emergency', 'women safety', 'travel tips'],
      priority: 8,
    },
    {
      title: 'Morocco Weather Monthly Guide',
      description: 'Month-by-month weather guide for Morocco: temperatures, rainfall, and best times to visit.',
      type: 'page',
      url: '/morocco-weather-monthly',
      tags: ['weather', 'climate', 'seasons'],
      keywords: ['weather', 'temperature', 'rainfall', 'best time', 'climate', 'seasons', 'monthly'],
      priority: 7,
    },
    {
      title: 'Morocco Airports Guide',
      description: 'All Morocco airports: terminals, transport, airlines, and tips for arrival.',
      type: 'page',
      url: '/morocco-airports-guide',
      tags: ['airports', 'flights', 'arrival'],
      keywords: ['airport', 'flights', 'arrival', 'transport', 'terminal', 'airlines', 'transfer'],
      priority: 7,
    },
    {
      title: 'Morocco Train Routes (ONCF)',
      description: 'Complete ONCF train guide: routes, schedules, prices, and tips for rail travel in Morocco.',
      type: 'page',
      url: '/morocco-train-routes',
      tags: ['trains', 'ONCF', 'rail'],
      keywords: ['train', 'ONCF', 'rail', 'schedule', 'routes', 'Al Boraq', 'tickets', 'stations'],
      priority: 7,
    },
    {
      title: 'Morocco Luxury Hotels',
      description: 'Top luxury hotels and resorts in Morocco: La Mamounia, Royal Mansour, and more.',
      type: 'page',
      url: '/morocco-luxury-hotels',
      tags: ['luxury', 'hotels', 'resorts'],
      keywords: ['luxury hotels', 'resorts', 'La Mamounia', 'Royal Mansour', 'palace', 'five star'],
      priority: 7,
    },
    {
      title: 'Morocco Travel Insurance',
      description: 'Compare travel insurance providers for Morocco: coverage, costs, and claims.',
      type: 'page',
      url: '/morocco-travel-insurance',
      tags: ['insurance', 'health', 'safety'],
      keywords: ['travel insurance', 'medical', 'coverage', 'SafetyWing', 'World Nomads', 'claims'],
      priority: 7,
    },
    {
      title: 'Morocco with Pets',
      description: 'Complete guide to traveling to Morocco with pets: entry requirements and vet clinics.',
      type: 'page',
      url: '/morocco-with-pets',
      tags: ['pets', 'dogs', 'animals'],
      keywords: ['pets', 'dogs', 'cats', 'vaccination', 'import permit', 'vet', 'pet-friendly'],
      priority: 5,
    },
    {
      title: 'Morocco SIM Card & Data Guide',
      description: 'Best SIM cards, data plans, and eSIM options for Morocco travelers.',
      type: 'page',
      url: '/morocco-sim-card',
      tags: ['SIM card', 'data', 'internet'],
      keywords: ['SIM card', 'data', 'internet', 'Maroc Telecom', 'Orange', 'Inwi', 'eSIM', 'WiFi'],
      priority: 8,
    },
    {
      title: 'Best Day Trips in Morocco',
      description: '15 incredible day trips from Marrakech, Fes, Casablanca, and Tangier.',
      type: 'page',
      url: '/morocco-day-trips',
      tags: ['day trips', 'excursions', 'tours'],
      keywords: ['day trips', 'excursions', 'Ouzoud', 'Essaouira', 'Chefchaouen', 'Volubilis'],
      priority: 8,
    },
    {
      title: 'Morocco Food Tours',
      description: 'Best food tours in Morocco: guided walks, self-guided routes, and must-try dishes.',
      type: 'page',
      url: '/morocco-food-tours',
      tags: ['food tours', 'cuisine', 'street food'],
      keywords: ['food tours', 'culinary', 'street food', 'tagine', 'couscous', 'pastilla', 'cooking'],
      priority: 7,
    },
    {
      title: 'Volunteering in Morocco',
      description: 'Guide to ethical volunteering: teaching, conservation, community projects, and organizations.',
      type: 'page',
      url: '/morocco-volunteering',
      tags: ['volunteering', 'community', 'teaching'],
      keywords: ['volunteer', 'teaching', 'conservation', 'community', 'NGO', 'ethical volunteering'],
      priority: 6,
    },
    {
      title: 'Morocco Language Schools',
      description: 'Learn Arabic, Darija, or French in Morocco: 8 schools, courses, costs, and visa info.',
      type: 'page',
      url: '/morocco-language-schools',
      tags: ['language', 'schools', 'Arabic'],
      keywords: ['language school', 'Arabic', 'Darija', 'French', 'study abroad', 'courses'],
      priority: 6,
    },
    {
      title: 'Morocco Golf Courses',
      description: 'Top 8 golf courses in Morocco: green fees, regions, packages, and practical tips.',
      type: 'page',
      url: '/morocco-golf-courses',
      tags: ['golf', 'courses', 'sports'],
      keywords: ['golf', 'courses', 'Royal Golf', 'Amelkis', 'green fee', 'golf packages'],
      priority: 6,
    },
    {
      title: 'Is Morocco Safe?',
      description: 'Comprehensive safety guide: crime, scams, health, women travelers, and city-by-city ratings.',
      type: 'page',
      url: '/is-morocco-safe',
      tags: ['safety', 'crime', 'travel advisory'],
      keywords: ['is Morocco safe', 'safety', 'crime', 'scams', 'women safety', 'travel advisory'],
      priority: 9,
    },
    {
      title: 'What to Wear in Morocco',
      description: 'Complete dress code guide by season, city, and activity for men and women.',
      type: 'page',
      url: '/what-to-wear-in-morocco',
      tags: ['clothing', 'dress code', 'packing'],
      keywords: ['what to wear', 'dress code', 'clothing', 'modesty', 'packing', 'fashion'],
      priority: 8,
    },
    {
      title: 'Morocco Trip Cost',
      description: 'How much does a trip to Morocco cost? Budget breakdown for backpackers to luxury travelers.',
      type: 'page',
      url: '/morocco-trip-cost',
      tags: ['cost', 'budget', 'prices'],
      keywords: ['trip cost', 'budget', 'prices', 'how much', 'daily budget', 'expenses'],
      priority: 9,
    },
    {
      title: 'Morocco vs Egypt',
      description: 'Morocco or Egypt? Side-by-side comparison of costs, culture, safety, and experiences.',
      type: 'page',
      url: '/morocco-vs-egypt',
      tags: ['comparison', 'Egypt', 'travel'],
      keywords: ['Morocco vs Egypt', 'comparison', 'which country', 'better', 'cost comparison'],
      priority: 7,
    },
    {
      title: '3 Days in Morocco',
      description: 'Three perfect 3-day itineraries: Marrakech, Imperial Cities, or Coast & Culture.',
      type: 'page',
      url: '/morocco-3-days',
      tags: ['itinerary', '3 days', 'short trip'],
      keywords: ['3 days', 'short trip', 'weekend', 'itinerary', 'Marrakech 3 days'],
      priority: 8,
    },
    {
      title: 'Marrakech to Sahara Desert',
      description: 'Complete guide: tours, self-drive, route stops, desert camps, and what to expect.',
      type: 'page',
      url: '/marrakech-to-sahara',
      tags: ['Sahara', 'desert tour', 'Marrakech'],
      keywords: ['Marrakech to Sahara', 'desert tour', 'Merzouga', 'Erg Chebbi', 'camel trek'],
      priority: 9,
    },
    {
      title: 'Morocco vs Egypt: Which to Visit?',
      description: 'Detailed comparison of Morocco and Egypt for travelers — costs, culture, safety, and experiences.',
      type: 'page',
      url: '/morocco-vs-egypt',
      tags: ['comparison', 'Egypt', 'travel planning'],
      keywords: ['Morocco vs Egypt', 'Morocco or Egypt', 'North Africa travel', 'which country'],
      priority: 8,
    },
    {
      title: 'Morocco for Couples',
      description: 'Romantic getaways, luxury riads, couple activities, and honeymoon spots across Morocco.',
      type: 'page',
      url: '/morocco-for-couples',
      tags: ['couples', 'romantic', 'honeymoon'],
      keywords: ['Morocco couples', 'romantic Morocco', 'honeymoon Morocco', 'couples trip'],
      priority: 8,
    },
    {
      title: 'Morocco for Seniors',
      description: 'Senior-friendly travel guide with accessible tours, health tips, and comfortable accommodations.',
      type: 'page',
      url: '/morocco-for-seniors',
      tags: ['seniors', 'accessible', 'comfort'],
      keywords: ['Morocco seniors', 'elderly travel Morocco', 'accessible Morocco', 'senior tours'],
      priority: 7,
    },
    {
      title: 'Morocco with Kids',
      description: 'Family travel guide with kid-friendly activities, safety tips, and family accommodations.',
      type: 'page',
      url: '/morocco-with-kids',
      tags: ['family', 'kids', 'children'],
      keywords: ['Morocco with kids', 'family Morocco', 'children Morocco', 'kid-friendly'],
      priority: 8,
    },
    {
      title: 'Morocco vs Turkey: Which to Visit?',
      description: 'Compare Morocco and Turkey — costs, food, culture, beaches, and travel experiences.',
      type: 'page',
      url: '/morocco-vs-turkey',
      tags: ['comparison', 'Turkey', 'travel planning'],
      keywords: ['Morocco vs Turkey', 'Morocco or Turkey', 'which country', 'Mediterranean'],
      priority: 8,
    },
    {
      title: 'Morocco Tipping Guide',
      description: 'Complete guide to tipping etiquette in Morocco — restaurants, hotels, tours, and taxis.',
      type: 'page',
      url: '/morocco-tipping-guide',
      tags: ['tipping', 'etiquette', 'money'],
      keywords: ['tipping Morocco', 'Morocco tip', 'how much to tip', 'gratuity Morocco'],
      priority: 8,
    },
    {
      title: 'Morocco Halal Travel Guide',
      description: 'Muslim-friendly travel guide with halal food, prayer times, mosques, and modest accommodations.',
      type: 'page',
      url: '/morocco-halal-travel',
      tags: ['halal', 'Muslim', 'Islamic'],
      keywords: ['halal Morocco', 'Muslim travel Morocco', 'Islamic tourism', 'halal food Morocco'],
      priority: 8,
    },
    {
      title: 'Vegan Food in Morocco',
      description: 'Guide to vegan and plant-based dining across Morocco — restaurants, street food, and local dishes.',
      type: 'page',
      url: '/morocco-vegan-food',
      tags: ['vegan', 'vegetarian', 'food'],
      keywords: ['vegan Morocco', 'vegan food Morocco', 'plant-based Morocco', 'vegetarian Morocco'],
      priority: 8,
    },
    {
      title: 'Best Riads in Morocco',
      description: 'Curated guide to the best riads across Marrakech, Fes, Essaouira, and Chefchaouen — budget to luxury.',
      type: 'page',
      url: '/morocco-best-riads',
      tags: ['riads', 'accommodation', 'luxury'],
      keywords: ['best riads Morocco', 'riad Marrakech', 'riad Fes', 'boutique hotel Morocco', 'where to stay'],
      priority: 9,
    },
    {
      title: 'Best Time to Visit Morocco',
      description: 'Month-by-month guide to weather, crowds, prices, and events — find your ideal travel window.',
      type: 'page',
      url: '/best-time-visit-morocco',
      tags: ['weather', 'planning', 'seasons'],
      keywords: ['best time visit Morocco', 'when to go Morocco', 'Morocco weather', 'peak season Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Food Guide: What to Eat',
      description: 'Complete guide to Moroccan cuisine — must-try dishes, street food, beverages, dining etiquette, and regional specialties.',
      type: 'page',
      url: '/morocco-food-guide',
      tags: ['food', 'cuisine', 'dining'],
      keywords: ['Moroccan food', 'what to eat Morocco', 'tagine', 'couscous', 'street food Morocco', 'Moroccan cuisine'],
      priority: 9,
    },
    {
      title: 'Morocco Desert Tour Guide',
      description: 'Complete guide to Sahara desert tours — Erg Chebbi vs Erg Chigaga, camel treks, glamping, and booking tips.',
      type: 'page',
      url: '/morocco-desert-tour',
      tags: ['desert', 'Sahara', 'camel trek'],
      keywords: ['Morocco desert tour', 'Sahara tour', 'camel trek Morocco', 'Erg Chebbi', 'desert camping'],
      priority: 9,
    },
    {
      title: 'Things to Do in Marrakech',
      description: '30+ best things to do in Marrakech — souks, palaces, gardens, food, nightlife, and day trips.',
      type: 'page',
      url: '/things-to-do-marrakech',
      tags: ['Marrakech', 'activities', 'sightseeing'],
      keywords: ['things to do Marrakech', 'Marrakech attractions', 'Marrakech activities', 'what to do Marrakech'],
      priority: 9,
    },
    {
      title: 'Morocco Honeymoon Guide',
      description: 'Plan your dream honeymoon in Morocco — luxury riads, romantic activities, itineraries, and budget tips.',
      type: 'page',
      url: '/morocco-honeymoon-guide',
      tags: ['honeymoon', 'romantic', 'couples'],
      keywords: ['Morocco honeymoon', 'honeymoon Morocco', 'honeymoon itinerary', 'romantic Morocco'],
      priority: 9,
    },
    {
      title: 'Things to Do in Fes',
      description: '25+ best things to do in Fes — tanneries, medina, cooking classes, museums, and day trips.',
      type: 'page',
      url: '/things-to-do-fes',
      tags: ['Fes', 'activities', 'sightseeing'],
      keywords: ['things to do Fes', 'Fes attractions', 'Fes activities', 'what to do Fes', 'Fes medina'],
      priority: 9,
    },
    {
      title: 'Morocco Travel Tips: 50+ Essential Tips',
      description: 'Comprehensive travel tips for Morocco — money, safety, transport, culture, food, and packing essentials.',
      type: 'page',
      url: '/morocco-travel-tips',
      tags: ['tips', 'planning', 'first-time'],
      keywords: ['Morocco travel tips', 'Morocco tips', 'Morocco advice', 'Morocco do and dont'],
      priority: 9,
    },
    {
      title: 'Morocco 10-Day Itinerary',
      description: 'Day-by-day 10-day Morocco itinerary — Marrakech, Atlas, Sahara, Fes, and Chefchaouen.',
      type: 'page',
      url: '/morocco-itinerary-10-days',
      tags: ['itinerary', '10 days', 'planning'],
      keywords: ['Morocco 10 days', '10 day itinerary Morocco', 'Morocco 10 day trip', 'two weeks Morocco'],
      priority: 9,
    },
    {
      title: 'Things to Do in Chefchaouen',
      description: '15+ things to do in the Blue City — medina walks, Akchour waterfalls, Spanish Mosque, shopping, and more.',
      type: 'page',
      url: '/things-to-do-chefchaouen',
      tags: ['Chefchaouen', 'activities', 'Blue City'],
      keywords: ['things to do Chefchaouen', 'Chefchaouen guide', 'Blue City Morocco', 'Chefchaouen activities'],
      priority: 9,
    },
    {
      title: 'Best Beaches in Morocco',
      description: 'Top 15 beaches in Morocco — surf spots, family beaches, hidden coves, and luxury beach resorts.',
      type: 'page',
      url: '/best-beaches-morocco',
      tags: ['beaches', 'coast', 'surfing'],
      keywords: ['best beaches Morocco', 'Morocco beaches', 'surfing Morocco', 'beach holiday Morocco'],
      priority: 9,
    },
    {
      title: 'Solo Female Travel in Morocco',
      description: 'Complete guide for women traveling alone in Morocco — safety, what to wear, harassment tips, and itineraries.',
      type: 'page',
      url: '/morocco-solo-female-travel',
      tags: ['solo female', 'women', 'safety'],
      keywords: ['solo female Morocco', 'women travel Morocco', 'Morocco safe for women', 'solo woman Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Hiking Guide',
      description: 'Complete hiking and trekking guide — Toubkal, M\'Goun, Jebel Saghro, difficulty ratings, and packing tips.',
      type: 'page',
      url: '/morocco-hiking-guide',
      tags: ['hiking', 'trekking', 'mountains'],
      keywords: ['hiking Morocco', 'trekking Morocco', 'Toubkal trek', 'Morocco mountains hiking'],
      priority: 9,
    },
    {
      title: 'What to Buy in Morocco',
      description: 'Top souvenirs and shopping guide — leather, carpets, argan oil, ceramics, spices, and bargaining tips.',
      type: 'page',
      url: '/what-to-buy-morocco',
      tags: ['shopping', 'souvenirs', 'souks'],
      keywords: ['what to buy Morocco', 'Morocco souvenirs', 'Morocco shopping', 'Moroccan crafts'],
      priority: 9,
    },
    {
      title: 'Things to Do in Casablanca',
      description: '20+ things to do in Casablanca — Hassan II Mosque, Corniche, Rick\'s Cafe, Art Deco, and nightlife.',
      type: 'page',
      url: '/things-to-do-casablanca',
      tags: ['Casablanca', 'activities', 'sightseeing'],
      keywords: ['things to do Casablanca', 'Casablanca attractions', 'Casablanca guide', 'Hassan II Mosque'],
      priority: 9,
    },
    {
      title: 'Morocco Camping Guide',
      description: 'Complete camping guide — wild camping, glamping, desert camps, best spots, gear, and safety tips.',
      type: 'page',
      url: '/morocco-camping-guide',
      tags: ['camping', 'glamping', 'outdoors'],
      keywords: ['camping Morocco', 'glamping Morocco', 'desert camping', 'wild camping Morocco'],
      priority: 8,
    },
    {
      title: 'Morocco Train Travel Guide',
      description: 'ONCF train guide — Al Boraq high-speed, routes, timetables, ticket classes, and booking tips.',
      type: 'page',
      url: '/morocco-train-travel',
      tags: ['trains', 'transport', 'ONCF'],
      keywords: ['Morocco train', 'ONCF', 'Al Boraq', 'Morocco train travel', 'train tickets Morocco'],
      priority: 8,
    },
    {
      title: 'Morocco Currency Guide',
      description: 'Complete guide to the Moroccan Dirham — exchange rates, ATMs, credit cards, denominations, and daily budgets.',
      type: 'page',
      url: '/morocco-currency-guide',
      tags: ['currency', 'money', 'MAD'],
      keywords: ['Morocco currency', 'Moroccan dirham', 'MAD exchange rate', 'money Morocco'],
      priority: 8,
    },
    {
      title: 'Morocco Photography Tips',
      description: 'Best photo spots, golden hour timing, etiquette, drone rules, gear tips, and Instagram locations.',
      type: 'page',
      url: '/morocco-photography-tips',
      tags: ['photography', 'camera', 'Instagram'],
      keywords: ['Morocco photography', 'photo spots Morocco', 'Morocco camera tips', 'Instagram Morocco'],
      priority: 8,
    },
    {
      title: 'Things to Do in Essaouira',
      description: '15+ things to do in Essaouira — surfing, Gnaoua music, medina walks, fishing port, and art galleries.',
      type: 'page',
      url: '/things-to-do-essaouira',
      tags: ['Essaouira', 'activities', 'coast'],
      keywords: ['things to do Essaouira', 'Essaouira guide', 'Essaouira activities', 'Essaouira surfing'],
      priority: 9,
    },
    {
      title: 'Things to Do in Tangier',
      description: '15+ things to do in Tangier — Kasbah, Cap Spartel, Hercules Caves, medina, cafes, and day trips.',
      type: 'page',
      url: '/things-to-do-tangier',
      tags: ['Tangier', 'activities', 'sightseeing'],
      keywords: ['things to do Tangier', 'Tangier attractions', 'Tangier guide', 'Cap Spartel'],
      priority: 9,
    },
    {
      title: 'Morocco Visa Guide',
      description: 'Complete visa requirements — visa-free countries, how to apply, passport rules, and entry/exit procedures.',
      type: 'page',
      url: '/morocco-visa-guide',
      tags: ['visa', 'passport', 'entry'],
      keywords: ['Morocco visa', 'visa requirements Morocco', 'do I need visa Morocco', 'Morocco passport'],
      priority: 9,
    },
    {
      title: 'Things to Do in Agadir',
      description: '15+ things to do in Agadir — beach, Kasbah, Paradise Valley, surfing, golf, and seafood.',
      type: 'page',
      url: '/things-to-do-agadir',
      tags: ['Agadir', 'activities', 'beach'],
      keywords: ['things to do Agadir', 'Agadir attractions', 'Agadir beach', 'Agadir guide'],
      priority: 9,
    },
    {
      title: 'Morocco Hammam Guide',
      description: 'Complete guide to Moroccan hammam experience — public vs private, etiquette, what to bring, prices, and best hammams by city.',
      type: 'page',
      url: '/morocco-hammam-guide',
      tags: ['hammam', 'wellness', 'culture', 'spa'],
      keywords: ['Morocco hammam guide', 'traditional hammam', 'hammam etiquette', 'best hammams Morocco'],
      priority: 9,
    },
    {
      title: 'Marrakech to Fes Travel Guide',
      description: 'How to get from Marrakech to Fes — train, bus, private transfer, driving, and scenic desert route with prices and tips.',
      type: 'page',
      url: '/marrakech-to-fes',
      tags: ['transport', 'Marrakech', 'Fes', 'routes'],
      keywords: ['Marrakech to Fes', 'Marrakech Fes train', 'how to get to Fes', 'Morocco transport'],
      priority: 9,
    },
    {
      title: 'Morocco Airport Transfers Guide',
      description: 'Airport transfer options for all major Moroccan airports — taxis, buses, private transfers, prices, and scam-avoidance tips.',
      type: 'page',
      url: '/morocco-airport-transfers',
      tags: ['airports', 'transport', 'transfers', 'practical'],
      keywords: ['Morocco airport transfer', 'Marrakech airport to city', 'airport taxi Morocco', 'Morocco arrival tips'],
      priority: 8,
    },
    {
      title: 'Morocco with Kids',
      description: 'Family travel guide to Morocco — kid-friendly attractions, safety tips, food for picky eaters, family riads, and sample itineraries.',
      type: 'page',
      url: '/morocco-with-kids',
      tags: ['family', 'kids', 'safety', 'travel tips'],
      keywords: ['Morocco with kids', 'family travel Morocco', 'Morocco safe for children', 'kid-friendly Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Budget Guide',
      description: 'How much does Morocco cost? Daily budget breakdowns, money-saving tips, cheapest cities, and budget itineraries.',
      type: 'page',
      url: '/morocco-budget-guide',
      tags: ['budget', 'money', 'costs', 'backpacking'],
      keywords: ['Morocco budget travel', 'how much Morocco cost', 'Morocco on a budget', 'cheap Morocco guide'],
      priority: 9,
    },
    {
      title: 'Morocco for Couples',
      description: 'Romantic Morocco travel guide — best couple experiences, romantic riads, desert camps, cultural tips, and couple itineraries.',
      type: 'page',
      url: '/morocco-for-couples',
      tags: ['couples', 'romantic', 'honeymoon', 'travel'],
      keywords: ['Morocco for couples', 'romantic Morocco trip', 'Morocco couple guide', 'Morocco honeymoon alternative'],
      priority: 9,
    },
    {
      title: 'Morocco for Seniors',
      description: 'Senior travel guide to Morocco — accessibility tips, best cities, comfortable accommodations, pace-friendly itineraries, and health info.',
      type: 'page',
      url: '/morocco-for-seniors',
      tags: ['seniors', 'accessibility', 'health', 'comfort'],
      keywords: ['Morocco for seniors', 'senior travel Morocco', 'elderly travel Morocco', 'over 60 Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Group Travel Guide',
      description: 'Group travel guide to Morocco — tour types, group activities, transport, split-cost tips, group dining, and planning timeline.',
      type: 'page',
      url: '/morocco-group-travel',
      tags: ['group', 'tours', 'friends', 'planning'],
      keywords: ['Morocco group travel', 'Morocco group tour', 'group trip Morocco', 'Morocco with friends'],
      priority: 9,
    },
    {
      title: 'Morocco Luxury Travel Guide',
      description: 'Luxury travel in Morocco — top 5-star hotels, private desert experiences, fine dining, VIP tours, and luxury itineraries.',
      type: 'page',
      url: '/morocco-luxury-travel',
      tags: ['luxury', 'hotels', 'fine dining', 'VIP'],
      keywords: ['luxury travel Morocco', 'Morocco luxury hotels', 'luxury Morocco trip', '5 star Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Ramadan Travel Guide',
      description: 'Visiting Morocco during Ramadan — what stays open, iftar experiences, etiquette, city-by-city impact, and Ramadan dates.',
      type: 'page',
      url: '/morocco-ramadan-travel',
      tags: ['Ramadan', 'culture', 'etiquette', 'religion'],
      keywords: ['Morocco Ramadan travel', 'visiting Morocco Ramadan', 'Ramadan in Morocco', 'iftar Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Road Trip Guide',
      description: 'Complete Morocco road trip guide — car rental, driving rules, best routes, fuel costs, toll roads, mountain passes, and safety tips.',
      type: 'page',
      url: '/morocco-road-trip-guide',
      tags: ['road trip', 'driving', 'car rental', 'routes'],
      keywords: ['Morocco road trip', 'driving in Morocco', 'Morocco self-drive', 'Morocco road trip itinerary'],
      priority: 9,
    },
    {
      title: 'Morocco Wellness Retreats',
      description: 'Wellness retreats in Morocco — yoga, spa holidays, hammam treatments, meditation, detox programs, and top retreat centers.',
      type: 'page',
      url: '/morocco-wellness-retreats',
      tags: ['wellness', 'yoga', 'spa', 'retreats'],
      keywords: ['Morocco wellness retreat', 'Morocco yoga retreat', 'Morocco spa holiday', 'wellness vacation Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Adventure Sports',
      description: 'Adventure sports in Morocco — surfing, sandboarding, paragliding, quad biking, rock climbing, canyoning, and more.',
      type: 'page',
      url: '/morocco-adventure-sports',
      tags: ['adventure', 'sports', 'outdoor', 'extreme'],
      keywords: ['Morocco adventure sports', 'adventure activities Morocco', 'extreme sports Morocco', 'outdoor activities Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Cultural Etiquette Guide',
      description: 'Morocco etiquette guide — greetings, dress code, dining customs, tipping, photography rules, haggling, and essential Darija phrases.',
      type: 'page',
      url: '/morocco-cultural-etiquette',
      tags: ['etiquette', 'culture', 'customs', 'tips'],
      keywords: ['Morocco etiquette guide', 'Morocco cultural tips', 'Morocco customs', 'dos and don\'ts Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Instagram Spots',
      description: '25+ most Instagrammable places in Morocco — Chefchaouen blue streets, Sahara dunes, Jardin Majorelle, and photo tips.',
      type: 'page',
      url: '/morocco-instagram-spots',
      tags: ['photography', 'Instagram', 'photo spots', 'travel'],
      keywords: ['Morocco Instagram spots', 'Instagrammable places Morocco', 'Morocco photo locations', 'best photos Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Street Food Guide',
      description: '16+ must-try Moroccan street foods — msemen, sfenj, harira, snail soup, prices, best cities, and food safety tips.',
      type: 'page',
      url: '/morocco-street-food-guide',
      tags: ['street food', 'food', 'cuisine', 'budget'],
      keywords: ['Morocco street food', 'best street food Morocco', 'Moroccan street food guide', 'what to eat Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Souk Guide',
      description: 'Complete guide to Moroccan souks — top souks by city, haggling tips, what to buy, fair prices, and scams to avoid.',
      type: 'page',
      url: '/morocco-souk-guide',
      tags: ['souks', 'shopping', 'haggling', 'markets'],
      keywords: ['Morocco souk guide', 'shopping Moroccan souks', 'best souks Morocco', 'how to haggle Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Tea Culture',
      description: 'Moroccan mint tea guide — history, ceremony etiquette, how to make it, regional variations, best tea houses, and tea experiences.',
      type: 'page',
      url: '/morocco-tea-culture',
      tags: ['tea', 'culture', 'cuisine', 'traditions'],
      keywords: ['Moroccan mint tea', 'Morocco tea culture', 'how to make Moroccan tea', 'mint tea Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Nightlife Guide',
      description: 'Morocco nightlife guide — best bars, clubs, rooftop venues, live music, alcohol laws, and nightlife by city.',
      type: 'page',
      url: '/morocco-nightlife',
      tags: ['nightlife', 'bars', 'clubs', 'music'],
      keywords: ['Morocco nightlife', 'best bars Morocco', 'Marrakech nightlife', 'Morocco party scene'],
      priority: 9,
    },
    {
      title: 'Morocco World Cup 2030 Guide',
      description: 'FIFA 2030 World Cup Morocco guide — host cities, stadiums, transport, accommodation, visa info, and fan essentials.',
      type: 'page',
      url: '/morocco-world-cup-2030',
      tags: ['World Cup', 'football', '2030', 'events'],
      keywords: ['Morocco World Cup 2030', 'FIFA 2030 Morocco', 'World Cup Morocco travel', '2030 host cities Morocco'],
      priority: 9,
    },
    {
      title: 'Sustainable Travel Morocco',
      description: 'Eco-friendly travel in Morocco — eco-lodges, community tourism, responsible desert visits, ethical animal encounters, and green transport.',
      type: 'page',
      url: '/morocco-sustainable-travel',
      tags: ['eco-tourism', 'sustainable', 'responsible', 'green'],
      keywords: ['sustainable travel Morocco', 'eco-friendly Morocco', 'responsible travel Morocco', 'green tourism Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco History Guide',
      description: 'History of Morocco — ancient dynasties, Roman ruins, Arab conquest, French protectorate, independence, and must-visit historical sites.',
      type: 'page',
      url: '/morocco-history-guide',
      tags: ['history', 'culture', 'dynasties', 'heritage'],
      keywords: ['Morocco history', 'history of Morocco', 'Moroccan dynasties', 'Morocco historical sites'],
      priority: 9,
    },
    {
      title: 'Morocco Argan Oil Guide',
      description: 'Complete argan oil buying guide — cosmetic vs culinary, cooperatives to visit, how to spot fakes, prices, and health benefits.',
      type: 'page',
      url: '/morocco-argan-oil',
      tags: ['argan oil', 'shopping', 'beauty', 'souvenirs'],
      keywords: ['Morocco argan oil', 'argan oil buying guide', 'argan cooperatives Morocco', 'best argan oil Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Riad Experience',
      description: 'What is a riad? Complete guide to staying in Moroccan riads — architecture, riad vs hotel, etiquette, types, best riads by city.',
      type: 'page',
      url: '/morocco-riad-experience',
      tags: ['riads', 'accommodation', 'culture', 'experience'],
      keywords: ['what is a riad Morocco', 'staying in a riad', 'riad vs hotel Morocco', 'Moroccan riad experience'],
      priority: 9,
    },
    {
      title: 'Morocco Language Basics',
      description: '50+ essential Darija phrases for tourists — greetings, numbers, shopping, dining, transport, and pronunciation guide.',
      type: 'page',
      url: '/morocco-language-basics',
      tags: ['language', 'Darija', 'phrases', 'Arabic'],
      keywords: ['Moroccan Arabic phrases', 'basic Darija tourists', 'useful Arabic Morocco', 'Morocco language guide'],
      priority: 9,
    },
    {
      title: 'Morocco Cooking Classes Guide',
      description: 'Complete guide to Moroccan cooking classes — types, top schools by city, dishes you\'ll learn, market visits, and booking tips.',
      type: 'page',
      url: '/morocco-cooking-classes-guide',
      tags: ['cooking', 'food', 'classes', 'experience'],
      keywords: ['Morocco cooking class', 'Moroccan cooking experience', 'cooking class Marrakech', 'learn Moroccan food'],
      priority: 9,
    },
    {
      title: 'Morocco Camel Trekking',
      description: 'Sahara camel trek guide — sunset rides, overnight treks, best locations (Merzouga, M\'Hamid, Zagora), ethics, and packing tips.',
      type: 'page',
      url: '/morocco-camel-trekking',
      tags: ['camel', 'Sahara', 'desert', 'trekking'],
      keywords: ['Morocco camel trek', 'camel ride Sahara', 'desert camel experience', 'Merzouga camel tour'],
      priority: 9,
    },
    {
      title: 'Atlas Mountains Guide',
      description: 'Atlas Mountains Morocco — High/Middle/Anti-Atlas, Toubkal, Imlil, Ourika Valley, Ouzoud Falls, trekking, and day trips.',
      type: 'page',
      url: '/morocco-atlas-guide',
      tags: ['Atlas', 'mountains', 'trekking', 'nature'],
      keywords: ['Atlas Mountains Morocco', 'Atlas Mountains trekking', 'things to do Atlas', 'Atlas day trip'],
      priority: 9,
    },
    {
      title: 'Morocco Medina Tips',
      description: 'How to navigate Moroccan medinas — layout explained, navigation strategies, dealing with touts, best medinas, and safety tips.',
      type: 'page',
      url: '/morocco-medina-tips',
      tags: ['medina', 'navigation', 'tips', 'safety'],
      keywords: ['navigating Moroccan medina', 'medina tips Morocco', 'how not get lost medina', 'Morocco old town guide'],
      priority: 9,
    },
    {
      title: 'Morocco Beach Towns',
      description: 'Top 10 Morocco beach towns — Essaouira, Agadir, Taghazout, Dakhla, Asilah, and more with beaches, water sports, and dining.',
      type: 'page',
      url: '/morocco-beach-towns',
      tags: ['beaches', 'coastal', 'towns', 'seaside'],
      keywords: ['Morocco beach towns', 'best coastal towns Morocco', 'Morocco seaside destinations', 'beach holiday Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Accessible Travel',
      description: 'Accessible travel guide to Morocco — wheelchair-friendly hotels, adapted transport, accessible attractions, and specialist tour operators.',
      type: 'page',
      url: '/morocco-accessible-travel',
      tags: ['accessible', 'disability', 'wheelchair', 'inclusive'],
      keywords: ['Morocco wheelchair accessible', 'accessible travel Morocco', 'Morocco disability travel', 'wheelchair friendly Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Jewish Heritage Tour',
      description: 'Jewish heritage in Morocco — mellahs, synagogues, museums, cemeteries, Hiloula pilgrimages, and Jewish-Moroccan cuisine.',
      type: 'page',
      url: '/morocco-jewish-heritage-tour',
      tags: ['Jewish', 'heritage', 'history', 'culture'],
      keywords: ['Morocco Jewish heritage', 'Jewish sites Morocco', 'Morocco Jewish tour', 'mellah Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Film Locations',
      description: 'Famous filming locations in Morocco — Atlas Studios, Ait Ben Haddou, Game of Thrones sites, Gladiator, and guided film tours.',
      type: 'page',
      url: '/morocco-film-locations',
      tags: ['film', 'movies', 'locations', 'Ouarzazate'],
      keywords: ['Morocco filming locations', 'movies filmed Morocco', 'Game of Thrones Morocco', 'Gladiator Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Sahara Overnight',
      description: 'Sahara desert overnight guide — camp types, Erg Chebbi vs Chigaga, stargazing, Berber music, and what to pack.',
      type: 'page',
      url: '/morocco-sahara-overnight',
      tags: ['Sahara', 'desert', 'camping', 'overnight'],
      keywords: ['Sahara overnight Morocco', 'Morocco desert camp', 'sleeping in Sahara', 'luxury desert camp Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Spice Guide',
      description: 'Moroccan spice guide — ras el hanout, saffron, cumin, best spice souks, quality tips, prices, and cooking uses.',
      type: 'page',
      url: '/morocco-spice-guide',
      tags: ['spices', 'food', 'shopping', 'cooking'],
      keywords: ['Morocco spices', 'Moroccan spice guide', 'buying spices Morocco', 'ras el hanout guide'],
      priority: 9,
    },
    {
      title: 'Morocco Berber Guide',
      description: 'Amazigh/Berber culture guide — villages to visit, traditional crafts, cuisine, music, festivals, homestays, and etiquette.',
      type: 'page',
      url: '/morocco-berber-guide',
      tags: ['Berber', 'Amazigh', 'culture', 'villages'],
      keywords: ['Berber culture Morocco', 'Amazigh people Morocco', 'Berber village visit', 'Berber traditions'],
      priority: 9,
    },
    {
      title: 'Morocco Waterfalls',
      description: 'Best waterfalls in Morocco — Ouzoud Falls, Akchour, Paradise Valley, Setti Fatma, hiking info, and swimming spots.',
      type: 'page',
      url: '/morocco-waterfalls',
      tags: ['waterfalls', 'nature', 'hiking', 'swimming'],
      keywords: ['Morocco waterfalls', 'Ouzoud Falls Morocco', 'Akchour waterfalls', 'best waterfalls Morocco'],
      priority: 9,
    },
    {
      title: 'Day Trips from Marrakech',
      description: '12 best day trips from Marrakech — Ouzoud Falls, Essaouira, Ait Ben Haddou, Ourika Valley, distances, costs, and tips.',
      type: 'page',
      url: '/day-trips-from-marrakech',
      tags: ['day trips', 'Marrakech', 'excursions', 'tours'],
      keywords: ['day trips from Marrakech', 'Marrakech excursions', 'best day trips Marrakech', 'Marrakech day tour'],
      priority: 9,
    },
    {
      title: 'Morocco Carpet Buying Guide',
      description: 'Complete guide to buying Moroccan carpets and rugs — Beni Ourain, Boucherouite, Kilim types, quality tests, fair prices, and bargaining tips.',
      type: 'page',
      url: '/morocco-carpet-guide',
      tags: ['carpets', 'rugs', 'shopping', 'souks', 'crafts'],
      keywords: ['Morocco carpet guide', 'Moroccan rug buying', 'Beni Ourain carpet', 'buy carpet Morocco', 'Moroccan carpet prices'],
      priority: 9,
    },
    {
      title: 'Day Trips from Fes',
      description: '10 best day trips from Fes — Meknes, Volubilis, Ifrane, Middle Atlas cedar forests, Moulay Idriss, Sefrou, Bhalil cave houses, and more.',
      type: 'page',
      url: '/day-trips-from-fes',
      tags: ['day trips', 'Fes', 'excursions', 'tours', 'Middle Atlas'],
      keywords: ['day trips from Fes', 'Fes excursions', 'best day trips Fez', 'Fes day tour', 'Volubilis day trip'],
      priority: 9,
    },
    {
      title: 'Morocco Haggling Guide',
      description: 'Master the art of haggling in Moroccan souks — step-by-step bargaining process, fair prices, seller tactics, etiquette, and cultural tips.',
      type: 'page',
      url: '/morocco-haggling-guide',
      tags: ['haggling', 'bargaining', 'souks', 'shopping', 'tips'],
      keywords: ['haggling Morocco', 'how to bargain Morocco', 'Morocco souk bargaining', 'haggling tips souks', 'Morocco shopping tips'],
      priority: 9,
    },
    {
      title: 'Day Trips from Casablanca',
      description: '11 best day trips from Casablanca — Rabat, El Jadida, Mohammedia, Azemmour, Ifrane, Bin El Ouidane, and Marrakech by express train.',
      type: 'page',
      url: '/day-trips-from-casablanca',
      tags: ['day trips', 'Casablanca', 'excursions', 'tours'],
      keywords: ['day trips from Casablanca', 'Casablanca excursions', 'best day trips Casablanca', 'Casablanca day tour'],
      priority: 9,
    },
    {
      title: 'Morocco Car Rental Guide',
      description: 'Complete guide to renting a car in Morocco — agencies, vehicle types, insurance, driving rules, fuel costs, parking, and scam avoidance tips.',
      type: 'page',
      url: '/morocco-car-rental',
      tags: ['car rental', 'driving', 'road trip', 'transport', 'tips'],
      keywords: ['Morocco car rental', 'rent car Morocco', 'car hire Morocco', 'driving Morocco tips', 'Morocco road trip car'],
      priority: 9,
    },
    {
      title: 'Morocco Packing List',
      description: 'Ultimate Morocco packing list — clothing by season, cultural dress tips, footwear, electronics, toiletries, and activity-specific gear.',
      type: 'page',
      url: '/morocco-packing-list',
      tags: ['packing', 'travel tips', 'preparation', 'clothing', 'gear'],
      keywords: ['Morocco packing list', 'what to pack Morocco', 'packing for Morocco trip', 'Morocco travel essentials'],
      priority: 9,
    },
    {
      title: 'Day Trips from Tangier',
      description: '11 best day trips from Tangier — Chefchaouen, Asilah, Tetouan, Cap Spartel, Ceuta, Akchour waterfalls, Gibraltar ferry, and more.',
      type: 'page',
      url: '/day-trips-from-tangier',
      tags: ['day trips', 'Tangier', 'excursions', 'northern Morocco'],
      keywords: ['day trips from Tangier', 'Tangier excursions', 'best day trips Tangier', 'Chefchaouen from Tangier'],
      priority: 9,
    },
    {
      title: 'Morocco Pottery & Ceramics Guide',
      description: 'Complete guide to Moroccan pottery — Fes blue-and-white, Safi polychrome, Tamegroute green, workshops, prices, and authenticity tips.',
      type: 'page',
      url: '/morocco-pottery-guide',
      tags: ['pottery', 'ceramics', 'crafts', 'shopping', 'artisans'],
      keywords: ['Moroccan pottery', 'Morocco ceramics guide', 'Fes pottery', 'buy pottery Morocco', 'Moroccan tiles'],
      priority: 9,
    },
    {
      title: 'Fes vs Marrakech — Which City to Visit',
      description: 'Fes vs Marrakech comparison — medinas, food, riads, shopping, costs, and day trips to help you decide which Moroccan city to visit.',
      type: 'page',
      url: '/fes-vs-marrakech',
      tags: ['comparison', 'Fes', 'Marrakech', 'travel planning'],
      keywords: ['Fes vs Marrakech', 'Marrakech or Fes', 'should I visit Fes or Marrakech', 'best city Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Leather Goods Guide',
      description: 'Complete guide to Moroccan leather — Fes tanneries, babouches, poufs, bags, quality tests, fair prices, and bargaining tips.',
      type: 'page',
      url: '/morocco-leather-guide',
      tags: ['leather', 'tanneries', 'crafts', 'shopping', 'Fes'],
      keywords: ['Moroccan leather', 'Fes tannery', 'Morocco leather goods', 'buy leather Morocco', 'babouche slippers'],
      priority: 9,
    },
    {
      title: 'Morocco Desert Glamping Guide',
      description: 'Luxury desert glamping in Morocco — Erg Chebbi, Erg Chigaga, Agafay camps, camp types, prices, activities, and what to pack.',
      type: 'page',
      url: '/morocco-desert-glamping',
      tags: ['glamping', 'desert', 'luxury', 'Sahara', 'camping'],
      keywords: ['Morocco desert glamping', 'luxury desert camp Morocco', 'Sahara glamping', 'Merzouga luxury camp'],
      priority: 9,
    },
    {
      title: 'Morocco Public Holidays 2025 & 2026',
      description: 'Complete guide to Morocco public holidays — fixed national holidays, Islamic holidays, impact on travelers, and 2025-2026 calendar.',
      type: 'page',
      url: '/morocco-public-holidays',
      tags: ['holidays', 'calendar', 'festivals', 'planning', 'culture'],
      keywords: ['Morocco public holidays', 'Moroccan holidays 2026', 'Morocco national holidays', 'Eid Morocco', 'Throne Day'],
      priority: 9,
    },
    {
      title: 'Morocco Olive Oil Guide',
      description: 'Complete guide to Moroccan olive oil — growing regions, varieties, traditional production, farm visits, tastings, prices, and buying tips.',
      type: 'page',
      url: '/morocco-olive-oil',
      tags: ['olive oil', 'food', 'agriculture', 'shopping', 'Meknes'],
      keywords: ['Moroccan olive oil', 'buy olive oil Morocco', 'Morocco olive oil guide', 'olive farm Morocco'],
      priority: 9,
    },
    {
      title: 'Morocco Yoga Retreats Guide',
      description: 'Best yoga retreats in Morocco — Essaouira, Taghazout, Atlas Mountains, types of retreats, prices, and what to expect.',
      type: 'page',
      url: '/morocco-yoga-retreats',
      tags: ['yoga', 'wellness', 'retreats', 'Essaouira', 'Taghazout'],
      keywords: ['yoga retreats Morocco', 'Morocco yoga retreat', 'best yoga Morocco', 'surf yoga Taghazout'],
      priority: 9,
    },
    {
      title: 'Morocco Surfing Guide',
      description: 'Complete Morocco surf guide — best surf spots, season guide, camps, gear rental, wetsuit advice, and surf culture.',
      type: 'page',
      url: '/morocco-surfing-guide',
      tags: ['surfing', 'water sports', 'Taghazout', 'beach', 'adventure'],
      keywords: ['surfing Morocco', 'Morocco surf guide', 'best surf spots Morocco', 'Taghazout surfing', 'surf camp Morocco'],
      priority: 9,
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
