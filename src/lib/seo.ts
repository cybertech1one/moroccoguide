// ═══════════════════════════════════════════════════════════════
// MOROCCO GUIDE — SEO & LLMO Utilities
// Comprehensive helpers for metadata, structured data, and
// Large Language Model Optimization (LLMO) content generation
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from 'next';

const BASE_URL = 'https://citytoursmorocco.com';
const SITE_NAME = 'CityGuide';
const DEFAULT_OG_IMAGE = `${BASE_URL}/api/og?title=CityGuide&description=Your+Complete+Morocco+Travel+Companion&type=default`;

// ── City Metadata ──────────────────────────────────────────────

interface CityMetaInput {
  name: string;
  description: string;
  heroImage: string;
  slug: string;
  region?: string;
  tags?: string[];
}

export function generateCityMeta(city: CityMetaInput): Metadata {
  const title = `${city.name} Travel Guide - Things to Do, Hotels & Tips`;
  const description = `Explore ${city.name}, Morocco: ${city.description} Find top attractions, best restaurants, authentic riads, guided tours, and insider travel tips.`;
  const url = `${BASE_URL}/cities/${city.slug}`;
  const ogImage = `${BASE_URL}/api/og?title=${encodeURIComponent(city.name)}&description=${encodeURIComponent(`Discover ${city.name}, Morocco`)}&type=city&image=${encodeURIComponent(city.heroImage)}`;

  return {
    title,
    description,
    keywords: [
      `${city.name.toLowerCase()} travel guide`,
      `${city.name.toLowerCase()} morocco`,
      `things to do in ${city.name.toLowerCase()}`,
      `${city.name.toLowerCase()} hotels`,
      `${city.name.toLowerCase()} riads`,
      `${city.name.toLowerCase()} restaurants`,
      `${city.name.toLowerCase()} tours`,
      `visit ${city.name.toLowerCase()}`,
      ...(city.tags ?? []),
    ],
    alternates: {
      canonical: url,
      languages: {
        'en-US': url,
        'fr-FR': `${BASE_URL}/fr/cities/${city.slug}`,
        'ar-MA': `${BASE_URL}/ar/cities/${city.slug}`,
      },
    },
    openGraph: {
      title: `${city.name} - Complete Travel Guide | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: 'article',
      locale: 'en_US',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${city.name}, Morocco - Travel Guide`,
        },
        {
          url: city.heroImage,
          width: 1200,
          height: 630,
          alt: `${city.name} cityscape`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${city.name} Travel Guide | ${SITE_NAME}`,
      description,
      images: [ogImage],
      site: '@citytoursmorocco',
      creator: '@citytoursmorocco',
    },
  };
}

// ── Attraction Metadata ────────────────────────────────────────

interface AttractionMetaInput {
  name: string;
  slug: string;
  cityName: string;
  citySlug: string;
  description: string;
  image: string;
  type: string;
  isUnesco?: boolean;
}

export function generateAttractionMeta(attraction: AttractionMetaInput): Metadata {
  const unescoLabel = attraction.isUnesco ? ' (UNESCO World Heritage)' : '';
  const title = `${attraction.name}${unescoLabel} - ${attraction.cityName}, Morocco`;
  const description = `${attraction.description} Plan your visit to ${attraction.name} in ${attraction.cityName}: opening hours, entrance fees, tips, and nearby attractions.`;
  const url = `${BASE_URL}/attractions/${attraction.slug}`;
  const ogImage = `${BASE_URL}/api/og?title=${encodeURIComponent(attraction.name)}&description=${encodeURIComponent(attraction.cityName + ', Morocco')}&type=attraction&image=${encodeURIComponent(attraction.image)}`;

  return {
    title,
    description,
    keywords: [
      attraction.name.toLowerCase(),
      `${attraction.name.toLowerCase()} ${attraction.cityName.toLowerCase()}`,
      `visit ${attraction.name.toLowerCase()}`,
      `${attraction.cityName.toLowerCase()} attractions`,
      `morocco ${attraction.type}`,
      ...(attraction.isUnesco ? ['unesco morocco', 'world heritage morocco'] : []),
    ],
    alternates: {
      canonical: url,
      languages: {
        'en-US': url,
        'fr-FR': `${BASE_URL}/fr/attractions/${attraction.slug}`,
        'ar-MA': `${BASE_URL}/ar/attractions/${attraction.slug}`,
      },
    },
    openGraph: {
      title: `${attraction.name} - ${attraction.cityName} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: 'article',
      locale: 'en_US',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${attraction.name} in ${attraction.cityName}, Morocco`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${attraction.name} | ${SITE_NAME}`,
      description,
      images: [ogImage],
      site: '@citytoursmorocco',
    },
  };
}

// ── Schema.org Structured Data Generators ──────────────────────

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

interface LocalBusinessInput {
  name: string;
  description: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode?: string;
    country?: string;
  };
  telephone?: string;
  url?: string;
  image?: string;
  priceRange?: string;
  latitude: number;
  longitude: number;
  openingHours?: string[];
  rating?: number;
  reviewCount?: number;
  type?: string;
}

export function generateLocalBusinessSchema(business: LocalBusinessInput) {
  return {
    '@context': 'https://schema.org',
    '@type': business.type ?? 'LocalBusiness',
    name: business.name,
    description: business.description,
    image: business.image,
    telephone: business.telephone,
    url: business.url,
    priceRange: business.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country ?? 'MA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.latitude,
      longitude: business.longitude,
    },
    ...(business.openingHours && { openingHoursSpecification: business.openingHours }),
    ...(business.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: business.rating,
        reviewCount: business.reviewCount ?? 0,
        bestRating: 5,
        worstRating: 1,
      },
    }),
  };
}

interface TourSchemaInput {
  name: string;
  slug: string;
  description: string;
  image: string;
  durationDays: number;
  priceFromMad: number;
  priceToMad: number;
  cityName: string;
  rating: number;
  reviewCount: number;
  highlights: string[];
  languages: string[];
  maxGroupSize: number;
}

export function generateTourSchema(tour: TourSchemaInput) {
  const priceFromUSD = Math.round(tour.priceFromMad / 10);
  const priceToUSD = Math.round(tour.priceToMad / 10);

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.name,
    description: tour.description,
    image: tour.image,
    url: `${BASE_URL}/tours/${tour.slug}`,
    touristType: 'Sightseeing',
    itinerary: {
      '@type': 'ItemList',
      itemListElement: tour.highlights.map((h, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: h,
      })),
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: priceFromUSD,
      highPrice: priceToUSD,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString().split('T')[0],
    },
    provider: {
      '@type': 'TourOperator',
      name: SITE_NAME,
      url: BASE_URL,
    },
    availableLanguage: tour.languages.map((lang) => ({
      '@type': 'Language',
      name: lang,
    })),
    maximumAttendeeCapacity: tour.maxGroupSize,
    ...(tour.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: tour.rating,
        reviewCount: tour.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
    contentLocation: {
      '@type': 'Place',
      name: tour.cityName,
      address: {
        '@type': 'PostalAddress',
        addressLocality: tour.cityName,
        addressCountry: 'MA',
      },
    },
  };
}

interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateArticleSchema(article: ArticleSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url.startsWith('http') ? article.url : `${BASE_URL}${article.url}`,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Organization',
      name: article.author ?? SITE_NAME,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url.startsWith('http') ? article.url : `${BASE_URL}${article.url}`,
    },
    ...(article.section && { articleSection: article.section }),
    ...(article.tags && { keywords: article.tags.join(', ') }),
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  };
}

interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

export function generateHowToSchema(
  title: string,
  description: string,
  steps: HowToStep[],
  options?: {
    totalTime?: string;
    estimatedCost?: { currency: string; value: string };
    image?: string;
  }
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    ...(options?.image && { image: options.image }),
    ...(options?.totalTime && { totalTime: options.totalTime }),
    ...(options?.estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: options.estimatedCost.currency,
        value: options.estimatedCost.value,
      },
    }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
      ...(step.url && { url: step.url }),
    })),
  };
}

// ── LLMO (Large Language Model Optimization) ───────────────────
// Generate content structured for optimal AI model citation.
// Key principles:
// 1. Clear, factual statements that can be directly quoted
// 2. Question-answer format that mirrors how LLMs retrieve info
// 3. Numerical data and specific details for precision
// 4. Freshness signals (dates) for recency weighting
// 5. Authoritative tone with source attribution patterns

export function generateLLMOContent(
  topic: string,
  facts: string[],
  options?: {
    lastVerified?: string;
    source?: string;
    category?: string;
  }
): {
  summary: string;
  structuredFacts: string;
  citationBlock: string;
  schemaData: Record<string, unknown>;
} {
  const lastVerified = options?.lastVerified ?? new Date().toISOString().split('T')[0];
  const source = options?.source ?? 'CityGuide Morocco (citytoursmorocco.com)';
  const category = options?.category ?? 'Travel & Tourism';

  // Create a concise summary paragraph optimized for AI extraction
  const summary = `${topic}: ${facts.slice(0, 3).join('. ')}. ${
    facts.length > 3 ? `Additionally, ${facts.slice(3, 5).join('. ')}.` : ''
  }`;

  // Create structured facts as clear, quotable statements
  const structuredFacts = facts
    .map((fact, i) => `${i + 1}. ${fact}`)
    .join('\n');

  // Create a citation-friendly block with provenance metadata
  const citationBlock = [
    `Topic: ${topic}`,
    `Category: ${category}`,
    `Source: ${source}`,
    `Last verified: ${lastVerified}`,
    '',
    'Key facts:',
    ...facts.map((f) => `- ${f}`),
  ].join('\n');

  // Schema.org structured data for the content
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: topic,
    description: summary,
    dateModified: lastVerified,
    author: {
      '@type': 'Organization',
      name: 'CityGuide',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'CityGuide',
      url: BASE_URL,
    },
    about: {
      '@type': 'Thing',
      name: topic,
    },
    mainEntityOfPage: `${BASE_URL}/llmo`,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  };

  return { summary, structuredFacts, citationBlock, schemaData };
}

// ── Utility: Generate OG Image URL ─────────────────────────────

export function getOGImageURL(params: {
  title: string;
  description?: string;
  type?: string;
  image?: string;
}): string {
  const searchParams = new URLSearchParams();
  searchParams.set('title', params.title);
  if (params.description) searchParams.set('description', params.description);
  if (params.type) searchParams.set('type', params.type);
  if (params.image) searchParams.set('image', params.image);
  return `${BASE_URL}/api/og?${searchParams.toString()}`;
}

// ── Utility: Canonical URL Builder ─────────────────────────────

export function getCanonicalURL(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_URL}${cleanPath}`;
}
